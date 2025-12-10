import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUserFromStorage } from "./store/userSlice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage())
  }, []);

  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;