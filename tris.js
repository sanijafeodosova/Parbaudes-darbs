function zimet(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(55, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "orange";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(55, 75, 35, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "gold";
    ctx.fill();

}