import {useEffect, useState} from "react";
export const useFetch = (fetchingFunction:any, params?: any) => {


    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)


    console.log(data)
    const stringParams=  params  ? new URLSearchParams(params).toString() : ''
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                const result = await fetchingFunction(params)
                setData(result)
            } catch (e) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        })();
    }, [fetchingFunction, stringParams]);

    return {data, isLoading, error}
}

