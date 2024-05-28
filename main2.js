let link="https://rickandmortyapi.com/api/character"
console.log(link);

async function fetchData(){
    let res = await fetch(link)

    let data = await res.json();

    console.log(
);
    let text = document.querySelector(".text")

data.results.forEach(element => {

    let div1 = document.createElement("div")
   
          
        let list1 = document.createElement("h4")
        list1.innerHTML=element.name
        console.log(element);

        let imge1= document.createElement('img')
        imge1 .src=element.image
        // console.log(list);
        div1.append(list1)
        div1.append(imge1)
        text.append(div1)
        
    });
}
fetchData()