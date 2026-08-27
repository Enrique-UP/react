import React, { useState } from 'react';

export default function Hook1_1() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };

      // const a = { ...prev, [name]: value }
      // console.clear();
      // console.log(a);

      // return a;
    });
  };

  return (
    <section>
      <p><b>Check its output then install react components in inspect element. After that its effect will be show.</b></p>
      <form>
        <input type="text" name="username" placeholder="Name" value={formData.username} onChange={handleInput} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInput} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInput} />
        <input type="password" name="confirm_password" placeholder="confirm-password" value={formData.confirm_password} onChange={handleInput} />
        <button>Create Account</button>
        <p>{`My name is ${formData.username} and email is ${formData.email}.`}</p>
      </form>
    </section>
  );
}