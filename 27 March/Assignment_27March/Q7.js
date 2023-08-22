async function fetchData (){
    try{
        const response1 = await fetch ("http://jsonplaceholder.typicode.com/todos/1");
        const tododata = await response1.json();
        const response2 = await fetch ("https://jsonplaceholder.typicode.com/posts/1");
        const postsdata = await response2.json();

        const combined = {
            todo:tododata,
            post:postsdata
        }
        console.log(combined);
    } catch(error){
        console.error(error);
    }   
}
fetchData();