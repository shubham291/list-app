import React from "react"
import Search from "../Search/Search"
import Table from "../Table/Table";


export default function Home(props) {
    return (
        <div>
            <div><h1>All Posts</h1></div>
            <Search onSearch={props.onSearch} />
            <Table newArr={props.newArr} headings={["Title", "Username"]} onChangeView={props.onChangeView} view={props.view} />
        </div>
    )
}