import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Homepage from "./Homepage"
import Users from "./users/pages/Users"
import NewPlace from "./places/pages/NewPlace"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App