import React from "react";
import {debounce} from "lodash";

const Debounce = () => {
    const debounceFunc = debounce((e) => {
        console.log(e.target.value)
    }, 1000)

    return(
        <>
            <h1>검색어 입력</h1>
            <input type="text" onChange={(e) => debounceFunc(e)}/>
        </>
    )
}
export default Debounce;