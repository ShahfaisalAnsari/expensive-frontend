import React, { useEffect, useState } from "react";
import CustomInput from "@/components/Inputs/CustomInput";
import Button from "@/components/Button";
import { alignContent, alignItems, display, justifyContent } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const count = useSelector((state)=> state?.counter?.value);
 
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    const { value, name } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if(formValue.email=="faisalkht@gmail.com" && formValue.password=="Admin"){
      localStorage.setItem("token", "d7asf75sfa6s4fasf8as7fasfa7sf5asf3h")
    }
    if(localStorage.getItem("token")=="d7asf75sfa6s4fasf8as7fasfa7sf5asf3h"){
      navigate("/home");
      // navigate("/dashboard");
    }else{
      toast.error( "Invalid credential");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 300 }}>
        <h1 className="text-[40px]">Login</h1>

        <div className="mb-[16px] mt-[20px]">
          <CustomInput
            label="Email"
            type="text"
            name="email"
            value={formValue?.email}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <CustomInput
            label="Password"
            type="password"
            name="password"
            value={formValue?.password}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>

        <Button onClick={(e) => handleSubmit(e)}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
