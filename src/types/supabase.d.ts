export interface ResponseSupabase<T = unknown> {
  error: ErrorSupabase | null
  data: T[],
  count: number | null
  status: number
  statusText: string
}

export interface LanguageSupabase {
    id: number
    type: string
    lang: string
    label: string
}

export interface ErrorSupabase {
  message: string
  details: string | null
  hint: string | null
  code: string
}
