import {
  // RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import logo from "./logo.svg";
import "./App.css";

const textState = atom({
  // atom()은 react hook이 아니다! 그래서 이렇게 react component바깥에 있당!
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

function App() {
  const [text, setText] = useRecoilState(textState);

  return (
    <div className="App">
      <input
        type="text"
        value={text}
        // 리액트 특징상 이렇게 value를 지정해주면, text의 값이 바뀌지 않는 이상 죽었다 깨나도, 이 인푹박승ㄴ아 내용이 바끼지 않는다!
        // 근데, 지금 바뀌고 있다!
        // 고로, 뭔진 잘 모르겠지만 setText()가 기능하고 있다는걸 추측할 수 ㅇㅆ따!
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
