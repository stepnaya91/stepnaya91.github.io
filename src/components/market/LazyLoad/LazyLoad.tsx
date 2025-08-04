import React, { useEffect, useRef } from "react"
import { getObserver } from "./IntersectionObserver";

interface LazyLoadProps{
    changeObject: number,
    callback: () => void
}

export const LazyLoad: React.FC<LazyLoadProps> = ({changeObject, callback}) => {
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = getObserver(callback);

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [changeObject]);
    return(
        <div ref={loaderRef} className="intersection-div">
        </div>      
    )

}