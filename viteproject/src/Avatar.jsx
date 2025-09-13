import "./Avatar.css"

 function Avatar(id)
{
   return(


<div className="container">
            <p className="name"> name={id.name} </p>
            <p  className="rollNo"> rollNO:{id.rollNo}</p>
            <p className="course"> course:{id.course}</p>
            <p className="bloodGroup"> bloodGroup={id.bloodGroup}</p> 
            <p className="dob">dob={id.dob}</p>           
                </div>
   )

}
export default Avatar