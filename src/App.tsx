import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/src/pages/Home";
import Privacidad from "@/src/pages/Privacidad";
import Terminos from "@/src/pages/Terminos";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
