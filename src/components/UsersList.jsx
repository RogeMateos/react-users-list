import UserRow from "./UserRow";
import style from './UsersList.module.css';


const UsersList = ({users,children}) =>{
  const usersRendered = users.map(user => <UserRow key={user.name} {...user}/>)
  return <div className={style.wrapper}>
    {children}
    {usersRendered}
    </div>
};

export default UsersList;