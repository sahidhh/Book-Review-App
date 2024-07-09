import { useState } from "react";

export const OtpForm = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    console.log(otp)
  };

  return (
    <div>
      <form action="">
        <div className="form-item">
          <label htmlFor="otp">OTP</label>
          <input
            type="text"
            name="otp"
            id=""
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <input type="button" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};
