function Createline(config){this.c=0;this.lines=[];var self=this;(function(self){if(config.fx=="w"){var number=config.canvas_w/(config.width+config.width/2+config.jiange*2);number=Math.ceil(number)+1;for(var n=0;n<number;n++){var mxx=config.canvas_w-n*(config.width+config.width/2+config.jiange*2);var lines_data={mx:mxx,lx:mxx-config.width,my:config.my,ly:config.ly,vx:config.vx,vy:config.vy,}
self.lines.push(lines_data);var lines_data2={mx:mxx-config.width-config.jiange,lx:mxx-config.width-config.jiange-config.width/2,my:config.my,ly:config.ly,vx:config.vx,vy:config.vy,}
self.lines.push(lines_data2);}}
if(config.fx=="h"){var number=config.canvas_w/(config.width+config.width/2+config.jiange*2);number=Math.ceil(number)+1;for(var n=0;n<number;n++){var myy=config.canvas_h-n*(config.width+config.width/2+config.jiange*2);var lines_data3={mx:config.mx,lx:config.lx,my:myy,ly:myy-config.width,vx:config.vx,vy:config.vy,}
self.lines.push(lines_data3);var lines_data4={mx:config.mx,lx:config.lx,my:myy-config.width-config.jiange,ly:myy-config.width-config.jiange-config.width/2,vx:config.vx,vy:config.vy,}
self.lines.push(lines_data4);}}})(self);}
Createline.prototype.begin=function(element,config){var canvasObj=document.getElementById(element);var self=this;var canvas={line_w:config.line_w||3,vx:config.vx||0,vy:config.vy||0,color:config.color||"blue",canvas_w:config.canvas_w||0,canvas_h:config.canvas_h||0,mx:config.mx||0,my:config.my||0,lx:config.lx||0,ly:config.ly||0,fx:config.fx||"w",width:config.width||20,jiange:config.jiange||10,}
if(canvasObj.getContext("2d")){canvas.ctx=canvasObj.getContext("2d"),canvasObj.width=canvas.canvas_w;canvasObj.height=canvas.canvas_h;}else{console.log("当前环境不支持canvas");return null;}
setInterval(function(){self.createline(self,canvas);if(canvas.fx=="w"){self.updateline_w(self,canvas);}
if(canvas.fx=="h"){self.updateline_h(self,canvas);}
self.addline(self,canvas);},config.time);return canvas.ctx;}
Createline.prototype.createline=function(self,canvas){var content=canvas.ctx;content.clearRect(0,0,canvas.canvas_w,canvas.canvas_h);for(var i=0;i<self.lines.length;i++){content.beginPath();content.moveTo(self.lines[i].mx,self.lines[i].my);content.lineTo(self.lines[i].lx,self.lines[i].ly);content.lineWidth=canvas.line_w;content.strokeStyle=canvas.color;content.stroke();content.closePath();}}
Createline.prototype.updateline_w=function(self,canvas){for(var i=0;i<self.lines.length;i++){self.lines[i].mx=self.lines[i].mx+self.lines[i].vx;self.lines[i].lx=self.lines[i].lx+self.lines[i].vx;}
var cnt=[];for(var j=0;j<self.lines.length;j++){if(self.lines[j].lx>canvas.canvas_w){cnt.push(j);}}
for(var k=0;k<cnt.length;k++){self.lines.splice(k,1);}}
Createline.prototype.updateline_h=function(self,canvas){for(var i=0;i<self.lines.length;i++){self.lines[i].my=self.lines[i].my+lines[i].vy;self.lines[i].ly=self.lines[i].ly+lines[i].vy;}
var cnt=[];for(var j=0;j<self.lines.length;j++){if(self.lines[j].ly>canvas.canvas_h){cnt.push(j);}}
for(var k=0;k<cnt.length;k++){self.lines.splice(k,1);}}
Createline.prototype.addline=function(self,canvas){var length=self.lines.length;if(canvas.fx=="w"){if(self.lines[length-1].lx>0){var ww=self.lines[length-1].lx-canvas.jiange;if(self.c==0){var jg=canvas.width;self.c=10;}else{var jg=canvas.width/2;self.c=0;}
var lxx=ww-jg;var data={mx:ww,lx:lxx,my:canvas.my,ly:canvas.ly,vx:canvas.vx,vy:canvas.vy,}
self.lines.push(data);}}
if(canvas.fx=="h"){if(length>0){if(self.lines[length-1].ly>0){var my=self.lines[length-1].ly-canvas.jiange;if(c==0){var jg=canvas.width;c=10;}else{var jg=canvas.width/2;c=0;}
var ly=my-jg;var data={mx:canvas.mx,lx:canvas.lx,my:my,ly:ly,vx:canvas.vx,vy:canvas.vy,}
self.lines.push(data);}}else{var data={mx:canvas.mx,my:canvas.my,lx:canvas.lx,ly:canvas.ly,vx:canvas.vx,vy:canvas.vy,}
self.lines.push(data);}}}