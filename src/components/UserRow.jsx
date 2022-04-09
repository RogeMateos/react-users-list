import { useState } from 'react';
import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ name, active, role }) => {

  console.log('  - UserRow');

  const state = useState(active);

  const activeState = state[0];
  const setActiveState = state[1]
  console.log(state);
  return (
    <div className={style.wrapper}>
      <div className={style.name}>
        <span>{name}</span>
      </div>
      <div className={style.status}>
        <UserStatus active={activeState} />
      </div>
      <div className={style.role}>
        <UserRole role={role} />
      </div>
      <div className={style.action}>
        <button onClick={() => {
          setActiveState(!activeState);
          console.log(activeState);
        }}>{activeState ? 'desactivar' : 'activar'}</button>
      </div>

    </div>
  );
};
export default UserRow;