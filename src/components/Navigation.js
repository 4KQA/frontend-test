// Navigation combined NavTopBar.js & NavMenuBar.js
import { useState, useEffect } from "react";
import NavMenuBar from "./NavMenuBar";
import NavTopBar from "./NavTopBar";

export default function Navigation() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Page start, both scroll values are 0
        let oldValue = 0;
        let newValue = 0;
        
        // Listen to scroll
        window.addEventListener('scroll', function (e) {
    
          // The new value is the amount scrolled on the y-axis
          newValue = window.pageYOffset;
    
          // Subtract and update the state
          if (oldValue - newValue < 0) {
            setShow(false);
          } else if (oldValue - newValue > 0) {
            setShow(true);
          }
    
          // And update the values again
          oldValue = newValue;
        });
      }, []);

    return (
        <nav>
            <NavTopBar />
            <NavMenuBar show={show}/>          
        </nav>
    );
}