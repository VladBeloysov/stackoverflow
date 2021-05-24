import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import { SEARCH_PAGE_ROUTE, RESULT_PAGE_ROUTE, INFO_PAGE_ROUTE } from '../../constants/routes';
import { connect } from 'react-redux';

import PageSearch from "../page-search/page-search";
import PageResult from "../page-result/page-result";
import PageInfo from "../page-info/page-info";

import 'reset-css';
import './app.scss';
import { setAnswers, setSearch } from "../../store/actions";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="main">
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
                        </Switch>
                    </BrowserRouter>
                </div>
                <div className="sidebar">
                    <h3>Sidebar</h3>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { questionPromis: state.questionPromis, answer: state.answer};
};

const mapDispatchToProps = { setSearch, setAnswers };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));