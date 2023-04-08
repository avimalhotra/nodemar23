
document.search.query.addEventListener("input",function(){
     let car=this.value;
     let data={car:this.value};

     fetch("/searchapi",{
          method:"POST",
          body:JSON.stringify(data),
     }).then(i=>i.json()).then(i=>console.log(i)).catch(e=>console.warn(e))

     // let xhr=new XMLHttpRequest();
     // xhr.open("POST","http://127.0.0.1:5500/searchapi");
     // xhr.send(data);
     // xhr.addEventListener("load",function(){
     //      console.log(this.response);
     // });

});