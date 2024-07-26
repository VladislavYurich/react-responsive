import { useMediaQuery } from "./useMediaQuery";
import { IMediaQueryProps } from "./types";

export const MediaQuery = (props: IMediaQueryProps) => {
    const [query] = Object.entries(props).filter(([key]) => key != 'children').map(([key, value]) => {
        if (key === "minResolution" || key === "maxResolution") {
            return`(${key.replace( /([A-Z])/g, "-$1").toLowerCase()}: ${typeof value === 'number' ? `${value}dppx` : value})`
        } else {
            return`(${key.replace( /([A-Z])/g, "-$1").toLowerCase()}: ${typeof value === 'number' ? `${value}px` : value})`
        }
    })

    const matches = useMediaQuery({ query: query }); 
    return matches ? <> {props.children} </> : null;
}
 


 

