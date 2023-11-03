import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/components/footer/footer.module.scss";
import "../_app";
import logo from "@/assets/images/logo.png";
function FooterHome() {
    const backToTopRef = useRef(null);
    return (
        <>
            <section className={styles.footer}>
                <div className={styles.name}>
                    <h1>
                        Title.ai
                    </h1>
                    <p>
                        A one line tag line a bit longer hehe
                    </p>
                    <p>
                        Lorem ipsum dolor sit ame
                    </p>
                </div>
                <div className={styles.info}>
                </div>
            </section>
        </>
    );
}

export default FooterHome;
