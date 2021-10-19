import { atom } from "recoil";

const textState = atom({
  // atom()은 react hook이 아니다! 그래서 이렇게 react component바깥에 있당!
  // react component 바깥에 있기 때문에,
  // 즉, 단순한 나는 잘 모르지만.. 아무튼 단순한 "함수"에 지나지않기 떄문에
  // 적당~한 js에 만들고, 그걸 export하고, ㄱ거 ㄹimport해도 아무론 ㅈ장이 없다.

  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const ageState = atom({
  key: "ageState",
  default: 0,
});

export { textState, ageState };
