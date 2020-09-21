var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement } from 'lit-element';
import styles from './ratings-css';
let OrxeRatings = class OrxeRatings extends LitElement {
    constructor() {
        super();
        this.ratings = [];
        this.onInitilize();
    }
    render() {
        return html `

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="container">
  <div class="main" data-testid="ratings-main" >${this.ratings.map((currentelement) => html `
      
      <span class="fa fa-star star-size  ${currentelement.checked == true ? 'checked star-color' : ''}"></span>
      
      `)}
  </div>
  </div>
  `;
    }
    onInitilize() {
        this.ratings = [
            {
                id: 1,
                checked: true
            },
            {
                id: 2,
                checked: true
            },
            {
                id: 3,
                checked: true
            },
            {
                id: 4,
                checked: false
            },
            {
                id: 5,
                checked: false
            },
        ];
    }
};
OrxeRatings.styles = styles;
OrxeRatings = __decorate([
    customElement('orxe-ratings'),
    __metadata("design:paramtypes", [])
], OrxeRatings);
export default OrxeRatings;
