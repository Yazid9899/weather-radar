"use client"
import { Country, State, City }  from 'country-state-city';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Select from 'react-select'
import { GlobeIcon } from "@heroicons/react/solid";
type countryOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string,
} | null;

const option = Country.getAllCountries().map((country) =>({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}))

const CityPicker = () => {
  
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<countryOption>();
  const [ selectedCity, setSelectedCity] = useState<cityOption>();

  const handleSelectedCountry = (option : countryOption) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  } 

  const handleSelectedCity = (option : cityOption) => {
    setSelectedCity(option);
    router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`)
  }
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/80">
          <GlobeIcon className='h-5 w-5 text-white' />
          <label htmlFor="country" className="">Country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          options={option}
          onChange={handleSelectedCountry}
        />
      </div>

      {selectedCountry && 
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/80">
            <GlobeIcon className='h-5 w-5 text-white' />
            <label htmlFor="country" className="">City</label>
          </div>
          <Select
            className="text-black"
            value={selectedCity}
            options={City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map((city) => ({
              value: {
                latitude: city.latitude!,
                longitude: city.longitude!,
                countryCode:city.countryCode,
                name: city.name,
                stateCode: city.stateCode
              },
              label: city.name
            }))}
            onChange={handleSelectedCity}
          />
        </div>
      }
    </div>
  )
}

export default CityPicker