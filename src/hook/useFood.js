import React, { useState } from 'react';
import { useQuery } from "react-query";
import Loader from '../shared/Loader';

const useFood = () => {

    // let [foods, setFoods] = useState([]);

    // let { data:food , isLoading, refetch } = useQuery("foods", () => fetch("http://localhost:5000/foods").then(res => res.json()))
    // let { data, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/foods').then(res => res.json()))

    // if (isLoading) {
    //     return <Loader> </Loader>
    // }
    // // setFoods(data);

    // console.log(data);


    // return [data];





    let { data, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:3000/foods').then(res => res.json()))

    if (isLoading) {
        return <Loader> </Loader>
    }

    console.log(data);


    return [data];
};

export default useFood;