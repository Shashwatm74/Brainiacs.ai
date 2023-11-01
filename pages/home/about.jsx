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
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);



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

  useEffect(() => {
    gsap.fromTo(
      card1Ref.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card1Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      card2Ref.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card2Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      card3Ref.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card3Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      card4Ref.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card4Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      card5Ref.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        delay: 0,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          // markers: true, //can be used to debug
          trigger: card5Ref.current,
          start: "top center+=90",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);



  return (
    <>
      <section data-scroll-section className={styles.about} id="about">
        <div className={styles.sectionWrapper}>
          <div ref={headingRef} className={styles.heading}>

            About Heading

          </div>
          <div ref={contRef} className={styles.content}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore natus animi voluptatibus dicta beatae hic dignissimos quia
            ut distinctio autem explicabo omnis soluta cumque ipsa earum deleniti, reprehenderit voluptates enim. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Omnis cupiditate quod quos ducimus? Praesentium iusto quaerat quas quisquam numquam aliquam dolore?
            Et, reiciendis fuga quae odit natus officiis voluptas inventore.


          </div>
          {/* /////////////////////////////////////////// */}
          <Link ref={card1Ref} className={styles.linkcard1} href="/" replace>
            <div className={styles.card1} style={{ opacity: 1, visibility: "visible" }}>
              Function1
            </div>
            <Image className={styles.aboutimg} src={aboutimg1} alt="aboutimg1" height={1000} />
          </Link>

          {/* /////////////////////////////////////////// */}
          <Link ref={card2Ref} className={styles.linkcard2} href="/" replace>
            <div className={styles.card2} style={{ opacity: 1, visibility: "visible" }}>
              Function2
            </div>
            <Image className={styles.aboutimg} src={aboutimg2} alt="aboutimg1" height={1000} />
          </Link>
          {/* /////////////////////////////////////////// */}
          <Link ref={card3Ref} className={styles.linkcard3} href="/" replace>
            <div className={styles.card3} style={{ opacity: 1, visibility: "visible" }}>
              Function3
            </div>
            <Image className={styles.aboutimg} src={aboutimg3} alt="aboutimg1" height={1000} />
          </Link>

          {/* /////////////////////////////////////////// */}
          <Link ref={card4Ref} className={styles.linkcard4} href="/" replace>
            <div className={styles.card4} style={{ opacity: 1, visibility: "visible" }}>
              Function4
            </div>
            <Image className={styles.aboutimg} src={aboutimg4} alt="aboutimg1" height={1000} />
          </Link>
          {/* /////////////////////////////////////////// */}

          {/* <Link className={styles.card5} href="/document_review" replace>
            <div ref={card5Ref} className={styles.card5}>
              Document Review
            </div>
          </Link>
          /////////////////////////////////////////// */}

        </div>

      </section>
    </>
  );
}

export default About;
