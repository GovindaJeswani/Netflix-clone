import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { magic } from "../lib/magic-client";
import SubscriptionPage from "../components/subscription/subscriptionPage";

import styles from "../styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithStripe = async (e) => {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const session = await response.json();

    if (session && session.id) {
      // const stripe = await loadStripe('pk_test_51N5N3HSFRmrn6FpUA58LeW7zRdYFCUTqimyQB5Y0nnZaay7VNVHHdRHyl2RZI3rrtzwlGDYGlXeOBKnyHrHxT3SM009PwzQwYb');
      const stripe = await loadStripe(
        `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`
      );
      await stripe.redirectToCheckout({ sessionId: session.id });
    } else {
      console.error("Error creating checkout session");
      alert("Payment failed. Please try again.");
    }
  };


  const handleLoginWithEmail = async (e) => {
    e.preventDefault();

    //! Stable code from here...
        if (email) {
          // log in a user by their email

          try {
            setIsLoading(true)
            const didToken = await magic.auth.loginWithMagicLink({
              email,
            });
            if (didToken) {
              // checking here

              const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${didToken}`,
                  "Content-Type": "application/json",
                },
              });

              const loggedInResponse = await response.json();
              if (loggedInResponse.done) {

                //  stripe...
                router.push("/");
              } else {
                setIsLoading(false);
                setUserMsg("Something went wrong logging in");
              }
            }
          } catch (error) {
            // Handle errors if required!
            console.error("Something went wrong logging in", error);
            setIsLoading(false);
          }
        } else {
          // show user message
          setIsLoading(false);
          setUserMsg("Enter a valid email address");
        }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <a>
              <div className={styles.logoWrapper}>
                <Image
                  src="/static/netflix.svg"
                  alt="Netflix logo"
                  width="128px"
                  height="34px"
                />
              </div>
            </a>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>

          <input
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
          />

          <p className={styles.userMsg}>{userMsg}</p>
          {/* <button onClick={handleLoginWithStripe} className={styles.loginBtn}> */}
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
