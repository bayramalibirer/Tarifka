import axios from "axios";
import {useEffect,useState} from "react";

const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const {data: responseData} = await axios.get(url)
            setData(responseData)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    },[]);

    return { loading, data }
}

export default useFetch;