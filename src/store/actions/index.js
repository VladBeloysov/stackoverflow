import {
    ACTIONS_QUESTION_SEARCH,
    ACTIONS_ANSWER_SEARCH
} from '../../constants/actions';

import AppConfig from '../../config/appconfig';
import axios from 'axios';

export function setSearch(searchTerm) {
    const SEARCH_URL = `${AppConfig.SEARCH_URL.base_url}${searchTerm}${AppConfig.SEARCH_URL.filter}`;
    const SEARCH = axios.get(SEARCH_URL).then((data) => {
        const mas = data.data.items;
        //console.log(mas);
        return mas;
    });
    return {
        type: ACTIONS_QUESTION_SEARCH,
        payload: SEARCH
    }
}

export function setAnswers(str) {
    return {
        type: ACTIONS_ANSWER_SEARCH,
        payload: str
    }
}