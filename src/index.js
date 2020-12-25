import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard"

const App = ()=>{
    return(
    
     <div className="ui container comments">

        <ApprovalCard>
             <CommentDetail author="imran" time = "yesterday 2PM" content="hello meow!" image = {Faker.image.avatar()}  />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Hossain" time = "today 4PM" content="that nice!" image = {Faker.image.avatar()}   />
        </ApprovalCard>
        <ApprovalCard>
              <CommentDetail author="shuvo" time = "tommorow 4PM" content="hew whats up!" image = {Faker.image.avatar()}   />
        </ApprovalCard>
       
     </div>
    )
}

ReactDOM.render(<App />,document.querySelector('#root'))