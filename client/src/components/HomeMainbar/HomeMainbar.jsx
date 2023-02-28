import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  
  const location=useLocation()
  const user = null;
  const navigate = useNavigate()

  const questionsList = useSelector(state => state.questionsReducer)
 // console.log(questionsList)

  // var questionsList = [{
  //   _id:1,
  //   Upvotes:3,
  //   downVotes:2,
  //   noOfAnswers:4,
  //   questionTitle: "Whats is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java","node js", "react js", "mongoose"],
  //   userPosted: "mano",
  //   userId:1,
  //   askedOn: "jan1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"kumar",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // },{
  //   _id:2,
  //   Upvotes:3,
  //   downVotes:2,
  //   noOfAnswers:0,
  //   questionTitle: "Whats is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "mongoose", "python"],
  //   userPosted: "mano",
  //   userId:1,
  //   askedOn: "jan1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"kumar",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // },{
  //   _id:3,
  //   Upvotes:3,
  //   downVotes:2,
  //   noOfAnswers:2,
  //   questionTitle: "Whats is a function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java","node js", "react js", "mongoose"],
  //   userPosted: "mano",
  //   userId:1,
  //   askedOn: "jan1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:"kumar",
  //     answeredOn:"jan 2",
  //     userId:2
  //   }]
  // }]

    const checkAuth =() => {
      if(user=== 1){
        alert("Login or Signup to as a question")
        navigate('/Auth')
      }else{
        navigate('/AskQuestion')
      }
    }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>

        }
        <button  onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
          <p>{questionsList.data.length} questions</p>
          <QuestionList questionsList={questionsList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
