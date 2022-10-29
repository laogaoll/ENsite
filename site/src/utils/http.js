/*
method:请求的方法，默认GET
headers：请求的头信息，包含与请求关联的Headers对象
body：请求的body内容。注意GET或HEAD方法的请求不能包含body信息
*/

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

async function getData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


export const test = () => {
    postData('http://121.5.5.157:8000/login', {
        uid: "20050027",
        pwd: "20050027",
    })
        .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
        });
}