import React, {useEffect} from "react";
import cookie from 'react-cookies'

const CookieSave = () => {
    useEffect(() => {
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 60);
        cookie.save('userid', 'yechan',{
            path: '/',
            expires,
            secure:true,
        })
        setTimeout(() => alert(cookie.load('userid'),), 100)
    },[])
    return (
        <h3>react-cookies Save</h3>
    )
}
export default CookieSave;