import React,{useState,useEffect} from "react";
import { GetUserData } from "./api";
import Javaquiz from "./javaquiz"

function TakeQuiz()
{
    let [userData,setuserData] = useState([])

    useEffect(async (e) => {
        let questions = await GetUserData();
        setuserData(...userData,questions.data)
        
    },[])

  console.log(userData)

  


    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < userData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

return(
    <>
    <div className='app'>
		{currentQuestion}
		{userData[currentQuestion] && userData[currentQuestion].questionText}
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {userData.length}
				</div>
			) : (
				<>
					{/* <div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{userData.length}
						</div>
						<div className='question-text'>{userData[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{userData[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.option}</button>
						))}
					</div> */}
				</>
			)}
		</div>
   

    </>

)
}

export default TakeQuiz