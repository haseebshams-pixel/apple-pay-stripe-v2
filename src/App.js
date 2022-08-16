import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isSupported, setIsSupported] = useState(false);
  function beginApplePay() {
    var paymentRequest = {
      countryCode: "US",
      currencyCode: "USD",
      lineItems: [
        {
          type: "final",
          label: "Fancy Hat",
          amount: "15.00",
        },
        {
          type: "final",
          label: "Shipping",
          amount: "10.00",
        },
        {
          type: "final",
          label: "Tax",
          amount: "0.99",
        },
        {
          type: "final",
          label: "Discount",
          amount: "-6.00",
        },
      ],
      total: {
        label: "Rocketship Inc",
        amount: "19.99",
      },
    };
    var session = window.Stripe.applePay.buildSession(
      paymentRequest,
      function (result, completion) {
        console.log(result.token.id);
        completion(true);
      }
    );
    session.begin();
    // var paymentRequest = {
    //   countryCode: "US",
    //   currencyCode: "USD",
    //   total: {
    //     label: "Rocketship Inc",
    //     amount: "19.99",
    //   },
    // };

    // var session = Stripe.applePay.buildSession(
    //   paymentRequest,
    //   function (result, completion) {
    //     $.post("/charges", { token: result.token.id })
    //       .done(function () {
    //         completion(ApplePaySession.STATUS_SUCCESS);
    //         // You can now redirect the user to a receipt page, and so on
    //         //window.location.href = "/success.html";
    //       })
    //       .fail(function () {
    //         completion(ApplePaySession.STATUS_FAILURE);
    //       });
    //   },
    //   function (error) {
    //     console.log(error.message);
    //   }
    // )
    // .then((val)=>{

    // });

    // session.oncancel = function () {
    //   console.log("Session", session);
    //   console.log("User hit the cancel button in the payment window");
    // };

    // session.begin();
  }
  useEffect(() => {
    window.Stripe.setPublishableKey(
      "pk_live_51JNtd5EEWahky04aHMAYMeda92xC0T3tGlRv1pxAlzMxVq9Dx26qRcGZoWg4UNlVBS2QH7P6iv4H5Nsz81lG1lpx00OsBH3ThR"
    );

    window.Stripe.applePay.checkAvailability(function (available) {
      if (available) {
        setIsSupported(true);
        console.log("Supported");
      } else {
        console.log("Not Supported");
      }
    });
  }, []);

  return (
    <div className="App">
      <h2>Apple Pay </h2>
      {isSupported ? (
        <button id="apple-pay-button" onClick={beginApplePay}></button>
      ) : (
        <label>Not Supported</label>
      )}
    </div>
  );
}

export default App;
