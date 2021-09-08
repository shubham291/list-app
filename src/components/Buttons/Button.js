import React from "react"

export default function Button(props){
    return (
        <div>
            <button style={{height:"50px",width:'100px',backgroundColor:"black",color:"white",fontSize:"25px",marginTop: "50px",borderRadius:"5px",marginLeft:"20px"}} onClick={props.onChangeView}>BACK</button>
        </div>
    )
}