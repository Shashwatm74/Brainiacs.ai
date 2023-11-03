import React, { useState, useEffect, useRef } from "react";
import styles from "styles/components/dashboard/dashboard.module.scss";
import Image from 'next/image';
import { useAuth } from "@/lib/hooks/AuthHook";

function Dashboard() {
    return (
        <>
            <useAuth>
                    <section className={styles.navbar}>
                    <h1 id={styles.logo}>TravelEase</h1>
                    
                    <div > 
                         <ul className={styles.listt}>
                            <li>Home</li>
                            <li>Cart</li>
                            <li>Contact us</li>
                         </ul>
                    </div>
                    <div className={styles.sub}>
                        <ul className={styles.list2}>
                            <li><button className={styles.sign}>signup</button></li>
                            <li><button className={styles.sign}>signout</button></li>
                        </ul>
                    </div>
            
                </section>
                <section className={styles.second}>
                    <div className={styles.trip}>
                        <div>
                            <p>Your Trip</p>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.row1}>
                            <div className={styles.box}>
                                <h5>hello</h5>
                            </div>
                            <div className={styles.box}>
                                <h5>hello</h5>
                            </div>
                            <div className={styles.box}>
                                <h5>hello</h5>
                            </div>
                            </div>
                            <div className={styles.row1}>
                            <div className={styles.box}>
                                <h5>hello</h5>
                            </div>
                            <div className={styles.box}>
                                <h5>hello</h5>
                            </div>
                            <div className={styles.box}>
                                <h5>hello</h5>
                            </div>
                            </div>
                            <div className={styles.search}>
                                <button className={styles.srch}>Search</button>
                            </div>
                        </div>

                    </div>
                    <div className={styles.image}>
                    <img src="assets/travel.png" alt="Travel Image" />

                    </div>
                </section>
                <section className={styles.recom} >
                    <div className={styles.heading}>Recommended</div>
                    <div className={styles.product}>
                    <Image
                        src={Image}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                
                    <div className={styles.description}>
                        <h3 className={styles.d1}>Windflower hall</h3>
                        <p className={styles.d2}>Chharabra, Shimla, Himachal Pradesh</p>
                        <div className={styles.boxflex}>
                        <div><p className={styles.d3}>Starting from ₹ 4,000</p></div>
                        <p>4.3</p>
                        <p className={styles.d4}>Rating</p>
                        </div>
                
                    </div>
                    
                </div>
                </section>
                
            </useAuth>
        </>
    );
}

export default Dashboard;
