window.__require=function s(t,i,e){function h(c,n){if(!i[c]){if(!t[c]){var o=c.split("/");if(o=o[o.length-1],!t[o]){var u="function"==typeof __require&&__require;if(!n&&u)return u(o,!0);if(r)return r(o,!0);throw new Error("Cannot find module '"+c+"'")}}var d=i[c]={exports:{}};t[c][0].call(d.exports,function(s){return h(t[c][1][s]||s)},d,d.exports,s,t,i,e)}return i[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<e.length;c++)h(e[c]);return h}({manager:[function(s,t,i){"use strict";cc._RF.push(t,"d06f3rCbY1OhagHGu4lWPDO","manager"),cc.Class({extends:cc.Component,properties:{scoreDisplay:{default:null,type:cc.Label},button1:{default:null,type:cc.Button},score:{default:0},number2:{default:0},num2d:{default:"0"},scored:{default:"0"},add:{default:!1},sub:{default:!1},mul:{default:!1},divid:{default:!1},dot:{default:!1},first:{default:!0},sec:{default:!1},check:{default:!0},checkresult:{default:!1},testresult:{default:!1},percentchange:{default:!1},nagativechange:{default:!1}},number:function(s,t){if((this.testresult||this.percentchange||this.nagativechange)&&(this.add=!1,this.sub=!1,this.mul=!1,this.divid=!1,this.dot=!1,this.check=!0,this.checkresult=!1,this.number2=0,this.score=0,this.scored="0",this.num2d="0",this.first=!0,this.sec=!1,this.testresult=!1,this.percentchange=!1,this.nagativechange=!1),this.dot)if(this.add||this.sub||this.mul||this.divid){this.first=!1,this.sec=!0;var i=t;this.num2d=this.num2d+i,this.number2=new Number(this.num2d),this.scoreDisplay.string=this.number2}else{this.first=!0,this.sec=!1;var e=t;this.scored=this.scored+e,this.score=new Number(this.scored),this.scoreDisplay.string=this.score}else if(this.add||this.sub||this.mul||this.divid){this.first=!1,this.sec=!0;var h=new Number(t);this.number2=10*this.number2+h,this.scoreDisplay.string=this.number2}else{this.first=!0,this.sec=!1;var r=new Number(t);this.score=10*this.score+r,this.scoreDisplay.string=this.score}},addfun:function(){this.add=!0,this.sub=!1,this.mul=!1,this.divid=!1,this.dot=!1,this.testresult=!1,this.percentchange=!1,this.nagativechange=!1,this.checkresult=!1,this.score=this.score+this.number2,this.number2=0,this.score=parseFloat(this.score.toPrecision(12)),this.scoreDisplay.string=this.score,(this.score===Number.POSITIVE_INFINITY||this.score===-Number.POSITIVE_INFINITY||isNaN(this.score))&&(this.scoreDisplay.string="\u4e0d\u662f\u6578\u5b57",this.testresult=!0)},subfun:function(){this.add=!1,this.sub=!0,this.mul=!1,this.divid=!1,this.dot=!1,this.testresult=!1,this.percentchange=!1,this.nagativechange=!1,this.checkresult=!1,this.score=this.score-this.number2,this.number2=0,this.score=parseFloat(this.score.toPrecision(12)),this.scoreDisplay.string=this.score,(this.score===Number.POSITIVE_INFINITY||this.score===-Number.POSITIVE_INFINITY||isNaN(this.score))&&(this.scoreDisplay.string="\u4e0d\u662f\u6578\u5b57",this.testresult=!0)},multifun:function(){this.add=!1,this.sub=!1,this.mul=!0,this.divid=!1,this.dot=!1,this.testresult=!1,this.percentchange=!1,this.nagativechange=!1,this.check||this.checkresult?(this.score=this.score,this.check=!1,this.checkresult=!1):(this.score=this.score*this.number2,this.number2=0),this.score=parseFloat(this.score.toPrecision(12)),this.scoreDisplay.string=this.score,(this.score===Number.POSITIVE_INFINITY||this.score===-Number.POSITIVE_INFINITY||isNaN(this.score))&&(this.scoreDisplay.string="\u4e0d\u662f\u6578\u5b57",this.testresult=!0)},dividfun:function(){this.add=!1,this.sub=!1,this.mul=!1,this.divid=!0,this.dot=!1,this.testresult=!1,this.percentchange=!1,this.nagativechange=!1,this.check||this.checkresult?(this.score=this.score,this.check=!1,this.checkresult=!1):(this.score=this.score/this.number2,this.number2=0),this.score=parseFloat(this.score.toPrecision(12)),this.scoreDisplay.string=this.score,(this.score===Number.POSITIVE_INFINITY||this.score===-Number.POSITIVE_INFINITY||isNaN(this.score))&&(this.scoreDisplay.string="\u4e0d\u662f\u6578\u5b57",this.testresult=!0)},nagative:function(){this.testresult=!1,this.nagativechange=!0,this.sec?(this.number2=-this.number2,this.scoreDisplay.string=this.number2):this.first&&(this.score=-this.score,this.scoreDisplay.string=this.score),(this.score===Number.POSITIVE_INFINITY||this.score===-Number.POSITIVE_INFINITY||isNaN(this.score))&&(this.scoreDisplay.string="\u4e0d\u662f\u6578\u5b57",this.testresult=!0)},percent:function(){this.testresult=!1,this.percentchange=!0,this.sec?(this.number2=this.number2/100,this.number2=parseFloat(this.number2.toPrecision(12)),this.scoreDisplay.string=this.number2):this.first&&(this.score=this.score/100,this.score=parseFloat(this.score.toPrecision(12)),this.scoreDisplay.string=this.score),(this.score===Number.POSITIVE_INFINITY||this.score===-Number.POSITIVE_INFINITY||isNaN(this.score))&&(this.scoreDisplay.string="\u4e0d\u662f\u6578\u5b57",this.testresult=!0)},dotfun:function(){this.testresult&&(this.add=!1,this.sub=!1,this.mul=!1,this.divid=!1,this.dot=!1,this.check=!0,this.checkresult=!1,this.number2=0,this.score=0,this.scored="0",this.num2d="0",this.first=!0,this.sec=!1,this.testresult=!1),this.dot||(this.sec?(this.num2d=this.number2.toString(),this.num2d.includes(".")||(this.num2d=this.num2d+".",this.scoreDisplay.string=this.num2d)):this.first&&(this.scored=this.score.toString(),this.scored.includes(".")||(this.scored=this.scored+".",this.scoreDisplay.string=this.scored)),this.dot=!0)},clear:function(){this.add=!1,this.sub=!1,this.mul=!1,this.divid=!1,this.dot=!1,this.check=!0,this.checkresult=!1,this.number2=0,this.score=0,this.scored="0",this.num2d="0",this.first=!0,this.sec=!1,this.nagativechange=!1,this.percentchange=!1,this.scoreDisplay.string=this.score},backfun:function(){if(this.sec)this.num2d=this.number2.toString(),this.num2d=this.num2d.substring(0,this.num2d.length-1),this.num2d.includes(".")?this.dot=!0:(this.dot=!1,0==this.num2d&&(this.num2d="0")),"-"==this.num2d&&(this.num2d="0"),"."==this.num2d.slice(-1)&&(this.dot=!1),this.number2=new Number(this.num2d),this.scoreDisplay.string=this.number2;else if(this.first){this.scored=this.score.toString(),this.scored=this.scored.substring(0,this.scored.length-1),this.scored.includes(".")?this.dot=!0:(this.dot=!1,0==this.scored&&(this.scored="0")),"-"==this.scored&&(this.scored="0"),"."==this.scored.slice(-1)&&(this.dot=!1),this.score=new Number(this.scored),this.scoreDisplay.string=this.score}(this.score===Number.POSITIVE_INFINITY||this.score===-Number.POSITIVE_INFINITY||isNaN(this.score))&&(this.scoreDisplay.string="\u4e0d\u662f\u6578\u5b57",this.testresult=!0)},result:function(){this.add?(this.score=this.score+this.number2,this.add=!1):this.sub?(this.score=this.score-this.number2,this.sub=!1):this.mul?(this.score=this.score*this.number2,this.mul=!1):this.divid&&(this.score=this.score/this.number2,this.divid=!1),this.score=parseFloat(this.score.toPrecision(12)),this.scoreDisplay.string=this.score,(this.score===Number.POSITIVE_INFINITY||this.score===-Number.POSITIVE_INFINITY||isNaN(this.score))&&(this.scoreDisplay.string="\u4e0d\u662f\u6578\u5b57"),this.number1=this.score,this.number2=0,this.scored="0",this.num2d="0",this.sec=!1,this.first=!0,this.testresult=!0,this.checkresult=!0},start:function(){this.add=!1,this.sub=!1,this.mul=!1,this.divid=!1,this.dot=!1,this.first=!0,this.sec=!1,this.check=!0,this.checkresult=!1,this.testresult=!1,this.percentchange=!1,this.nagativechange=!1},update:function(s){}}),cc._RF.pop()},{}]},{},["manager"]);