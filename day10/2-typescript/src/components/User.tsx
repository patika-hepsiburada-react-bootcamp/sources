import React from 'react';

interface IProps {
  name: string;
  surname?: string;
  onClick?: () => void;
}

const User: React.FC<IProps> = (props) => {
  return (
    <div>
      {props.name} {props.surname}
      <button onClick={props.onClick}>Click</button>
    </div>
  );
};

export default User;
