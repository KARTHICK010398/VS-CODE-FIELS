// // const resolvepromise = true;
// // const promiseObj = new Promise((resolve,reject)=>{
// //     if(resolvepromise){
// //         resolve("im your boss and do what i say");
// //     }
// //     else reject('im a reject promize')
    
// // });

// // console.log(promiseObj);

// // promiseObj.then((value)=>{
// //     console.log(value);
// // });

// // // const afunction = (value) =>{
// // //     console.log("your value",value)
// // // };

// // // const displaydata = (a,b,display) =>{
// // //   afunction(a*b);
// // // };

// // // displaydata(10,50,afunction);

// // // setTimeout(()=>{
// // //     console.log("hi karthick")
// // // },2000)

// // // setTimeout(()=>{
// // //     console.log("hi karthick")
// // // },3000)

// // // setTimeout(()=>{
// // //     console.log("hi karthick")
// // // },6000)

// // // setTimeout(()=>{
// // //     console.log("hi karthick")
// // // },5000);

// // const resultValue = fetch("https://restcountries.com/v3.1/all").then(response=>{

//     // return response.json();
//     // console.log(response)

// // })
// // .then(result=>console.log(result))

// // console.log(response)


// const p1 = fetch("https://restcountries.com/v3.1/all")
// .then(response=>{
//     // console.log(response)
//     // console.log(response.json())
//     return response.json()
// }).then(result=>{
//     console.log(result)
// }).catch((err)=>{
//    console.log(err) 
// })
// // console.log(p1)


// const weatherResponse = fetch("https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=991f626650507e6605c2ca33f8edc191")
// .then(response=>{
//     // console.log(response)
//     // console.log(response.json())
//     return response.json()
// }).then(result=>{
//     console.log(result)
// }).catch((err)=>{
//    console.log(err) 
// });

// try catch :

// console.log("line 78")
// console.log("line 79")

// try{
//     console.log("line 82")
//    throw new Error("here one error is there")
//    console.log("line 84")
// } catch(err){
//     console.log(err)
// }

// console.log("line 89")
// console.log("kine 90")

// const p4 = async ()=>{
//     await new Promise ((resolve)=>{
//         setTimeout(()=>{
//             resolve("this is the resolve promise")
//         },4000)

//         console.log("line 1")
//         console.log("line 2")
//     })
// }

// p4();
// console.log("out side fun")









// VERIFY EMAIL :

// const idElememt = document.getElementById('email-inp');

// const  verfyURL = " https://emailvalidation.abstractapi.com/v1/?api_key=73b664f38ad04d0ba49de0cdd88c4c0c&email="

// const spanElement = document.createElement('span');
// spanElement.style.color = "#fff";
// spanElement.style.padding = "10px"


// const verfyEmail = async () =>{
//     const response = await  fetch(`${verfyURL}${idElememt.value}`)
//     const data = await response.json();
//     console.log(data);
//     spanElement.innerText = data.email;
//     if(data.deliverability ==="DELIVERABLE"){
//         spanElement.classList.add("bg-success");
//     }else{
//         spanElement.classList.add("bg-danger");
//     }
   
// }

// document.body.append(spanElement);








// WEATHER APIS : 


// const weatherURL = "https://api.openweathermap.org/data/2.5/weather"
// const apikey = "e089330d0641eb7302b2f244bcde4d19" ;

// const getWeather = async () =>{
//     const cityName = document.getElementById("weather-inp").value;
//     const  response = await fetch(`${weatherURL}?q=${cityName}&appid=${apikey}`);
//     const data =  await response.json();
//     console.log(data);
    
//     const  {main : {humidity, feels_like, temp_min, temp_max}} = data;
//     const divelement = document.createElement("div");
//     divelement.style = {
//         hight : '400px',
//         width:'400px',
//         border:'1px solid green',
//         padding:'5px'
    
//     };

//     divelement.innerText = `
//     Humudity : ${humidity}
//     temp Min :${temp_min}
//     temp Max :${temp_max}
//     feels Like :${feels_like}

//     `
// const Weatherarea = document.getElementById("Weather-area");
// Weatherarea.innerHTML = " ";
// Weatherarea.append(divelement);

