import {
  AdminPage,
  AuthPage,
  EditObjectPage,
  EditRestaurantPage,
  EditUserPage,
  OfferPage,
  RestaurantPage,
} from 'pages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin/*" element={<AdminPage />} />

        <Route path="/admin/add-user/" element={<EditUserPage />} />
        <Route path="/admin/edit-user/:id" element={<EditUserPage />} />

        <Route path="/admin/add-object/" element={<EditObjectPage />} />
        <Route path="/admin/edit-object/:id" element={<EditObjectPage />} />

        <Route path="/admin/add-restaurant" element={<EditRestaurantPage />} />
        <Route
          path="/admin/edit-restaurant/:id/*"
          element={<EditRestaurantPage />}
        />

        <Route path="/offer" element={<OfferPage />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
    </Router>
  )
}

export default App
