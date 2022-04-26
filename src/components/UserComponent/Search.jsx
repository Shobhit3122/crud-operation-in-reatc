import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import JSONDATA from "../../backend/db.json";

function Search() {
  let [searchTerm, setSearchTerm] = useState("");
  let [page, setPage] = useState(0);
  console.log(JSONDATA);
  return (
    <div className="search">
      <input
        type="text"
        placeholder="seach..."
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="searching">
        {JSONDATA.User.filter(val => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          if (val.id <= 10 ) {
            return (
              <div className="search1">
                <table>
                  <tr>
                    <td>
                      <p>Name:</p>
                    </td>
                    <td>{val.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <p>Salary:</p>
                    </td>
                    <td>{val.salary}</td>
                  </tr>
                  <tr>
                    <td>
                      <p>Company:</p>
                    </td>
                    <td>{val.company}</td>
                  </tr>
                </table>
              </div>
            );
          } else if (val.id >= 10) {
             

          }
        })}
      </div>
      <div className="btn">
        <button >1</button>
        <button>2</button>
        <button>3</button>
      </div>  
    </div>
  );
}

export default Search;
