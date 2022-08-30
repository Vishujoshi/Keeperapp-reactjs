import React from "react";

function Footer(){
    const day =new Date();
    const y =day.getFullYear();
    return <p className="footer">copyright @{y} Coded by Vishal</p>
}
export default Footer;