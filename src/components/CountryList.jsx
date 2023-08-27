import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map!"}
      />
    );

  const countries = cities.reduce(
    (arr, city) =>
      arr.map((el) => el.country).includes(city.country)
        ? arr
        : [...arr, { country: city.country, emoji: city.emoji }],
    []
  );

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </div>
  );
}

export default CountryList;
