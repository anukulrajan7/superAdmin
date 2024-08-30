import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const RecentOrders = () => {
  const data = [
    { name: "Order Accepted", value: 540 },
    { name: "ceared to start", value: 620 },
    { name: "Hiring Post", value: 620 },
    { name: "School Interview", value: 210 },
  ];

  const RADIAN = Math.PI / 180;
  const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      {/* <div className="shadow-lg   justify-between px-2 ">
          <div className="flex items-center gap-4">
          <p>Order Status</p>
          <div className="flex items-center gap-2">
         <BsArrowDownRight color="green " className=""/>
         <div>
          <p>Last 7 days</p>
          <p>+92%</p>
          </div>
          </div>
          </div>
          
        </div> */}

      <div className="  bg-white p-4 rounded-sm border border-gray-200 flex flex-col shadow-lg">
        <div className="flex items-center gap-4">
          <strong className="text-gray-700 font-medium">Order Status</strong>
          <div className="flex items-center gap-2">
         <BsArrowDownRight color="green " className=""/>
         <div>
          <p>Last 7 days</p>
          <p>+92%</p>
          </div>
          </div>
        </div>

        <div className="mt-3 w-full flex-1 text-xs ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="45%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={105}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default RecentOrders;
