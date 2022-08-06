import React, { useEffect, useState } from 'react';
import { useQuery } from "react-query";
import Loader from '../shared/Loader';

const useFood = () => {

    // let [foods, setFoods] = useState([]);

    // let { data:food , isLoading, refetch } = useQuery("foods", () => fetch("https://cafeteria-x.herokuapp.com/foods").then(res => res.json()))
    // let { data, isLoading, refetch } = useQuery('products', () => fetch('https://cafeteria-x.herokuapp.com/foods').then(res => res.json()))

    // if (isLoading) {
    //     return <Loader> </Loader>
    // }
    // // setFoods(data);

    // console.log(data);


    // return [data];

    // let foods = useFood([]);

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch("https://cafeteria-x.herokuapp.com/foods")
            .then(res => res.json())
            .then(data => {
                setProducts(data.data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p className='text-center'>Products Loading...</p>
    if (!products) return <p>No profile data</p>




    // let { data, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:3000/foods').then(res => res.json()))

    // if (isLoading) {
    //     return <Loader> </Loader>
    // }

    // console.log(data);


    return [products, setProducts];
};

export default useFood;