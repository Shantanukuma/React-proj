import React, { useContext, useState } from "react";
import UserContext from "../context/Usercontext";

function ContactDetails() {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");
  const {setUser} = useContext(UserContext)
  const onsubmit = (e) => {
    e.preventDefault();
    setUser({address, phone, number})
  };
  
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="Phone no"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="number"
        name=""
        id=""
        placeholder="Pin "
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={onsubmit}>Submit</button>
    </div>
  );
}

export default ContactDetails;
