/* Creating a component with composition. To render a component as a child in a React component,
you include the component name written as a custom HTML tag in the JSX.
In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent.
Compose the two together by rendering the ChildComponent within the ParentComponent.*/

Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
      <div>
        <h1>I am the parent</h1>
      
      <ChildComponent />

       
      </div>
    );
  }
};
