import React, { useState } from "react";
import styled from "styled-components";
import { IData } from "./interfaces";
import "./App.css";

const initialData: IData[] = [];

for (let i = 0; i < 5000; i++) {
  initialData.push({
    id: i,
    name: `Ivan the ${i}`,
    age: Math.round(Math.random() * 50),
    selected: false,
  });
}

const TD = styled.td`
  border: 1px solid black;
  margin: 0px;
  padding: 0px;
`;
const Table = styled.table`
  border-spacing: 0px;
`;

const App = () => {
  const [data, setData] = useState<IData[]>(initialData);

  const handleSelection = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setData(
      data.map((e) => {
        if (e.id === Number(ev.target.id)) {
          return { ...e, selected: !e.selected };
        } else return e;
      })
    );
  };

  return (
    <div className="App">
      <Table>
        <tbody>
          <tr>
            <TD></TD>
            <TD>Name</TD>
            <TD>age</TD>
          </tr>
        </tbody>
        <tbody>
          {data.map((e) => {
            return (
              <tr key={e.id}>
                <TD>
                  <input
                    id={`${e.id}`}
                    type={"checkbox"}
                    checked={e.selected}
                    onChange={(ev) => handleSelection(ev)}
                  />
                </TD>
                <TD>{e.name}</TD>
                <TD>{e.age}</TD>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default App;
