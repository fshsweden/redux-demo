import React, { Component } from 'react'
import { connect } from 'react-redux';

class Component2 extends Component {

    decrement() {
        this.props.dispatch({ type: "decrement" });
    }

    increment() {
        this.props.dispatch({ type: "increment" });
    }

    render() {
        return (
            <div>
                <h1>Component2</h1>
                <h2>Value:{this.props.value}</h2>
                <h2>Status:{this.props.status}</h2>
                <h2>Selected make: {this.props.make}</h2>
                <button onClick={this.decrement.bind(this)}>Click 2</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.value,
    status: state.status,
    make: state.make
});
export default connect(mapStateToProps)(Component2);
