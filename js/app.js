
function get_req(details) {
    axios.request({
        url: `https://reqres.in/api/users`
    }).then(sucess).catch(fail)

}
function sucess(response) {
    let div_holder = document.getElementById(`div_holder`)
    for (let i = 0; i < response.data.data.length; i++) {
        div_holder.insertAdjacentHTML(`beforeend`, `<p>${response[`data`][`data`][i][`first_name`]}</p>`)
        div_holder.insertAdjacentHTML(`beforeend`, `<p>${response[`data`][`data`][i][`last_name`]}</p>`)
        div_holder.insertAdjacentHTML(`beforeend`, `<p>${response[`data`][`data`][i][`email`]}</p>`)
        div_holder.insertAdjacentHTML(`beforeend`, `<img src="${response[`data`][`data`][i][`avatar`]}" />`)
    }
}
function fail(response) {
    let div_holder = document.getElementById(`div_holder`)
    div_holder[`innerHTML`] = `somthing went wrong`
}
let req_but = document.getElementById(`req_butt`)
req_but.addEventListener(`click`, get_req)

let users_name = document.getElementById(`name_inp`)
let username_val = users_name[`value`]
let users_job = document.getElementById(`job_inp`)
let userjob_val = users_job[`value`]

function push_employee(details) {
    axios.request({
        url: `https://reqres.in/api/users`,
        methode: `POST`,
        data: {
            name: username_val,
            job: userjob_val,
        }
    }).then(complete).catch(failure)
}
function complete(response){
    let user_results = document.getElementById(`user_results`)
    user_results.insertAdjacentHTML(`beforeend`, `<p>${response[`data`][`name`]}</p>`)
    user_results.insertAdjacentHTML(`beforeend`, `<p>${response[`data`][`job`]}</p>`)
}
function failure(response) {
    let user_results = document.getElementById(`user_results`)
    user_results[`innerHTML`] = `somthing went wrong`
}
let user_button = document.getElementById(`imploy_but`)
user_button.addEventListener(`click` , push_employee)