import React from "react";
import ReactDOM from "react-dom";


const App = ()=>{

    return (
        <div>
        <p>
            hello world
        </p>
     </div>
        


    )

}

const Segment = ()=>{



    return(
        <div>
            <div className="ui placeholder segment">
                


            </div>


        </div>
       
    )
}
ReactDOM.render(<App />,document.querySelector('#root'))