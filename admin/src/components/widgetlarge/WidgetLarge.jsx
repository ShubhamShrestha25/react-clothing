import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../requestMethod";
import { format } from "timeago.js";
import "./widgetLarge.css";

const WidgetLarge = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widget-lg-button " + type}>{type}</button>;
  };

  return (
    <div className="widget-lg">
      <h3 className="widget-lg-title">Latest Transactions</h3>
      <table className="widget-lg-table">
        <tr className="widget-lg-tr">
          <th className="widget-lg-th">Customer</th>
          <th className="widget-lg-th">Date</th>
          <th className="widget-lg-th">Amount</th>
          <th className="widget-lg-th">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widget-lg-tr" key={order.userId}>
            <td className="widget-lg-user">
              <span className="widget-lg-name">{order.userId}</span>
            </td>
            <td className="widget-lg-date">{format(order.createdAt)}</td>
            <td className="widget-lg-amount">{order.amount}</td>
            <td className="widget-lg-status">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLarge;
