import React from 'react'

export default function Card(props) {
    return (
        <div className={'card'}>
            <p>{props.deck}</p>
        </div>
    )
}
