import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b0e61e8230mshf371b6e388c50d2p14bf12jsn56898d472fb9',
      'x-rapidapi-host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

export const shazamCoreApi=createApi({
    reducerPath:'shazamCoreApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set('x-rapidapi-key','b0e61e8230mshf371b6e388c50d2p14bf12jsn56898d472fb9');

            return headers;
        }
    }),
    endpoints:(builder)=>({
        getTopCharts:builder.query({query:()=>'/charts/world'}),
    })
});

export const {
    useGetTopChartsQuery,
}=shazamCoreApi;