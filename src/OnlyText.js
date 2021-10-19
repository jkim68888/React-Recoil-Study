import { useRecoilState } from "recoil";
import { textState, ageState } from "./atoms";

function OnlyText() {
  const [text, setText] = useRecoilState(textState);
  const [age, setAge] = useRecoilState(ageState);

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
      <p>
        <input
          type="text"
          value={age}
          // readOnly
          // readOnly란?
          // 참고: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly
          /*
            Warning: You provided a `value` prop to a form field without an `onChange` handler.
            This will render a read-only field. If the field should be mutable use `defaultValue`.
            Otherwise, set either `onChange` or `readOnly`
          */
          disabled
          // disabled이란?
          // 참고: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
          // 참고2:
          /*
            Attribute interactions
            The difference between *disabled* and *readonly* is that 
            read-only controls can still function and are still focusable, 
            whereas disabled controls can not receive focus and are not submitted with the form,
            and generally do not function as controls until they are enabled.

            - via https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly#attribute_interactions
          */
        />
      </p>
    </div>
  );
}

export default OnlyText;
