// import { useState } from "react"
import Card from "./shared/Card"
import { FaTimes } from 'react-icons/fa'
import PropType from 'prop-types'
function FeedbackItem({item , handleDelete}) {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of a feedback item')
//   const handelClick = () =>{
//     // setRating(10)
//     setRating((prev)=>{
//     console.log(prev)
//      return prev + 1;
//     }) 
//   }
// const handleClick = (id) =>{
//   console.log(id)
// }
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>handleDelete(item.id)} className="close"> <FaTimes color="purple"/> </button>
      <div className="text-display">
      {item.text} 
      </div>
      {/* <button onClick={handelClick}>Click</button> */} 
    </Card>
  )
}
FeedbackItem.PropType ={
  item: PropType.object.isRequired,
}
export default FeedbackItem
