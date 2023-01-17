import React from 'react'
import {useParams} from 'react-router-dom'

const Chapter = () => {
    const {NewchapterId} =useParams()
    return (
        <div>
           Hello world 
        </div>
    )
}

export default Chapter