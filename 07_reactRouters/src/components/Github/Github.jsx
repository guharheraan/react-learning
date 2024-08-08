import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data,setdata] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/guharheraan')
    //     .then((res) => res.json())
    //     .then((data) =>{
    //         setdata(data)
    //     })
    // },[])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4
         text-3xl'>
            Guithub Followers:{data.followers}
            <img   src={data.avatar_url}  alt="git pic"  width={300}/>
        </div>
    )
}

export default Github

// this method is more optimized than the above method that

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/guharheraan')
    return response.json()
}