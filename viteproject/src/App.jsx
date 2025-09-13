
// // import Avatar from "./Avatar.jsx"
// import "./Avatar.css"
// import "./App.css"
// import BlogPost from "./BlogPost.jsx"

// function Avatar() {
//   const photo = "1.jpg"
//   const name = "A.SAI BHAVYA SRI"
//   const rollNo = "24VV1A0501"
//   const course = "B.TECH"
//   const bloodGroup = "O+"
//   const dob = "28/10/2006"
//   const products = [
//     {
//       productName: "product1",
//       price: 3000,
//       isAvailable: true
//     },
//     {
//       productName: "product2",
//       price: 2000,
//       isAvailable: false
//     },
//     {
//       productName: "product3",
//       price: 4000,
//       isAvailable: true
//     },
//   ]

// const Author = [
//   {
//     id:"1",
//     Author: "bhavya",
//     Title: "visual code",
//     Description: "all types of code"
//   },
//   {
//     id:"2",
//     Author: "sai",
//     Title: "google",
//     Description: "ai"

//   },
//   {
//     id:"3"   ,
//     Author: "sri",
//     Title: "jsx",
//     Description: "javascript extension"
//   }


// ]

// return (
//   <div className="com">
//     {/* < Avatar name={name} rollNo={rollNo} course={course} bloodGroup={bloodGroup} dob={dob} /> */}
//     {/* {
//       products.map((product) => (
//         < Productcard
//           productName={product.productName}
//           price={product.price}
//           isAvailable={product.isAvailable}
//         />

//       ))

//     } */}
//     {
//       Author.map((a) => (
//         <BlogPost
//         key={Author.id}
//           Author={a.Author}
//           Title={a.Title}
//           Description={a.Description}
//         />
//       ))
//     }
//   </div>
// )

// }
// export default Avatar
import "./App.css"
import { useState } from "react"
function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formData,setformData]=useState({
    email:"",
    password:""
  })
  const handleEmail = (event) => {
    setEmail(event.target.value)

  }
  const handlePassword = (event) => {
    setPassword(event.target.value)

  }
  const handleChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setformData(
      {
        ...formData,
        [event.taget.name]:event.target.value
      }
    )
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${formData.email} \npassword: ${formData.password}*\n you are logged in`);
  }

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
    console.log(count)
  }
  // const handleClick = (name) => {
  //   console.log("you clicked the button")
  //   alert("hello" + "" + name);

  // }

  // const handleChange = (event) => {
  //   console.log(event.target.name)
  //   console.log(event.target.value)
  // }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <form onSubmit={handleSubmit}>
        {/* <p>I am a Button</p> */}
        <input type="text" name="email" placeholder="enter your email"
          onChange={handleChange} />
        <input type="password" name="password"
          placeholder="enter your password"
          onChange={handleChange} />
        <button type="submit" >login</button>
      </form>

    </div>

  )
}

export default App