import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// TODO: Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const participant = useLoaderData();
  // console.log(participant);

  return (
    <div className="card card-compact container flex rounded-xl mx-auto max-w-fit">
      <Helmet>
        <title>Payment | CampMed</title>
      </Helmet>
      <h2 className="font-bold items-center gap-4 text-5xl text-green-900 mb-10 flex justify-center">
        Please pay your camp fee
      </h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm vol={participant}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
