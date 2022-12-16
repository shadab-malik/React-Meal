import React from "react";

const VerticalFlex=(props)=>{

    return (<div className={"container "+(props.className)}>
        {props.children}
    </div>);
};

export default VerticalFlex;