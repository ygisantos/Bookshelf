import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppBarLayout from "./layouts/AppBarLayout"

import Trending from "./pages/Trending"
import Browse from "./pages/Browse"
import Random from "./pages/Random"
import About from "./pages/About"

export default function App() {
  return (
    <BrowserRouter>
      <AppBarLayout>
        <Routes>
          <Route path="/trending" element={<Trending />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/random" element={<Random />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppBarLayout>
    </BrowserRouter>
  )
}

