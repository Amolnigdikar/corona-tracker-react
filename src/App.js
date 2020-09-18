import React, { Component } from "react";
import { Cards } from "./components/Cards/Cards";
import { Chart } from "./components/Chart/Chart";
import { CountryPicker } from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData, fetchApi} from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country:''
    };
  }

  handleCountryChange = async (country) =>{
    const fetchedData =await fetchData(country);
    this.setState({ data: fetchedData, country : country });
    
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });

    const fetchApiData = await fetchApi();
    console.log(fetchApiData);
  }
  render() {
    const { data , country } = this.state;
    return (
      <div className={styles.container}>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart />
      </div>
    );
  }
}

export default App;
