import { Footer, Header } from "@components/layout"
import { Route, Routes } from "react-router-dom"
import { About, Home, Lodging, NotFound } from "./views"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:lodgingId" element={<Lodging />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
