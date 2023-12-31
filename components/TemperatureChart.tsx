'use client'
import WeatherData from "@/utils/type";
import { AreaChart, Card, Title } from "@tremor/react";
import { Suspense } from "react";
import { useState } from 'react';

type Props = {
  data: WeatherData;
};

const TemperatureChart = ({ data }: Props) => {
  const [value, setValue] = useState<number | undefined>(undefined);
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
    [formatDate[0]]: data?.hourly.temperature_2m[index],
    [formatDate[1]]: data?.hourly.temperature_2m[index + 24],
    [formatDate[2]]: data?.hourly.temperature_2m[index + 48],

  }));

  return (
    <Card className=" max-w-5xl">
      <Title>Temperature Forecast</Title>
      <Suspense fallback={<>Loading...</>}>
        <AreaChart
          className="mt-6"
          data={_data ?? []}
          index="time"
          categories={[formatDate[0],formatDate[1],formatDate[2]]}
          colors={["teal", "zinc", "rose"]}
          valueFormatter={(n: number) => `${n} °C`}
          onValueChange={(v) => {}}
          yAxisWidth={30}
        />
      </Suspense>
    </Card>
  );
};

export default TemperatureChart;
