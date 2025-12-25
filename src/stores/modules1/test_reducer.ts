import { TestState } from '../state.js'
import { TestActions } from './action.js'

const defaultState: TestState = {
    test_name: '测试'
}

export default function testReducer(
    preState: TestState = defaultState,
    action: TestActions
): TestState {
    const { type, payload } = action
    switch (type) {
        case 'TEST_ACTION':
            return {
                ...preState,
                test_name: payload
            }
        default:
            return preState
    }
}
