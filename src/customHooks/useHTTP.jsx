import { useEffect, useState } from "react"
import axios from "axios"


export const useGet = (url) =>{
    const [info, setInfo] = useState([])
    const [fetching, setFetching] = useState(true)

    const getInfo = async () =>{
        const response = await axios.get(url)
        setInfo(response.data)
        setFetching(false)
    }
    useEffect(()=>{
        getInfo()
    },[])

    return [info, fetching]
}