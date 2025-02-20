import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { FormEvent } from 'react';

function Checkout() {

    const elements: any = useElements();
    const stripe: any = useStripe();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet
            return;
        }

        // Create payment intent on the server
        const response = await axios.post('http://localhost:3000/payment/payment-intent/create',
            {
                amount: 2000,
                currency: "usd",
                email: "jahidhasanmozumder@gmail.com"
            }
        );
        console.log(response.data.client_secret);

        // Confirm the payment on the client
        const paymentInformation = await stripe.confirmCardPayment(
            response.data.client_secret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }
        )

        console.log(paymentInformation);
    }

    return (
        <>
            <h1>Card</h1>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type='submit'>Pay</button>
            </form>
        </>
    )
}

export default Checkout