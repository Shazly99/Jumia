import axios from "axios";
import { ShoppingOptions } from "./fetchData";
import { useState, useEffect } from 'react';

function useFetch(url) {

    const [product, setProduct] = useState([])

    const fetchData = async () => {
        let  {data}  = await axios.get(url, ShoppingOptions);
        setProduct(data.results)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        product
    }
}

export default useFetch