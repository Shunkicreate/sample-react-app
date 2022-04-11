import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
interface propType {
  welcome: {
    name: string
  }
  clock: {
    date: Date
  }
  defclass:{
    date:Date
  }
}
function Welcome(props: propType["welcome"]) {
  return <h1>Hello, {props.name}</h1>
}

interface Props {
  date?: Date;
  timerID?: number | undefined
}
interface State {
  date: Date;
  // timerID: number | undefined
}

export class Clock extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {date: new Date()};
    
  }
  tick = ()=> {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
    // return element
  }
  static timerID: number | undefined
  static tick: void

  componentDidMount() {
    Clock.timerID = window.setInterval(
      () => this.tick(),
      1000
    );
  }

  // componentWillUnmount() {
  //   clearInterval(Clock.timerID);
  // }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// function Clock(props: propType["clock"]) {
//   return (
//     <div>
//       <Welcome name="hahaha" ></Welcome>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// setInterval(tick, 1000);



// ReactDOM.render(
//   newelem,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
