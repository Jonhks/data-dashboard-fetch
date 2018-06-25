
// ------------------------------------------------------------------------------------
// const cohortsDetails = document.getElementById("cohorts");
// let cohort = "";
// for (let index = 0; index < cohorts.length; index ++ ) {
//   // console.log(cohorts[index].id;
//   cohort = cohort + `<option value= "se">${cohorts[index].id}</option>`
// console.log(cohort.value);  
// cohortsDetails.innerHTML = cohort;
// };

// //  const cohortAAlumnas = () => console.log(cohorts.value);
// //  cohortsDetails.addEventListener("change", cohortAAlumnas);

// cohort.forEach(element => {
//   console.log(element);
// });

// ------------------------------------------------------------------------------



// getJSON('../data/cohorts/cohorts.json',
// function(err, data) {
//   if (err !== null) {
//     alert('Something went wrong: ' + err);
//   } else {
//     alert('Your query count: ' + data.query.count);
//   }
// });

// let url = '../data/cohorts/cohorts.json';

// fetch(url)
// .then(res => res.json())
// .then((out) => {
//   console.log('Checkout this JSON! ', out);
// })
// .catch(err => { throw err });


// $.ajax({
//   url: "../data/cohorts/cohorts.json",
//   type: "POST",
//   cache: false,
//   success: function(data){
//       console.log(data);
//   },  
//   error: function(data){
//       console.log(data);
//   }
// });

// const cohorts = 'https://api.laboratoria.la/cohorts';

// const responseCohorts = new XMLHttpRequest();
// responseCohorts.open('GET', cohorts);
// responseCohorts.send();
// responseCohorts.onload = function() {
//   console.log(responseCohorts.response);
// }

 
// -------------------------solo ingresa a cohorts

// const cohortsSelect = document.getElementById('cohorts');

// const cohorts = 'https://api.laboratoria.la/cohorts';
// const responseCohorts = new XMLHttpRequest();
// responseCohorts.open('GET', cohorts);
// responseCohorts.send();
// responseCohorts.onload = function() {
// const cohortsCom = responseCohorts.response;
// const cohortsJson = JSON.parse(cohortsCom);
// const arrayId = [];
//     cohortsJson.forEach(element => {
//         let cohortUnico = element.id;
//         arrayId.push(cohortUnico);
//         let cohortOption = `<option class="option" value="${cohortUnico}" onchange = "aUsers()">${cohortUnico}</option>`;
//         cohortsSelect.insertAdjacentHTML('beforeEnd', cohortOption);  
//         const tagCohor = document.getElementsByClassName('option');
//         console.log(tagCohor[0]);
//     });
// // aUsers(arrayId, cohortOption);
// }
// // La consola, el html semantico

// // document.write y clasName tagname

// aUsers = () => {
//     console.log(si);
// }
 
// ---------------------------------------------No pude ingresar a users


// const cohortsSelect = document.getElementById('cohorts');
// const cohorts = 'https://api.laboratoria.la/cohorts';
// const responseCohorts = new XMLHttpRequest();
// responseCohorts.open('GET', cohorts);
// responseCohorts.send();
// responseCohorts.onload = function() {
//     const cohortsCom = responseCohorts.response;
//     const cohortsJson = JSON.parse(cohortsCom);
//     // console.log(cohortsJson);
//     const cohortId = [];
//     cohortsJson.forEach(element => {
//         cohortId.push(element.id);
//     });   
//     // console.log(cohortId);
//     const cohortUsers = [];
//     cohortsJson.forEach(element => {
//         console.log(responseCohorts)
//     });
// }




// const getJSON = (url, callback) => {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = _ => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         return callback(new Error(`HTTP error: ${xhr.status}`));
//       }
//       try {
//         callback(null, JSON.parse(xhr.responseText));
//       } catch (err) {
//         callback(err);
//       } 
//     } 
//   };

//   xhr.open('GET', url);
//   xhr.send();   
// };

// let progress;
// let users;

// const done = _ => {
//   console.log("done")
//   if (progress && users) {
//     console.log("Se cumplieron las 2")
//   }
// }

// getJSON('https://api.laboratoria.la/cohorts/aqp-2018-03-jp-core-talento/progress', (err, json) => {
//   if (err) {
//     // algo salió mal...
//     return console.error(err);
//   }

//   progress = json;
//   done();
//   console.log(json); // => la data!!
// });

