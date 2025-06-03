import { useState } from 'react';
import type { Doing, EditDoingProps } from './types/types.ts';
import EditStyle from './EditDoing.module.css';

function EditDoing({ id, setData, title }: EditDoingProps) {
  const [name, setName] = useState(title);
  const editedDoing = function (e: React.FormEvent) {
    e.preventDefault();
    const updatedDoing: Doing = {
      id,
      title: name,
      completed: false,
    };
    setData((prev) => {
      return prev.map((el) => {
        if (id === el.id) {
          return { ...updatedDoing };
        } else {
          return el;
        }
      });
    });
  };
  return (
    <form onSubmit={editedDoing} className={EditStyle.formStyle}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={EditStyle.inputStyle}
      />
      {/* <button type="submit"></button> */}
    </form>
  );
}

export default EditDoing;
