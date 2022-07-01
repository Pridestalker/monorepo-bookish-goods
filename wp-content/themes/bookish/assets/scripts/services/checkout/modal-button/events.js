export const EVENTS = {
    POSTCODE_FILLER: {
        START: () => this.OPEN,
        END: () => this.CLOSE,
        CLOSE: 'close-postcode-filler',
        OPEN: 'open-postcode-filler',
        HAS_BEEN_FILLED: 'postcode-filler-on-fill',
        HAS_BEEN_FOUND: 'postcode-found'
    }
}
