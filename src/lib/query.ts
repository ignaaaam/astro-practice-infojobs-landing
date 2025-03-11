const INFOJOBS_API_ENDPOINT = "https://api.infojobs.net/api/1/"

const TOKEN = import.meta.env.API_INFOJOBS_TOKEN

export const query = (path: string) => {
    const url = `${INFOJOBS_API_ENDPOINT}${path}`
    fetch(url, {
        headers: {
            Authorization: `Basic ${TOKEN}`,
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
}

export const getDictionary = (dictionaryId: number) => {
    return query(`/dictionary/${dictionaryId}`)
}