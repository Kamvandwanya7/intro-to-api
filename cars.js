const carsTemplate = document.querySelector('.carsTemplate');
const the_cars = document.querySelector('.theCars');
const carModels = document.querySelector('.carModel')
const carColor = document.querySelector('.carColor')
const filterBtn = document.querySelector('.filter')


// const carsColor= document.querySelector('.carsColor');
const colour = document.querySelector('.theColors')


var carsOutput = Handlebars.compile(carsTemplate.innerHTML)
var car_colour= Handlebars.compile(carColor.innerHTML)


document.addEventListener('DOMContentLoaded', function () {
    axios
        .get(`https://api-tutor.herokuapp.com/v1/cars`)
        .then(result => {
            const carResult = result.data;
            let html = carsOutput({
                carUser: carResult
            });
            the_cars.innerHTML = html;
        })
        })


//     axios
//         .get(`https://api-tutor.herokuapp.com/v1/colors`)
//         .then(result => {
//             const resultColor = result.data;
//             let html = carsOutput({
//                 carColor: resultColor
//             });
//             the_cars.innerHTML += html;
//         })

//     axios
//         .get(`https://api-tutor.herokuapp.com/v1/makes`)
//         .then(result => {
//             const carMake = result.data;
//     console.log();
//             let html = carsOutput({
//                 carColor: carMake
//             });
//             the_cars.innerHTML += html;
//         })



//         postsElem.innerHTML = "";
//         setTimeout(() => {
//             posts.forEach(post => {
//                 postsElem.innerHTML += `<div> ${post.title} </div>`
//             });
//         }, 500)


filterBtn.addEventListener('click', function () {
    console.log(carModels.value, carColor.value);
    if (carModels && carColor) {
        axios
            .get(`https://api-tutor.herokuapp.com/v1/cars/make/${carModels.value}/color/${carColor.value}`)
            .then(result => {
                const carColour = result.data;
                // console.log(resultColor);
                let html = carsOutput({
                    carUser: carColour
                });
                // console.log(the_cars);
                the_cars.innerHTML = html;
            })
    }

})