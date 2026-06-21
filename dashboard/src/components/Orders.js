import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setallOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      console.log(res.data);
      setallOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders">
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Quantity </th>
                  <th> Price </th>
                  <th> Curr.value </th>
                  <th> Mode </th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((stock, index) => {
                  const currValue = stock.price * stock.qty;
                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.price}</td>
                      <td>{currValue.toFixed(2)}</td>
                      <td>{stock.mode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
