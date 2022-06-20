import React from "react";
import axios from "axios";

import Items from "./components/Items";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Sort from "./components/Sort";

import './App.css';

function App() {
    const [items, setItems] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [searchValue, setSearchValue] = React.useState('')
    const [sortType, setSortType] = React.useState(
        {name: 'id', sortProperty: 'id'}
    );

    React.useEffect(() => {
        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `&search=${searchValue}` : '';

        const getItems = async () => {
            setLoading(true)
            const res = await axios.get(`https://628bab00667aea3a3e344015.mockapi.io/items?page=${currentPage}&limit=10&sortBy=${sortBy}&order=${order}${search}`)
            setItems(res.data)
            setLoading(false)
        }
        getItems()
    }, [currentPage, sortType])

    console.log('input:', searchValue)

  return (
    <div className="container">
        <div className="search-sort">
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
            <Sort onChangeSort={(i) => setSortType(i)} value={sortType}/>
        </div>

        <Items items={items}
               loading={loading}
               searchValue={searchValue}
        />
        <div className="footer">
            <div>Page {currentPage} of 4 </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)}/>
        </div>
    </div>
  );
}

export default App;
