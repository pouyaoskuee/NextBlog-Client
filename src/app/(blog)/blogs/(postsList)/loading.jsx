import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"


export default function Loading() {
    return(
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'}>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
        </div>
    )
}

 function SkeletonCard() {
    return (
        <Card className="w-full max-w-xs">
            <CardContent>
                <Skeleton className="aspect-video w-full" />
            </CardContent>
            <CardHeader>
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
        </Card>
    )
}
