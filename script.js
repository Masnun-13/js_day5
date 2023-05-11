class Book {
	constructor(name,price, auth, date){
		this.name =name,
	    this.price = price,
	    this.auth = auth,
		this.date = date
	}
}



var bookccount = 0
var prodcount = 0




del = document.getElementById("deletebutt")

del.addEventListener("click", drop)


function drop(){
    if(confirm("Delete all books? (this includes local storage)") && localStorage.length>0)
    {
        localStorage.clear()
        bookccount=0
        window.location.reload()
    }
}

function populate(){
    let tab = document.getElementById("prodtab")
    for(i=0; i<localStorage.length; i++)
    {
        let thisJBook = localStorage.getItem(i)
        let thisBook = JSON.parse(thisJBook)
        let row = tab.insertRow(i+1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = thisBook.name
        cell2.innerHTML = thisBook.price
        cell3.innerHTML = thisBook.auth
        cell4.innerHTML = thisBook.date
    }
    bookccount=localStorage.length
    console.log("bookcount", bookccount)
    console.log("localstorage length", localStorage.length)
    console.log("table length", tab.rows.length)
}

populate()

for(i=0; i<localStorage.length; i++)
    {
        console.log(localStorage.getItem(i))
    }


let myForm = document.getElementById("inputForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let n = document.getElementById("bookName").value
    let p = Number(document.getElementById("bookPrice").value)
    let a = document.getElementById("authName").value
    let d = document.getElementById("bookDate").value

    let myBook = new Book(n, p, a, d)

    if (n.value == "" || p.value == "" || a.value == "" || d.value == "") 
    {
        alert("Ensure you input a value in all fields!");
    } 
    else 
    {        
        localStorage.setItem(bookccount, JSON.stringify(myBook))
        console.log(localStorage.getItem(bookccount))
        a.value = "";
        p.value = "";
        n.value = 0;
        d.value = "";
        bookccount++
        window.location.reload()
    }
    }
);