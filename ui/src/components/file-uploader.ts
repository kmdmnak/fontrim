import { html, LitElement } from "lit"
import { customElement, query } from "lit/decorators.js"
import { createUploadFontEvent } from "../events/upload-font"

@customElement("file-uploader")
export class FileUploader extends LitElement {
  @query("input")
  private inputElem: HTMLInputElement
  onFileUpload() {
    if (!this.inputElem.files || this.inputElem.files.length === 0) {
      const e = createUploadFontEvent({ url: "" })
      this.dispatchEvent(e)
      return
    }
    Array.from(this.inputElem.files).forEach((f) =>
      f.arrayBuffer().then((buffer) => {
        const blob = new Blob([buffer])
        const url = URL.createObjectURL(blob)
        const e = createUploadFontEvent({ url })
        this.dispatchEvent(e)
      })
    )
  }
  render() {
    return html`
      <div
        class="w-404px h-250px border-blue-300 border-dashed border-3 flex justify-center items-center relative"
      >
        <input
          type="file"
          class="cursor-pointer opacity-0 w-full h-full
        absolute"
          @change="${this.onFileUpload}"
        />
        <span>
          <span class="!inline-block icon-file align-middle"></span>
          <span class="font-sans">upload font</span>
        </span>
      </div>
    `
  }
  protected createRenderRoot() {
    return this
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "file-uploader": FileUploader
  }
}
