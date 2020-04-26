/*Render a Class Component to the DOM*/
/*React components are passed into ReactDOM.render() a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example ReactDOM.render(<ComponentToRender />, targetNode). 
You use this syntax for both ES6 class components and functional components.*/


class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
         <Fruits />
         <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node")) 
