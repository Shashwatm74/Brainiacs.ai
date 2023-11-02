import React, { useState } from "react";
import styles from "@/styles/components/login_and_signup_page/Signup.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://rgwdpaftxvnlowpidlmf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnd2RwYWZ0eHZubG93cGlkbG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4NjY1OTgsImV4cCI6MjAxNDQ0MjU5OH0.9V__7Ij3SLzBkmKfIaAkzjSyTS79R8o-NZ_lNyZ8j28'
);

function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Sign up successful, redirecting to home...");
        setTimeout(() => {
          router.push('/');
        }, 1000);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Legal.ai</title>
        <meta name="description" content="AI based legal assistant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.signup}>
        <div className={styles.signup_container}>
          <div className={styles.signup_card_wrapper}>
            <div>
              <span className={styles.span_heading}>Sign Up</span>
            </div>
            <div className={styles.signup_ele_head}>Email</div>
            <input
              className={styles.input_box}
              placeholder="Enter email..."
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className={styles.signup_ele_head}>Password</div>
            <input
              className={styles.input_box}
              placeholder="Enter password.."
              required
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <div className={styles.messages} id="message">{message}</div>

            <form
              className={styles.form}
              onSubmit={handleSignUp}
            >
              <button className={styles.submit_button} type="submit">
                Submit
              </button>
            </form>
            <div className={styles.signup_text}>
              Already have an account?
              <span className={styles.signup_link}>
                <Link href="/login/"> Login</Link>
              </span>
            </div>
            <div className={styles.additional_options}>
              Sign up with
              <button className={styles.google_button}>google</button>
            </div>
          </div>
          <div className={styles.signupImage}>
            {/* Your logo image */}
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
