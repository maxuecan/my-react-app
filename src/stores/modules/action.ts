export type CountActions = {
    type: string;
    payload: number
}

export function incrementCount(state: number) {
    return {
        type: 'increment',
        payload: state
    }
}

export function decrementCount(state: number) {
    return {
        type: 'decrement',
        payload: state
    }
}
