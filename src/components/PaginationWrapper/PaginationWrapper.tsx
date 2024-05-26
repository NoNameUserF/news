import {Pagination} from "../Pagination/Pagination.tsx";

export const  PaginationWrapper = ({children , ...paginationProps} :any) => {
    return (
        <>
            <Pagination {...paginationProps}/>
            {children}

        </>
    );
}
