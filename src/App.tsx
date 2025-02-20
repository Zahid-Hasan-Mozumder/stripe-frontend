import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/checkout",
      element: <Elements stripe={stripePromise}><Checkout /></Elements>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
