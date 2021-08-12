import { domainParts, findName as findRawName } from './utils'
export async function findName(email: string, type: 'academic' | 'government'): Promise<nameObject|null> {
  if(!type) throw new Error('"type" is required')
  const parts = domainParts(email)
  const data = await findRawName(parts, type)
  return data ? {
    name: data[0],
    en: data[1]
  } : null
}

interface nameObject {
  name: string
  en: string
}