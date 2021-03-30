import React from "react";
import { Link } from "react-router-dom";


function Home(){
    return(
        <>
        <Link to="./javaquiz"><button className="btn btn-danger" >Create Quiz</button></Link>
        {
            <p>---------------------</p>
            
        }


        <Link to="./takequiz"><button className="btn btn-primary" >Take Quiz</button></Link>
    
        </>
    )
}

export default Home;