import React from 'react';
import { isPropertySignature } from 'typescript';
interface Props {
  isToggleOn?: boolean;
  // date?: Date;
  // timerID?: number | undefined
}
interface State {
  isToggleOn?: boolean;
  // timerID: number | undefined
}
export class Toggle extends React.Component<Props, State>{
  static handleClick:boolean 
  constructor(props: Props) {
    super(props);
    this.state = { isToggleOn: true };
  };
  handleClick = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return(
      <button onClick={this.handleClick}>
      {
        this.state.isToggleOn ? 'ON' : 'OFF'
      }
      </button>
    )
      
  }

}