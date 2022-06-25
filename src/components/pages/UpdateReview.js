import React, { useState } from "react";
import './UpdateReview.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

function UpdateReview(props) {
    const userStoreToken = useSelector(state => state.user.accessToken)
    const userStoreId = useSelector(state => state.user.userId)
    
    const [text, setText] = useState('')

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8000/api/review/${props.id}`,
            JSON.stringify({content: text}),
            {
                headers: {'Content-Type' : 'application/json',
                        'Authorization' : `Bearer ${userStoreToken}`},
            }
            )
            // console.log(response)
            // console.log(JSON.stringify(response?.data))
            
        } catch (err) {

        }
    }
  return (
    <div className="modal">
    <p className="close">
      &times;
    </p>
    <div className="header"> Update Review </div>
    <div className="content">
        <textarea 
            className="textupdate"
            onChange={(e) => setText(e.target.value)}
        >{props.text}</textarea>
    </div>
    <button className="btn-save" onClick={handleUpdate}>Save</button>
  </div>
  )
}

export default UpdateReview