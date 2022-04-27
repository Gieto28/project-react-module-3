import { useEffect, useState } from "react";

export function useFetch(url) {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data.data);
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))
    },[])

    return {data, error, loading};
}