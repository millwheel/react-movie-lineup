import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading]=useState(true);
  const [coins, setCoins] = useState([]);
  const [btc, setBTC] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    setBTC(coins[0].quotes.USD.price);
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <h2>{coins[0].quotes.USD.price} USD/BTC</h2>
      <ul>
        {coins.map((value) => (
        <li>
          {value.name} ({value.symbol}):{value.quotes.USD.price / btc} BTC
        </li>))}
      </ul>
    </div>
  )
}

export default App;
