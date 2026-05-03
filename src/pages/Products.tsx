import { Navigate } from 'react-router-dom'
import { routes } from '../lib/routes'

export default function Products() {
  return <Navigate to={routes.compare} replace />
}
