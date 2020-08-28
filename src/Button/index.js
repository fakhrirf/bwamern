import React from 'react'
import { Link} from 'react-router-dom'
import propTypes from 'prop-types'

export default function button(props) {
    const className = [props.className]
        if(props.isPrimary) className.push("btn-primary")
        if(props.isLarge) className.push("btn-lg")
        if(props.isSamll) className.push("btn-sm")
        if(props.isBlock) className.push("btn-block")
        if(props.hasShadow) className.push("btn-shadow")      
    
    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    if(props.isDisabled || props.isLoading){
        if(props.isDisabled) className.push("disabled")
    return ( 
        <span className = {className.join(" ")} style={props.style}>
        {
            props.isLoading ? (
            <> 
                <span className="spinner-border spinner-border-sm mx-5"></span> 
                <span className="sr-only">Loading...</span>
            </>
            ) : ( props.children
        )}
    </span> 
    );}

    if (props.types === "link"){
        if(props.isExternal){
            return (
                <a href={props.href} 
                className = {className.join(" ")} 
                style={props.style} 
                target={props.target === "_blank" ? "_blank": undefined} 
                rel= {props.target ==="_black" ? "noopener noreferrer" : undefined}
            > 
                {props.children}
            </a>
            )
        } else {
            return (
                <link href={props.href} 
                className = {className.join(" ")} 
                style={props.style} 
                onClick={onclick}>
                {props.children}
                </link>
            )
        }
    }
    return <button className = {className.join(" ")} 
    style={props.style} 
    onClick={onclick}
    >
        {props.children}
    </button>


}


button.propTypes = {
    types: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    target: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isExternal: propTypes.bool,
    isLoading: propTypes.bool,
    target: propTypes.bool,
    isSamll: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool
}