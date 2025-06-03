import type { DeleteDoingProps } from './types/types';
import crossIcon from './assets/icon_1.svg';

function DeleteDoing({ id, setData }: DeleteDoingProps) {
  const deleteDoing = function () {
    setData((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <button onClick={deleteDoing} className="cross">
      {' '}
      <img src={crossIcon} alt="cross" width="15" height="15" />
    </button>
  );
}

export default DeleteDoing;
