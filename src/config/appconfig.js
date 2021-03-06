const AppConfig = {
    SEARCH_URL: {
        base_url: 'https://api.stackexchange.com/2.2/search?key=ZUWkU8YnaeWNsBndID5nqw((&site=stackoverflow&page=1&order=desc&sort=activity&intitle=',
        filter: '&filter=!-*f(6rc.lFba'
    },
    AUTHOR_URL: {
        // base_url: 'https://api.stackexchange.com/2.2/users/{ids}/questions?order=desc&sort=activity&site=stackoverflow',
        // filter: '&filter=!-*f(6rc.lFba'
    },
    TAG_URL: {
        base_url: '',
        filter: '&filter=!-*f(6rc.lFba'
    },
    ANSWER_URL: {
        base_url: 'https://api.stackexchange.com/2.2/questions/answers?key=ZUWkU8YnaeWNsBndID5nqw((&site=stackoverflow&order=desc&sort=activity',
        filter: '/answers?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=!9YdnSMKKT'
    },
    searchResultCollection: []
};

export default AppConfig;
