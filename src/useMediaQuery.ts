import { useState, useEffect } from "react";
import { IMediaQuery } from "./types";


export const useMediaQuery = (mediaQuery: IMediaQuery) => { 
    const query = mediaQuery.query 
    const [isMatches, setIsMaches] = useState(false)

    useEffect(()=>{
        const mediaQueryList = window.matchMedia(query)
        setIsMaches(mediaQueryList.matches)
        const documentChangeHandler = () => setIsMaches(mediaQueryList.matches)

        mediaQueryList.addEventListener('change', documentChangeHandler)
        return  () => {
            mediaQueryList.removeEventListener('change', documentChangeHandler)
        }
    }, [query])

    return isMatches;
}