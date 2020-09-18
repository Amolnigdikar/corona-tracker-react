import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  console.log(country);

  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  if (country === "global") {
    changeableUrl = url;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const response = await axios.get(`${url}/daily`);

    return response.data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryData = async () => {
  const response = await axios.get(`${url}/countries`);
  return response;
};

export const fetchApi = async () => {
  const response = await axios.get(
    "https://epsigo.com/api/admin/studentfees_list/",
    {
      headers: {
        authorization: "Token 78239a76e04c9d9c4628b7d93f39656397f172f1",
      },
    }
  );

  return response;
};
