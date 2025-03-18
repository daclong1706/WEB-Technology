import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("HCMUE");

  // Lúc nào cũng gọi
  useEffect(() => {
    console.log(`Đang render ${count} - ${name}`);
  });

  // Gọi khi khởi tạo
  useEffect(() => {
    console.log(`Gọi khi khởi tạo ${count} - ${name}`);
  }, []);

  useEffect(() => {
    console.log(`Gọi khi thay đổi name: ${count} - ${name}`);
  }, [name]);

  // const initValue = {
  //   isLogged: false,
  //   userName: 'N/A'
  // };

  return (
    <>
      <div className="card">
        <button onClick={() => setCount(count - 1)}>-</button>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <input onChange={(e) => setName(e.target.value)} />

        <button onClick={() => setName("HCMUE " + count)}>Change Name</button>

        <button onClick={() => setCount(count + 1)}>+</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
