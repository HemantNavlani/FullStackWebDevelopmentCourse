let books =[
    {author:"abc",year:"2009"},
    {author:"def",year:"2011"},
    {author:"ghi",year:"2012"},
    {author:"jkl",year:"2010"},
    {author:"mnp",year:"2008"}
];

let filteredBooks = books.filter(book=>book.year>=2010).map(book=>{
    let writer = book.author.split(" ");
    let capitalAuthor = writer.map( name =>name.charAt(0).toUpperCase()+name.slice(1)).join(" ");
    return {author:capitalAuthor,year:book.year};
})

console.log(filteredBooks)
