import React from 'react';
import { isPropertySignature } from 'typescript';
interface Props {
  date?: Date;
  timerID?: number | undefined
}
interface State {
  isToggleOn: boolean;
  // timerID: number | undefined
}
export class Toggle extends React.Component<Props, State>{
  constructor(props: Props){
    super(props);
    this.state = {isToggleOn: true};
  };
  
}