import type { FetchRequestArguments } from '@/api/core/types'
import { BASE_URL } from '@/api/core/config'

export const fetchRequest = async (options: FetchRequestArguments): Promise<any> => {
  const url = `${BASE_URL}${options.point}`
  const init: Record<string, unknown> = {
    method: options.fetchMethod
  }

  if (['POST', 'PUT', 'DELETE'].includes(options.fetchMethod)) {
    init.body = JSON.stringify(options.body)
  }

  try {
    const response = await fetch(url, init)
    let responseJSON: any = {}
    responseJSON = await response.json()
    return responseJSON
  } catch (e) {
    console.log('fetchRequest ERROR => ', e.message)
  }
}
