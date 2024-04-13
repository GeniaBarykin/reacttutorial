import axios from "axios";
import { useQuery } from "@tanstack/react-query"; 

export const Home = () =>{

    const {data: catData, isLoading, isError, refetch} = useQuery({
        queryKey: ["cat"],
        queryFn: () => {
         return axios.get("https://catfact.ninja/fact")
         .then((res) => res.data );
        }
    })

    if (isError) {
        <h1>The error occured</h1>
    }

    if (isLoading){
        return <h1>Is loading...</h1>
    }

    return <h1>{catData?.fact}
        <button onClick={refetch}>Update</button>
    </h1>
}