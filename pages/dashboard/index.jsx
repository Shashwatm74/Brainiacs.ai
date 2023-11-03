import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "@/lib/hooks/AuthHook";
function Dashboard() {
    return (
        <>
            <useAuth>
                <h1>DASHBOARD</h1>
            </useAuth>
        </>
    );
}

export default Dashboard;
