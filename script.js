let stop = false;
let arr = [];
function newArr(){
    stop = true;
    arr = [];
    while(document.getElementById("main-area").hasChildNodes())
    {
        document.getElementById("main-area").removeChild(document.getElementById("main-area").firstChild);
    }
    for(let i =0; i < 100; i++)
    {
        let random = parseInt(Math.random()*101 + 5);
        arr.push(random);
        let div = document.createElement('div');
        div.setAttribute("class","bars");
        div.classList.add("bars-style");
        div.style.height = `${random}px`;
        document.getElementById("main-area").appendChild(div);

    }
}
newArr();
async function bubble(){
    stop = false;
    let divarr = document.getElementsByClassName("bars");
    for (let index = 0; index < arr.length; index++) {
        
        for (let j = 0; j < arr.length-index-1; j++) {
            if(stop) return;
            divarr[j].style.background = "red";
        divarr[j+1].style.background = "red";
            let p = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(true);
                }, 10);
            })
            
            if(arr[j] > arr[j+1])
            {
                divarr[j].style.background = "red";
                divarr[j+1].style.background = "red";
                let h1 = divarr[j].style.height;
                let h2 = divarr[j+1].style.height;
                console.log(h1+" "+h2);
                divarr[j+1].style.height = `${h1}`;
                divarr[j].style.height = `${h2}`;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            divarr[j].style.background = "yellow";
            divarr[j+1].style.background = "yellow";
        }
        divarr[arr.length-index-1].style.background = "green";
    }
}
document.getElementById("newarray").addEventListener("click",newArr);
document.getElementById("bubble").addEventListener("click",bubble);

