# Redux	React-redux	Redux-thunk

```
npm install react-redux
```

### Provider

```
React Redux 包含一个组件
```

![img](https://i-blog.csdnimg.cn/blog_migrate/96a943f57986f01717576e66d4244765.png)

## redux三个核心概念

```
Action:
把数据从应用传到 store 的有效载荷，Action 是 store 数据的唯一来源。
一般来说会通过 store.dispatch() 将 action 传到 store。

有两个属性
type ：标识属性, 值为字符串, 唯一, 必要属性。
data ：数据属性, 值类型任意, 可选属性
```

```
Store:
用来维持应用所有的 state 树 的一个对象，改变 store 内 state 的惟一途径是对它 dispatch 一个 action。
Store 不是类，它只是有几个方法的对象。 要创建它，只需要把根部的 reducing 函数传递给 createStore。
```

```
Reducers:
指定了应用状态的变化如何响应 actions 并发送到 store 。
Reducer 函数会接收到两个参数，分别为：之前的状态、动作对象。
Reducer 有两个作用：初始化状态、加工状态。
Reducer 的第一次调用时，是store自动触发的，传递的 preState(之前的状态) 是undefined
```

## redux 核心API

```
createStore:
创建一个 Redux store 来以存放应用中所有的 state。
应用中应有且仅有一个 store。
```

```
Store:
用来维持应用所有的 state 树 的一个对象，改变 store 内 state 的惟一途径是对它 dispatch 一个 action。
Store 不是类，它只是有几个方法的对象。 要创建它，只需要把根部的 reducing 函数传递给 createStore。
```

## Store 方法

```
getState():
返回应用当前的 state 树。
它与 store 的最后一个 reducer 返回值相同。
```

```
dispatch(action):
分发 action。这是触发 state 变化的惟一途径。
会使用当前 getState() 的结果和传入的 action 以同步方式的调用 store 的 reduce 函数。返回值会被作为下一个 state。
```

```
subscribe(listener):
添加一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。可以在回调函数里调用 getState() 来拿到当前 state。
状态改变后重新渲染，有两种方法：
（1）在组件的 componentDidMount 生命周期钩子中调用 store.subscribe
componentDidMount() {
    // 监听redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
    	//状态假更新，每次状态更新都会调用render
        this.setState({});
    });
}

（2）在 index.js 文件中检测 store 中状态的改变，一旦发生改变重新渲染<App/>
import React from "react";
import reactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
reactDOM.render(<App />, document.getElementById("root"));
// store中状态改变，重新渲染dom
store.subscribe(() => {
  reactDOM.render(<App />, document.getElementById("root"));
});
```

###  Redux-thunk

```
redux 异步action
```

