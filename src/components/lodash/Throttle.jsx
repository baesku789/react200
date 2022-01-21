import React from "react";
import {throttle} from "lodash";

const Throttle = () => {
    const throttleFunc = throttle((e) => {
        console.log(e.target.value)
    }, 1000)
    return(
        <>
            <h1>검색어 입력</h1>
            <input type="text" onChange={(e) => throttleFunc(e)}/>
        </>
    )
}
export default Throttle;