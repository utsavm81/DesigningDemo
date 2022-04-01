import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import Timer from "./pages/Timer"
import RoutesValue from "./Routes";
// import Datatables from "./components/Datatables";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Number from "./pages/Number";
import { lazy, Suspense } from "react";

const SignIn = lazy(()=>import('./pages/SignIn'))
const SignUp = lazy(()=>import('./pages/SignUp'))
const Timer = lazy(()=>import('./pages/Timer'))
// const RoutesValue = lazy(()=>import('./Routes'))
const Datatables = lazy(()=>import('./components/Datatables'))



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>   
        <Route path="/sign-in" element={<Suspense fallback={<>Please wait...</>}><SignIn /></Suspense>} />
        <Route path="/sign-up" element={<Suspense fallback={<>Please wait...</>}><SignUp /></Suspense>} />
        <Route path="/timer" element={<Suspense fallback={<>Please wait...</>}><Timer/></Suspense>} />
        {/* <Route path="/timer/routes/:name" element={<Suspense fallback={<div>Please wait...</div>}><RoutesValue/></Suspense>}/> */}
        <Route path="/timer/routes/:name" element={<RoutesValue/>}/> 
        <Route path="/datatables" element={<Suspense fallback={<div>Please wait...</div>}><Datatables/></Suspense>}/>
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
