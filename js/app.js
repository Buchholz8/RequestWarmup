
function get_req(details){
    axios.request({
        url: `https://reqres.in/api/users`
    }).then(sucess).catch(fail)
    
}
function sucess(response){
 let div_holder = document.getElementById(`div_holder`)
    for(let i = 0 ; i < response.data.data.length ; i++){
div_holder.insertAdjacentHTML(`beforeend` , `<p>${response[`data`][`data`][i][`first_name`]}</p>`)
div_holder.insertAdjacentHTML(`beforeend` , `<p>${response[`data`][`data`][i][`last_name`]}</p>`)
div_holder.insertAdjacentHTML(`beforeend` , `<p>${response[`data`][`data`][i][`email`]}</p>`)
div_holder.insertAdjacentHTML(`beforeend` , `<img ${response[`data`][`data`][i][`avatar`]}>`)
    }    
}
function fail(response){
    let div_holder = document.getElementById (`div_holder`)
    div_holder[`innerHTML`] = `somthing went wrong`
}

let req_but = document.getElementById(`req_butt`)
req_but.addEventListener(`click` , get_req)