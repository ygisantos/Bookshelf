import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppBarLayout from "./layouts/AppBarLayout"

export default function App() {
  return (
    <BrowserRouter>
      <AppBarLayout>
        <Routes>
          <Route path="/a" element={<h1>Hello World!</h1>} />
        </Routes>
      </AppBarLayout>
    </BrowserRouter>
  )
}

