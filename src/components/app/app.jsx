import React from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { SEARCH_PAGE_ROUTE, RESULT_PAGE_ROUTE, INFO_PAGE_ROUTE } from '../../constants/routes';
import { connect } from 'react-redux';

import PageSearch from "../page-search/page-search";
import PageResult from "../page-result/page-result";
import PageInfo from "../page-info/page-info";
import QuickPanel from "../quick-panel/quick-panel";
import PageError from "../page-error/page-error"

import 'reset-css';
import './app.scss';

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
                            <Route
                                path='*'
                                component={ PageError }
                            />
                        </Switch>
                    </BrowserRouter>
                </div>
                <div className="sidebar">
                    <h3>Панель быстрого отображения</h3>
                    { this.props.questionAuthorList ? <QuickPanel questionList={ this.props.questionAuthorList }></QuickPanel> : null }
                    { this.props.questionTagList ? <QuickPanel questionList={ this.props.questionTagList }></QuickPanel> : null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { questionAuthorList: state.questionAuthorList, questionTagList: state.questionTagList };
};

const mapDispatchToProps = {  };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));