import Title from "./components/Title";
import UsersList from "./components/UsersList";
const USERS = [
  {
    name: 'Pablo Castellanos',
    active: true,
    role: 'teacher'
  },
  {
    name: 'jose Miguel',
    active: true,
    role: 'teacher'
  },
  {
    name: 'Roge Mateos',
    active: false,
    role: 'student'
  }

]

const App = () => {
  console.log('APP')
  return (
    <UsersList users={USERS}>
      <Title>Listado de usuarios</Title>
    </UsersList>
  )
};
export default App;