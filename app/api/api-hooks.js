import { useState, useEffect } from "react";
import { getNormalizedGamesDataByCategory } from "./api-utils";
import { endpoints } from "./config";

export const useGetDataByCategory = (endpoints, category) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const data = await getNormalizedGamesDataByCategory(endpoints, category)
            setData(data);
        }
        fetchData();
    }, [])
    return data;
}