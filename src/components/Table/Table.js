import React from "react"


export default function Table(props) {
    let style = { border: "1px solid black" }
    return (
        <div style={{ marginLeft: '30%' }}>
            {props?.newArr.length > 0 ? <table>
                <thead>
                    <tr>
                        {props.headings.map((item,i) => {
                            return <td key={i} style={style}>
                                <h3>{item}</h3>
                            </td>
                        })}
                    </tr>
                </thead>
                <tbody>
                     {props.newArr.map((item, i) => {
                        return props.view === "users" ? <tr key={i}>
                            <td style={style}>{item.username}</td>
                            <td style={style}>{item.name}</td>
                            <td style={style}>{item.email}</td>
                            <td style={style}>{item.website}</td>
                     <td style={style}>{item.company?.name}<br/>{item.address?.suite}<br/>{item.address?.street + item.address?.city}<br/>{item.address?.zipcode}</td>
                            </tr> : <tr key={i}>
                                <td style={{...style,cursor:"pointer"}} onClick={(e) => props.onChangeView(e, item.id,"post",item.title)}>{item.title}</td>
                                <td style={style}><a href="#" onClick={(e) => props.onChangeView(e, item.id,"username","")}>{item.username}</a></td>
                            </tr>
                    })}
                </tbody>
            </table> : <div style={{ marginRight: '40%' }}><h3>No Results Found!!</h3></div>}
        </div>
    )
}