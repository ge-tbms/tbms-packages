export interface OptionParam {
  onerror: (...args: any[]) => any
}

export interface MessageObject {
  id: number | string
}

export interface ContextObject {
  conversation?: object,
  message?: object,
  systemMessage?: object,
  app?: object,
  user?: object,
  error?: object
}

export type ICallback = (...args: any[]) => any


