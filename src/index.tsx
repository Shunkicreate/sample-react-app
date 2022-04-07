import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// const element = <h1>Hello, world! this is jsx!</h1>;
// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;
// const newelem = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world    !'
// )
interface propType{
  name:string
}
function Welcome(props:propType){
  return <h1>Hello, {props.name}</h1>
}

function tick(){
  const element = (
    <div>
      <Welcome name="haha"></Welcome>
      <h1>hello world</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);


// ReactDOM.render(
//   newelem,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
