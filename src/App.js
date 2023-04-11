import { useEffect, useState } from 'react';
import './App.css';
import { apiClient } from './apiClient';

function App() {
    const [data,setData] = useState({})
    const fetchData = () => {
        apiClient.get("/Europe/Amsterdam")
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        // first time fetch 
        fetchData();

        // timer
        let interval = setInterval(fetchData, 4000);
        return () => clearInterval(interval)
    },[])


    return (
        <main className='main'>
            {Object.keys(data).length > 0 && <div>
                <p>abbreviation : {data.abbreviation}</p>
                <p>client_ip : {data.client_ip}</p>
                <p>datetime : {data.datetime}</p>
                <p>day_of_week : {data.day_of_week}</p>
                <p>day_of_year : {data.day_of_year}</p>
                <p>dst : {data.dst}</p>
                <p>dst_from : {data.dst_from}</p>
                <p>dst_offset : {data.dst_offset}</p>
                <p>dst_until : {data.dst_until}</p>
                <p>raw_offset : {data.raw_offset}</p>
                <p>timezone : {data.timezone}</p>
                <p>unix_time : {data.unix_time}</p>
                <p>utc_datetime : {data.utc_datetime}</p>
                <p>utc_offset : {data.utc_offset}</p>
                <p> week_number : {data.week_number}</p>
            </div>}
        </main>
    );
}

export default App;
