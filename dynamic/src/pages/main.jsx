import { Link } from "react-router-dom";

const Main = () => {
  const awesomeData = "???;";

  return (
    <div>
      <Link to={`/dr/0?title=${awesomeData}&desc=bad"`}>
        <button className="bg-blue-500 px-2 py-1 rounded-md ml-4">
          이동 1
        </button>
      </Link>
      <Link to="/dr/0?title=ethereum&desc=smartcontract">
        <button className="bg-blue-500 px-2 py-1 rounded-md ml-4">
          이동 2
        </button>
      </Link>
    </div>
  );
};

export default Main;
