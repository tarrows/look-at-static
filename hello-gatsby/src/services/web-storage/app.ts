const STORAGE_SCHEMA = 'hello:webstorage'

const set = async (key: string, value:string) => {
  const current = localStorage.getItem(STORAGE_SCHEMA)
  if (current) {
    const parsed = JSON.parse(current)
    const target = JSON.stringify({ ...parsed, [key]: value })
    localStorage.setItem(STORAGE_SCHEMA, target)
  } else {
    const target = JSON.stringify({ [key]: value })
    localStorage.setItem(STORAGE_SCHEMA, target)
  }
  return { key, value }
}

const get = async (key: string): Promise<string | null> => {
  const current = localStorage.getItem(STORAGE_SCHEMA)
  if (current) {
    const parsed = JSON.parse(current)
    return parsed[key] as string | null
  } else {
    return null
  }
}

export default {
  local: {
    set: async (key: string, value: string) => await set(key, value)
      .then(({key, value}) => ({ response: { key, value } }))
      .catch(error => { error }),
    get: async (key: string) => await get(key)
      .then(value => ({ response: { value } }))
      .catch(error => { error })
  }
}
