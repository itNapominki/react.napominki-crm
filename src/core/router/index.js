import { ROUTES } from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(ROUTES)
          .map((key) => ROUTES[key])
          .map((ROUTE, i) => (
            <Route key={i} path={ROUTE.PATH} element={ROUTE.COMPONENT} />
          ))}
      </Routes>
    </BrowserRouter>
  )
}
