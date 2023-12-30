import { useState, useEffect } from "react";

export default function useFetch ( json ) {
    const [ product, setProduct ] = useState()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch( json )
            const data = await res.json()
            setProduct(data)
        }
        
        fetchData()

        return () => {
            setIsLoading( false )
            setProduct()
        }
    }, [] )
    
    return {product, isLoading}
}