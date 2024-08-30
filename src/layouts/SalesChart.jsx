import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const SalesChart = () => {

    const data = [
        {
            name: 0,
            sales: 7400,
            visits: 1400
        },
        {
            name: 1,
            sales: 2600,
            visits: 9000
        },
        {
            name: 2,
            sales: 2600,
            visits: 398
        },
        {
            name: 3,
            sales: 7400,
            visits: 9000
        },
        {
            name: 4,
            sales: 7580,
            visits: 5008
        },
        {
            name: 5,
            sales: 7350,
            visits: 8000
        },
        {
            name: 6,
            sales: 2510,
            visits: 2460
        },
        {
            name: 7,
            sales: 9000,
            visits: 7400
        },
        {
            name: 8,
            sales: 300,
            visits: 5000
        },
   
        {
            name: 9,
            sales: 6000,
            visits: 2400
        }
    ]
    

  return (
    <>
      {/* <div className="shadow-lg flex flex-col flex-1 gap-4  px-2 items-center">
        <h1 className="font-bold">Sales Overview</h1>
      
        <div className="mt-3 w-full flex-1 text-xs ">
        <h1 className="font-bold">Sales Overview</h1>
				<ResponsiveContainer width="100%" height="92%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Income" fill="#0ea5e9" />
						<Bar dataKey="Expense" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
      </div> */}

      <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col shadow-lg ">
      
			<strong className="text-gray-700 font-bold">Sales Overview</strong>
            
            
			<div className="mt-3 w-full flex-1 text-xs shadow-lg">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="sales" fill="#3cb371" />
						<Bar dataKey="visits" fill="SlateBlue" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>

    </>
  );
};

export default SalesChart;
