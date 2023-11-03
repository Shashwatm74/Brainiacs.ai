/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import styles from "@/styles/components/contactpage/Contact.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
    // const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const contRef = useRef(null);
    // const card1Ref = useRef(null);
    // const card2Ref = useRef(null);
    // const card3Ref = useRef(null);
    // const card4Ref = useRef(null);
    // const card5Ref = useRef(null);



    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            {
                autoAlpha: 0,
                y: 10,
            },
            {
                autoAlpha: 1,
                duration: 0.5,
                ease: "power2.inOut",
                y: 0,
                scrollTrigger: {
                    // markers: true, //can be used to debug
                    trigger: headingRef.current,
                    start: "top center+=100",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);
    useEffect(() => {
        gsap.fromTo(
            contRef.current,
            {
                autoAlpha: 0,
                y: 10,
            },
            {
                autoAlpha: 1,
                duration: 0.5,
                ease: "power2.inOut",
                y: 0,
                scrollTrigger: {
                    // markers: true, //can be used to debug
                    trigger: contRef.current,
                    start: "top center+=95",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    // useEffect(() => {
    //   gsap.fromTo(
    //     card1Ref.current,
    //     {
    //       autoAlpha: 0,
    //       y: 10,
    //     },
    //     {
    //       autoAlpha: 1,
    //       duration: 0.5,
    //       delay: 0,
    //       ease: "power2.inOut",
    //       y: 0,
    //       scrollTrigger: {
    //         // markers: true, //can be used to debug
    //         trigger: card1Ref.current,
    //         start: "top center+=90",
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // }, []);
    // useEffect(() => {
    //   gsap.fromTo(
    //     card2Ref.current,
    //     {
    //       autoAlpha: 0,
    //       y: 10,
    //     },
    //     {
    //       autoAlpha: 1,
    //       duration: 0.5,
    //       delay: 0,
    //       ease: "power2.inOut",
    //       y: 0,
    //       scrollTrigger: {
    //         // markers: true, //can be used to debug
    //         trigger: card2Ref.current,
    //         start: "top center+=90",
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // }, []);
    // useEffect(() => {
    //   gsap.fromTo(
    //     card3Ref.current,
    //     {
    //       autoAlpha: 0,
    //       y: 10,
    //     },
    //     {
    //       autoAlpha: 1,
    //       duration: 0.5,
    //       delay: 0,
    //       ease: "power2.inOut",
    //       y: 0,
    //       scrollTrigger: {
    //         // markers: true, //can be used to debug
    //         trigger: card3Ref.current,
    //         start: "top center+=90",
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // }, []);
    // useEffect(() => {
    //   gsap.fromTo(
    //     card4Ref.current,
    //     {
    //       autoAlpha: 0,
    //       y: 10,
    //     },
    //     {
    //       autoAlpha: 1,
    //       duration: 0.5,
    //       delay: 0,
    //       ease: "power2.inOut",
    //       y: 0,
    //       scrollTrigger: {
    //         // markers: true, //can be used to debug
    //         trigger: card4Ref.current,
    //         start: "top center+=90",
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // }, []);
    // useEffect(() => {
    //   gsap.fromTo(
    //     card5Ref.current,
    //     {
    //       autoAlpha: 0,
    //       y: 10,
    //     },
    //     {
    //       autoAlpha: 1,
    //       duration: 0.5,
    //       delay: 0,
    //       ease: "power2.inOut",
    //       y: 0,
    //       scrollTrigger: {
    //         // markers: true, //can be used to debug
    //         trigger: card5Ref.current,
    //         start: "top center+=90",
    //         toggleActions: "play none none reverse",
    //       },
    //     }
    //   );
    // }, []);



    return (
        <>
            <section data-scroll-section className={styles.about} id="about">
                <div className={styles.sectionWrapper}>
                    <div ref={headingRef} className={styles.heading}>

                        SPECIAL FEATURES

                    </div>
                    <div ref={contRef} className={styles.content}>
                        See some benefits of joining us

                    </div>
                    <div className={styles.point1}>
                        <div className={styles.pointin1}>
                            <p className={styles.num}>
                                01
                            </p>
                        </div>
                        <h1 className={styles.head}>
                            Heading one
                        </h1>
                        <p className={styles.para}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laboriosam deleniti explicabo dolorem quos magnam voluptas quibusdam debitis minima ut.
                        </p>
                    </div>
                    <div className={styles.point2}>
                        <div className={styles.pointin2}>
                            <p className={styles.num}>
                                02
                            </p>
                        </div>
                        <h1 className={styles.head}>
                            Heading two
                        </h1>
                        <p className={styles.para}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laboriosam deleniti explicabo dolorem quos magnam voluptas quibusdam debitis minima ut.
                        </p>
                    </div>
                    <div className={styles.point3}>
                        <div className={styles.pointin3}>
                            <p className={styles.num}>
                                03
                            </p>
                        </div>
                        <h1 className={styles.head}>
                            Heading three
                        </h1>
                        <p className={styles.para}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum laboriosam deleniti explicabo dolorem quos magnam voluptas quibusdam debitis minima ut.
                        </p>
                    </div>
                    <div className={styles.card5}>
                    </div>
                    <div className={styles.card6}>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Contact;
