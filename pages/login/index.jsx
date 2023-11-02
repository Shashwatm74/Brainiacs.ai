import React from "react";
import Link from "next/link";
import styles from "@/styles/components/login_and_signup_page/Login.module.scss";
import Head from "next/head";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import supabase from '@/lib/db/supabase';
import { useAuth } from '@/lib/hooks/AuthHook';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const LoginWithSupa = async (username, password) => {
    const res = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });

    if (res.error) {
      console.log("err");
      // console.log(res.error.message);
    }

    if (res.data.user?.aud === 'authenticated') {
      router.push("/");
    }
  };

  useEffect(() => {
    const CheckLogin = async () => {
      const ses = await supabase.auth.getSession();
      if (ses.data.session) {
        router.push('/dashboard');
      }
    };
    CheckLogin();
    setLoading(false);
  }, [supabase]);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

  if (loading) {
    return (<>...Loading</>)
  }

  return (
    <>
      <Head>
        <title>Title.ai</title>
        <meta name="description" content="AI based legal assistant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.login}>
        <div className={styles.login_container}>
          <div className={styles.login_card_wrapper}>
            <div>
              <span className={styles.span_heading}>Login</span>
            </div>
            <div className={styles.login_ele_head}>Email</div>
            <input
              className={styles.input_box}
              placeholder="Enter email..."
              required
              type="email"
            // value={email}
            // onChange={handleEmailChange}
            />
            <div className={styles.login_ele_head}>Password</div>
            <input
              className={styles.input_box}
              placeholder="Enter password.."
              required
              type="password"
            // value={password}
            // onChange={handlePasswordChange}
            />

            {/* <div className={styles.messages} id="message">{message}</div> */}

            <form
              className={styles.form}
            // onSubmit={handleSignIn}
            >
              <button className={styles.submit_button} type="submit">
                Submit
              </button>
            </form>
            <div className={styles.login_text}>
              Don't have an account?
              <span className={styles.login_link}>
                <Link href="/signup/"> Sign up</Link>
              </span>
            </div>
            <div className={styles.additional_options}>
              Sign up with{" "}
              <button onClick={signInWithGoogle} className={styles.google_button}>google</button>
            </div>
          </div>
          <div className={styles.loginImage}>
            <Image src={logo} alt="logo" layout="responsive" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;