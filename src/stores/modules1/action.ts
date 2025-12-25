
export type TestActions = {
    type: string,
    payload: string
}

export function testAction(state: string) {
    return {
        type: 'TEST_ACTION',
        payload: state
    }
}