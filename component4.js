/*Write a React Component from Scratch*/
/*A typical React component is an ES6 class which extends React.Component. It has a render method that returns HTML (from JSX) or null. 
This is the basic form of a React component.*/

class MyComponent extends React.Component {
  constructor(props){
    super(props);
  }


render() {
 return (
   <div>
   <h1>My First React Component!</h1>
   </div>
  )
 }
 };

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"))
