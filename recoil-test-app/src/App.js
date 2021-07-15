import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  RecoilRoot,
  atom,
  useRecoilState,
  useRecoilValue,
  selector,
} from 'recoil';

const usernameState = atom({
  key: 'username',
  default: 'TestUser'
})

const countState = selector({
  key: 'count',
  get: ({get}) => {
    const username = get(usernameState);
    return  username.length;
  }
})

function App() {
  return (
    <RecoilRoot>
      <Nav />
      <Body />
    </RecoilRoot>
  );
}

function Nav() {
  const username = useRecoilValue(usernameState)
  return (
    <div className="nav">
      <p>{username}</p>
    </div>
  );
}

function Body() {
  return (
    <div className="body">
      <Profile />
      <Count />
    </div>
  );
}

function Profile() {
  const [username, setUsername] = useRecoilState(usernameState);
  return (
    <div>
      <h2>Profile:</h2>
      <p>{username}</p>
      <input type="text" value={username} onChange={(e) => {
        setUsername(e.target.value)
      }} />
    </div>
  );
}

function Count() {
  const count = useRecoilValue(countState);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
