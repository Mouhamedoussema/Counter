if(!localStorage.getItem("counter")) {
    localStorage.setItem("counter", 0);
}

       function count() {
        let counter = localStorage.getItem("counter");
        counter++;
        document.querySelector("h1").innerHTML = counter;

        localStorage.setItem("counter", counter);
       }

    addEventListener("DOMContentLoaded", function () {
        this.document.querySelector("h1").innerHTML = this.localStorage.getItem("counter");
        document.querySelector("button").onclick = count ; 
        
    })    