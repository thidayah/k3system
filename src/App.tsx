import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard, Login, NoPage } from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={''}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
