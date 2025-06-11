import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Homepage from "./Homepage"
import Users from "./users/pages/Users"
import NewPlace from "./places/pages/NewPlace"
import MainNavigation from "./shared/navigations/MainNavigation"
import AllPlaces from "./places/pages/AllPlaces"
import UserPlaces from "./places/pages/UserPlaces"
import Place from "./places/pages/Place"
import UserDashBoard from "./users/pages/UserDashBoard"

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:uid" element={<UserDashBoard />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places" element={<AllPlaces />} />
        <Route path="/places/:pid" element={<Place />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App