import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { FormEvent } from 'react';

function CheckoutStandardSubscription() {

    const elements: any = useElements();
    const stripe: any = useStripe();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Stripe.js has not loaded yet
        if (!stripe || !elements) { return; }

        // Create a payment method
        const paymentMethod = await stripe.createPaymentMethod('card', elements.getElement(CardElement));
        console.log(paymentMethod);

        // Create subscription on the server
        const response = await axios.post('http://localhost:3000/payment/standard',
            {
                email: "jahidhasanmozumder@gmail.com",
                paymentMethod: paymentMethod
            }
        );
        console.log(response.data);
        
        if(response.data.status == "active") window.location.href = "http://localhost:5173/checkout/success";
    }

    return (
        <>
            <h1>Standard Subscription plan</h1>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type='submit'>Pay</button>
            </form>
        </>
    )
}

export default CheckoutStandardSubscription