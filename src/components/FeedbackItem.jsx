// import { useState } from "react"
import Card from "./shared/Card"
import { FaTimes, FaEdit} from 'react-icons/fa'
import PropType from 'prop-types'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackItem({item}) {
  const {deleteFeedback , editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="edit" onClick={()=>editFeedback(item)}> <FaEdit color="purple"/> </button>
      <button onClick={()=>deleteFeedback(item.id)} className="close"> <FaTimes color="purple"/> </button>
      <div className="text-display">
      {item.text} 
      </div>
    </Card>
  )
}
FeedbackItem.PropType ={
  item: PropType.object.isRequired,
}
export default FeedbackItem
