import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, url, size}) => (

            <div className={`${size} menu-item`}>
                <div className="backgroundImage" style={{backgroundImage: `url(${url})`}} />
                <div className="content">
                    <h1 className="title"> { title } </h1>
                    <span className="subtitle"> Shop now</span>
                </div>
            </div>

)

export default MenuItem;