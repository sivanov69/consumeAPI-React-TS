import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Users from "./Views/Users";
import UserPosts from "./Views/UserPosts";

const router = createBrowserRouter([
  {
    path: '/', element: <Users />
  },
  {
    path: '/posts/:userId', element: <UserPosts/> 
  },
]) 

const App = () => {
  return ( 
  <section className="App">
     <RouterProvider router={router}/>
  </section>
  )
};

export default App;
