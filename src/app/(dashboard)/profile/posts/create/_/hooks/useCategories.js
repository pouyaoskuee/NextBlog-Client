import {useQuery} from "@tanstack/react-query";
import {getPostsCategoriesApi} from "@/services/postSevices";

export function useCategories() {
   const { isLoading, data} = useQuery({
        queryKey: ['categories'],
        queryFn: getPostsCategoriesApi
    })

    const {categories:rawCategories = []} = data || {}

    const categories = rawCategories.map(category => ({
        label: category.title,
        value: category._id,
    }))

    return {categories, isLoading}
}