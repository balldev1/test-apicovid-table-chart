'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartCovidDeaths = ({ data }) => {
    return (
        <div className='flex flex-cols justify-center items-center ' style={{ transform: 'scale(0.7)' }}>
            <div className='sm:block hidden'>
                <LineChart width={2500} height={400} data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="deaths" domain={[33300, 34000]} />
                    <Legend />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="date" stroke="#8884d8" name="Date" />
                    <Line type="monotone" dataKey="day" stroke="#82ca9d" name="Day" />
                    <Line type="monotone" dataKey="deaths" stroke="#82ca9d" name="Deaths" dot={{ strokeWidth: 5 }} />
                    <text x={1250} y={30} textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Line Chart {data.length !== 0 && data[0].country}
                    </text>
                    <Tooltip />
                </LineChart>
            </div>
            <div className='sm:hidden'>
                <LineChart width={500} height={500} data={data} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="deaths" domain={[33300, 34000]} />
                    <Legend />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="date" stroke="#8884d8" name="Date" />
                    <Line type="monotone" dataKey="day" stroke="#82ca9d" name="Day" />
                    <Line type="monotone" dataKey="deaths" stroke="#82ca9d" name="Deaths" dot={{ strokeWidth: 5 }} />
                    <text x={1250} y={30} textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Line Chart {data.length !== 0 && data[0].country}
                    </text>
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default ChartCovidDeaths;
