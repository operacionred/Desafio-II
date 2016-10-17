
//creacion del documento canvas
var canvas = document.createElement('canvas');
// recuperacion del contexto
var ctx = canvas.getContext('2d');
// inicializamos imagenes y otros
var imgList = new Array();
var wrapper = null;
var spriteIndex = 0;
var spriteX = 0;
var spriteY = 0;
init = function() {
  for (var i=0; i<7; ++i)
  {
    imgList.push(new Image());
    imgList[i].src = "img/Frame" + i + ".gif";
  }

  var img = document.createElement('IMG');
  img.src=  "img/Frame0.gif";
  img.className = 'precarga';
  img.elemento = imgList[0];

  document.getElementsByTagName('BODY')[0].appendChild(img);

  canvas.width = 1000;
  canvas.height = 150;
  img.onload = function(){
    ctx.fillStyle = "rgba(255,0,0,1)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(this.elemento,0,0,this.width,this.height);
    this.parentNode.removeChild(this);
  }
  wrapper = document.getElementById("wrapper");
  wrapper.appendChild(canvas);
}
// captura de datos con el teclado
document.onkeydown = function (event) {
    var teclaC;

    if ( event == null ) {
        teclaC = window.event.keyCode;
    }
    else { 
        teclaC = event.keyCode;
    }

    switch (teclaC) {
        case 39:animateFrame(1);
            break; 
        case 37:animateFrame(-1);
            break; 
        default: resetFrames();
    }
}
// creando la animacion 
animateFrame = function (dir) {
   if ( dir > 0)
   {
        spriteIndex = ( spriteIndex >= 6 ) ? 0 : ++ spriteIndex;
        spriteX = ( spriteX >= 1000 ) ? 1000 : spriteX + 5;
   }
   else
   {
        spriteIndex = ( spriteIndex <= 0 ) ? 6 : -- spriteIndex;
        spriteX = ( spriteX <= 0 ) ? 0 : spriteX - 5;
   }
   ctx.clearRect(0,0,canvas.width, canvas.height);
 
   ctx.fillStyle = "rgba(255,0,0,1)";
   ctx.fillRect(0,0,canvas.width,canvas.height);
   ctx.drawImage(imgList[spriteIndex],spriteX,spriteY,imgList[spriteIndex].width,imgList[spriteIndex].height);
}
//reseteo al estado inicial
resetFrames = function()
{
   ctx.clearRect(0,0,canvas.width, canvas.height);
   spriteIndex = 0;
  
   ctx.fillStyle = "rgba(255,0,0,1)";
   ctx.fillRect(0,0,canvas.width,canvas.height);
   ctx.drawImage(imgList[spriteIndex],spriteX,spriteY,imgList[spriteIndex].width,imgList[spriteIndex].height);
}
updateCanvas = function ()

    { 
      ctx.fillStyle = "rgba(255,0,0,1)";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.drawImage(imgList[spriteIndex],spriteX,spriteY,imgList[spriteIndex].width,imgList[spriteIndex].height);
    }
