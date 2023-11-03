import React, { useState, useEffect, useRef } from "react";
import styles from "styles/components/dashboard/dashboard.module.scss";
import { useAuth } from "@/lib/hooks/AuthHook";
function Dashboard() {
    return (
        <>
            <useAuth>
                <section classname={styles.mainsec}>
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
                        <h3>signup</h3>
                        <h3>signout</h3>
                    </div>
            
                </section>
                </section>
            </useAuth>
        </>
    );
}

export default Dashboard;
