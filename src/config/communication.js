let baseUrl = {
    url: "https://jsonplaceholder.typicode.com/"
}
export default async function get(endpoint) {
    try {
        let data = await fetch(baseUrl.url + endpoint)
            .then((res) =>  res.json())
            .then((json)=>  json)
            .catch((err) => err)
            return data
    } catch (err) {
        console.error(err)
    }
}