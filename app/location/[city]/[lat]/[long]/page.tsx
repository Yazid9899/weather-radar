import CalloutCard from "@/components/CalloutCard";
import { fetchWeather } from "@/utils";
import StatCard from "@/components/StatCard";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import WeatherData from "@/utils/type";
import TemperatureChart from "@/components/TemperatureChart";
import RainChart from "@/components/RainChart";


type Props = {
  params: {
    city: string;
    long: string;
    lat: string;
  }
}

const weatherPage = async ({params: {city, long, lat}}: Props ) => {
  const data: WeatherData = await fetchWeather(long, lat);
  // console.log(Number(data.daily.uv_index_max[0].toFixed(1)));
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <SideBar city={city} long={long} lat={lat} data={data}/>

      <div className="flex-1 p-5 lg:p-5">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last update at: {" "}
              {new Date(data?.current_weather.time).toLocaleString()} ({data?.timezone})
            </p>
          </div>

          <div className="m-2 mb-10">
            <CalloutCard
              message="Thank you for stopping by my website to explore my weather forecasting app – your visit means a lot"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum temperature"
              metric={`${data?.daily.temperature_2m_max[0].toFixed(1)}°C`}
              color="yellow"
            />

            <StatCard
              title="Minimum temperature"
              metric={`${data?.daily.temperature_2m_min[0].toFixed(1)}°C`}
              color="green"
            />  

            <div>
              <StatCard
                title="UV Index"
                metric={data.daily.uv_index_max[0].toFixed(1)}  
                color="rose"
              />
              
            </div>
            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                metric={`${data?.current_weather.windspeed} ${data?.current_weather_units.windspeed}`}  
                color="cyan"
              />
              <StatCard
                title="Wind Direction"
                metric={`${data?.current_weather.winddirection}${data?.current_weather_units.winddirection}`}  
                color="violet"
              />
            </div>
          </div>
          {Number(data.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message="The UV level is high today, so make sure to wear sunscreen (SPF)!"
                  warning
                />
              )}
          <hr className="my-5" />

          <div className="space-y-3">
            <TemperatureChart data={data} />
            <RainChart data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default weatherPage