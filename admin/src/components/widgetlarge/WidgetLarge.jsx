import React from "react";
import "./widgetLarge.css";

const WidgetLarge = () => {
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
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Loading !!!!"
              className="widget-lg-img"
            />
            <span className="widget-lg-name">Susan Shrestha</span>
          </td>
          <td className="widget-lg-date">3 july 2021</td>
          <td className="widget-lg-amount">$123.00</td>
          <td className="widget-lg-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Loading !!!!"
              className="widget-lg-img"
            />
            <span className="widget-lg-name">Susan Shrestha</span>
          </td>
          <td className="widget-lg-date">3 july 2021</td>
          <td className="widget-lg-amount">$123.00</td>
          <td className="widget-lg-status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Loading !!!!"
              className="widget-lg-img"
            />
            <span className="widget-lg-name">Susan Shrestha</span>
          </td>
          <td className="widget-lg-date">3 july 2021</td>
          <td className="widget-lg-amount">$123.00</td>
          <td className="widget-lg-status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Loading !!!!"
              className="widget-lg-img"
            />
            <span className="widget-lg-name">Susan Shrestha</span>
          </td>
          <td className="widget-lg-date">3 july 2021</td>
          <td className="widget-lg-amount">$123.00</td>
          <td className="widget-lg-status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
