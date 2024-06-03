import { useEffect, useState } from "react"
import { drawerDefaultState } from "src/modules/drawer/store"


const HASH_KEY_VALUE_SEPARATOR = '='
const HASH_ITEMS_SEPARATOR = '|'

const isEqual = (obj1: any, obj2: any) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

const createStore = <State extends Record<string, string>>(defaultState: State) => {
    let state$ = defaultState

    const stateToHash = (state: State) => {
        const newHash = Object.keys(state).map((key) => {
            if (state[key] === '') return
            return `${key}${HASH_KEY_VALUE_SEPARATOR}${state[key]}`
        }).join(HASH_ITEMS_SEPARATOR)

        document.location.hash = `#${newHash}`
    }

    const hashToState = (hash: string): State => {
        if (hash === "") return defaultState

        const newState = { ...state$ }

        hash.slice(1).split(HASH_ITEMS_SEPARATOR).forEach((segment) => {
            const [key, value] = segment.split(HASH_KEY_VALUE_SEPARATOR)
            
            // @ts-ignore
            newState[key] = value
        })

        return newState
    }

    state$ = hashToState(document.location.hash)

    let listeners: ((state: State) => void)[] = []
    window.addEventListener('hashchange', (event) => {
        const newHash = new URL(event.newURL).hash
        const newState = hashToState(newHash)
        if (isEqual(state$, newState)) return
        state$ = newState
        listeners.forEach((listener) => listener(newState))
    })

    return {
        use: () => {
            const [state, setState] = useState(state$)

            useEffect(() => {
                listeners.push(setState)
                return () => {
                    listeners = listeners.filter(x => x !== setState)
                }
            })

            return [
                state,
                stateToHash
            ] as const
        }
    }
}

const defaultState = {
    ...drawerDefaultState
}

export const Store = createStore(defaultState)
