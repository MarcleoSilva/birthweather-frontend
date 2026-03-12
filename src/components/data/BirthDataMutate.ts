import type { BirthData } from "./BirthData";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { WeatherStats } from "./WeatherStats";

const API = "http://localhost:8080";
const ENDPOINT = "/birthweather";

const postData = async(data: BirthData): Promise<WeatherStats> => {
    const response = await axios.post<WeatherStats>(API + ENDPOINT, data)
    return response.data;
}

export function useBirthDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 3,
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({queryKey:['birthweather']})
        }
    })
    return mutate;
}