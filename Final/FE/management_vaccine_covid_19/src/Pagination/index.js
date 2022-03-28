import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange:PropTypes.func, 
};
Pagination.defaultProps ={
    onPageChange : null,
}

function Pagination(props) {
    const {pagination,onPageChange} = props;
    const{_page,_limit,totalItems} = pagination;
    const totalPages = Math.ceil(totalItems/_limit);

    function handlePageChange(newPage){
        if(onPageChange){
            onPageChange(newPage)
        }
    }
    return (
        <div className='d-flex justify-content-center'>
            <button
            disabled={_page<=1}
            onClick={()=> handlePageChange(_page-1)}
            class="btn btn-primary" style={{width:"100px",marginRight:"10px"}}>
            Pre
            </button>

            <button
            disabled={_page >= totalPages}
            onClick={()=> handlePageChange(_page+1)}
            class="btn btn-secondary" style={{width:"100px"}}>
            Next
            </button>
        </div>
    );
}

export default Pagination;