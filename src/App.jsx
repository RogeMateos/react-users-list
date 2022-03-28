import Title from "./components/Title";
import UsersList from "./components/UsersList";
const USERS = [
  {
    name:'Pafblo Castellanos',
    active:'Activo',
    role:'profesor'
  },
  {
    name:'jose Miguel',
    active:'Activo',
    role:'Alumno'
  },
  {
    name:'Roge Mateos',
    active:'Activo',
    role:'profesor'
  }
 
]

const App = ()=> (
  <UsersList users= {USERS}>
    <Title>Listado de usuarios</Title>
  </UsersList>
 );
 export default App;