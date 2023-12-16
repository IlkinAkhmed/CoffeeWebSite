import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (urlTitle) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/${urlTitle}`);
                setData(response.data);
            } catch (error) {
                setError("An error occurred while fetching the data.");
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1200);
            }
        };
        fetchData();
    }, [urlTitle]);

    return { data, setData ,isLoading, error };
};

export default useFetchData;