import React from "react";
import Faker from "faker";


const CommentDetail = (props)=>{

    return (

    <div className="comment">

        <a className="avatar">
            <img src= {props.image} />
        </a>

        <div class="content">

                <a class="author">{props.author}</a>
        
                <div className="metadata" >
                    <span className="date">{props.time}</span>
            
                </div>
            
                <div class="text">
                    {props.content}
                </div>
            
        </div>
    </div>


    )

}

export default CommentDetail;

