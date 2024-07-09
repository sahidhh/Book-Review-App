import { useState } from "react";

export const RegistrationForm = () => {
  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");
  const [work, setWork] = useState("");
  const [dob, setDob] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log(location);
    console.log(age);
    console.log(work);
    console.log(dob);
    console.log(description);
  };

  return (
    <div>
      <form action="">
        <div className="form-item">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id=""
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            name="age"
            id=""
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="work">Work</label>
          <input
            type="text"
            name="work"
            id=""
            value={work}
            onChange={(e) => setWork(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="text"
            name="dob"
            id=""
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};
