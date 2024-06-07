import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  const {
    data: participant,
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["participant"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/participant?email=${user?.email}`,
        { withCredentials: true }
      );
      const data = await response.data;
      return data;
    },
  });

  const price = participant?.reduce((total, item) => total + item.campFees, 0);

  useEffect(() => {
    const totalPrice = {
      price,
    };
    axiosSecure.post("/create-payment-intent", totalPrice).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      Swal.fire({
        title: "Error!",
        text: "Your payment can't be processed",
        icon: "error",
      });
    } else {
      setError("");
      refetch();
    }

    // Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Anonymous",
            name: user.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm Error");
    } else {
      // console.log("Payment Intent");
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent)
        Swal.fire({
          title: "Success!",
          text: "Your payment has been successful",
          icon: "success",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm bg-green-50 text-green-900 my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="mt-4 text-xl font-bold text-red-600">{error}</p>
    </form>
  );
};

export default CheckoutForm;