// }









//MOCK APIS : 

//CRUD OPERATION 

// Read (GET) all , perticular :
// GET API
 
const students = "https://62848cbba48bd3c40b711362.mockapi.io";
//const getstudents = async () => {
//const response = await fetch(`${students}/Students`);
// console.log(response);
//const studentdata = await response.json();
// console.log(studentdata);
/* const std = studentdata.forEach((key) => {
  console.log(key.name);
  console.log(key.id);
  console.log(key.Email);
}); */

//}
// getstudents(); 



// window.addEventListener('DOMContentLoaded',getstudents());



// GET ALL STUDENTS :


const getStudents = async () =>{
  const response = await fetch(`${students}/Students`);
  // console.log(response);
  const studentdata = await response.json();
  console.log(studentdata); 
};





// GET SPECIFIC STUDENT : 

const getStudentById = async (studentId) =>{
  const response = await fetch(`${students}/Students/${studentId}`);
  // console.log(response);
  const studentdata = await response.json();
  console.log(studentdata); 
};  


// CREAT (POST ) ---> CREAT A NEW DATA :

const createStudent = async (payload) =>{
  const response = await fetch(`${students}/Students`,{
    method : "POST",
    body:JSON.stringify(payload),
    headers:{
      "Content-type":"application/json;charset=UTF-8"  
    }
  });
  const studentdata = await response.json();
  console.log(studentdata);
  };



  //UPDATE STUDENT :  


  const updateStudent = async (payload) =>{
    const response = await fetch(`${students}/Students/${payload.id}`,{
      method : "PUT",
      body:JSON.stringify(payload),
      headers:{
        "Content-type":"application/json;charset=UTF-8"
      }
    });
    const studentdata = await response.json();
    console.log(studentdata);
    };

   // DELETE STUDENT :

    const deleteStudentById = async (studentId) =>{
      const response = await fetch(`${students}/Students/${studentId}`,{
        method : "DELETE"
      });
      // console.log(response);
      const studentdata = await response.json();
      console.log(studentdata);

    };  


const getbtn = document.getElementById('get-student');
getbtn.addEventListener('click',()=>{
  const inputvalue = document.getElementById('text-inp').value;   
  getStudents(inputvalue); 
});


const getdeletebtn = document.getElementById('delete-student');
getdeletebtn.addEventListener('click',()=>{
  const inputvalue = document.getElementById('deleteId-inp').value; 
  deleteStudentById(inputvalue); 
});


// sreatstudent({name:"Kannan",email:"kannan@gmail.com"});

// CREAT STUNDENT USING DOM :

const getcreatstudent = document.getElementById('formdata');
getcreatstudent.addEventListener("submit",(event)=>{
  event.preventDefault();
  const elements = event.target.elements;
  console.log(elements);
  const data = {};

  Array(...elements).forEach(element => {
    console.log(element)
    if(element.nodeName === "INPUT"){                                            
      data[element.id] = element.value ; 
    };
  });

  // const divelement = document.createElement('div');
  // divelement.classList.add('student-div');
  // divelement.innerText = `
  // id:${id}
  // Name:${Name}
  // Email:${email}`
  // const studentDetails = document.getElementById('studentDetails');
  // studentDetails.innerHTML = ' ';
  // studentDetails.append(divelement);
  createStudent(data) 
});


// UPDATE (PUT) ====> to update a data :

const getupdatestudent = document.getElementById('update');
getupdatestudent.addEventListener("submit",(event)=>{
  event.preventDefault();
  const elements = event.target.elements;
  console.log(elements);
  const data = {};

  Array(...elements).forEach(element => {
    console.log(element)
    if(element.nodeName === "INPUT"){                                    
      data[element.id] = element.value ; 
    };

  });
  updateStudent(data);

});



// DELETE (DELETE) ====> to remove entity :

/* const deletestudent = async (id) => {
  const response = await fetch(`${students}/Students/${id}`,
  {
    method:"DELETE",
  }
  
  );
  const deletedata = await response.json();
  console.log(deletedata)
};

 deletestudent("2");

*/




































