import React, {useState, useEffect} from 'react'
import axios from "axios"

function Moto() {

    const [state, setstate] = useState(null)
    useEffect(() => {
    async function fetchfromc (){
        try{
        console.log("befor fetch")
        let res = await axios.get("http://localhost:8080/moto")
        console.log(res)
        setstate(res.data)
        }catch(error){
            setstate("could not fetch the data")
        }
    }
    fetchfromc()
    }, [])
  return (
    <div>{state}</div>
  )
}

export default Moto