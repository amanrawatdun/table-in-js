let row = document.querySelector('.row')
let col = document.querySelector('.col')
let btn = document.querySelector('.btn1')
let table = document.querySelector('.table')

let cnt=0;
btn.addEventListener('click', ()=>{
    
    cnt=cnt+1;
    
    console.log(cnt)
    if(cnt>0){
        table.innerHTML="";
    }

});

console.log(cnt)


btn.addEventListener('click', (e)=>{
   
 
    if(row.value>28 || row.value<3){
        alert("plzz enter row value btw 3 to 17")
        return false;
    }
    if(col.value>16 || col.value<3){
        alert("plzz enter column value  btw 3 to 16")
        return false;
    }


 for(let i=1; i<=row.value; i++){

    let tr=document.createElement('tr');

    for(let j=1; j<=col.value; j++){

        if(i==1){
            let th=document.createElement('th')
            th.textContent="heading"
            tr.appendChild(th)
        }
        else{
            let td=document.createElement('td');
            td.textContent="data"
            tr.appendChild(td)
        }

    }
    table.appendChild(tr);

 }
   
})