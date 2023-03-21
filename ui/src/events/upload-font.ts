type EventInit = {
  url: string
}

export type UploadFontEvent = CustomEvent<EventInit>

export const createUploadFontEvent = (init: EventInit) => {
  return new CustomEvent<EventInit>("upload-font", { detail: init })
}

declare global {
  interface CustomEventMap {
    "upload-font": CustomEvent<EventInit>
  }
}
