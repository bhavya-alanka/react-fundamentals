function Profile(){
const name="bhavya"
const age=18
const isStudent=true
   

    return(
        <div>
            <p>my name: {name}</p>
            <p>age: {age}</p>     
            <p>{isStudent===true?"I am a student":"I am not a student"}</p>   </div>
    )
}
export default Profile