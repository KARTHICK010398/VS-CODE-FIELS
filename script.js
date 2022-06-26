// for(let inisilationValue = 0 ; inisilationValue<10;inisilationValue++){
//     console.log("Numbers #",inisilationValue);
// }

// let i=20;

// for(;i>10;i--){
    
//     console.log(i);
// }


// let  Name = prompt("Enter Your Name");
// if(Name.length>5){ 
//     alert("Enter proper data");
//     for(;prompt>5;){
//         console.log(prompt("Enter valid Name"))
//     }  
// }
// else{
//     alert("Move next page")
//     // prompt("Re-Enter Your Name")
    
// }


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'e8c7e56acemsha1c16249e44c7a8p1a6be0jsn6e72ba760282'
// 	}
// };

// fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// let BaseUrl = "https://emailvalidation.abstractapi.com/v1/?";
// let Apikey = "73b664f38ad04d0ba49de0cdd88c4c0c& email= karthick@gmail.com";

// const getEmail = async () =>{
//     const Email = document.getElementById('text-inp').value;
// const response = await fetch (`${BaseUrl}  ${Apikey} `);
// // console.log(response);
// const data = await response.json();
// console.log(data);
// }

// getEmail();



// https://emailvalidation.abstractapi.com/v1/  
// ? api_key = YOUR_UNIQUE_API_KEY  
// & email = johnsmith@gmail.com






let url=("https://api.nationalize.io/?name=");
const inputvalue = document.getElementById('input-text');

const NewUrl = async () => {
    const response = await fetch(`${url}${inputvalue.value}`);
    const data = await response.json();
    // const country = await data.country;
    console.log(data);  
    // const {country:{country_id,probability}} = data;                                        
      
    data.country.map((item)=>{
    const divelement = document.createElement('div');
    divelement.classList.add('getData');
    divelement.style.hight ="300px";
    divelement.style.width="300px";
    divelement.style.padding="15px";
    divelement.style.border= "3px solid green";
    divelement.style.backgroundcolor = "red";
        divelement.innerText = `
        Name ---> ${data.name}
        country_id ---> ${item.country_id}
        probability ---> ${item.probability}`
        document.body.append(divelement);
});
    
    // const getdata1 = document.getElementById("getData");
    //     getdata1.innerHTML= "";
    //     document.append(divelement);

}



























