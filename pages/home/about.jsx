/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import styles from "@/styles/components/aboutpage/About.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import aboutimg1 from "@/assets/images/aboutimg1.jpeg";
import aboutimg2 from "@/assets/images/aboutimg2.jpeg";
import aboutimg3 from "@/assets/images/aboutimg3.jpeg";
import aboutimg4 from "@/assets/images/aboutimg4.jpeg";

gsap.registerPlugin(ScrollTrigger);

function About() {
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

            Cities Not to be Missed

          </div>
          <div ref={contRef} className={styles.content}>
            Discover incredible accommodation options in the heart of the city

          </div>
          <div className={styles.card1}>
            <h1 className={styles.abouttext1}>
              hello
            </h1>
            <p className={styles.aboutpara1}>
              anything you wanna put here
            </p>
          </div>
          <div className={styles.card2}>
            <h1 className={styles.abouttext2}>
              hello
            </h1>
            <p className={styles.aboutpara2}>
              anything you wanna put here
            </p>
          </div>
          <div className={styles.card3}>
            <h1 className={styles.abouttext1}>
              hello
            </h1>
            <p className={styles.aboutpara1}>
              anything you wanna put here
            </p>
          </div>
          <div className={styles.card4}>
            <h1 className={styles.abouttext1}>
              hello
            </h1>
            <p className={styles.aboutpara1}>
              anything you wanna put here
            </p>
          </div>
          <div className={styles.card5}>
            <h1 className={styles.abouttext1}>
              hello
            </h1>
            <p className={styles.aboutpara1}>
              anything you wanna put here
            </p>
          </div>
          <div className={styles.card6}>
            <h1 className={styles.abouttext1}>
              hello
            </h1>
            <p className={styles.aboutpara1}>
              anything you wanna put here
            </p>
          </div>
        </div>

      </section>
    </>
  );
}

export default About;
