import { useState } from "react";
import { ContentEditable } from './ContentEditable'
interface Props {
  isLoggedIn?: boolean;
  timerID?: number | undefined
}
interface State {
  date: Date;
  // timerID: number | undefined
}
export function InputArea(props: Props) {
  const styleAttri = {
    backgroundColor: 'black',
    innerHeight: '10rem',
    color:'white'
  }
  const detectchange = (str:string) => {
    console.log(str)
  }
  const [text, setText]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
    ] = useState("この文章は書き換えることができます。");
  return (
    <div id="edit" style={styleAttri}>
      <ContentEditable value={text} onChange={setText}  />
    </div>
  );
}