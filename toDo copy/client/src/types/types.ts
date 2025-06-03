
export type Doing = {
  id: number;
  title: string;
  completed: boolean;
};

export type Props = {
  data: Doing[];
  setData: React.Dispatch<React.SetStateAction<Doing[]>>;
};

export type DeleteDoingProps = {
  data: Doing[];
  setData: React.Dispatch<React.SetStateAction<Doing[]>>;
  id: number;
}


export type EditDoingProps = {
  data: Doing[];
  setData: React.Dispatch<React.SetStateAction<Doing[]>>;
  title:string;
  id: number;
}