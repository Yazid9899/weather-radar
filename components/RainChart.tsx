"use client";
import { AreaChart, Card, Title, BarChart } from "@tremor/react";
import { Suspense } from "react";
import WeatherData from "@/utils/type";

interface Props {
  data: WeatherData;
}

function RainChart({ data }: Props) {
  const hourly =  [
    '12 AM', '01 AM', '02 AM', '03 AM', '04 AM',
    '05 AM', '06 AM', '07 AM', '08 AM', '09 AM',
    '10 AM', '11 AM', '12 PM', '01 PM', '02 PM',
    '03 PM', '04 PM', '05 PM', '06 PM', '07 PM',
    '08 PM', '09 PM', '10 PM', '11 PM',
  ];

  const formatToShortDate = (inputDate: string): string => {
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US", { day: "2-digit", month: "short" });
  }

  const formatDate = [
    formatToShortDate(data?.daily?.time![0]),
    formatToShortDate(data?.daily?.time![1]),
    formatToShortDate(data?.daily?.time![2])
  ]

  const _data = hourly?.map((hour, index) => ({
    time: hourly[index],
    [formatDate[0]]: data?.hourly.precipitation[index],
    [formatDate[1]]: data?.hourly.precipitation[index + 24],
    [formatDate[2]]: data?.hourly.precipitation[index + 48],
  }));

  console.log(data?.hourly.precipitation);
  return (
    <Card>
      <Title>precipitation</Title>
      <Suspense fallback={<>Loading...</>}>
        <BarChart
          className="mt-6"
          data={_data ?? []}
          showLegend
          index="time"
          categories={[formatDate[0],formatDate[1],formatDate[2]]}
          colors={["teal", "zinc", "rose"]}
          valueFormatter={(n: number) => `${n} mm`}
          yAxisWidth={40}
        />
      </Suspense>
    </Card>
  );
}

export default RainChart;
