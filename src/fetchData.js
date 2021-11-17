import axios from "axios"
export const fetchData=async()=>{
    try{
        const {data}=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cd62c04ed93db2f124a726f2ce30cd71`)
        return data.results
    }
    catch(error)
    {
        console.log(error)
    }
}

export const fetchDataById=async(id)=>{
    try{
        const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
            params:{
                api_key:"cd62c04ed93db2f124a726f2ce30cd71",
                language:"en-US"
            }
        })
        return data
    }
    catch(error)
    {
        console.log(error)
    }
}

export const fetchCast=async(id)=>{
    try{
        const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`,{
            params:{
                api_key:"cd62c04ed93db2f124a726f2ce30cd71",
                language:"en-US"
            }
        })
        return data.cast
    }
    catch(error)
    {
        console.log(error)
    }
}

export const fetchMovieImages=async(id)=>{
    try{
        const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`,{
            params:{
                api_key:"cd62c04ed93db2f124a726f2ce30cd71",
                language:"en-US"
            }
        })
        return data.results
    }
    catch(error)
    {
        console.log(error)
    }
}

export const fetchCategory=[
    {
        id:"1",
        genre:"Action",
        image:"https://pbblogassets.s3.amazonaws.com/uploads/2019/07/12130642/John-Wick.jpg",
    },
    {
        id:"2",
        genre:"Horror",
        image:"https://helios-i.mashable.com/imagery/articles/01eIvreZ9sXEnn1jUU6nyQM/images-93.fit_lim.size_2000x.v1628282411.jpg"
    },
    {
        id:"3",
        genre:"Comedy",
        image:"https://variety.com/wp-content/uploads/2021/09/Red-Notice.jpg"
    },
    {
        id:"4",
        genre:"Romance",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/11/06/879655-lastchristmas-review.jpg"
    }
    
]

