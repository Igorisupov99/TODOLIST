import { useState } from 'react';
import type { Doing, Props } from './types/types.ts';
import ButtonStyle from './PostDoing.module.css';

function PostDoing({ setData }: Props) {
  const [title, setTitle] = useState('');
  const createDoing = function (e: React.FormEvent) {
    e.preventDefault();
    if (title.trim() === '') {
      return;
    }
    const newDoing: Doing = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTitle('');
    setData((prev) => [...prev, newDoing]);
  };
  return (
    <form
      className={ButtonStyle.formatButtonPost}
      onSubmit={(e) => createDoing(e)}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="what needs to be done?"
        className={ButtonStyle.inputButtonPost}
      />
      <button type="submit" className={ButtonStyle.buttonPost}>
        +
      </button>
    </form>
  );
}

export default PostDoing;
