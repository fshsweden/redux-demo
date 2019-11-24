import React, { Component } from 'react'
import { connect } from 'react-redux';

import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';

class Component1 extends Component {

    constructor(props) {
        super(props);

        /*
         * This is a local state that has nothing to do with the REDUX !
         */
        this.state = {
            columnDefs: [
                { headerName: "Make", field: "make" },
                { headerName: "Model", field: "model" },
                { headerName: "Price", field: "price" }],
            rowData: [
                { make: "Toyota", model: "Celica", price: 35000 },
                { make: "Ford", model: "Mondeo", price: 32000 },
                { make: "Porsche", model: "Boxter", price: 72000 }]
        }
    }

    // We communicate with the state by calling dispatch() wth an action
    decrement() {
        this.props.dispatch({ type: "decrement" });
    }

    increment() {
        this.props.dispatch({ type: "increment" });
    }

    onRowSelected(evt) {
        console.log(evt);
        if (evt.node.selected) {
            console.log("Setting make = " + evt.data.make);

            // We communicate with the state by calling dispatch() wth an action
            // We can pass any number of fields in the object
            this.props.dispatch({ type: "set_make", make: evt.data.make });
        }
    }

    render() {
        return (
            <div>
                <h1>Component1</h1>
                <h3>The state is passed to us in properties</h3>
                <h2>{JSON.stringify(this.props)}</h2>
                <h2>Value:{this.props.value}</h2>
                <h2>Status:{this.props.status}</h2>
                <button onClick={this.increment.bind(this)}>Click 1</button>
                <div className="ag-theme-balham" style={{ height: '200px', width: '600px' }}>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        modules={AllCommunityModules}

                        rowSelection={'single'}
                        onRowSelected={this.onRowSelected.bind(this)}
                    >
                    </AgGridReact>
                </div>
            </div>
        )
    }
}

/*  mapStateToProps is a function that takes an argument "state"
    and it returns an object which copies certain parts of the state 

    Each field in the returned object will become a prop for your actual component
    The values in the fields will be used to determine if your component needs to re-render

    mapStateToProps functions can, and should, do a lot more than just return state.someSlice. They have the responsibility of "re-shaping" store data as needed for that component. This may include returning a value as a specific prop name, combining pieces of data from different parts of the state tree, and transforming the store data in different ways.
*/
const mapStateToProps = (state) => {
    return {
        a: 12,  /* invent your own props! */
        value: state.value,
        status: state.status,
        make: state.make
    };
}

export default connect(mapStateToProps)(Component1);



