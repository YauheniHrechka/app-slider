import React from 'react';
import './Pagination.css';

import { Context } from '../context';

const Pagination = ({ getDots, active }) => {

    const { onClickDotItem } = React.useContext(Context);
    const [dots, setDots] = React.useState([]);

    React.useEffect(() => {

        setDots(getDots());

    }, [getDots]);

    return (
        <div className="dots">
            {dots.map((item, index) => {
                return (
                    <div
                        key={index}
                        data-item={index + 1}
                        className={`dot-item ${index + 1 === active ? 'active' : ''}`}
                        onClick={onClickDotItem}
                    ></div>
                )
            })}
        </div>
    )
}

export default Pagination;