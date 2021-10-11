import React, { useEffect, useMemo, useState } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import { userdata } from "../../DummyData";
import WidgetSmall from "../../components/widgetsmall/WidgetSmall";
import WidgetLarge from "../../components/widgetlarge/WidgetLarge";
import { userRequest } from "../../requestMethod";

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="home-widgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
