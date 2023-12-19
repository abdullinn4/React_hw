import "./styles/index.sass"
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter.tsx";
function App() {

  return (
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
  );
}
export default App
