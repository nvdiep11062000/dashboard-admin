import { BrowserRouter as Router , Routes, Route , Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login.jsx";
import List from "./pages/list/List.jsx";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New.jsx";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext";
import {AuthContext} from '../src/Context/AuthContext'
function App() {
  const {darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login"/>
  }
  console.log(currentUser)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<RequireAuth><Home/></RequireAuth>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="users">
              <Route index element={<RequireAuth><List/></RequireAuth>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
