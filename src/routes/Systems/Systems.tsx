import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Accounts from "./Accouts/Accouts";
import Diary from "./Diary/Diary";
import Roles from "./Roles/Roles";

function Systems() {
    return (
      <HashRouter>
        <Routes> 
        <Route path="Accouts" element={<Accounts />}>
            <Route index element={<Accounts />}></Route>
          </Route>
        </Routes>
      </HashRouter>
  
    );
  }
  
  export default Systems;