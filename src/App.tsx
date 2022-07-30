import './App.css';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { DataModel } from './Model/Model';
import { MainPage } from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { DataContext } from './Context/Cotext';
import Footer from './Components/Footer';
import Tables from './Components/Tables';
import Converter from './Components/Converter';
const URL = 'https://nbu.uz/exchange-rates/json/'

function App() {
  const [data, setData] = useState<DataModel[]>([{
    title: '',
    code: '',
    cb_price: '',
    nbu_buy_price: '',
    nbu_cell_price: '',
    date: ''
  }])
  axios.get(URL).then((res: AxiosResponse) => {
    setData(res.data)
  })

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage data={data} />} />
          <Route path='/table' element={<Tables data={data} component={false} />} />
          <Route path='/convert' element={<Converter data={data} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
