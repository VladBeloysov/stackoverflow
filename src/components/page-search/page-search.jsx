import React from 'react';
import './page-search.scss';
import { RESULT_PAGE_ROUTE } from "../../constants/routes";
import { Link, withRouter } from "react-router-dom";
import { getQuestion } from "../../store/actions";
import { connect } from "react-redux";

class PageSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchStr: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    onSearch = (searchStr) => {
        console.log('app onSearch', searchStr);
        this.props.getQuestion(searchStr);
    }

    handleChange(event) {
        this.setState({searchStr: event.target.value});
    }

    render() {
        return (
            <div className="search">
                <h1 className="search__title">Поиск</h1>
                <form className="search__form">
                    <input value={ this.state.searchStr } onChange={ this.handleChange } className="search__input" type="text" placeholder="Запрос поиска"/>
                    <Link to={ RESULT_PAGE_ROUTE } onClick={ ()=>this.onSearch(this.state.searchStr) } className="search__btn">Искать</Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {  };
};

const mapDispatchToProps = { getQuestion };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageSearch));