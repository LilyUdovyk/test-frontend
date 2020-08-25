import React from "react";

import style from './style.module.css'

interface Props {
  name: string,
  picture: string,
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const User = (props: Props) => {

  return (  
    <div className={style.user} onClick={props.onClick} >
      <img src={props.picture} alt="Avatar" className={style.userImg} />
      <div className={style.userDetails}>
        <p className={style.useDetailsName}>{props.name}</p>
      </div>
    </div>
  );
};
export default React.memo(User);