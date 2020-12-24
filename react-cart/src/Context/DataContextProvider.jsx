import React, { Component } from 'react';

export const DataContext=React.createContext()

class DataContextProvider extends Component {
    render() {
        return (
            <DataContext.Provider value={"value"}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataContextProvider;