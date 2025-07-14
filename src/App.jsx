import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./store";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <ToastContainer theme="colored" transition={Bounce} />
      </Provider>
    </>
  );
}

export default App;
