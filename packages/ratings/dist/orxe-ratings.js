var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './ratings-css';
import "@orxe-components/icons";
import "@orxe-components/icon";
let OrxeRatings = class OrxeRatings extends LitElement {
    constructor() {
        super(...arguments);
        this.starRatings = 5;
    }
    render() {
        return html `
    <div class="container">
      <div class="main" data-testid="ratings-main" 
      ratings=${this.starRatings} rating-value=${this.ratingValue}>  
      ${this._renderStarIcon()}
      </div>
    </div>
  `;
    }
    _renderStarIcon() {
        const starCountRendererList = [];
        for (let i = 0; i < this.starRatings; i++) {
            starCountRendererList[i] = this.starCountRenderer(i);
        }
        return starCountRendererList;
    }
    starCountRenderer(i) {
        return html `
    <orxe-icon 
      icon="ic-star" 
      class="${i < this.ratingValue ? 'star-color' : ''} ${i > 0 ? 'star-margin' : ''}"
      size="small">
    </orxe-icon>`;
    }
};
OrxeRatings.styles = styles;
__decorate([
    property({ type: Number, reflect: true, attribute: 'ratings' }),
    __metadata("design:type", Object)
], OrxeRatings.prototype, "starRatings", void 0);
__decorate([
    property({ type: Number, reflect: true, attribute: 'rating-value' }),
    __metadata("design:type", Object)
], OrxeRatings.prototype, "ratingValue", void 0);
OrxeRatings = __decorate([
    customElement('orxe-ratings')
], OrxeRatings);
export default OrxeRatings;
