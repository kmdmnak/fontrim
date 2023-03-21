import "windi.css"
import { html, LitElement } from "lit"
import { customElement, state } from "lit/decorators.js"
import "./components/file-uploader"
import "./components/font-preview"
import "./components/transition-accordion"
import { UploadFontEvent } from "./events/upload-font"

@customElement("root-element")
export class RootElement extends LitElement {
  @state()
  fontUrl: string

  watchFont(e: UploadFontEvent) {
    this.fontUrl = e.detail.url
    console.log(this.fontUrl)
  }
  render() {
    return html`<div class="w-full h-full">
      <div class="flex justify-center">
        <file-uploader @upload-font="${this.watchFont}"></file-uploader>
      </div>
      <div>
        <transition-accordion title="demonstrate">
          <font-preview slot="children" font-url=${this.fontUrl}></font-preview>
        </transition-accordion>
      </div>
    </div>`
  }

  protected createRenderRoot() {
    return this
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "root-element": RootElement
  }
}
