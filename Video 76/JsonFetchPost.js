async function postData(url = "",data = {}) {
    const response = await fetch(url,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
    });
    return response.json();
}

postData("https://example.com/answer",{answer:42}).then((data) => {
    console.log(data);
});
