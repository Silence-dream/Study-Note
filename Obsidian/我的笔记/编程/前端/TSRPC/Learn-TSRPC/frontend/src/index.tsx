import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { client } from "./client";
import { ResGetData } from "./shared/protocols/PtlGetData";
import "./index.less";

const App = () => {
  // States
  const [input, setInput] = useState("");
  const [list, setList] = useState<ResGetData["data"]>([]);

  // Reload message list
  async function loadList() {
    let ret = await client.callApi("GetData", {});

    // Error
    if (!ret.isSucc) {
      alert(ret.err.message);
      return;
    }

    // Success
    setList(ret.res.data);
  }

  // Send Message
  async function send() {
    console.log(111);
    let ret = await client.callApi(
      "AddData",
      {
        content: input,
      },
      {
        onProgress: (value) => {
          console.log(value);
        },
      }
    );

    // Error
    if (!ret.isSucc) {
      alert(ret.err.message);
      return;
    }

    // Success
    setInput("");
    loadList();
  }

  // Load list at first
  useEffect(() => {
    loadList();
  }, []);

  async function handleClick() {
    let res = await client.callApi(
      "computed/GetSum",
      {
        num1: 10,
        num2: 20,
      },
      {
        onProgress: (ratio) => {
          console.log(ratio);
        },
      }
    );

    console.log(res.res?.sum);
  }

  return (
    <div className="App">
      <button onClick={handleClick}> ?点击测试</button>

      <h1>TSRPC Guestbook</h1>
      <div className="send">
        <textarea
          placeholder="Say something..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={send}>Send</button>
      </div>
      <ul className="list">
        {list.map((v, i) => (
          <li key={i}>
            <div className="content">{v.content}</div>
            <div className="time">{v.time.toLocaleTimeString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
