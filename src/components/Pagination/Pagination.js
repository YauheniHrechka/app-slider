import React from 'react';
import './Pagination.css';

function Pagination({ amountDots, active, paginationClick }) {

    return (
        <div className="dots">
            {Array(amountDots).fill(null).map((item, index) => {
                return (
                    <div
                        key={index}
                        data-item={index + 1}
                        className={`dot-item ${index + 1 === active ? 'active' : ''}`}
                        onClick={paginationClick}
                    ></div>
                )
            })}
        </div>
    )
}

export default Pagination;