import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../apis/Axios";
import { toast } from "react-toastify";
import Search from "./Search";

const CreateUser = () => {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [salary, setSalary] = useState("");
  let [company, setCompany] = useState("");
  let [loading, setLoading] = useState(false)

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { name, salary, company };
      setLoading(true);
      await Axios.post("/User", payload);
      toast.success("sucessfully user created on database");
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
     
      <h2>create user</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input
            type="text"
            className="form-group"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor=" salary">Salary</label>
          <input
            type="text"
            className="form-group"
            required
            value={salary}
            onChange={e => setSalary(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            className="form-group"
            required
            value={company}
            onChange={e => setCompany(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button>{loading ? "loading" : "CreateUsers"}</button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
