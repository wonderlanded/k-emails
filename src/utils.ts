import { readFile } from 'fs/promises'
import { join } from 'path'

export const LIB_PATH = join(__dirname, '../lib')

export function domainParts(target: string): string[] {
  return substrAfter(
    substrAfter(
      substrAfter(target.trim().toLocaleLowerCase(), '@'), '://'),
      ':'
    ).split('.').reverse()
}

export async function readResource(path: string): Promise<string | null> {
  return await readFile(path)
  .then(data => data.toString())
  .catch(() => null)
}

export async function findName(parts: string[], type: 'academic' | 'government'): Promise<string[]|null> {
  let resource: string = ''
  let resourcePath = join(LIB_PATH, type)
  for(const p in parts) {
    resourcePath = join(resourcePath, parts[p])
    const data = await readResource(resourcePath + '.txt')
    if(data) {
      resource = data
      break
    }
  }
  return resource ? resource.split('\n') : null
}

function substrAfter(text: string, query: string): string {
  const index = text.indexOf(query)
  return text.substr(index === -1 ? 0 : index+1)
}