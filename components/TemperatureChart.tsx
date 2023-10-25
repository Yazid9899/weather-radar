import WeatherData from "@/utils/type"

type Props = {
  data: WeatherData;
}

const TemperatureChart = ({data}: Props) => {

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default TemperatureChart