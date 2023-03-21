import { html, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("transition-accordion")
export class TransitionAccordion extends LitElement {
  @property()
  title: string
  render() {
    return html` <details>
      <summary>${this.title}</summary>
      <slot name="children"></slot>
    </details>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "transition-accordion": TransitionAccordion
  }
}
