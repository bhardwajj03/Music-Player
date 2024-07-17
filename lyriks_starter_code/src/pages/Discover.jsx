import { Error,Loader , SongCard } from "../components";
import {genres} from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/Services/ShazamCore";

const genre=()=>{

}

const Discover = () => {
    const {data,isFetching,error}=useGetTopChartsQuery();
    const selectTitle='PoP';
    if (isFetching) return <Loader title="Loading songs ...."/>
    if (error) return <Error />
    return (
    
        <div className="flex felx-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {selectTitle}</h2>
                <select 
                    onChange={()=>{}}
                    value=""
                    className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
                        {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
            </div>
            <div className="flex felx-wrap sm:justify-start justify-center gap-8">
                {data?.map((song,i)=>( 
                <SongCard
                    key={song.key}
                    song={song}
                    i={i}
                />))}
            </div>
        </div>
  
    );
}

export default Discover;
