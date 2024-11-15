// hooks/useFetch.js
import { useState, useEffect } from 'react';
import axiosInstance from '@/utils/service';

export const useFetch = ({ url, options = {}, dependencies = [] }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let sub = 1;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(url, options);
                setData(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        if (sub) {
            fetchData();
            sub = 0;
        }
    }, dependencies);

    return { data, loading, error };
};
