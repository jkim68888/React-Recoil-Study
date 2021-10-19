import { useRecoilState } from "recoil";
import { textState } from "./atoms";

function Grandchild() {
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <h3>Grandchild.js</h3>
      <p>
        <input
          type="text"
          value={text}
          readOnly
          // readOnly란?
          // 참고: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly
        />
      </p>
    </div>
  );
}

export default Grandchild;
