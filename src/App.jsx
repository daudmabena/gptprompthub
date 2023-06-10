import './static/App.css'
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/Layout.jsx";
import Home from "./pages/Home.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default App
