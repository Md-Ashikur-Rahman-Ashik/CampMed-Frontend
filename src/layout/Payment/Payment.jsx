import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div className="card card-compact container flex rounded-xl mx-auto max-w-fit">
      <h2 className="font-bold items-center gap-4 text-5xl text-green-900 mb-10 flex justify-center">
        Please pay your camp fee
      </h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
