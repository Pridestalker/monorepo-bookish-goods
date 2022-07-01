import React, {Component, h, render} from 'preact';
import {fireEvent, listenEvent} from "@elderbraum/simple-event-bus";
import {EVENTS} from ".";
import {Button, Modal as MatModal, TextField} from "@material-ui/core";
import { defaultTheme as theme, ThemeProvider } from '../../../theme';
import styled from 'styled-components';
import ky from 'ky';

const ModalBody = styled.div`
    position: absolute;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    background: #ffffff;
    box-shadow: 0 3px 6px rgba(51, 51, 51, 0.4);
    padding: 1.5rem 1rem;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
`;


export class Modal extends Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);
        this.resetData = this.resetData.bind(this);
        this.getUserAddress = this.getUserAddress.bind(this);

        this.state = {
            isOpen: false,
            number: null,
            postcode: null,
            loading: false,
            isShipping: false,
        }
    }

    componentDidMount() {
        listenEvent(EVENTS.POSTCODE_FILLER.OPEN, ({detail}) => this.setState({isOpen: true, isShipping: detail.isShipping}));
    }

    closeModal() {
        this.setState({
            isOpen: false
        });
    }

    resetData() {
        this.setState({
            postcode: null,
            number: null,
        })
    }

    async getUserAddress() {
        this.setState({loading: true})
        const { postcode, number, isShipping } = this.state;
        if (!postcode || !number || postcode.length !== 6) {
            return;
        }

        const res = await ky.get('/wp-admin/admin-ajax.php', {
            searchParams: {
                action: 'get_user_shipping_address',
                number: number,
                postcode: postcode
            }
        });

        const body = await res.json();

        fireEvent(EVENTS.POSTCODE_FILLER.HAS_BEEN_FOUND, {...body.data, number: number, postcode: postcode, isShipping: isShipping})
        this.setState({loading: false})
        this.closeModal();
        this.resetData();
    }

    render() {
        const {isOpen} = this.state;
        if (!isOpen) {
            return '';
        }
        const {postcode, number, loading} = this.state;

        return (
            <ThemeProvider theme={theme}>
                <MatModal open={isOpen}
                          onClose={this.closeModal}>
                    <ModalBody>
                        <TextField label='Postcode'
                                   value={postcode}
                                   onChange={({target}) => this.setState({postcode: target.value.replace(/\s/g,'')})}
                                   required
                                   variant={'outlined'} style={{marginBottom: '.5rem'}}/>

                        <TextField label='Huisnummer' variant={'outlined'}
                                   value={number}
                                   onChange={({target}) => this.setState({number: target.value})}
                                   required
                                   style={{marginBottom: '.5rem'}}
                                   helperText={'Voer jouw huisnummer in, zonder toevoeging'}/>

                        <Button onClick={this.getUserAddress}
                                disabled={loading}
                                variant={'contained'} color={'primary'}>
                            Zoeken
                        </Button>
                        <Button onClick={this.closeModal} disabled={loading}>
                            Sluiten
                        </Button>
                    </ModalBody>
                </MatModal>
            </ThemeProvider>
        )
    }
}

export const renderPostCodeModal = () => {
    render(<Modal/>, document.body);
}
