import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, url, size, history, link, match}) => (

            <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${link}`)}>
                <div className="backgroundImage" style={{backgroundImage: `url(${url})`}} />
                <div className="content">
                    <h1 className="title"> { title } </h1>
                    <span className="subtitle"> Shop now  </span>
                </div>
            </div>

)

export default withRouter(MenuItem);