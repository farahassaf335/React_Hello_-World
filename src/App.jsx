import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { fetchCart } from "./store/cartslice"; 
import './scss/main.scss';

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchCart(user.id));
    }
  }, [dispatch, user]);

  if (!user) {
    return <Login />;
  }

  return <Home />;
}

export default App;
