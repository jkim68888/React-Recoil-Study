import { useRecoilState } from "recoil";
import { textState, ageState } from "./atoms";

function Grandchild() {
  const [text, setText] = useRecoilState(textState);
  const [age, setAge] = useRecoilState(ageState);

  return (
    <div>
      <h3>Grandchild.js</h3>
      <p>
        <span>textState</span>
        <input
          type="text"
          value={text}
          readOnly
          // readOnly란?
          // 참고: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly
        />
      </p>
      <p>
        <span>ageState</span>
        <input
          type="text"
          value={age}
          onChange={(e) => {
            const age = Number(e.target.value);

            // type validation: number
            if (age >= 0) {
              setAge(age);
            } else {
              // do nothing
            }
          }}
        />
      </p>
    </div>
  );
}

export default Grandchild;
