import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import { SEARCH_PAGE_ROUTE, RESULT_PAGE_ROUTE, INFO_PAGE_ROUTE } from '../../constants/routes';
import { connect } from 'react-redux';

import PageSearch from "../page-search/page-search";
import PageResult from "../page-result/page-result";
import PageInfo from "../page-info/page-info";
import QuestionAuthor from "../question-author/question-author";

import 'reset-css';
import './app.scss';
import { setAnswers, getQuestion, getQuestionAuthor } from "../../store/actions";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.onSearchAuthor = this.onSearchAuthor.bind(this);
    }

    onSearchAuthor = (authorID) => {
        console.log('app onSearchAuthor', authorID);
        this.props.getQuestionAuthor(authorID);
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
                                <PageResult questionList={ this.props.questionList } onSearchAuthor={ this.onSearchAuthor } />
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
                    { this.props.questionAuthorList ? <QuestionAuthor questionAuthorList={ this.props.questionAuthorList }></QuestionAuthor> : null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { questionList: state.questionList, questionAuthorList: state.questionAuthorList };
};

const mapDispatchToProps = { getQuestion, setAnswers, getQuestionAuthor };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));