'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import toast, { Toaster } from 'react-hot-toast';
import ChartCovidDeaths from './ChartCovidDeaths';
import ChartCovidCases from './ChartCovidCases';

const TableCovid = () => {

    //axios covid
    const [data, setData] = useState([]);
    const [country, setCountry] = useState('Thailand'); // ประเทศเริ่มต้น
    const [inputCountry, setInputCountry] = useState(''); // ค่าประเทศที่ผู้ใช้กรอก
    const [lastday, setLastDay] = useState();

    // search country
    console.log(inputCountry)

    const columns = [
        {
            name: 'Country',
            selector: 'country',
            sortable: true,
        },
        {
            name: 'Day',
            selector: 'date',
            sortable: true,
        },
        {
            name: 'Case',
            selector: 'cases',
            sortable: true,
        },
        {
            name: 'Deaths',
            selector: 'deaths',
            sortable: true,
        },
    ];

    const handleSummit = () => {

        if (inputCountry === '') {
            alert('กรุณากรอกข้อมูลประเทศให้ถูกต้อง');
        } else {
            axios.get(`https://disease.sh/v3/covid-19/historical/${inputCountry}?lastdays=${lastday}`)
                .then(res => {
                    toast.loading('Please wait...');
                    setTimeout(() => {
                        setData(res.data);
                        toast.dismiss();
                    }, 3000);
                })
                .catch(error => {
                    console.log('Error Fetching Data!', error);
                });
        }
    };

    const handleDay = (day) => {
        setLastDay(day);
    }



    useEffect(() => {

        if (inputCountry === '') {
            try {
                axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=${lastday}`)
                    .then(res => {
                        setData(res.data); // อัปเดตข้อมูลหลังจากผ่านเวลา 3 วินาที
                    });
            } catch (error) {
                console.log('Error Fetching Data!', error);
                toast.error('Error Fetching Data!', error);
            }
        } else
            try {
                axios.get(`https://disease.sh/v3/covid-19/historical/${inputCountry}?lastdays=${lastday}`)
                    .then(res => {
                        setData(res.data); // อัปเดตข้อมูลหลังจากผ่านเวลา 3 วินาที
                    });
            } catch (error) {
                console.log('Error Fetching Data!', error);
                toast.error('Error Fetching Data!', error);
            }
    }, [lastday]);



    // Transforming data for DataTable format
    const transformedData = data.timeline ? Object.keys(data.timeline.cases).map(dateKey => ({
        country: data.country,
        date: dateKey,
        cases: data.timeline.cases[dateKey],
        deaths: data.timeline.deaths[dateKey],
    })) : [];

    const filteredData = transformedData.filter(item => item.date);

    // แปลงข้อมูลเป็นรูปแบบที่ใช้ในการสร้างกราฟ
    const chartData = filteredData.map(item => ({
        country: item.country,
        date: item.date,
        cases: item.cases,
        deaths: item.deaths,
    }));


    return (
        <div className='sm:px-5 px-0'>
            <Toaster />
            <div className='flex flex-col items-center justify-center pt-10 '>
                <div className='flex gap-3'>
                    <div>
                    </div>
                    <h1 className='text-xl font-bold '>Country</h1>
                    <input
                        className='border-2 w-[160px]  rounded-md border-2'
                        placeholder="  Enter country..."
                        value={inputCountry}
                        onChange={(event) => setInputCountry(event.target.value)}
                    />
                    <div>
                        <button onClick={handleSummit} className='border-2 rounded-md px-5
                        text-white bg-gradient-to-b from-sky-400  to-sky-700 
                        hover:bg-gradient-to-b hover:from-sky-500  hover:to-sky-900
                        '>
                            Submit
                        </button>
                    </div>
                </div>

            </div>
            <div className='flex justify-between my-5'>
                <div className='sm:text-xl font-bold'>
                    {`Covid Total ${data.country}`}
                </div>
                <div className='flex sm:gap-5 gap-2 sm:text-md '>
                    <button onClick={() => handleDay(1)}
                        className='border-2 rounded-md sm:px-5 px-1  text-white bg-gradient-to-b from-sky-400  to-sky-700 
                        hover:bg-gradient-to-b hover:from-sky-500  hover:to-sky-900'>1 DAY</button>
                    <button onClick={() => handleDay(15)}
                        className='border-2 rounded-md sm:px-5 px-1  text-white bg-gradient-to-b from-sky-400  to-sky-700 
                        hover:bg-gradient-to-b hover:from-sky-500  hover:to-sky-900'>15 DAY</button>
                    <button onClick={() => handleDay(30)}
                        className='border-2 rounded-md sm:px-5 px-1  text-white bg-gradient-to-b from-sky-400  to-sky-700 
                        hover:bg-gradient-to-b hover:from-sky-500  hover:to-sky-900'>30 DAY</button>
                </div>
            </div>
            {data.length === 0 && <div className="flex justify-center mt-4 text-xl font-bold">กำลังโหลดข้อมูล...</div>}
            <div>
                <DataTable
                    columns={columns}
                    data={filteredData}
                />
            </div>

            <div>
                <ChartCovidCases data={chartData} />
                <ChartCovidDeaths data={chartData} />
            </div>
        </div>
    )
}

export default TableCovid


