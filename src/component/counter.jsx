import React, { Component } from 'react';

class Counter extends Component {
    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>no element in the array</p>;
    //     else return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() {
        console.log(this.props);
        return (
            <div>
                <span className={this.getBadgeClasses()} >{this.formatCount()} </span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const value = this.props.counter.value;
        return value === 0 ? 'zero' : value;
    }
}

export default Counter;