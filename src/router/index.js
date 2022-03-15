import App from "../App"
import login from "./components/login/login"
import register from "./components/register/register"

import supplyer from "./components/supplyer/supplyer"
import deliver from "./components/deliver/deliver"
import retailer from "./components/retailer/retailer"


import { BrowserRouter, Routes, Route } from "react-router-dom"

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<login />}></Route>
            <Route path="/register" element={<register />}></Route>
            <Route path="/supplyer" element={<supplyer />}></Route>
            <Route path="/deliver" element={<deliver />}></Route>
            <Route path="/retailer" element={<retailer />}></Route>
            {/* <Route path="/login" element={<Login />}></Route> */}
        </Routes>
    </BrowserRouter>
)

export default BaseRouter;