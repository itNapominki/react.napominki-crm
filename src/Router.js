import {
  AuthPage,
  AdminPage,
  EditObjectPage,
  EditRestaurantPage,
  EditUserPage,
  OfferPage,
  RestaurantPage,
} from 'pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route
          path="/admin/restaurants/:id/edit/"
          element={<EditRestaurantPage />}
        />
        <Route path="/admin/restaurants/add" element={<EditRestaurantPage />} />
        <Route path="/admin/">
          <Route path="data/*" element={<AdminPage />} />
          <Route path="restaurants">
            <Route path="add" element={<EditRestaurantPage />} />
            <Route path=":id/edit/*" element={<EditRestaurantPage />} />
          </Route>
          <Route path="users">
            <Route path="add" element={<EditUserPage />} />
            <Route path=":id/edit/*" element={<EditUserPage />} />
          </Route>
          <Route path="objects">
            <Route path="add" element={<EditObjectPage />} />
            <Route path=":id/edit/*" element={<EditObjectPage />} />
          </Route>
        </Route>

        <Route path="/offer" element={<OfferPage />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  )
}
