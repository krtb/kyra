import React from 'react';
import { Link } from 'react-router-dom';

const Header  = () => {
    return(
        <div class="ui three item menu">
            <Link className="item" to="/graph">Graph</Link>
            <Link className="item" to="/">Home</Link>
        </div>
    )
}

export default Header;