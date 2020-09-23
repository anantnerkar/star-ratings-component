import { LitElement } from 'lit-element';
import "@orxe-components/icons";
import "@orxe-components/icon";
export default class OrxeRatings extends LitElement {
    starRatings: number;
    ratingValue: any;
    render(): import("lit-element").TemplateResult;
    private _renderStarIcon;
    starCountRenderer(i: Number): any;
    static styles: import("lit-element").CSSResult;
}
