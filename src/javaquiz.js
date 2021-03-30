import React, { useState } from "react";
import { PostUserData } from "./api";

function Javaquiz(){
    const [question,setQuestion] =useState("")
    const [opt1,setOpt1] = useState("")
    const [opt2,setOpt2] = useState("")
    const [opt3,setOpt3] = useState("")
    const [opt4,setOpt4] = useState("")
    const [answer1,setAnswer1] = useState()
    const [answer2,setAnswer2] = useState()
    const [answer3,setAnswer3] = useState()
    const [answer4,setAnswer4] = useState()
    let Ques =[{questionText:question,answerOptions:[{option:opt1,isCorrect:answer1},{option:opt2,isCorrect:answer2},{option:opt3,isCorrect:answer3},{option:opt4,isCorrect:answer4}]}]
    return(
        <>
        <form onSubmit ={async(e)=>{
        e.preventDefault()
        await PostUserData(Ques)
        console.log(Ques)
        setQuestion("")
        setOpt1("")
        setOpt2("")
        setOpt3("")
        setOpt4("")
        setAnswer1("")
        setAnswer2("")
        setAnswer3("")
        setAnswer4("")
        }}>
        <div className="Container">
        <div className="row">
          <div className="col-lg-24">
            <label>Question</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Question"
              value ={question} onChange={(e)=>
            setQuestion(e.target.value)}
            /> <br/>
            <label>Option1</label>
            <input
              className="form-control"
              type="text"
              placeholder="Option1"
              value ={opt1} onChange={(e)=>
                setOpt1(e.target.value)}
            />
            <label>IsCorrect</label>
            <input
              className="form-control"
              type="text"
              placeholder="true/false"
              value ={answer1} onChange={(e)=>
                setAnswer1(e.target.value)}
            />
            <br/>
            <label>Option2</label>
            <input
              className="form-control"
              type="text"
              placeholder="Option2"
              value ={opt2} onChange={(e)=>
                setOpt2(e.target.value)}
            /><label>IsCorrect</label>
            <input
              className="form-control"
              type="text"
              placeholder="true/false"
              value ={answer2} onChange={(e)=>
                setAnswer2(e.target.value)}
            />
            <br/>
            <label>Option3</label>
            <input
              className="form-control"
              type="text"
              placeholder="Option3"
              value ={opt3} onChange={(e)=>
                setOpt3(e.target.value)}
            /><label>IsCorrect</label>
            <input
              className="form-control"
              type="text"
              placeholder="true/false"
              value ={answer3} onChange={(e)=>
                setAnswer3(e.target.value)}
            />
            <br/>
            <label>Option4</label>
            <input
              className="form-control"
              type="text"
              placeholder="Option4"
              value ={opt4} onChange={(e)=>
                setOpt4(e.target.value)}
            /><label>IsCorrect</label>
            <input
              className="form-control"
              type="text"
              placeholder="true/false"
              value ={answer4} onChange={(e)=>
                setAnswer4(e.target.value)}
            />
            <br/>
            
          </div>
        </div><br/>
        <div className ="col-lg-24">
            <button className="btn btn-warning">Submit</button>

        </div>
      </div>
      </form>
        </>
    )
}
export default Javaquiz;