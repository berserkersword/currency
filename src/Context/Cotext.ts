import { createContext } from 'react'
import { DataModel } from '../Model/Model';

const data = {
    title: '',
    code: '',
    cb_price: '',
    nbu_buy_price: '',
    nbu_cell_price: '',
    date: ''
}
export const DataContext = createContext<DataModel>(data);