export function fetchArticles(search: string = '') {
    return fetch(`https://dev.to/api/articles?${search}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error('Error:', error));
}
