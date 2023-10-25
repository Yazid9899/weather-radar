export default  interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: {
    time: string;
    interval: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    is_day: string;
    weathercode: string;
  };
  current_weather: {
    time: string;
    interval: number;
    temperature: number;
    windspeed: number;
    winddirection: number;
    is_day: number;
    weathercode: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    precipitation: string;
    rain: string;
    showers: string;
    snowfall: string;
    snow_depth: string;
    windgusts_10m: string;
    uv_index: string;
    uv_index_clear_sky: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation: number[];
    rain: number[];
    showers: number[];
    snowfall: number[];
    snow_depth: number[];
    windgusts_10m: number[];
    uv_index: number[]; 
    uv_index_clear_sky: number[]; 
  };
  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_min: string;
    sunrise: string;
    sunset: string;
    uv_index_max: string;
    uv_index_clear_sky_max: string;
    temperature_2m_max: string;
  };
  daily: {
    time: string[];
    weathercode: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
    uv_index_clear_sky_max: number[];
    temperature_2m_max: number[];
  }
}

