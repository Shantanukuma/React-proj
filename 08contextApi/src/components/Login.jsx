// import React, { useContext, useState } from "react";
// import UserContext from "../context/Usercontext";

// function Login() {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const {setUser} = useContext(UserContext)

//   const handleSubmit = (e) => {
//     console.log(e);
//     e.preventDefault();
//     setUser({userName, password})
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         required
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//       <input
//         type="password"
//         name=""
//         id=""
//         required
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSubmit} type="submit">
//         Submit
//       </button>
//     </div>
//   );
// }

// export default Login;

import React, { useContext, useState } from "react";
import UserContext from "../context/Usercontext";

const Login = () => {

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const {setUser} = useContext(UserContext)
  const completeReg = (e) => {
    e.preventDefault();
    setUser({name, pass})
  }
  
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
        <button type="submit" onClick={completeReg}>Submit</button>
    </div>
  );
};

export default Login;
