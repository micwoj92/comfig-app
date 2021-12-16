import { LitElement, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('calc-add')
class CalcAdd extends LitElement {
  @property({type: Number})
  num = 0;

  render() {
    return html` <div>Number: ${this.num}</div> `;
  }
}
