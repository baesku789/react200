import React from "react";
import cookie from "react-cookies";

const CookieLoad = () => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save('userid', 'yechan2',{
        path:'/',
        expires,
        secure:true,
        httpOnly:true,
    })
    return (
        <h3>react-cookies Load</h3>
    )
}
export default CookieLoad;