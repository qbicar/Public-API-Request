

fetch('https://randomuser.me/api/?results=12&nat=US')            //goes to the website and grabs 12 array results to display and  US employees 
    .then(response => response.json())                          //response will send out a promise and respond with json datatpe
    .then(function (profile) {                                 //then the function profile will execute
        jsonData = profile.results                            //set a variable to display the results
        jsonData.forEach(employee => {                       //for each result, an array of my employees will display the following variable below:
            let image = employee.picture.large
            let Fname = employee.name.first
            let Lname = employee.name.last
            let email = employee.email
            let city = employee.location.city
            let state = employee.location.state
            //<=========================set markup to a variable named html ==========================================    
            html = ` <div class="card">                     
                    <div class="card-img-container">
                        <img class="card-img" src="${image}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${Fname} ${Lname}</h3>
                        <p class="card-text">${email}</p>
                        <p class="card-text cap">${city}, ${state}</p>
                    </div>
                </div>`
            $('.card').innerHTML = html
            $('#gallery').append(html)              //dynamically append html content to my id gallery
        })
    })
//<=========================function to append modal html and json result data inside of modal==============
function modalX(x) {
    image = jsonData[x].picture.large
    Fname = jsonData[x].name.first
    Lname = jsonData[x].name.last
    email = jsonData[x].email
    city = jsonData[x].location.city
    phone = jsonData[x].phone
    state = jsonData[x].location.state
    street = jsonData[x].location.street
    zip = jsonData[x].location.postcode
    dob = jsonData[x].dob.date
    dob = dob.slice(5, 7) + "/" + dob.slice(8, 10) + "/" + dob.slice(0, 4) //slice is used to change the way the birthday was displayed
    //<===========================append modal html to body================================================
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
                </div>`)
    //<=====================================Click Event listener to close when x button is clicked===============
    $("#modal-close-btn").click(function () {
        $('.modal-container').remove()
    });
    //<=====================================Click Event Listener to display the modal when a employee card is clicked
} $("#gallery").on("click", ".card", function () {
    x = ($(this).index())                   //the value index of employee which is set to the variable x will
    modalX(x);                             // then call my modal(X) function to display.
})