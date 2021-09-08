import React from "react";

export default function Search(props){
    let style={
        height: "50px",
        width: "250px",
        borderRadius: "3px",
        marginTop: "20px",
        marginBottom: "20px",
        fontSize:"25px",
        padding: "5px"
    }
    return (
        <div>
            <div>
                <input type="text" placeholder="Search by Username" style={style} onChange={(e)=>props.onSearch(e)}></input>
            </div>
        </div>
    )
}