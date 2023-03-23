import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoteDetail from "./pages/NoteDetail";
import Layout from "./components/Layout";

// function App() {
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<HomePage />}></Route>
//     </Routes>
//   </BrowserRouter>;
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="notes/:id" element={<NoteDetail />} />
          <Route path="note-create" element={<NoteDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
