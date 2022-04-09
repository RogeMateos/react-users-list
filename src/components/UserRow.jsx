import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';
const UserRow = ({ name, active, role }) => {

  let activeState = undefined;

  console.log('  - UserRow');
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
          activeState = !activeState;
          console.log(active);
        }}
        >
          {activeState ? 'desactivar' : 'activar'}</button>
      </div>

    </div>
  );
};
export default UserRow;