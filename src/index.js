import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import Router2 from "./components/Router2";
import Debounce from "./components/lodash/Debounce";
import Throttle from "./components/lodash/Throttle";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="router" element={<Router2/>} />
            <Route path="debounce" element={<Debounce/>} />
            <Route path="throttle" element={<Throttle/>} />
        </Routes>
    </BrowserRouter>,
    rootElement
);