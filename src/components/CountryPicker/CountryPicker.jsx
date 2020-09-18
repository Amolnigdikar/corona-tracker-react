import React, { useEffect, useState } from "react";
import { fetchCountryData } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

export const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  async function fetchCountryApi() {
    const fetchedCountries = await fetchCountryData();
    setCountries(fetchedCountries.data.countries);
  }

  useEffect(() => {
    fetchCountryApi();
  }, [setCountries]);

  return (
    <FormControl className={styles.fromControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
