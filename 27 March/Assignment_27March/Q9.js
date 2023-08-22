fetch("https://jsonplaceholder.typicode.com/posts/123456789")  
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log("Error Occurred"))