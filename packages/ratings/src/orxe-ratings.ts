import { html, customElement, LitElement } from 'lit-element';
import styles from './ratings-css';

@customElement('orxe-ratings')
export default class OrxeRatings extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */

  public ratings: any = [];
  constructor() {
    super();
    this.onInitilize();
  }

//   render() {
//     return html`
// <!-- Font Awesome Icon Library -->
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

// <div class="container" *ngFor="let rating of ratings">
//   <span class="fa fa-star checked star-size star-color"></span>
//   <span class="fa fa-star checked star-size star-color"></span>
//   <span class="fa fa-star checked star-size star-color"></span>
//   <span class="fa fa-star checked star-size star-color"></span>
//   <span class="fa fa-star star-size"></span>
//   <p>4.1 average based on 3150 reviews.</p>
// </div>

// <hr style="border:3px solid #f1f1f1">`;
//   }



// render() {
//   return html`
//   <div class="main">${this.ratings.map((currentelement) => html`
//       <div data-testid="chips-container" class="container">
      
//       <span class="fa fa-star star-size star-color" [ngClass]="{${currentelement.checked} == true} ? checked : '' "></span>
//       </div>
//       `)}
//   </div>
//   `;
// }

render() {
  
  return html`
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  
  <div class="main" data-testid="ratings-main" >${this.ratings.map((currentelement) => html`
      
      <span class="fa fa-star star-size  ${currentelement.checked == true ? 'checked star-color' : ''}"></span>
      
      `)}
  </div>
  `;
}


  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;

  onInitilize() {

    //this.generateRatings() {
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
      ]
    //}

  }
  
}
