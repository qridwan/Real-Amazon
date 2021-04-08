import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { db } from "../Home/Firebase";

const Orders = () => {
  const [user, setUser] = useContext(UserContext);
  const [allOrders, setAllOrders] = useState(null);
  const [usersOrder, setUsersOrder] = useState(null);
  const getOrders = () => {
    //getting all the products from db
    db.collection("Orders").onSnapshot((snapshot) => {
      const tempOrder = snapshot.docs.map((doc) => ({
        id: doc.id,
        order: doc.data(),
      }));
      setAllOrders(tempOrder);
    });
  };

  useEffect(() => {
    getOrders();

    if (allOrders !== null) {
      const myOrder = allOrders.filter((obj) => obj.order?.user === user.email);
      console.log(
        "🚀 ~ file: Orders.js ~ line 21 ~ getUserOrder ~ myOrder",
        myOrder
      );
      setUsersOrder(myOrder);
    }
  }, [allOrders, user.email]);
  console.log(usersOrder);
  return (
    <div className="order text-dark pb-5">
      <div className="container">
        <h3 className="p-3 text-center">
          {user.name}, previously you ordered,
        </h3>
      </div>
      <table className="table container text-dark">
        <thead>
          <tr>
            <th scope="col">Products</th>
            <th scope="col">Quantity</th>
            <th scope="col">Prices</th>
            <th scope="col">Ordered Time</th>
          </tr>
        </thead>
        <tbody>
          {usersOrder?.map((obj) =>
            obj.order?.infos.map((obj) => (
              <tr key={obj.id}>
                <th scope="row">{obj.product}</th>
                <td>{obj.quantity} </td>
                <td>$ {obj.price} </td>
                <td> {obj.date} </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
