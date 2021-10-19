import { useRecoilState } from "recoil";
import textState from "./atoms";

function OnlyText() {
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <h3>OnlyText.js</h3>
      <p>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </p>
    </div>
  );
}

export default OnlyText;
