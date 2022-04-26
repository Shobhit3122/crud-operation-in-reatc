import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Axios from "../../apis/Axios";
import Search from "./Search";

const User = () => {
  let [state, setState] = useState(null);
  useEffect(() => {
    let fetchUsers = async () => {
      let { data } = await Axios.get("/User");
      setState(data);
    };
    fetchUsers();
  }, []);

  let deletePost = async id => {
    await Axios.delete(`/User/${id}`);
    window.location.assign("/user");
  };

  return (
    <div>
     
      {state === null
        ? "Loading....."
        : state.map(user => {
            return (
                <Fragment key={user.id}>
                  
                <div>
                  <h4>{user.name}</h4>
                  <p>{user.salary}</p>
                  <p>{user.company}</p>

                  <footer>
                    <Link to={`/edit-user${user.id}`}>Edit</Link>
                    <button
                      onClick={() => {
                        deletePost(user.id);
                      }}
                    ></button>
                  </footer>
                </div>
              </Fragment>
            );
          })}
    </div>
  );
};

export default User;
