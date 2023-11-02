'use client';
import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/nav.module.scss';
import navtoggle from '@/components/navtoggle.js';
import supabase from '@/lib/db/supabase';
import { useAuth } from '@/lib/hooks/AuthHook';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Nav = () => {
    const signOut = async () => {
        await supabase.auth.signOut()
    }
    return (
        <>

            <header className={styles.header} id="header">
                <div className={styles.secondaryNavContainer}>


                    <Link className={styles.logoLink} href="/" replace >
                        <p className={styles.logo} id="navLogo">Title.ai</p>
                    </Link>


                    <nav className={styles.nav2} id='SecondaryNav' data-visible="false">
                        <ul >
                            {/* this part of the navbar activates before the user logs in the website  */}
                            <button className={styles.a} onClick={signOut} >
                                <h1>
                                    Sign out
                                </h1>
                            </button>

                            <Link className={styles.a} href="/login" replace onClick={() => { document.getElementById("SecondaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle2")?.setAttribute("data-visible", "false"); }} >
                                <li id="listele2" className={styles.listElement}>
                                    Login
                                </li>
                            </Link>
                            {/* this part of the navbar activates when the user logs in the website  */}

                            <Link className={styles.a} href="/" replace onClick={() => {
                                document.getElementById("SecondaryNav").setAttribute("data-visible", "false");
                                document.getElementById("NavToggle2")?.setAttribute("data-visible", "false");
                            }} >
                                <li id="listele7" className={styles.listElementonlogin}>
                                    Sign out
                                </li>
                            </Link>
                        </ul>

                    </nav>
                </div>

                {/* <nav className={styles.nav} id='PrimaryNav' data-visible="false">
                    <ul>
                        <Link className={styles.a} href="/login" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }}>
                            <li className={styles.listElement}>
                                Login
                            </li>
                        </Link>
                        <Link className={styles.a} href="/dashboard/administrator" replace onClick={() => { document.getElementById("PrimaryNav").setAttribute("data-visible", "false"); document.getElementById("NavToggle").setAttribute("data-visible", "false"); }}>
                            <li className={styles.listElement}>
                                Dash
                            </li>
                        </Link>

                    </ul>
                </nav> */}
                {/* <button className={styles.navToggle2} id='NavToggle2' data-visible="false">
                    <div className={styles.menu}>
                        <Image id='menu' alt="menu" className={styles.menuImage} src={menuImage} />
                    </div>
                </button> */}

                {/* <button className={styles.navToggle} id='NavToggle' data-visible="false" login='false'>
                    <div className={styles.profilePic}>
                        <Image id='pfp' alt="profile picture" className={styles.pfp} src={pfp} />
                    </div>
                </button> */}


            </header >
            <script src={navtoggle} defer></script>
        </>
    )
}

export default Nav