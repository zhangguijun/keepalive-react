import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const List = () => {
    let users = new Array(100).fill(0)
    return (
        <ul style={{
            height: '200px',
            overflow: 'scroll'
        }}>
            {
                users.map((user, index) => {
                    return <li key={index}>
                        <Link to="/">{index}</Link>
                    </li>
                })
            }
        </ul>
    )
}

export default List;