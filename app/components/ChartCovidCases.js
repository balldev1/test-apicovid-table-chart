'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartCovidCases = ({ data }) => {
    return (
        <div className='flex flex-cols justify-center items-center '>
            <div className='sm:block hidden'>
                <LineChart width={2500} height={500} data={data} style={{ transform: 'scale(0.7)' }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="cases" domain={[4727200, 4727236]} />
                    <Legend />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="date" stroke="#8884d8" name="Date" />
                    <Line type="monotone" dataKey="day" stroke="#82ca9d" name="Day" />
                    <Line type="monotone" dataKey="cases" stroke="#82ca9d" name="Cases" dot={{ strokeWidth: 5 }} />
                    <text x={1250} y={30} textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Line Chart {data.length !== 0 && data[0].country}
                    </text>
                    <Tooltip />
                </LineChart>
            </div>
            <div className='sm:hidden'>
                <LineChart width={500} height={500} data={data} style={{ transform: 'scale(0.7)', height: '500', width: '500' }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="cases" domain={[4727200, 4727236]} />
                    <Legend />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="date" stroke="#8884d8" name="Date" />
                    <Line type="monotone" dataKey="day" stroke="#82ca9d" name="Day" />
                    <Line type="monotone" dataKey="cases" stroke="#82ca9d" name="Cases" dot={{ strokeWidth: 5 }} />
                    <text x={1250} y={50} textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Line Chart {data.length !== 0 && data[0].country}
                    </text>
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default ChartCovidCases;
