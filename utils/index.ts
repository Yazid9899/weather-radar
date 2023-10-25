


export async function fetchWeather(long: string, lat: string) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky&daily=weathercode,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`

  const response = await fetch(url);

  const result = await response.json();
  
  return result
};