import { use, cache } from 'react'
import { ValueRef } from '@masknet/shared-base'
import { useValueRef } from '@masknet/shared-base-ui'

export function createHook<T>(f: () => Promise<T>, subscribe: (callback: () => void) => void) {
    const Request = cache((_cacheKey: number) => f())
    const cacheKey = new ValueRef(0)
    subscribe(() => (cacheKey.value += 1))

    return function useData() {
        return use(Request(useValueRef(cacheKey)))
    }
}
