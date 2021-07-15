import React from 'react';
import './App.css';
import {
  RecoilRoot,
  useRecoilValue,
  useRecoilState,
  atom,
  selector,
} from 'recoil';

const usernameStateAtom = atom<string>({
  key: 'username',
  default: 'test user'
})

function App() {
  return (
    <RecoilRoot>
      <TodoBody />
      <UsernameChanger />
    </RecoilRoot>
  );
}

function TodoBody() {
  const username = useRecoilValue(usernameStateAtom);
  return (
    <div className="App">
      <p>{username}</p>
    </div>
  );
}

function UsernameChanger() {
  const [username, setUsername] = useRecoilState(usernameStateAtom)
  return (
    <div className="App">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
}
export default App;
