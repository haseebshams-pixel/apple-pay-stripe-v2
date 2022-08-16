import { useEffect } from "react";
import "./App.css";

function App() {
  // function beginApplePay() {
  //   var paymentRequest = {
  //     countryCode: "US",
  //     currencyCode: "USD",
  //     lineItems: [
  //       {
  //         type: "final",
  //         label: "Fancy Hat",
  //         amount: "15.00",
  //       },
  //       {
  //         type: "final",
  //         label: "Shipping",
  //         amount: "10.00",
  //       },
  //       {
  //         type: "final",
  //         label: "Tax",
  //         amount: "0.99",
  //       },
  //       {
  //         type: "final",
  //         label: "Discount",
  //         amount: "-6.00",
  //       },
  //     ],
  //     total: {
  //       label: "Rocketship Inc",
  //       amount: "19.99",
  //     },
  //   };
  //   var session = Stripe.applePay.buildSession(
  //     paymentRequest,
  //     function (result, completion) {
  //       console.log(result.token.id);
  //       completion(true);
  //     }
  //   );
  //   session.begin();
  //   // var paymentRequest = {
  //   //   countryCode: "US",
  //   //   currencyCode: "USD",
  //   //   total: {
  //   //     label: "Rocketship Inc",
  //   //     amount: "19.99",
  //   //   },
  //   // };

  //   // var session = Stripe.applePay.buildSession(
  //   //   paymentRequest,
  //   //   function (result, completion) {
  //   //     $.post("/charges", { token: result.token.id })
  //   //       .done(function () {
  //   //         completion(ApplePaySession.STATUS_SUCCESS);
  //   //         // You can now redirect the user to a receipt page, and so on
  //   //         //window.location.href = "/success.html";
  //   //       })
  //   //       .fail(function () {
  //   //         completion(ApplePaySession.STATUS_FAILURE);
  //   //       });
  //   //   },
  //   //   function (error) {
  //   //     console.log(error.message);
  //   //   }
  //   // )
  //   // .then((val)=>{

  //   // });

  //   // session.oncancel = function () {
  //   //   console.log("Session", session);
  //   //   console.log("User hit the cancel button in the payment window");
  //   // };

  //   // session.begin();
  // }
  useEffect(() => {
    window.Stripe.setPublishableKey(
      "pk_test_51JNtd5EEWahky04aXtU0xPztXhqL1Mhh3DkpornhvXZMEMNSSizYwx2LqsGDpmVcRmcRgntP9dC5oeCAJNxsb6zm00ICxZ3Nzm"
    );

    window.Stripe.applePay.checkAvailability(function (available) {
      if (available) {
        console.log("Supported");
        //document.getElementById("apple-pay-button").style.display = "block";
      } else {
        console.log("Not Supported");
      }
    });
  }, []);

  return (
    <div className="App">
      <h2>Apple Pay </h2>
    </div>
  );
}

export default App;
