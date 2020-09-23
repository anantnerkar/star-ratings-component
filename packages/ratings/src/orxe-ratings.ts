import { html, customElement, LitElement, property } from 'lit-element';
import styles from './ratings-css';
import "@orxe-components/icons";
import "@orxe-components/icon";

@customElement('orxe-ratings')
export default class OrxeRatings extends LitElement {

  /**
   *
   * @memberof Ratings
   * This is used to give the value for star ratings
   */
  @property({ type: Number, reflect: true, attribute: 'ratings' })
  starRatings = 5;

  /**
   *
   * @memberof Ratings
   * This is used to give the value for star ratings
   */
  @property({ type: Number, reflect: true, attribute: 'rating-value' })
  ratingValue;

  /**
  * Implement `render` to define a template for button element.
  */
  render() {
    return html`
    <div class="container">
      <div class="main" data-testid="ratings-main" 
      ratings=${this.starRatings} rating-value=${this.ratingValue}>  
      ${this._renderStarIcon()}
      </div>
    </div>
  `;
}

  /**
   * This method render the star icon
   */
  private _renderStarIcon() {
    const starCountRendererList : any =[];
    for(let i=0; i < this.starRatings; i++) {
      starCountRendererList[i] = this.starCountRenderer(i);
    }
    return starCountRendererList;
  }

  starCountRenderer(i: Number): any {
    return html`
    <orxe-icon 
      icon="ic-star" 
      class="${i < this.ratingValue ? 'star-color' : ''} ${i > 0 ? 'star-margin' : ''}"
      size="small">
    </orxe-icon>`;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
