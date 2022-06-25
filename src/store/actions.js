export const SEARCH = 'SEARCH';

export function search(term){
    return { type: SEARCH, term: term }
}

