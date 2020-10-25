import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HgDBSEy6KTryzENUczIWNuo89kRa8J79BnY8Jp4EqqXxpawzD1IZZEcEvsAhxCClMxfbV4gLbLCDSbsrKg0hjUS005WqO2XaZ";

    const onToken=token=>{
        console.log(token);
        alert("payment successful");
    }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
