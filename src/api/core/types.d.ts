export interface FetchRequestArguments {
  point: string
  payload?: Record<string, unknown>
  fetchMethod: 'POST' | 'GET' | 'PUT' | 'DELETE'
  body?: any
}
