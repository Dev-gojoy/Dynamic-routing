import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Dr = () => {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const desc = searchParams.get("desc");

  useEffect(() => {
    console.log(title);
    console.log(desc);
  }, []);

  return (
    <div>
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  );
};

export default Dr;
