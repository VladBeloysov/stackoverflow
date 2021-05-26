import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import { SEARCH_PAGE_ROUTE, RESULT_PAGE_ROUTE, INFO_PAGE_ROUTE } from '../../constants/routes';
import { connect } from 'react-redux';

import PageSearch from "../page-search/page-search";
import PageResult from "../page-result/page-result";
import PageInfo from "../page-info/page-info";
import PageError from "../page-error/page-error"

import 'reset-css';
import './app.scss';
import {getAnswers, getQuestion, getQuestionAuthor, getQuestionTag} from "../../store/actions";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact={ true }
                        path={ SEARCH_PAGE_ROUTE }
                        component={ PageSearch }
                    />
                    <Route
                        exact={ true }
                        path={ RESULT_PAGE_ROUTE }
                        component={ PageResult }
                    />
                    <Route
                        exact={ true }
                        path={ INFO_PAGE_ROUTE }
                        component={ PageInfo }
                    />
                    <Route
                        path='*'
                        component={ PageError }
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {  };
};

const mapDispatchToProps = { getQuestion, getQuestionTag, getAnswers, getQuestionAuthor };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));