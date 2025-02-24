import { useLocation } from 'react-router-dom';
import '../style/Home.css'
import axios from 'axios';

function CheckoutSuccess() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    const customerId = params.get('customerId');
    const subscriptionId = params.get('subscriptionId');

    const handleClick = async (updateType: string, updatePlan: string) => {
        if (updateType == 'upgrade') {
            if (updatePlan == 'standard') {

                // Update subscription on the server
                const response = await axios.post('http://localhost:3000/payment/upgrade/standard',
                    {
                        customerId: customerId,
                        subscriptionId: subscriptionId
                    }
                );
                console.log(response.data);

                // Redirect to new thanks giving page 
                if (response.data.status == "active") window.location.href = `http://localhost:5173/checkout/success?type=${'standard'}&customerId=${response.data.customer}&subscriptionId=${response.data.id}`;

            } else if (updatePlan == 'pro') {

                // Update subscription on the server
                const response = await axios.post('http://localhost:3000/payment/upgrade/pro',
                    {
                        customerId: customerId,
                        subscriptionId: subscriptionId
                    }
                );
                console.log(response.data);

                // Redirect to new thanks giving page 
                if (response.data.status == "active") window.location.href = `http://localhost:5173/checkout/success?type=${'pro'}&customerId=${response.data.customer}&subscriptionId=${response.data.id}`;

            }
        } else if (updateType == 'downgrade') {
            if (updatePlan == 'basic') {

                // Update subscription on the server
                const response = await axios.post('http://localhost:3000/payment/downgrade/basic',
                    {
                        customerId: customerId,
                        subscriptionId: subscriptionId
                    }
                );
                console.log(response.data);

                // Redirect to new thanks giving page 
                if (response.data.status == "active") window.location.href = `http://localhost:5173/checkout/success?type=${'basic'}&customerId=${response.data.customer}&subscriptionId=${response.data.id}`;

            } else if (updatePlan == 'standard') {

                // Update subscription on the server
                const response = await axios.post('http://localhost:3000/payment/downgrade/standard',
                    {
                        customerId: customerId,
                        subscriptionId: subscriptionId
                    }
                );
                console.log(response.data);

                // Redirect to new thanks giving page 
                if (response.data.status == "active") window.location.href = `http://localhost:5173/checkout/success?type=${'standard'}&customerId=${response.data.customer}&subscriptionId=${response.data.id}`;

            }
        }
    }

    return (
        <>
            {
                type == "basic"
                &&
                <div className='container'>
                    <h1>Thanks for the subscription to basic plan</h1>
                    <div className='plans'>
                        <button onClick={() => handleClick('upgrade', 'standard')}>Upgrade to standard</button>
                        <button onClick={() => handleClick('upgrade', 'pro')}>Upgrade to pro</button>
                    </div>
                </div>
            }
            {
                type == "standard"
                &&
                <div className='container'>
                    <h1>Thanks for the subscription to standard plan</h1>
                    <div className='plans'>
                        <button onClick={() => handleClick('downgrade', 'basic')}>Downgrade to basic</button>
                        <button onClick={() => handleClick('upgrade', 'pro')}>Upgrade to pro</button>
                    </div>
                </div>
            }
            {
                type == "pro"
                &&
                <div className='container'>
                    <h1>Thanks for the subscription to pro plan</h1>
                    <div className='plans'>
                        <button onClick={() => handleClick('downgrade', 'basic')}>Downgrade to basic</button>
                        <button onClick={() => handleClick('downgrade', 'standard')}>Downgrade to standard</button>
                    </div>
                </div>
            }
        </>
    )
}

export default CheckoutSuccess