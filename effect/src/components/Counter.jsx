import { useEffect } from "react";

const Counter = ({ count, setCount }) => {
  const onClickAdd = () => {
    setCount(count + 1);
  };

  // 값을 기억하고 싶으면 부모 컴포넌트에 setCount를 하면된다

  useEffect(() => {
    console.log("Counter 컴포넌트가 생성된 상태입니다.");

    if (count > 0) {
      console.log("Counter 업데이트 되었습니다.");
    }

    return () => {
      console.log("Counter 제거");
    };
  }, [count]);

  // 18 [count]에 아무 값도 입력하지 않으면 실행이 되지 않는다.

  return (
    <div className="border-8 border-rose-400 p-4 flex flex-col justify-center items-center">
      <div className="text-center text-4xl">{count}</div>
      <button
        onClick={onClickAdd}
        className="bg-red-500 px-4 py-2 rounded-2xl text-white font-bold mt-4"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
