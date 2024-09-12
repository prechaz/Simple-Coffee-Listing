import React from 'react'
import {Mosaic} from 'react-loading-indicators'
import style from './loader.module.css'
function Loader() {
    return (
        <div className={style.loader}>
            <Mosaic color={["#BEE3CC", "#ED735D", "#FEF7EE", "#F6C768"]} />
        </div>
    )
}

export default Loader
