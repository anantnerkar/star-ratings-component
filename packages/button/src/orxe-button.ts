import { html, customElement, LitElement } from 'lit-element';
import styles from './button-css';
import '@my-first-project/ratings';

@customElement('orxe-button')
export default class OrxeButton extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
      <p>Hello, Welcome to lit Elements</p>
      <orxe-ratings rating-value="4"></orxe-ratings>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
