import { useMutation, useQuery, useQueryClient } from "react-query";
import { createUser, getData } from "../utils/api/api";


export const useGetData = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getData,
        onSuccess: (data) => {
            console.log(data);
            return data;
        },
        onError: (error) => {
            console.error(error);
        }
    });
};

// create user 

export const useCreateUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createUser,
        onSuccess: (data) => {
            queryClient.invalidateQueries(data)
        },
        onError: (error) => {
            console.error(error);
        }
    })
}