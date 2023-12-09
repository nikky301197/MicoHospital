import { useEffect, useReducer, useState } from "react";
import { Header } from "../Header/Header";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { api } from "../API_URL/APIURL";

export const ReceptionistList = () => {
  let currentUser = JSON.parse(sessionStorage.getItem("current-user"));
  const inititalState = {
    receptionList: null,
  };
  const reducer = (state, action) => {
    if (action.type == "set-reception-list") {
      return { ...state, receptionList: action.payload };
    }

   else  if (action.type == "delete-receptionist") {
      let index = state.receptionList.findIndex((obj) => obj.id == action.payload);
      state.receptionList.splice(index ,1);
      return { ...state };
    }
  };
  const [data, dispatch] = useReducer(reducer, inititalState);
  useEffect(() => {
    loadReceptionList();
  }, []);

  const loadReceptionList = async () => {
    try {
      let token = sessionStorage.getItem("token");

      let response = await axios.get(api.receptionistList, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.status) {
        dispatch({ type: "set-reception-list", payload: response.data.data });
      } else {
        window.alert(response.data.msg)
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteReceptionist = async (receptionId) => {
    try {
       if (window.confirm("are you sure you want to delete receptionist"))
    {
      let token = sessionStorage.getItem("token");
      let response = await   axios.put(api.deleteReceptionist + receptionId, null, {
       headers: { Authorization: `Bearer ${token}` }
     });
     window.alert("deleted successfully ");
     if (response.data.status)
     {
      dispatch({ type: "delete-receptionist", payload: receptionId});
     }
    }
     
    } catch (err) {}
  };

  return (
    <>
      <div className="hero_area">
        <Header />
      </div>

      <div className=" container-fluid table-responsive  my-4">
        <table className="table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Id</th>
              <th>Name</th>
              <th>Contact</th>
              <th>password</th>

              <th>Address</th>
              <th>Doctor</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.receptionList?.map((receptionObj, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{receptionObj.id}</td>
                <td>{receptionObj.name}</td>
                <td>{receptionObj.phoneNumber}</td>
                <td>{receptionObj.password}</td>
                <td>{receptionObj.raddress}</td>
                <td>{currentUser.name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteReceptionist(receptionObj.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn btn-info">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
