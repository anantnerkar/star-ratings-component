import { html, customElement, LitElement } from 'lit-element';
import styles from './checkbox-css';

@customElement('orxe-checkbox')
export default class OrxeCheckbox extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
      <p>Hello, Welcome to lit Elements</p>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
