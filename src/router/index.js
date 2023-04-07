import { ROUTES } from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {mapRoutes(ROUTES)}
        {/* {Object.keys(ROUTES)
          .map((key) => ROUTES[key])
          .map((ROUTE, i) => {
            return <Route key={i} path={ROUTE.PATH} element={ROUTE.COMPONENT} />
          })} */}
      </Routes>
    </BrowserRouter>
  )
}

function mapRoutes(ROUTES) {
  return Object.keys(ROUTES).map((ROUTE, i) => (
    <Route key={i} path={ROUTES[ROUTE].PATH} element={ROUTES[ROUTE].COMPONENT}>
      {ROUTES[ROUTE].CHILDREN && mapRoutes(ROUTES[ROUTE].CHILDREN)}
    </Route>
  ))
}
