import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const data = [
    {
      name: "Alice",
      email: "alice@example.com",
    },
    {
      name: "Bob",
      email: "bob@example.com",
    },
    {
      name: "Charlie",
      email: "charlie@example.com",
    },
    {
      name: "David",
      email: "david@example.com",
    },
    {
      name: "Eve",
      email: "eve@example.com",
    },
    {
      name: "Frank",
      email: "frank@example.com",
    },
    {
      name: "Grace",
      email: "grace@example.com",
    },
    {
      name: "Heidi",
      email: "heidi@example.com",
    },
    {
      name: "Ivan",
      email: "ivan@example.com",
    },
    {
      name: "Jane",
      email: "jane@example.com",
    },
    {
      name: "Karen",
      email: "karen@example.com",
    },
    {
      name: "Lily",
      email: "lily@example.com",
    },
    {
      name: "Mike",
      email: "mike@example.com",
    },
    {
      name: "Nancy",
      email: "nancy@example.com",
    },
    {
      name: "Oliver",
      email: "oliver@example.com",
    },
    {
      name: "Pamela",
      email: "pamela@example.com",
    },
    {
      name: "Quinn",
      email: "quinn@example.com",
    },
    {
      name: "Rachel",
      email: "rachel@example.com",
    },
    {
      name: "Sarah",
      email: "sarah@example.com",
    },
    {
      name: "Tom",
      email: "tom@example.com",
    },
    {
      name: "Uma",
      email: "uma@example.com",
    },
    {
      name: "Victor",
      email: "victor@example.com",
    },
    {
      name: "Wendy",
      email: "wendy@example.com",
    },
    {
      name: "Xavier",
      email: "xavier@example.com",
    },
    {
      name: "Yvonne",
      email: "yvonne@example.com",
    },
    {
      name: "Zachary",
      email: "zachary@example.com",
    },
  ];
  // return <RouterProvider router={routes} />;

  const [startItem, setStartItem] = useState(0);
  const [itemsPerPageCount, setItemsPerPageCount] = useState(5);
  const [endItem, setEndItem] = useState(itemsPerPageCount);

  let startPage = 0;
  let endPage = itemsPerPageCount;

  let buttons = [];
  for (let i = 0; i < data.length; i++) {
    buttons.push(Math.floor(i / itemsPerPageCount));
  }

  const handleClick = (e) => {
    startPage = Number(e.target.value) * itemsPerPageCount;
    endPage = Number(startPage) + itemsPerPageCount;
    setStartItem(startPage);
    setEndItem(endPage);
  };
  const handleFirst = () => {
    setStartItem(0);
    setEndItem(itemsPerPageCount);
  };
  const handleLast = () => {
    setStartItem(data.length - itemsPerPageCount);
    setEndItem(data.length);
  };
  return (
    <>
      {data.slice(startItem, endItem).map((item, index) => {
        // console.log(startItem, endItem);
        return (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>Total no {data.slice(startItem, endItem).length}</p>
          </div>
        );
      })}
      <button onClick={handleFirst}>First</button>
      {[...new Set(buttons)].map((item, index) => {
        return (
          <button key={item} value={item} onClick={(e) => handleClick(e)}>
            {item + 1}
          </button>
        );
      })}
      <button onClick={handleLast}>Last</button>
    </>
  );
}

export default App;
