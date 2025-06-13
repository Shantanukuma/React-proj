import React, { useContext, useState } from "react";
import UserContext from "../context/Usercontext";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const {setUser} = useContext(UserContext)
  const handleInput = (e) => {
    e.preventDefault();
    setUser({name, age, email})
  };


  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="text"
        name=""
        id=""
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />
      <input
        type="email"
        name=""
        id=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email id"
      />
      <button type="submit" onClick={handleInput}>
        Submit
      </button>
    </div>
  );
}

export default Register;
