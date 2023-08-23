import {html, LitElement} from 'lit';

export class IntlNumberFormat extends LitElement {
    static properties = {
        value: {type: Number},
        locale: {type: String},
        options: {type: Object},
    };

    value!: number;
    locale?: string;
    options?: Intl.NumberFormatOptions;

    render() {
        const formatter = new Intl.NumberFormat(this.locale, this.options);
        return html`<span>${formatter.format(this.value)}</span>`;
    }
}

customElements.define('intl-number-format', IntlNumberFormat);