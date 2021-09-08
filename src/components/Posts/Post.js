import React from "react"
import Button from "../Buttons/Button"

export default function Post({onChangeView,postData,postArr }) {
    let style = {
        wrapper: {
            width: "auto",
            height: "auto",
            border: "7px dashed black",
            marginTop: "1%"
        },
        ptag : {
            color:"grey"
        },
        button : {
            marginLeft : "5%"
        }
    }
    let count= 1;
    console.log(postArr,'postArr')
    return (
        <div >
            <div style={style.wrapper}>
                <div>
                    <p style={{color:"green"}}><h3>Title: {postData.title}</h3></p>
                    <p style={{color:"orange"}}><h3>User Name Of Creator: {postData.username}</h3></p>
                    <div>
                    <p style={{color:"purple"}}><h3>Comments</h3></p>
                    {postArr?.length ? postArr.map((item,i)=>{
                        return <><p style={style.ptag}><h3>{`${count++}) `} Subject: {item.name}</h3></p>
                        <p style={style.ptag}><h3>Email : {item.email}</h3></p>
                        <p style={style.ptag}><h3>Body : {item.body}</h3></p></>
                    }) : <p><h2>No Comments Found!!</h2></p>}
                    </div>
                </div>
            </div>
            <div style={style.button}><Button onChangeView={onChangeView} /></div>
        </div>
    )
}