import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './page-search.scss';
import { search } from '../../actions/index'

class PageSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchStr: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleChange(event) {
        this.setState({searchStr: event.target.value});
    }

    onSearch() {
        this.props.search(this.state.searchStr);
    }

    render() {
        return (
            <div className="search">
                <h1 className="search__title">Поиск</h1>
                <form className="search__form">
                    <input value={this.state.searchStr} onChange={ this.handleChange } className="search__input" type="text" placeholder="Запрос поиска"/>
                    <button className="search__btn" onClick={ this.onSearch } disabled={!this.state.searchStr}>Искать</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search }, dispatch);
}

export default connect(null, mapDispatchToProps)(PageSearch);