import CityPicker from "@/components/CityPicker";
import { Card, Subtitle, Text, Divider, Title } from "@tremor/react";

export default function Home() {
  return (
    <div className="bg-overlay-image bg-cover h-screen bg-no-repeat bg-center p-5 lg:p-10 flex-col justify-center">
      <div className=" mt-10 bg-transparent">
        <h1 className="text-[64px] font-[500] sm:text-[90px] md:font-[1000] lg:leading-[120%] text-center mb-5 text-gray-10 ">
          Weather Radar
        </h1>
        <Subtitle className="lg:text-xl text-center">
          Powered By next.js, Tailwind css, Tremor 2.0 + More!
        </Subtitle>

        <div className="lg:mx-[10rem]">
          <Divider className="my-10"></Divider>
          <Card className="bg-transparent">
            <CityPicker></CityPicker>
          </Card>
        </div>
      </div>
    </div>
  );
}
