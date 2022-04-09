import style from './UserStatus.module.css';
const UserStatus = ({ active }) => {
  console.log('   - UserStatus');
  const activeClassname = active ? style.active : style.inactive;
  return (
    <span className={activeClassname}>
      {active ? 'Activo' : 'inactivo'}
    </span>
  );

};
export default UserStatus;