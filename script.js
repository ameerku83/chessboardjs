
let board=document.getElementById("board");
for (let i = 1; i <9; i++) {
    const Row=document.createElement("div")
    Row.classList.toggle("row")
    for(let j=1;j<9;j++){
        let box=document.createElement("div");
        box.classList.toggle("box")
    
        if((i+j)%2===0){

            box.style.background="black"
        }else{

            box.style.background="rgb(193, 196, 184)"

        }

        Row.append(box)

    }
    board.append(Row)
}
