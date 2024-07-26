import { useState, useEffect } from "react";
import { IMediaQuery } from "./types";


export const useMediaQuery = (mediaQuery: IMediaQuery) => {
    const query = mediaQuery.query 
    const [isMatches, setIsMaches] = useState(window.matchMedia(query).matches)

    useEffect(()=>{
        const mediaQeryList = window.matchMedia(query)
        console.log(mediaQeryList)
        const documentChangeHandler = () => setIsMaches(mediaQeryList.matches)

        mediaQeryList.addEventListener('change', documentChangeHandler)
        return  () => {
            mediaQeryList.removeEventListener('change', documentChangeHandler)
        }
    }, [query])

    return isMatches;
}