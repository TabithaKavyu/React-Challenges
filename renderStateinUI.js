/*Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in state in its render() method. 
You can access the data with this.state.*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
      <h1>{this.state.name}</h1>
        { /* change code above this line */ }
      </div>
    );
  }
};
