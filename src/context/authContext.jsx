"use client"
import {createContext, useContext, useEffect, useReducer} from "react";
import {getUserApi, signInApi, signUpApi} from "@/services/authServices";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

const authContext = createContext()

const initialState = {
    user: null,
    error: null,
    isLoading: true,
    isAuthenticated: false,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                isLoading: true,
            }
        case 'signIn':
            return {
                user: action.payload,
                isLoading: false,
                isAuthenticated: true,
            }
        case 'signUp':
            return {
                user: action.payload,
                isLoading: false,
                isAuthenticated: true,
            }
        case 'getUser':
            return {
                user: action.payload,
                isLoading: false,
                isAuthenticated: true,
            }
        case 'rejected':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }

    }
}

export default function AuthProvider({ children }) {
    const [{user , isAuthenticated , isLoading , error}, dispatch ] = useReducer(authReducer , initialState)
    const router =  useRouter()

    async function signIn(values){
        dispatch({type:'loading'})
        try {
            const {message , user} = await signInApi(values)
            toast.success(message)
            dispatch({type:'signIn' , payload:user})
            router.push('/profile')
        }catch(err){
            const errMsg = err?.response?.data?.message
            toast.error(errMsg)
            dispatch({type:'rejected' , payload:errMsg})
        }
    }

    async function signUp(values){
        try {
            const newValues = {...values , name:values.fullName};
            delete newValues.fullName;
            const {message , user} = await signUpApi(newValues)
            dispatch({type:'signUp' , payload:user})
            toast.success(message)
            router.push('/profile')

        }catch(err){
            const errMsg = err?.response?.data?.message
            toast.error(errMsg)
            dispatch({type:'rejected' , payload:errMsg})
        }
    }


    async function getUser() {
        try {
            const {user} = await getUserApi()
            dispatch({type:'getUser' , payload:user})
        }catch(err){
            const errMsg = err?.response?.data?.message
            toast.error(errMsg)
            dispatch({type:'rejected' , payload:errMsg})
        }
    }

    useEffect(() => {
        async function fetchData(){
            await getUser()
        }
        fetchData()
    }, []);


    return(
        <authContext.Provider value={{user , isAuthenticated , isLoading , signIn , signUp , getUser }}>{children}</authContext.Provider>
    )

}

export function useAuth() {
    const context = useContext(authContext)
    if (!context) throw new Error('not found auth context')
    return context
}