import CityPicker from "@/components/CityPicker";
import { Card, Subtitle, Text, Divider, Title } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7B] p-10 flex-col justify-center">
      <Card className="max-w-4xl mx-auto mt-10">
        <h1 className="text-[64px] font-[700] leading-[120%] text-center mb-10 text-gray-50">Weather Radar</h1>
        <Subtitle className="text-xl text-center">
          Powered By next.js, Tailwind css, Tremor 2.0 + More!
        </Subtitle>

        <Divider className="my-10"></Divider>
        
        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7B]">
          <CityPicker></CityPicker>
        </Card>
      </Card>
    </div>
  )
}
