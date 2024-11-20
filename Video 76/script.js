// async function getData() {
//     // This async function used to run process in background
//     // Simulate getting data from server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455);
//         }, 3500);
//     })
// }


// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await response.text();
    return data;
}


async function main() {
    console.log("loading Module..");
    console.log("Do something else..")
    console.log("load data..")
    let data = await getData()
    // await getData() is use to waint the asynch fnc till complete.
    //For this we have to create a function
    console.log(data);
    console.log("Process Data..");
}

main();

// data.then((v) => {
//     console.log(data);

//     console.log("Process Data..");

// })

