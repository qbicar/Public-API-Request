



$.ajax({
    url: 'https://randomuser.me/api/?results=12&lang=en-US',
    datatype: 'json',
    success: function (data) {
        jsonData = data.results
        jsonData.forEach(employee => {
            const image = employee.picture.large
            const Fname = employee.name.first
            const Lname = employee.name.last
            const email = employee.email
            const city = employee.location.city
            const state = employee.location.state
            const template = `
                <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${image}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${Fname} ${Lname}</h3>
                        <p class="card-text">${email}</p>
                        <p class="card-text cap">${city}, ${state}</p>
                    </div>
                </div>`
            $('#gallery').append(template)
        });
    }

});
const searchBar = `
                <form action="#" method="get">
                         <input type="search" id="search-input" class="search-input" placeholder="Search...">
                         <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
                    </form>`
$('.search-container').append(searchBar)

//create function funtion for X 
//and append below

function modalX(x) {
    const image = jsonData[x].picture.large
    const Fname = jsonData[x].name.first
    const Lname = jsonData[x].name.last
    const email = jsonData[x].email
    const city = jsonData[x].location.city
    const phone = jsonData[x].phone
    const state = jsonData[x].location.state
    const street = jsonData[x].location.street
    const zip = jsonData[x].location.postcode
    let dob = jsonData[x].dob.date
    dob = dob.slice(5, 7) + "/" + dob.slice(8, 10) + "/" + dob.slice(0, 4)
    $('body').append(`<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src = "${image}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${Fname} ${Lname}</h3>
                <p class="modal-text">${email}</p>
                <p class="modal-text cap">${city}</p>
                <hr>
                    <p class="modal-text">${phone}</p>
                    <p class="modal-text">${street}, ${city}, ${state}, ${zip}</p>
                    <p class="modal-text">Birthday:${dob}</p> 
                    </div>
                </div>
                   <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
            </div>`)

    $("#modal-close-btn").click(function () {
        $('.modal-container').remove()
    });

//     $("#modal-prev").click(function () {
//         if (this)
// })
}

//click for xtra credit prev //disable if x === 0 
//click for xtra credi next // disable if x === 12
//call x function in xtra credit clicks

$("#gallery").on("click", ".card", function () {
    console.log("monkeykey")
    x = ($(this).index())
    modalX(x);

})



//on click for gallery card 
//call the function for x . 
