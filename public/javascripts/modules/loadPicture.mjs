export async function fetchPicture () {
    let i = Math.floor(Math.random()*5);
    let url = `http://localhost:3000/users/facit${i}`;
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }

    });
    return await response.json()
};