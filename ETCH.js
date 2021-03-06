console.log('script successfully imported');

let container = document.getElementById('container');
let resetBt = document.getElementById('reset_bt');

function createMultTiles(numOfTilesInRow){
    for (i = 0; i < (Math.pow(numOfTilesInRow, 2)); i++){
        let tile = document.createElement('div');
        tile.className = 'tile';
        tile.addEventListener("mouseover", paint)
        container.appendChild(tile);
    }
    container.style.setProperty('--numOfTilesInRow', numOfTilesInRow)
    console.log(container.childElementCount);
}

function paint(e){
    this.classList.add('paint'); 
}

function resetMaster(){
    resetBt.addEventListener('click', resetSub);
}

function resetSub(e){
    let tileGroup = document.getElementsByClassName('tile');
    for (i = 0; i < tileGroup.length; i++) {
        tileGroup[i].classList.remove('paint');
    }
    createMultTiles(prompt('how many tiles would you like in a row?'));
}

createMultTiles(16);
resetMaster();


/* make it look nice*/

