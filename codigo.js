//Agregando atributos con DOM
const conten=document.getElementById("contenedor");
conten.setAttribute("align","center");
const previa=document.getElementsByClassName("previa")[0];
previa.setAttribute("align","center");



//Agregando las miniaturas estaticas con DOM
let i=0;
const img=[document.createElement("img"),document.createElement("img"),document.createElement("img"),document.createElement("img"),document.createElement("img")]
img[0].src="imgs/img1.jpg";
img[1].src="imgs/img2.jpg";
img[2].src="imgs/img3.jpg";
img[3].src="imgs/img4.jpg";
img[4].src="imgs/img5.jpg";
    //Agregando los hijos 
const mini=document.getElementsByClassName("miniaturas")[0];
for (let i = 0; i < img.length; i++) {
    mini.appendChild(img[i]);
}


//Evento click en minuiaturas para mostrar en imgPre

mini.addEventListener('click',(e)=>{
    const imgMini=mini.querySelectorAll('img');
    if(e.target.nodeName === 'IMG'){
        imgPre.src=e.target.src;
        indiceImg=Array.from(imgMini).indexOf(e.target);
        //console.log(indiceImg);
    }

})



//Añadir imgs mediante un input file
const button= conten.querySelector('button');
const inputFile=document.getElementById("input");
button.addEventListener('click',(e)=>{
    inputFile.click();
})
inputFile.addEventListener('change',()=>{
    let file=inputFile.files[0];
    validaImg(file);
})

function validaImg(file){
    const docType=file.type;
    const validaDoc=['image/png','image/jpeg','image/jpg','image/gif'];
    if(validaDoc.includes(docType)){
        var fileRead= new FileReader();
        fileRead.readAsDataURL(file);
        fileRead.onload= function (){
            let newImg= document.createElement('img');
            newImg.src=fileRead.result;
            mini.appendChild(newImg);
        } 
    }else{
        alert("El archivo selecionado no corresponde a una imagen");
        
    }
}

//boton elimina imagen 
const botonRemove=conten.getElementsByTagName('button')[1];
botonRemove.addEventListener('click',()=>{
    mini.removeChild(mini.lastChild);
})

//temporizador para que se cambien las imagenes auto

const imgPre=document.getElementsByName("previa")[0];
indiceImg=0;
function transiImg(){

    //indiceImg=0;
    if(indiceImg<mini.querySelectorAll('img').length){
        imgPre.src=mini.querySelectorAll('img')[indiceImg].src;
    }else{
        indiceImg=indiceImg-mini.querySelectorAll('img').length;
        imgPre.src=mini.querySelectorAll('img')[indiceImg].src;
    }
    indiceImg++
    

}
setInterval(transiImg,1000);
