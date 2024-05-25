import {Skeleton} from "../../components/Skeleton/Skeleton.tsx";


export const withSkeleton = (Component : any, type:string, count: number)  => {
    return function (props: any) {
        const {isLoading, ...restProps} = props

        if (isLoading) {
            return <Skeleton type={type} count={count}></Skeleton>
        }

        return  <Component {...restProps}></Component>
    }
}