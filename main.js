let url ="https://coffee.alexflipnote.dev/random.json"



  fetch(url,{method:"Get" ,})
     .then(res => res.json())
    // .then(data => console.log(data))
     .then(data =>{
     let pra =document.getElementsByTagName('p')[0];
     let imge =document.createElement('img')
     imge.src = data.file;
     pra.append(imge);


       

     })