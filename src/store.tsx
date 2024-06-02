import { produce } from "immer"
import { useEffect, useState } from "react"
import { drawerDefaultState } from "src/modules/drawer/store"


const HASH_KEY_VALUE_SEPARATOR = '='
const HASH_ITEMS_SEPARATOR = '|'

const isEqual = (obj1: any, obj2: any) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

const createStore = <State extends Record<string, string>>(defaultState: State) => {
    let state$ = defaultState
    let lastTimeStamp = 0

    const stateToHash = (state: State) => {
        console.log('----- stateToHash --------')
        console.log(state)
        const newHash = Object.keys(state).map((key) => {
            if (state[key] === '') return
            return `${key}${HASH_KEY_VALUE_SEPARATOR}${state[key]}`
        }).join(HASH_ITEMS_SEPARATOR)
        console.log(newHash)

        document.location.hash = `#${newHash}`
        console.log('----- END stateToHash END --------')
    }

    const hashToState = (hash: string): State => {
        console.log('----- hashToState --------')
        console.log(hash, state$)
        const newState = { ...state$ }
        hash.slice(1).split(HASH_ITEMS_SEPARATOR).forEach((segment) => {
            const [key, value] = segment.split(HASH_KEY_VALUE_SEPARATOR)
            
            // @ts-ignore
            newState[key] = value
        })
        console.log(newState)

        console.log('----- END hashToState END --------')
        return newState
    }

    const listeners: ((state: State) => void)[] = []
    window.addEventListener('hashchange', (event) => {
        setTimeout(() => {
        const newHash = new URL(event.newURL).hash
        console.log(event.newURL)
        console.log(event.timeStamp)
        const newState = hashToState(newHash)
        console.log('before check')
        if (lastTimeStamp === event.timeStamp) {
            // document.location.href = event.oldURL
            return
        }
        if (isEqual(state$, newState)) return
        console.log('after check')
        lastTimeStamp = event.timeStamp
        console.log(lastTimeStamp)
        state$ = newState
        listeners.forEach((listener) => listener(newState))
        }, 100)
    })

    return {
        use: () => {
            const [state, setState] = useState(state$)
            console.log('in the hook')
            // console.log(state)

            useEffect(() => {
                listeners.push(setState)
            }, [])

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
// const [a, b] = Store.use()
// a.hi
// b(produce(a, (data) => {
//     data.hi = "a"
// }))

