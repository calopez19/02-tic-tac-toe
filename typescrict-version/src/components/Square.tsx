import type { ReactNode } from 'react';

interface MyComponentProps {
  children?: ReactNode; // Define que puede recibir cualquier contenido JSX
  index: number;
  onclick: (index: number) => void;
  turn?: boolean
}

export function Square({ children, turn, onclick, index }: MyComponentProps) {

  const handleClick = () => {
    if (index ===-1) return;
    onclick(index)
  }
  return (
    <div className="square" style={turn? {backgroundColor: 'green'} : {backgroundColor: 'transparent'}} onClick={handleClick}>
        {children}
    </div>
  );
}
