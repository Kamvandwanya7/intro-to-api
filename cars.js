const carsTemplate = document.querySelector('.carsTemplate');
const the_cars = document.querySelector('.theCars');

const carsColor= document.querySelector('.carsColor');
// const colour= document.querySelector('.theColors')
// var car_colours= Handlebars.compile(carsColor.innerHTML)

var carsOutput = Handlebars.compile(carsTemplate.innerHTML)
 

document.addEventListener('DOMContentLoaded', function () {
    axios
        .get(`https://api-tutor.herokuapp.com/v1/cars`)
        .then(result => {
            const carResult = result.data;
            console.log(carResult);
            let html = carsOutput({
                carUser: carResult
            });
            // console.log(the_cars);
            the_cars.innerHTML = html;
        })


        axios
        .get(`https://api-tutor.herokuapp.com/v1/colors`)
        .then(result => {
            const resultColor = result.data;
            console.log(resultColor);
            let html = carsOutput({
                carColor: resultColor
            });
            // console.log(carsColor);
            carsColor.innerHTML = html;
        })
         
        axios
        .get(`https://api-tutor.herokuapp.com/v1/makes`)
        .then(result => {
            const carMake = result.data;
            console.log(carMake);
            let html = carsOutput({
                carColor: resultColor
            });
            // console.log(carsColor);
            carsColor.innerHTML = html;
        })

        /v1/makes
})


//         postsElem.innerHTML = "";
//         setTimeout(() => {
//             posts.forEach(post => {
//                 postsElem.innerHTML += `<div> ${post.title} </div>`
//             });
//         }, 500)