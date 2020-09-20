import React from 'react';


class App extends React.Component {
  state = {
    count: 0,
  }
  add = () => { 
    this.setState(state => (
      {
        count: state.count + 1,
      }
    ))
  }
  minus = () => { 
    this.setState(state => (
      {
        count: state.count - 1,
      }
    ))
  }
  componentDidMount(){
    console.log('Component mounted');
  }
  componentDidUpdate(){
    console.log('I just upadeted!');
  }
  render() {
    console.log('Component Rendered')
    const {count} = this.state;
    return (
      <div>
        <h1>The number is {count}</h1>
        <button type="button" onClick={this.add}>Add</button>
        <button type="button" onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
