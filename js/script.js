let jsonData;



$.ajax({
    url: 'https://randomuser.me/api/?results=12&lang=en-US',
    datatype: 'json',
    success: function (data) {
        jsonData = data.results
        jsonData.forEach(employee => {
            const image = employee.results
            const name = employee.results
            const email = employee.results
            const location = employee.results
        });
        console.log(data);
    }

});

const template = [`
                <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">first last</h3>
                        <p class="card-text">${email}</p>
                        <p class="card-text cap">city, state</p>
                    </div>
                </div>`]
const searchBar = [`
                <form action="#" method="get">
                         <input type="search" id="search-input" class="search-input" placeholder="Search...">
                         <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
                    </form>`]
const modal = [` 
                <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                        <h3 id="name" class="modal-name cap">name</h3>
                        <p class="modal-text">${email}</p>
                        <p class="modal-text cap">city</p>
                        <hr>
                        <p class="modal-text">(555) 555-5555</p>
                        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                        <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>`]
const myDiv = document.createElement("div")
const htmlBody = document.querySelector("body")
htmlBody.append(myDiv)
// myDiv.append(modal)
// myDiv.setAtrribute('class', 'modal-container')
// $('#gallery').append(template)
$('.search-container').append(searchBar)

htmlBody.append(modal)


$("#modal-close-btn").click(function () {
    // $.ajax({
    //     url: "demo_test.txt", success: function (result) {
    //         $("#div1").html(result);
    //     }
    // });
});