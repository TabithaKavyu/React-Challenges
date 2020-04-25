/*There are two ways to create a React component. The first way is to use a JavaScript function. 
Defining a component in this way creates a stateless functional component. Think of a stateless component as one that can receive data and render it,
but does not manage or track changes to that data. To create a component with a function, you simply write a JavaScript function that returns either JSX or null. 
One important thing to note is that React requires your function name to begin with a capital letter.*/

/*The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.*/

const MyComponent = function() {
return (
    <div>
    <p>Hello World</p>
    </div>
  );
}
