import React, { useState, useEffect, useRef } from "react";
import styles from "styles/components/dashboard/dashboard.module.scss";
import { useAuth } from "@/lib/hooks/AuthHook";
function Dashboard() {
    return (
        <>
            <useAuth>
                <section className={styles.navbar} >
                    <h1>travelEase</h1>
                    <div className={styles.flexele}> 
                         <h3>Home</h3>
                         <h3>Cart</h3>
                         <h3>Contact us</h3>
                    </div>
                </section>
            </useAuth>
        </>
    );
}

export default Dashboard;
