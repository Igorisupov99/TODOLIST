import { useState } from 'react';
import './App.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import doings from './doings.js';
import PostDoing from './PostDoing.tsx';
import type { Doing } from './types/types.ts';
import EditDoing from './EditDoing.tsx';
import DeleteDoing from './DeleteDoing.tsx';
import pencilIcon from './assets/icon_2.svg';

function App() {
  const [data, setData] = useState<Doing[]>(doings);
  const [editedId, setEditedId] = useState<null | number>(null);


  const toggleCompleted = (id: number) => {
    setData((prev) =>
      prev.map((data) =>
        data.id === id ? { ...data, completed: !data.completed } : data
      )
    );
  };

  return (
    <div className="container">
      <h1>TODOLIST</h1>
      <PostDoing data={[]} setData={setData} />
      <div className="all-doings">
        {data.map((el) => {
          return (
            <div
              className="one-doing"
              key={el.id}
              style={{
                backgroundColor: el.completed ? 'white' : 'rgba(0, 213, 255, 0.1)'
              }}
            >
              {el.id === editedId ? (
                <>
                 <input
                    type="checkbox"
                    checked={el.completed}
                    onChange={() => toggleCompleted(el.id)}
                  />
                  <div className="button-group">
                    <button
                      onClick={() => {
                        setEditedId(el.id);
                      }}
                      className="pencil"
                    >
                      <img
                        src={pencilIcon}
                        alt="pencil"
                        width="15"
                        height="15"
                      />
                    </button>
                    <DeleteDoing id={el.id} setData={setData} data={[]} />
                  </div>
                <EditDoing id={el.id} title={el.title} setData={setData} data={[]} />
                </>  
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={el.completed}
                    onChange={() => toggleCompleted(el.id)}
                  />
                  <span
                    style={{
                      textDecoration: el.completed ? 'line-through' : 'none',
                    }}
                  >
                    {el.title}
                  </span>
                  <div className="button-group">
                    <button
                      onClick={() => {
                        setEditedId(el.id);
                      }}
                      className="pencil"
                    >
                      <img
                        src={pencilIcon}
                        alt="pencil"
                        width="15"
                        height="15"
                      />
                    </button>
                    <DeleteDoing id={el.id} setData={setData} data={[]} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
