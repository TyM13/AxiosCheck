

function successfunction(response) {
    for (let i = 0; i < response[`data`].length; i++)
    {
    document.body.insertAdjacentHTML(`afterbegin`,`<h3>${response[`data`][i][`title`]}</h3>`)
    document.body.insertAdjacentHTML(`afterbegin`, `<p>${response[`data`][i](`body`)}</p>`)
    }
}


function failurefunction(error) {
    document.body.insertAdjacentHTML(`afterbegin`, `<h1>We have an ERROR!</h1>`)
}



axios.request({
   url: `https://jsonplaceholder.typicode.com/posts`
}).then(successfunction).catch(failurefunction);