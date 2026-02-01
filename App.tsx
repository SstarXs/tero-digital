import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/Home";
import Privacidad from "@/Privacidad";
import Terminos from "@/Terminos";

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
