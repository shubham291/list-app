import React, { useState, useEffect } from "react";
import get from "../config/communication"
import Home from "./HomePage/Home"
import User from "./Users/User";
import Post from "./Posts/Post"

export default function MainComponent() {
    let initialState = {
        posts: [],
        comments: [],
        users: [],
        newArr: [],
        view: "allPost",
        replicaArr: [],
        postArr: [],
        postData: {},
        individualUser: {}
    }
    const [state, setState] = useState(initialState)
    useEffect(() => {
        storeAllData()
    }, [])
    const storeAllData = async () => {
        let posts = await get("posts")
        let users = await get("users")
        let comments = await get("comments")
        setState({ ...state, posts, users, comments })
    }
    useEffect(() => {
        expensiveComputation()
    }, [state.posts])
    const expensiveComputation = () => {
        let newArr = []
        state.posts.map((el) => {
            state.users.find((elem) => {
                if (elem.id === el.userId) {
                    newArr.push({ title: el.title, username: elem.username, id: elem.id })
                }
            })
        })
        setState({ ...state, newArr, replicaArr: newArr })
    }

    const onChangeView = (e, i, name, title) => {
        e.preventDefault()
        if (state.view === "allPost") {
            if (name === "username") {
                let user = state.users.find((el) => {
                    if (el.id === i) {
                        return el
                    }
                })
                setState({ ...state, view: "users", individualUser: [user] })
            }
            if (name === "post") {
                let postData = state.newArr.find((el) => {
                    if (el.title === title) {
                        return el
                    }
                })
                let post = []
                state.comments.find((el) => {
                    if (el.postId === i) {
                        post = [...post, el]
                    }
                })
                setState({ ...state, view: "Post", postArr: post, postData })
            }
        }
        else if (state.view === "users" || state.view === "Post") {
            setState({ ...state, view: "allPost",newArr : state.replicaArr })
        }

    }

    const onSearch = (e) => {
        let value = e.target.value
        if (value && state.newArr.length) {
            let filteredArr = state.newArr.filter((el) => {
                if (el.username.toLowerCase().includes(value.toLowerCase())) {
                    return el
                }
            })
            setState({ ...state, newArr: filteredArr })
        } else if (value === "") {
            setState({ ...state, newArr: state.replicaArr })
        }
    }

    const props = {
        newArr: state.newArr,
        onChangeView: onChangeView,
        view: state.view
    }
    return (
        <div>
            {state.view === "allPost" ? <Home {...props} onSearch={onSearch} /> : state.view === "Post" ? <Post {...props} postArr={state.postArr} postData={state.postData} /> : <User {...props} individualUser={state.individualUser}/>}
        </div>
    )
}