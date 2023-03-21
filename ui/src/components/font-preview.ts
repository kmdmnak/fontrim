import { css, html, LitElement, unsafeCSS } from "lit"
import { customElement, property, query, state } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"

@customElement("font-preview")
export class FontPreview extends LitElement {
  @state()
  text: string

  @query("textarea")
  textareaElem: HTMLTextAreaElement

  @property({ attribute: "font-url" })
  fontUrl: string

  private onInputText() {
    this.text = this.textareaElem.value
  }

  protected render() {
    console.log(this.fontUrl)
    const font = css`
      @font-face {
        font-family: "demo";
        src: url(${unsafeCSS(this.fontUrl)}) format("truetype");
      }
    `
    return html` <div class="flex flex-row w-full justify-around">
      <style>
        ${font}
      </style>
      <div class="w-2/5">
        <textarea
          multiple
          rows="10"
          class="input[type='text'] w-full h-256px"
          @input="${this.onInputText}"
        ></textarea>
      </div>
      <div class="w-2/5">
        <textarea
          multiple
          rows="10"
          class="input[type='text'] w-full h-256px"
          readonly
          style=${styleMap({
            fontFamily: "demo",
          })}
        >
${this.text}</textarea
        >
      </div>
    </div>`
  }
  protected createRenderRoot() {
    return this
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "font-preview": FontPreview
  }
}
