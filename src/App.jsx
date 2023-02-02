import UserList from "./features/users/UserList";
import { Route, Routes } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";

function App() {

  return (
    <div className='bg-slate-800 text-white h-screen
    container mx-auto px-2 pt-10 max-w-5xl
    '>
      <h1 className="text-center font-bold text-2xl mb-10">CRUD With Redux And Tailwind</h1>
      <Routes>
        <Route path="/" element={<UserList />}/>
        <Route path="/add-user" element={<AddUser />}/>
        <Route path="/edit-user/:id" element={<EditUser />}/>
      </Routes>
    </div>
  )
}

export default App
