import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import Ratingselect from "./Ratingselect"
function FeedbackForm({handleAdd}) {
    const[text , setText] = useState('')
    const[rating , setRating] = useState('')
    const[btnDisabled , setBtnDisabled] = useState(true)
    const[message , setMessage] = useState('')
    const handelTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

   const handleSubmit = (e)=>{
    e.preventDefault()
    if(text.trim().length > 10){
        const newFeedback = {
            text,
            rating
        }
        handleAdd(newFeedback);
        setText('')
    }
   }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            {/* @todo- rating select component */}
            <Ratingselect select={(rating)=> setRating(rating)} />
            <div className="input-group">
          <input onChange={handelTextChange} type="text" placeholder="Write a review" value={text} />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
        </form>
        </Card>
      
  )
}

export default FeedbackForm