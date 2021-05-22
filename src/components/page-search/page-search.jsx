import React from 'react';
import { connect } from 'react-redux';
import './page-search.scss';
import { setAnswers, setSearch } from '../../store/actions/index';
import history from "../../history";
import {RESULT_PAGE_ROUTE, SEARCH_PAGE_ROUTE} from "../../constants/routes";
import {BrowserRouter, Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {bindActionCreators} from "redux";

class PageSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchStr: "",
            validateForm: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleChange(event) {
        this.setState({searchStr: event.target.value});
    }

    onSearch(e) {
        e.preventDefault();
        if (this.state.searchStr.length > 0) {
            this.props.setSearch(this.state.searchStr);
            this.setState({validateForm: true});
        }
    }

    render() {
        return (
            this.state.validateForm ? (
                <Redirect to={ RESULT_PAGE_ROUTE }/>
            ) : (
                <div className="search">
                    <h1 className="search__title">Поиск</h1>
                    <form className="search__form">
                        <input value={this.state.searchStr} onChange={ this.handleChange } className="search__input" type="text" placeholder="Запрос поиска"/>
                        <button onClick={ this.onSearch } className="search__btn" disabled={!this.state.searchStr}>Искать</button>
                    </form>
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => {
    return { question: state.question, answer: state.answer, rew: state.rew};
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setSearch, setAnswers }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PageSearch);