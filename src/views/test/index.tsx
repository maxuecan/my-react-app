import React from'react';
import { connect } from 'react-redux'
import { CombinedState } from '../../stores/state.js'
import { incrementCount, decrementCount } from '@/stores/modules/action.js'

class Test extends React.Component {
    constructor(props: Object) {
        super(props)
        
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{ this.props.countValue }</h1>
                &nbsp;&nbsp;
                <button onClick={this.props.increment.bind(null, 1)}>+</button>
                &nbsp;&nbsp;
                <button onClick={this.props.decrement.bind(null, 1)}>-</button>
            </div>
        )
    }
}

interface StateToProps {
    countValue: number
}

interface DispatchToProps {
    increment: (state: number) => void;
    decrement: (state: number) => void;
}

function mapStateToProps(state: CombinedState): StateToProps {
    const { count } = state
    return {
        countValue: count.count
    }
}

function mapDispathchToProps(dispatch:any): DispatchToProps {
    return {
        increment: (state: number): void => dispatch(incrementCount(state)),
        decrement: (state: number): void => dispatch(decrementCount(state))
    }
}

export default connect(
    mapStateToProps,
    mapDispathchToProps
)(Test)
