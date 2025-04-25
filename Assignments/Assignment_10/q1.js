let patients = [ 
    { P_Id: 1, Name: "Alen", Age: 39 }, 
    { P_Id: 2, Name: "Deena", Age: 47 }, 
    { P_Id: 3, Name: "Diana", Age: 21 }, 
    { P_Id: 4, Name: "Jack", Age: 54 }, 
    { P_Id: 5, Name: "Jain", Age: 23 }, 
    { P_Id: 6, Name: "Kelvin", Age: 61 }, 
    { P_Id: 7, Name: "Louis", Age: 69 }, 
    { P_Id: 8, Name: "Rex", Age: 49 } 
]; 
 
function sortByAgeDescending() { 
    let sortedPatients = patients.slice().sort((a, b) => b.Age - a.Age); 
    console.log("Sorted by Age (Descending):"); 
    sortedPatients.forEach(p => console.log(`P-Id: ${p.P_Id}, Name: ${p.Name}, 
Age: ${p.Age}`)); 
} 
 
function checkPId(pId) { 
    let isPresent = patients.some(p => p.P_Id === pId); 
    if (isPresent) { 
        console.log(`P-Id ${pId} is present in the list.`); 
    } else { 
        console.log(`P-Id ${pId} is NOT present in the list.`); 
} 
} 
function filterByAgeRange(minAge, maxAge) { 
let filteredPatients = patients.filter(p => p.Age >= minAge && p.Age <= 
maxAge); 
console.log(`Patients with Age between ${minAge} and ${maxAge}:`); 
if (filteredPatients.length > 0) { 
filteredPatients.forEach(p => console.log(`P-Id: ${p.P_Id}, Name: 
${p.Name}, Age: ${p.Age}`)); 
} else { 
console.log("No patients found in this age range."); 
} 
} 
sortByAgeDescending();         
checkPId(3);                   
checkPId(10);                  
filterByAgeRange(40, 60);      
filterByAgeRange(20, 25); 