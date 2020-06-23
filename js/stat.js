
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100; /*координаты начала отсчета*/
var CLOUD_Y = 10;
var GAP = 20; /*отступ от облака*/
var GAP_USER = 50;/*отступ между гистограммами*/
var FONT_GAP = 16; /*размерность шрифта*/
var TEXT_WIDTH = 40; /*ширина колонки для текста*/
var MAX_GIST = 150;
var barHeight = CLOUD_HEIGHT - GAP - FONT_GAP - GAP - FONT_GAP - GAP - FONT_GAP - GAP; /*Высота гистограммы*/

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var renderText = function(ctx, x, y, color) {
  ctx.fillStyle = '#000';
};
var getMaxElement = function(arr){
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(arr[i]>maxElement){
      maxElement = arr[i];
    }
  }
  return maxElement;
};
window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y +FONT_GAP + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] == "Вы"){
      ctx.fillStyle = 'rgb(255, 0, 0)';
    }
    else
      ctx.fillStyle = 'hsl(240,'+Math.round(Math.random()*100)+'%,50%)';

      ctx.fillText(times[i].toFixed(), CLOUD_X+ GAP + (GAP + GAP_USER + GAP)*i, CLOUD_Y + GAP + FONT_GAP + FONT_GAP + GAP);
      ctx.fillText(players[i],  CLOUD_X+ GAP + (GAP + GAP_USER + GAP)*i, CLOUD_Y + GAP + FONT_GAP+ GAP+ GAP + FONT_GAP + barHeight + GAP);
      ctx.fillRect( CLOUD_X + GAP + (GAP + GAP_USER + GAP) * i, CLOUD_Y + GAP_USER + TEXT_WIDTH + MAX_GIST, TEXT_WIDTH, ((MAX_GIST * times[i])/maxTime)*-1);
  };
};