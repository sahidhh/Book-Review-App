import { useState } from "react";

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email);
    console.log(username);
    console.log(password);
  };

  return (
    <div>
      <form action="">
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};
