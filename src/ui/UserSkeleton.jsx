import { Skeleton } from "@/components/ui/skeleton"

export function UserSkeleton() {
    return (
        <div className="flex items-center gap-4">
            <div className="space-y-2 flex flex-col items-end ">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4  w-[150px]" />
            </div>
            <Skeleton className="size-7 rounded-full" />
        </div>
    )
}
