import {useState} from "react";


export const useFilters= (initialState : any) => {
    const [filters , setFilters] = useState( initialState)


    const changeFilters = (key : any ,value :any) =>  {
        setFilters(prev  => {
            return  {
                ...prev ,
                [key] : value
            }
        })
    }

    return {filters , changeFilters}


}