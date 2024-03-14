import App from './App.tsx'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

//components
import { PageNotFound } from '@/components/PageNotFound'

//constants
import { ROUTES } from '@/constants/routes.ts'

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <App />,
    errorElement: <PageNotFound />,
    children: []
  }
]

export const router = createBrowserRouter(routes)
