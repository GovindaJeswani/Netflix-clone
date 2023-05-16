// import { Stripe } from 'stripe';

// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
//   apiVersion: '2020-08-27',
// });

// export { stripe };


import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){

    let stripePromise = null

    console.log("clicked");
    const getStripe = ()=>{
      if(!stripePromise){
        stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`)
        // stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)
      }
      return stripePromise
    }

    const stripe = await getStripe()
    console.log({stripe});
    await stripe.redirectToCheckout({
      mode:'payment',
      lineItems,
      successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin
    })

}