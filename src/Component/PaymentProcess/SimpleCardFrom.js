import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';
const SimpleCardForm = ({handlePaymentOfOrder}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMassage, setErrorMassage] = useState();
    const [paymentSuccess, setPaymentSuccess] = useState();
    const history = useHistory()
    const handleSubmit = async (event) => {



        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setErrorMassage(error.message);
            setPaymentSuccess('')
        } else {
            setPaymentSuccess(paymentMethod.id)
            handlePaymentOfOrder(paymentMethod.id)
            setErrorMassage('')

        }
        event.preventDefault();
    };

    return (
        <div className="round p-5 border border-2" >
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br />
                <div className="text-center">
                    <button type="submit" disabled={!stripe} className="btn btn-warning col-md-10 col-sm-10 col-10 airBtn text-white mb-3">
                        Pay
                </button>
                </div>

            </form>
            {
                errorMassage && <p className="text-danger text-center">{errorMassage}</p>
            }
            {
                paymentSuccess && <div> <p className="text-center text-success">Your payment successfully Done.</p> <br /> <div className="text-center"> <button className="btn btn-warning" data-bs-dismiss="modal" aria-label="Close" onClick={()=> history.push('/userOrder')}>My Orders</button> </div></div>
            }
        </div>
    );
};

export default SimpleCardForm;