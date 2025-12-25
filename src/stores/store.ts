/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
// 引入createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入为count组件服务的reducer
import countReducer from './modules/count_reducer'
import testReducer from './modules1/test_reducer'

const rootReducer = combineReducers({
    count: countReducer,
    test: testReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store
