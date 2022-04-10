import style from './UserRole.module.css';

const ROLE_STYLES = {
  teacher: ['profesor', style.teacher],
  student: ['Alumno', style.student],
  other: ['otro', style.other]
};

const UserRole = ({ role }) => {


  const [roleName, roleClassname] = ROLE_STYLES[role] || ROLE_STYLES.other;

  return <span className={`${style.role} ${roleClassname}`}>{roleName}</span>
};

export default UserRole;
