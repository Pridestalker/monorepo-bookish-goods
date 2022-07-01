import React, { Component, createRef, h, render } from 'preact'
import ky from 'ky';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinnerThird, faTimes } from '@fortawesome/pro-duotone-svg-icons';
import { FillWrapper } from './FillWrapper'
import { Colors } from '../../../config';

export class SearchBar extends Component {
	form = createRef();

	constructor(props) {
		super(props);

		this.abortControllers = [];

		this.searchHandler = this.searchHandler.bind(this);
		this.hideAutoFill = this.hideAutoFill.bind(this);
		this.showAutoFill = this.showAutoFill.bind(this);
		this.keyHandler = this.keyHandler.bind(this);

		this.state = {
			loading: false,
			searchValue: null,
			searchResults: [],
			count: 0,
			isVisible: false,
			cursor: 0,
		}
	}

	searchHandler(e)
	{
		this.abortControllers.forEach(abortController => abortController.abort());
		const abortController = new AbortController();
		this.abortControllers.push(abortController);

		this.setState({
			searchValue: e.target.value,
			loading: true,
		});

		ky.get(window['ajax_url'], {
			signal: abortController.signal,
			searchParams: {
				action: 'search_results',
				s: this.state.searchValue,
			}
		})
			.then(res => res.json())
			.then(res => {
				const { count, posts } = res.data;
				this.setState({
					searchResults: posts,
					count: count
				});
			})
			.catch((e) => {
				this.setState( {
					searchResults: [],
					count: 0,
				})
			})
			.finally(() => this.setState({ loading: false }))
	}

	hideAutoFill(e, force = false) {
		if (force) {
			this.setState({
				isVisible: false,
				searchValue: '',
				searchResults: []
			});
		}

		if (this.form?.current?.contains(e.target)) {
			return;
		}

		this.setState({
			isVisible: false,
		});
	}

	showAutoFill() {
		this.setState({
			isVisible: true,

		});
	}

	keyHandler(e) {
		if (e.repeat) { return; }
		e.stopPropagation();

		const { cursor, searchResults } = this.state,
			keyUp = 38,
			keyDown = 40;

		if (![keyDown, keyUp].includes(e.keyCode)) {
			return;
		}

		e.preventDefault();

		if (e.keyCode === keyUp) {
			if (cursor > 0) {
				this.setState({
					cursor: cursor - 1,
				});
			} else {
				this.setState({
					cursor: searchResults.length - 1
				});
			}
		}

		if (e.keyCode === keyDown) {
			if (cursor < searchResults.length -1) {
				this.setState({
					cursor: cursor + 1,
				});
			} else {
				this.setState({
					cursor: 0,
				});
			}
		}
	}

	render() {
		const {
			searchValue,
			loading,
			searchResults,
			isVisible,
			cursor
		} = this.state;

		const randomPostfix = Math.random().toString(36).substring(7);

		return (
			<form className={'search-form'} action={'/'} method={'GET'} ref={this.form}>
				<input type="hidden" name="post_type" value='product' id='post_type'/>
				<label htmlFor={`autoComplete_${randomPostfix}`} className={'sr-only'}>Zoeken naar...</label>
				<input type="text"
					   style={{marginBottom: 0}}
					   placeholder='Waar ben je naar op zoek?'
					   id={`autoComplete_${randomPostfix}`}
					   name={'s'}
					   onChange={this.searchHandler}
					   value={searchValue}
					   autoComplete={'off'}
					   onFocus={this.showAutoFill}
					   onKeyDown={this.keyHandler}
					   onBlur={this.hideAutoFill} />

				{searchResults.length === 0 && (<button className={'btn search-icon'} type={'submit'} name={'Zoeken'} disabled={loading} aria-label={'Zoeken'}>
					<FontAwesomeIcon icon={loading? faSpinnerThird : faSearch}
									 color={Colors.primary} spin={loading} />
				</button>)}

				{searchResults.length > 0 && (<button className={'btn search-icon'} onClick={(e) => this.hideAutoFill(e, true)} type={'button'} name={'Cancel'}>
					<FontAwesomeIcon icon={faTimes} color={Colors.primary} />
				</button>)}
				{(isVisible && searchValue !== '') && <FillWrapper
														posts={searchResults}
														cursor={cursor}
														fillHider={this.hideAutoFill}
														keyDownHandler={this.keyHandler} />}
			</form>
		)
	}
}
