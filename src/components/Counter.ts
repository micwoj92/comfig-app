import { LitElement, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-counter')
class Counter extends LitElement {
  @property({type: Number})
  count = 0;

  increment() {
    this.count++;
  }

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>

        <button type="button" @click=${this.increment}>Increment</button>
      </div>
    `;
  }
}
