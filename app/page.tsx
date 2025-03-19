"use client"
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, useLocation,} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor  from "../hooks/AnimatedCursor";
import "./app.css";


function _ScrollToTop(props: { children: any; }) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="cursor__dot">
                <AnimatedCursor
                    innerSize={15}
                    outerSize={15}
                    color="255, 255 ,255"
                    outerAlpha={0.4}
                    innerScale={0.7}
                    outerScale={5} outerStyle={2} innerStyle={5} trailingSpeed={1}
                    clickables={10}
                />
            </div>
            <ScrollToTop>
                <Headermain />
                <AppRoutes />
            </ScrollToTop>
        </Router>
    );
}