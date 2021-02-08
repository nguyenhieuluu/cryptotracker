import './App.css';
import Coin from './Coin';
import React, {useState, useEffect} from 'react';
import axios from 'axios';




function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filterCoin = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )


  useEffect( () => {
    axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage='24h%2C%207d%2C%2030d%2C%201y'")
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })    
    .catch(error => console.log(error));
  }, []);



  

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1> Search Currency </h1>

        <form className="coin-form">
          <input type="text" 
          placeholder="Search"
          className="coin-input"
          onChange={handleChange} /> 
        </form>
      </div>


      {filterCoin.map(coin => {
        return (
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          price={coin.current_price}
          volume={coin.market_cap}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.total_volume}
          />
        )

      })}
    </div>
  );
}





export default App;