// getJSON('https://api.laboratoria.la/cohorts/aqp-2018-03-jp-core-talento/users', (err, json) => {
//   if (err) {
//     // algo salió mal...
//     return console.error(err);
//   }

//   users = json;
//   done();
//   console.log(json); // => la data!!
// });


// obtenerCohorts= () =>  {
//   const cohortsSelect = document.getElementById('cohorts');
//   const cohorts = 'https://api.laboratoria.la/cohorts';
//   const responseCohorts = new XMLHttpRequest();
//   responseCohorts.open('GET', cohorts);
//   responseCohorts.send();
//   responseCohorts.onload = function() {
//       const cohortsCom = responseCohorts.response;
//       const cohortsJson = JSON.parse(cohortsCom);
//       let count = 0;       
//       cohortsJson.forEach(element => {  
//           const cohortsId = element.id; 
//           count += 1;    
          // const cohortOption = `<option class = "option" data-set=${cohortsId} value="${cohortsId}">${cohortsId}</option>`;
//           // console.log(cohortOption);
//           // cohortsSelect.innerHtml = cohortOption;
//           cohortsSelect.insertAdjacentHTML('beforeEnd', cohortOption);  
//           // const users = `https://api.laboratoria.la/cohorts/${cohortsId}/users`;
//           // const responseUsers = new XMLHttpRequest();
//           // responseUsers.open('GET', users);
//           // responseUsers.send();
//           // responseUsers.onload = function () {
//           //     const usersData = responseUsers.response;
//           //     const userJson = JSON.parse(usersData);
//           //     console.log(cohortsId, userJson);
//           // }
//       });
//       aUsers(cohortsSelect);
//   }
// }

// // obtenerCampuses = () => {
// //   const campusesSelect = document.getElementById('campuses');
// //   const campuses = 'https://api.laboratoria.la/campuses';
// //   const responseCampuses = newHMLHttpRequest();
// //   responseCampuses.open('GET' campuses);

// // }


// window.obtenerCohorts();

// aUsers = (cohortsSelect) => {
//   console.log("a usuarias")
//   eventoMostrar = () => {
//       // const option = Array.from(document.getElementsByClassName("option"));
//       // option.forEach(element=>{
//       //     const optionUnico = element.dataset.set;
//       //     // console.log(optionUnico)            
//       // })
//       // console.log('si')
//       const usersSelect = document.getElementById('users');    
//       const selectVal = cohortsSelect.value;
//       console.log(selectVal);
//       const users = `https://api.laboratoria.la/cohorts/${selectVal}/users`;
//           const responseUsers = new XMLHttpRequest();
//           responseUsers.open('GET', users);
//           responseUsers.send();
//           responseUsers.onload = function () {
//               const usersData = responseUsers.response;
//               const userJson = JSON.parse(usersData);
//               userJson.forEach(element => {  
//                   const userName = element.name; 
//                   const userId = element.users;
//                   console.log(element.name);
//                   usersOption = `<option class = "option" data-set= "" value="">${userName}</option>`;
//                   // console.log(cohortOption);
//                   // cohortsSelect.innerHtml = cohortOption;
//                   usersSelect.insertAdjacentHTML('beforeEnd', usersOption);  
//           });            
//       }
//       usersSelect.innerHTML = " ";
      
      
//   }
// }
const getJson = url => fetch(url).then(response => response.json())


Promise.all(
  [getJson('https://api.laboratoria.la/cohorts/cdmx-2017-10-bc-core-pm'),
  getJson('https://api.laboratoria.la/cohorts/cdmx-2017-10-bc-core-pm/users'),
  getJson('https://api.laboratoria.la/cohorts/cdmx-2017-10-bc-core-pm/progress')
  ]
).then(resultados=> {
  computeUsersStats(resultados[1], resultados[2], Object.keys(resultados[0].coursesIndex));
}) 

const computeUsersStats  = (users, progress, courses) => {
// console.log("users" , users)
// console.log("progress" , progress)
// console.log("courses" , courses)


  const usersWithStats = users.map(user => {
    const userProgress = progress[user.id];
    return courses.reduce((memo, course) => {
      // console.log(userProgress[course], course)
      const sum = memo.stats.sum + userProgress[course].percent;
      return {
          stats: {
          percent: sum / courses.length,
          sum: sum,
        }
    }
    },
      {stats: {
        percent: 0,
        sum: 0,
      }})
  })
  console.log(usersWithStats);
}


