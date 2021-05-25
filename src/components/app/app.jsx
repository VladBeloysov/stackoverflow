import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import { SEARCH_PAGE_ROUTE, RESULT_PAGE_ROUTE, INFO_PAGE_ROUTE } from '../../constants/routes';
import { connect } from 'react-redux';

import PageSearch from "../page-search/page-search";
import PageResult from "../page-result/page-result";
import PageInfo from "../page-info/page-info";
import QuickPanel from "../quick-panel/quick-panel";

import 'reset-css';
import './app.scss';
import {getQuestion, getQuestionAuthor, getQuestionTag} from "../../store/actions";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.onSearchAuthor = this.onSearchAuthor.bind(this);
    }

    onSearchAuthor = (authorID) => {
        console.log('app onSearchAuthor', authorID);
        this.props.getQuestionAuthor(authorID);
    }

    onSearchTag = (tag) => {
        console.log('app onSearchTag', tag);
        this.props.getQuestionTag(tag);
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
                            <Route path={ RESULT_PAGE_ROUTE }>
                                <PageResult questionList={ this.props.questionList } onSearchAuthor={ this.onSearchAuthor } onSearchTag={ this.onSearchTag } />
                            </Route>
                            <Route
                                exact={ true }
                                path={ INFO_PAGE_ROUTE }
                                component={ PageInfo }
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
    return { questionList: state.questionList, questionAuthorList: state.questionAuthorList, questionTagList: state.questionTagList };
};

const mapDispatchToProps = { getQuestion, getQuestionAuthor, getQuestionTag };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));