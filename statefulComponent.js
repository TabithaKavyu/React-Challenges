/*State consists of any data your application needs to know about, that can change over time. 
You create state in a React component by declaring a state property on the component class in its constructor.
This initializes the component with state when it is created. The state property must be set to a JavaScript object.*/

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      name : "Tabbz"
    }

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
