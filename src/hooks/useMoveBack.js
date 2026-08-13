"use client"
import {useRouter} from "next/navigation";

export function useMoveBack() {
    const moveBack =  useRouter()

    return () => moveBack.back();
}