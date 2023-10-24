
type Props = {
  params: {
    city: string;
    long: string;
    lat: string;
  }
}

const weatherPage = ({params: {city, long, lat}}: Props ) => {
  return (
    <div>weatherPage {city} {lat} {long}</div>
  )
}

export default weatherPage