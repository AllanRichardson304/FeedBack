import { useState } from "react";
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./data/Feedbackdata";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
function App() {
  const [feedback , setFeedback] = useState (FeedbackData);
  const deleteFeedback = (id) =>{
  if(window.confirm('Are you sure you want to delete?')){
    setFeedback(feedback.filter((item)=> item.id !== id))
  }
  }
  return (
    <>
    <Header/>
     <div className="container">
     {/* <FeedbackItem/> */}
     <FeedbackStats feedback={feedback}/>
     <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
     </div>
    
    </>
  );
}
export default App;