import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Timer from "./pages/Timer"
import RoutesValue from "./Routes";
import Datatables from "./components/Datatables";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Number from "./pages/Number";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/timer" element={<Timer/>} />
        <Route path="/timer/routes/:name" element={<RoutesValue/>} />
        <Route path="/datatables" element={<Datatables/>}/>
        <Route path="/number" element={<Number/>}/>

        {/* <Route path="/timer/:name/data" element={<Data/>} /> */}
      </Routes>
    </BrowserRouter>
    // <>
    // <h1>Hello</h1>
    // </>
  );
}

export default App;
