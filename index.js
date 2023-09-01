const Book=[
    
    {
        title: 'The Road not taken',
        author: "Shakeshsphere",
        year: "1902",
        readingStatus: "true",
    },
    {
        title: 'Stages of Life',
        author: "Robert William",
        year: "1962",
        readingStatus: "false",
    },
    {
        title: 'Romeo-Juliet',
        author: "Shakeshsphere",
        year: "1932",
        readingStatus: "true",
    },
    {
        title: 'God of wars',
        author: "Joseph",
        year: "2000",
        readingStatus: "false",
    },
    {
        title: 'Periyar sinthanigal',
        author: "rajasheakar",
        year: "2010",
        readingStatus: "false",
    },
    {
        title: 'wings of fire',
        author: "APJ",
        year: "2003",
        readingStatus: "true",
    },
    {
        title: 'Lost in woods',
        author: "marck",
        year: "2019",
        readingStatus: "true",
    }];
  
  function getSummary() 
   {
    document.getElementById("bd").style.backgroundImage="url(bk2.jpg)";
     document.write("Books in our Library are:"+"<br/>");
    document.write("<br/>");
        for (let i = 0; i < Book.length; i++) {
            document.write("The book " + Book[i].title + " by " + Book[i].author + " was published in " + Book[i].year+"<br/>");
            document.write("<br/>");
        }
    
      
       // document.getElementById("result").innerHTML;
    }

 function  TreadingStatus()
   {
    //let mybook=prompt("Enter book name:");
    document.write("Reading status of books in my library"+"<br/>");
    document.write("<br/>");
    for (let i = 0; i < Book.length; i++)
    {
       if(Book[i].readingStatus==="true")
       {
       
           document.write("The Book "+Book[i].title+" is already read"+"<br/>");
           document.write("<br/>");
       }
       else
       {
        document.write("You still need to read the book "+Book[i].title+"<br/>");
        document.write("<br/>");
       }
   }
}
let library=[];

for(let i=0;i<Book.length;i++)
{
    library[i]=Book[i];
    
}

 
function removeLastBook()
{
  

 library.pop();
 document.write('After removing last book'+"<br/>");

 document.write("<br/>");
 //document.write(JSON.stringify(library));
 library.forEach(b=>{
    for(let value in b)
    {
        document.write(`${b[value]+"<br/>"}`);
       
    }
    document.write("<br/>");
 })
 
}
function addBook()
{
 let n=prompt("Enter no of books to be added:");
    for(let i=0;i<n;i++)
    {
    library.push({title: prompt("Enter Book name"), author: prompt("Enter author name"), year: prompt("Enter the year of publication"), readingStatus: prompt("have you read the book")});
   alert('Book added');
    }
    document.write("After adding book at end"+"<br/>")
    library.forEach(b=>{
        for(let value in b)
        {
            document.write(`${b[value]+"<br/>"}`);
           
        }
        document.write("<br/>");
       
    })
    
}
function addBookToFront()
{
    let n=prompt("Enter no of books to be added:");
    for(let i=0;i<n;i++){
    library. unshift({title: prompt("Enter Book name"), author: prompt("Enter author name"), year: prompt("Enter the year of publication"), readingStatus: prompt("have you read the book")});
    alert('Book added');
    }
    document.write("After adding book at front"+"<br/>");
    document.write("<br/>");
    library.forEach(b=>{
        for(let value in b)
        {
            document.write(`${b[value]+"<br/>"}`);
           
        }
        document.write("<br/>");
       
    })
    
}
function removeFirstBook()
{
 library.shift();
document.write('After removing first book'+"<br/>");

library.forEach(b=>{
    for(let value in b)
    {
        document.write(`${b[value]+"<br/>"}`);
       
    }
    document.write("<br/>");
   
})

}
function getAllTitles()
{
   let getTitles=(books)=>books.map((book)=>book.title);
   document.write("Title of all the books in our library"+"<br/>");
   document.write("<br/>");
   //document.write(getTitles(library)+"<br/>");
   getTitles(library).forEach(b=>{
    
        document.write(b+"<br/>");
        document.write("<br/>");
     })

}
function getBooksByAuthor()
{
    let author=prompt("Enter author name:");
   let getBooks=library.filter(function(el)
   {
     return el.author===author;
   });
    document.write("Books by specific author"+"<br/>");
    document.write("<br/");
    getBooks.forEach(b=>{
        for(let value in b)
        {
            document.write(`${b[value]+"<br/>"}`);
           
        }
        document.write("<br/>");
       
    })

}
function getTotalBooksPublishedBefore()
{
    let year=prompt("Enter year of publication:");
   let bk=library.filter(function(el)
   {
    return el.year<year;
   });
   document.write("Books published before specific year");

   bk.forEach(b=>{
    for(let value in b)
    {
        document.write(`${b[value]+"<br/>"}`);
       
    }
    document.write("<br/>");
   
})

}

function getBooksByReadStatus()
{
let status=prompt("Enter the reading status:");
  let bk=library.filter(function(el)
  {

    return el.readingStatus===status;})
  
  document.write("Books by reading status"+"<br/>");
  bk.forEach(b=>{
    for(let value in b)
    {
        document.write(`${b[value]+"<br/>"}`);
       
    }
    document.write("<br/>");
   
})

 
}
function getSubLibrary()
{
    let start=prompt("Enter starting index:");
    let end=prompt("Enter ending index");
   let bk=library.slice(start,end);
   document.write("Sub-Library"+"<br/>");
   bk.forEach(b=>{
    for(let value in b)
    {
        document.write(`${b[value]+"<br/>"}`);
       
    }
    document.write("<br/>");
   
})
}
