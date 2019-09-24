import React, { Component } from 'react';
import { DataProvider } from './DataContext';
import ContextTypeOne from './ContextChilds/ContextTypeOne';
import ContextTypeTwo from './ContextChilds/ContextTypeTwo';
import ContextTypeThree from './ContextChilds/ContextTypeThree';
import ContextTypeFour from './ContextChilds/ContextTypeFour';

export default class App extends Component {
  state = {
    data: ["Text 1", "Text 2", "Text 3"],
    title: "Welcome to React"
  }
  handleTitileUpdate = () => {
    this.setState({ title: "Welcome to context concept" });
  }
  render() {
    const { data, title } = this.state;
    return (
      <div className='text-center text-primary'>
        <DataProvider value={{ data, title, handleUpdate: this.handleTitileUpdate }} >
          <h1 className="text-center">Welcome to Context API</h1>
          <ContextTypeOne />
          <ContextTypeTwo />
          <ContextTypeThree />
          <ContextTypeFour />

        </DataProvider>
      </div>
    )
  }
}
