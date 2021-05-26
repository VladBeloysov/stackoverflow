import React from 'react';
import { SEARCH_PAGE_ROUTE } from "../../constants/routes";
import { Link } from "react-router-dom";

class PageError extends React.Component {
    render() {
        return (
            <div className="info">
                <h1 className="info__title">404</h1>
                <h2>Такой страницы не существует</h2>
                <Link to={ SEARCH_PAGE_ROUTE }>Перейти на главную</Link>
            </div>
        );
    }
}

export default PageError;