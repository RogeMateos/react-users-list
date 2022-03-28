import style from './UserRow.module.css';
const UserRow = ({name,active,role} ) => (
  <div className={style.wrapper}>
         <span className={style.nameSpan}>{name}</span>
         <span className={style.activo}>{active}</span>
         <span className={style.role}>{role}</span> 
      </div>
);
export default UserRow;