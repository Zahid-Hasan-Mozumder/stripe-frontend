import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import CheckoutBasicSubscription from './pages/CheckoutBasicSubscription'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutStandardSubscription from './pages/CheckoutStandardSubscription';
import CheckoutProSubscription from './pages/CheckoutProSubscription';
import CheckoutSuccess from './pages/CheckoutSuccess';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/checkout/basic",
      element: <Elements stripe={stripePromise}><CheckoutBasicSubscription /></Elements>
    },
    {
      path: "/checkout/standard",
      element: <Elements stripe={stripePromise}><CheckoutStandardSubscription /></Elements>
    },
    {
      path: "/checkout/pro",
      element: <Elements stripe={stripePromise}><CheckoutProSubscription /></Elements>
    },
    {
      path: "/checkout/success",
      element: <CheckoutSuccess />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
