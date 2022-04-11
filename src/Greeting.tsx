interface Props {
  isLoggedIn?: boolean;
  timerID?: number | undefined
}
interface State {
  date: Date;
  // timerID: number | undefined
}
function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}
export function Greeting(props: Props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}