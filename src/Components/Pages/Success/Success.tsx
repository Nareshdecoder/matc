import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import thanks from "../../Assets/Images/thanks.webp";
import { Button } from "../../Core";
function Success() {
  let navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column h100vh">
      <div className="h1 text-primary">Thank You for Choosing vogaging</div>
      <div className="h4 text-success">Have great memories with us</div>
      <div>
        <Button
          title={" Back to Home"}
          className={"text-white bg-primary mt-3"}
          onClick={() => handleHome()}
        />
      </div>
    </div>
  );
}

export default Success;
