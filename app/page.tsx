import CityPicker from "@/components/CityPicker";
import { Card, Subtitle, Text, Divider } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7B] p-10 flex-col justify-center">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather Radar</Text>
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
