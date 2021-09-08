import React from "react"
import Table from "../Table/Table"
import Button from "../Buttons/Button"

export default function User(props) {
    return(
        <div>
            <div><h3>User</h3></div>
            <Table headings={["Username","Full Name","Email","Website","Company Details"]} newArr={props.individualUser} view={props.view}/>
            <Button onChangeView={props.onChangeView}/>
        </div>
    )
}