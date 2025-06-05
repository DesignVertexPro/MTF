(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,151);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,112);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1483,791);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1483,785);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,112);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,112);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,122);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,123);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,121);


(lib.logo1 = function() {
	this.initialize(img.logo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,43);


(lib.start_bg = function() {
	this.initialize(img.start_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Pach = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.6)","#000000"],[0,1],12.2,-700.4,12.2,103.1).s().p("EhlYA40MAAAhxnMDKxAAAMAAABxng");
	this.shape.setTransform(-0.075,-0.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pach, new cjs.Rectangle(-649,-363.6,1297.9,727.1), null);


(lib.ncLogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo1();
	this.instance.setTransform(-97,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ncLogo, new cjs.Rectangle(-97,-22,194,43), null);


(lib.mcTxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(126,162,163,0.008)").s().p("AhFBVIAAipICLAAIAACpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcTxt, new cjs.Rectangle(-7,-8.5,14,17), null);


(lib.mcImage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mcBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcBtn, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.dragBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.008)").s().p("AmtFnIAArNINbAAIAALNg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragBtn, new cjs.Rectangle(-42.9,-35.9,85.9,71.9), null);


(lib.Click_BTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Click_BTN, new cjs.Rectangle(0,0,32,32), null);


(lib.btncopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btncopy, new cjs.Rectangle(-640,-360,1280.8,725.1), null);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.Timer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(58.05,28.95);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B312E").s().p("AosDvQgMAAgJgLQgJgKAAgOIAAmXQAAgPAJgJQAJgKAMAAIRZAAQAMAAAJAKQAJAJAAAPIAAGXQAAAOgJAKQgJALgMAAgAojjDQgJAJAAANIAAFbQAAANAJAIQAJAJALAAIQgAAQAMAAAIgJQAJgIAAgNIAAlbQAAgNgJgJQgIgIgMAAIwgAAQgLAAgJAIg");
	this.shape.setTransform(61.275,28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#284843").s().p("AoQDMQgLAAgJgJQgIgIgBgNIAAlbQABgNAIgJQAJgIALAAIQhAAQALAAAIAIQAKAJgBANIAAFbQABANgKAIQgIAJgLAAg");
	this.shape_1.setTransform(61.35,28.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F48044").s().p("AtNGjQgVAAgTgJQgSgJgPgQQgOgQgIgUQgIgWAAgXIAApfQAAgXAIgWQAIgVAOgQQAPgPASgJQATgJAVAAIaaAAQAVAAATAJQATAJAOAPQAPAQAHAVQAJAWAAAXIAAJfQAAAXgJAWQgHAVgPAPQgOAQgTAJQgTAJgVAAgAtylYQgPARAAAYIAAJfQAAAYAPARQAQASAVAAIaaAAQAWAAAPgSQAQgRAAgYIAApfQAAgYgQgRQgPgSgWAAI6aAAQgVAAgQASg");
	this.shape_2.setTransform(61.4742,28.526,0.6479,0.6479);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CF4F3A").s().p("AhXANIAAgDQAAgJADgGQAEgHAFAAICXAAQAFAAAEAHQADAGAAAJIAAADg");
	this.shape_3.setTransform(98.2777,0.8261,0.6479,0.6479);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CF4F3A").s().p("AiYAfQgFAAgFgJQgEgIAAgNIAAggIFNAAIAAAgQAAANgFAIQgEAJgGAAg");
	this.shape_4.setTransform(98.5855,57.4083,0.6479,0.6479);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF4F3A").s().p("AiXAfQgGAAgEgJQgFgIAAgNIAAggIFNAAIAAAgQAAANgEAIQgFAJgGAAg");
	this.shape_5.setTransform(24.8974,57.4083,0.6479,0.6479);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Timer, new cjs.Rectangle(0,0,123,59.5), null);


(lib.start_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(640.8,360.3,1,1,0,0,0,0.8,0.3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_3
	this.instance = new lib.start_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.start_screen, new cjs.Rectangle(0,0,1280,720), null);


(lib.S_BTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(57.6,29.85,0.1008,0.1046,0,0,0,1.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_2
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S_BTN, new cjs.Rectangle(-7.1,-7.8,129.1,75.3), null);


(lib.Reset_BTN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(57.6,29.85,0.1008,0.1046,0,0,0,1.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_2
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Reset_BTN, new cjs.Rectangle(-7.1,-7.8,129.1,75.3), null);


(lib.Replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(57.9,32.9,0.128,0.128,0,0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_2
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(0,-1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Replay, new cjs.Rectangle(-24.1,-13.2,163.79999999999998,92.10000000000001), null);


(lib.mcInstruction = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Match_the_Animals_to_Their_Homes
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(45.85,35.05);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcInstruction, new cjs.Rectangle(0,0,543.5,62.7), null);


(lib.mcHtp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.btnClose = new lib.btn();
	this.btnClose.name = "btnClose";
	this.btnClose.setTransform(1106.2,136.05,0.1035,0.136,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.btnClose).wait(1));

	// Layer_2
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(218.2,272.1);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_3
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(152,104,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.mcBlocker = new lib.Pach();
	this.mcBlocker.name = "mcBlocker";
	this.mcBlocker.setTransform(649,363.6);
	this.mcBlocker.alpha = 0.6797;
	new cjs.ButtonHelper(this.mcBlocker, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.mcBlocker).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcHtp, new cjs.Rectangle(0,0,1297.9,727.1), null);


(lib.MB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {unMute:0,mute:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_4
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(28.75,27.35,0.0468,0.0801,0,0,0,5.4,0);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(2));

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.Bitmap10();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.5,59.9,57.7);


(lib.IB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(28.75,27.35,0.0468,0.0801,0,0,0,5.4,0);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IB, new cjs.Rectangle(-1.4,-1.5,59.9,57.7), null);


(lib.btnAudio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btn = new lib.mcBtn();
	this.btn.name = "btn";

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btnAudio, new cjs.Rectangle(-640,-360,1280.8,725.1), null);


(lib.Box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btn = new lib.dragBtn();
	this.btn.name = "btn";
	this.btn.setTransform(93.05,185.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// btnAudio
	this.btnAudio = new lib.btnAudio();
	this.btnAudio.name = "btnAudio";
	this.btnAudio.setTransform(93.25,91.6,0.1454,0.2532,0,0,0,1.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.btnAudio).wait(1));

	// Layer_5
	this.mcL_1 = new lib.Click_BTN();
	this.mcL_1.name = "mcL_1";
	this.mcL_1.setTransform(76.95,169.3);

	this.timeline.addTween(cjs.Tween.get(this.mcL_1).wait(1));

	// Layer_3
	this.mcImage = new lib.mcImage();
	this.mcImage.name = "mcImage";
	this.mcImage.setTransform(1,2);

	this.timeline.addTween(cjs.Tween.get(this.mcImage).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,186.2,220.6);


(lib.act_completed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.mcTT2 = new lib.mcTxt();
	this.mcTT2.name = "mcTT2";
	this.mcTT2.setTransform(649.05,419.85);

	this.timeline.addTween(cjs.Tween.get(this.mcTT2).wait(1));

	// Layer_5
	this.mcTT1 = new lib.mcTxt();
	this.mcTT1.name = "mcTT1";
	this.mcTT1.setTransform(649.05,356.3);

	this.timeline.addTween(cjs.Tween.get(this.mcTT1).wait(1));

	// Layer_4
	this.btnReplay = new lib.Replay();
	this.btnReplay.name = "btnReplay";
	this.btnReplay.setTransform(649,523.85,1,1,0,0,0,57.1,30.8);

	this.timeline.addTween(cjs.Tween.get(this.btnReplay).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(152,92,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.mcBlocker = new lib.Pach();
	this.mcBlocker.name = "mcBlocker";
	this.mcBlocker.setTransform(640.1,360.05,0.9863,0.9902);
	this.mcBlocker.alpha = 0.6797;
	new cjs.ButtonHelper(this.mcBlocker, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.mcBlocker).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.act_completed, new cjs.Rectangle(0,0,1280.1,720), null);


(lib.Text_box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_6
	this.btn = new lib.btncopy();
	this.btn.name = "btn";
	this.btn.setTransform(101.3,-17.85,0.067,0.0881,0,0,0,1.5,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// btnAudio
	this.btnAudio = new lib.btnAudio();
	this.btnAudio.name = "btnAudio";
	this.btnAudio.setTransform(101.3,38.15,0.158,0.1088,0,0,0,1.2,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.btnAudio).wait(1));

	// Layer_4
	this.dot = new lib.Click_BTN();
	this.dot.name = "dot";
	this.dot.setTransform(83.2,-33.45);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_2
	this.mcTT = new lib.mcTxt();
	this.mcTT.name = "mcTT";
	this.mcTT.setTransform(100,39.6);

	this.timeline.addTween(cjs.Tween.get(this.mcTT).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text_box, new cjs.Rectangle(0,-49.5,202.2,126.9), null);


(lib.game_screen1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Layer_2
	this.mcInstruction = new lib.mcInstruction();
	this.mcInstruction.name = "mcInstruction";
	this.mcInstruction.setTransform(-349.4,48.15,1,1,0,0,0,343.8,31.3);
	this.mcInstruction._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcInstruction).wait(17).to({_off:false},0).to({x:338.8},50,cjs.Ease.get(1)).wait(3));

	// Reset_BTN
	this.btnReset = new lib.Reset_BTN();
	this.btnReset.name = "btnReset";
	this.btnReset.setTransform(708.5,789.75,1,1,0,0,0,57.1,30.8);
	this.btnReset.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btnReset).wait(17).to({y:665.75,alpha:0.5},34,cjs.Ease.get(1)).wait(19));

	// S_BTN
	this.btnSubmit = new lib.S_BTN();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.setTransform(571.25,789.7,1,1,0,0,0,57.1,30.6);
	this.btnSubmit.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(14).to({y:665.7,alpha:0.5},34,cjs.Ease.get(1)).wait(22));

	// mcRight_Txt5
	this.mcRight_Txt5 = new lib.Text_box();
	this.mcRight_Txt5.name = "mcRight_Txt5";
	this.mcRight_Txt5.setTransform(1112.25,657.15,1,1,0,0,0,90.3,37.6);
	this.mcRight_Txt5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcRight_Txt5).wait(12).to({y:533.15,alpha:1},34,cjs.Ease.get(1)).wait(24));

	// mcRight_Txt4
	this.mcRight_Txt4 = new lib.Text_box();
	this.mcRight_Txt4.name = "mcRight_Txt4";
	this.mcRight_Txt4.setTransform(876.05,657.15,1,1,0,0,0,90.3,37.6);
	this.mcRight_Txt4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcRight_Txt4).wait(9).to({y:533.15,alpha:1},34,cjs.Ease.get(1)).wait(27));

	// mcRight_Txt3
	this.mcRight_Txt3 = new lib.Text_box();
	this.mcRight_Txt3.name = "mcRight_Txt3";
	this.mcRight_Txt3.setTransform(639.85,657.15,1,1,0,0,0,90.3,37.6);
	this.mcRight_Txt3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcRight_Txt3).wait(6).to({y:533.15,alpha:1},34,cjs.Ease.get(1)).wait(30));

	// mcRight_Txt2
	this.mcRight_Txt2 = new lib.Text_box();
	this.mcRight_Txt2.name = "mcRight_Txt2";
	this.mcRight_Txt2.setTransform(403.65,657.15,1,1,0,0,0,90.3,37.6);
	this.mcRight_Txt2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcRight_Txt2).wait(3).to({y:533.15,alpha:1},34,cjs.Ease.get(1)).wait(33));

	// mcRight_Txt1
	this.mcRight_Txt1 = new lib.Text_box();
	this.mcRight_Txt1.name = "mcRight_Txt1";
	this.mcRight_Txt1.setTransform(167.45,657.15,1,1,0,0,0,90.3,37.6);
	this.mcRight_Txt1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcRight_Txt1).to({y:533.15,alpha:1},34,cjs.Ease.get(1)).wait(36));

	// mcLeft_img5
	this.mcLeft_img5 = new lib.Box();
	this.mcLeft_img5.name = "mcLeft_img5";
	this.mcLeft_img5.setTransform(1028.95,15);
	this.mcLeft_img5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcLeft_img5).wait(12).to({y:139,alpha:1},34,cjs.Ease.get(1)).wait(24));

	// mcLeft_img4
	this.mcLeft_img4 = new lib.Box();
	this.mcLeft_img4.name = "mcLeft_img4";
	this.mcLeft_img4.setTransform(792.75,15);
	this.mcLeft_img4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcLeft_img4).wait(9).to({y:139,alpha:1},34,cjs.Ease.get(1)).wait(27));

	// mcLeft_img3
	this.mcLeft_img3 = new lib.Box();
	this.mcLeft_img3.name = "mcLeft_img3";
	this.mcLeft_img3.setTransform(556.55,15);
	this.mcLeft_img3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcLeft_img3).wait(6).to({y:139,alpha:1},34,cjs.Ease.get(1)).wait(30));

	// mcLeft_img2
	this.mcLeft_img2 = new lib.Box();
	this.mcLeft_img2.name = "mcLeft_img2";
	this.mcLeft_img2.setTransform(320.35,15);
	this.mcLeft_img2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcLeft_img2).wait(3).to({y:139,alpha:1},34,cjs.Ease.get(1)).wait(33));

	// mcLeft_img1
	this.mcLeft_img1 = new lib.Box();
	this.mcLeft_img1.name = "mcLeft_img1";
	this.mcLeft_img1.setTransform(84.15,15);
	this.mcLeft_img1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mcLeft_img1).to({y:139,alpha:1},34,cjs.Ease.get(1)).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-654.3,15.6,1878.5,811);


// stage content:
(lib.ui = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.fGenerateCreateJSText = function(mc, strText, xx, yy, nLineHeight, nLineWidth, strFont, strColor, strAlign) {
			var tt = new createjs.Text();
			tt.text = strText;
			tt.font = strFont;
			tt.color = strColor;
			tt.textAlign = strAlign || "center";
			tt.textBaseline = "middle"; // "top", "middle", "alphabetic", etc.
			tt.mouseEnabled = false;
			tt.x = xx;
			tt.y = yy;
		
			if (nLineWidth > 0) tt.lineWidth = nLineWidth;
			if (nLineHeight > 0) {
				tt.lineHeight = nLineHeight;
			} else {
				tt.lineHeight = parseInt(strFont) * 1.2; // auto estimate
			}
		
			mc.tt = tt;
			mc.addChild(tt);
			mc.strText = strText;
			mc.nW = (mc.nW || 0) + tt.getMeasuredWidth();
			return tt;
		};
		
		// Add this inside your CreateJS setup or init function
		this.createDigitalClock = function () {
			const font = new FontFace("digital-7", "url('css/fonts/digital-7.woff2')");
		
			font.load().then((loadedFont) => {
				document.fonts.add(loadedFont);
				console.log("Font loaded");
		
				// Main clock container
				const mcClock = new createjs.Container();
				this.addChild(mcClock);
		
				// Inner container for text
				mcClock.mcTT = new createjs.Container();
				mcClock.addChild(mcClock.mcTT);
		
				mcClock.mcTT.x = 1052;
				mcClock.mcTT.y = 663;
				mcClock.mcTT.alpha = 0;
				this.fGenerateCreateJSText(mcClock.mcTT, "00:00", 0, 0, 0, 0, "50px 'Digital-7'", "#FFFFFF", "center");
				createjs.Tween.get(mcClock.mcTT).to({ alpha: 1 }, 1500);
				this.elapsedSeconds = 0;
		
				const updateClock = () => {
					this.elapsedSeconds++;
					const mm = String(Math.floor(this.elapsedSeconds / 60)).padStart(2, "0");
					const ss = String(this.elapsedSeconds % 60).padStart(2, "0");
					mcClock.mcTT.tt.text = `${mm}:${ss}`;
					stage.update();
				};
		
				updateClock(); // show initial 00:00
				this.clockInterval = setInterval(updateClock, 1000); // 🔁 Store interval ID
			});
		};
		this.fPlayClockTime = function(){
			
			const stage = new createjs.Stage("canvasId");
			const mcClock = createDigitalClock(stage);
		
			//mcClock.x = 300;
			//mcClock.y = 100;
		
			stage.addChild(mcClock);
			stage.update();
		}
		
		this.audio = new Audio();
		this.playAudio = function (name, callback) {
		    if (!this.audio.paused) {
		        this.audio.pause(); // Pehle audio pause karo
		        this.audio.currentTime = 0; // Time reset karo
		    }
		    
		    this.audio.src = "sounds/" + name + ".mp3";
		
		    // Ensure previous audio has completely stopped before playing new one
		    setTimeout(() => {
		        this.audio.play()
		            .then(() => {
		                // ✅ Remove previous event listener before adding new one
		                this.audio.removeEventListener("ended", this.var1, false);
		
		                // ✅ Event listener ko dynamically assign karo
		                this.var1 = function() {
		                    console.log("Audio Ended");
		                    if (callback) callback();
		                    this.audio.removeEventListener("ended", this.var1, false); // ✅ Remove listener after execution
		                }.bind(this);
		
		                this.audio.addEventListener("ended", this.var1, false);
		            })
		            .catch(error => console.error("Audio play error:", error));
		    }, 100); // Small delay to avoid play-pause conflict
		};
		this.stopAudio = function () {
		    if (!this.audio.paused) {
		        this.audio.pause();
		        this.audio.currentTime = 0;
		        this.audio.src = "";
		        console.log("Audio stopped.");
		    }
		};
		
		this.onCompleteAudio = function (strName) {
		    if (this.var1) {
		        this.audio.removeEventListener("ended", this.var1, false);
		    }
		    this.var1 = this[strName].bind(this);
		    this.audio.addEventListener("ended", this.var1);
		};
		
		this.fRemoveChiled = function(name)
		{
			this.removeChild(name);
		}
		
		this.isMuted = false; // global flag
		
		this.fMuteAudio = function(){
		    this.isMuted = !this.isMuted;
		
		    bgMusic.muted = this.isMuted;
		   // this.audio.muted = this.isMuted; // optional: if you want to mute other audio too
		
		    // Change button frame based on mute state
		    if (this.isMuted) {
		        this.btnMute.gotoAndStop("mute");   // Frame labeled 'mute'
		    } else {
		        this.btnMute.gotoAndStop("unMute"); // Frame labeled 'unMute'
		    }
		};
		
		this.addButtonHoverEffect = function (target) {
			target.cursor = 'pointer';
			target.addEventListener("mouseover", function () {
				createjs.Tween.get(target, { override: true })
					.to({ scaleX: 1.1, scaleY: 1.1 }, 200, createjs.Ease.quadOut);
			});
		
			target.addEventListener("mouseout", function () {
				createjs.Tween.get(target, { override: true })
					.to({ scaleX: 1, scaleY: 1 }, 200, createjs.Ease.quadOut);
			});
		};
		
		var bgMusic;
		this.fPlayBGMusic = function(){
			bgMusic = new Audio("sounds/bg_music.mp3");
			bgMusic.loop = true;
			bgMusic.volume = 0.2;
			bgMusic.play();
		}
		this.fStopBGMusic = function(){
			bgMusic.pause();
			bgMusic.currentTime = 0;
		}
		this.fRenderInstructions = function(container, instructionsArray, font, color, lineHeight, maxWidth, align, bulletGap) {
			container.removeAllChildren();
			let currentY = 0;
		
			const bulletWidth = 35; // 🟣 Space to reserve for the bullet (tweak as needed)
		
			instructionsArray.forEach((text, i) => {
				// 1. Bullet text
				const bullet = new createjs.Text(`${i + 1}.`, font, color);
				bullet.textAlign = "left";
				bullet.textBaseline = "top";
				bullet.lineHeight = lineHeight;
				bullet.x = 0;
				bullet.y = currentY;
				bullet.mouseEnabled = false;
		
				// 2. Actual content text
				const content = new createjs.Text(text, font, color);
				content.textAlign = align || "left";
				content.textBaseline = "top";
				content.lineHeight = lineHeight;
				content.lineWidth = maxWidth - bulletWidth;
				content.x = bulletWidth;
				content.y = currentY;
				content.mouseEnabled = false;
		
				container.addChild(bullet);
				container.addChild(content);
		
				// 3. Calculate block height based on text wrapping
				const numLines = Math.ceil(content.getMeasuredWidth() / content.lineWidth);
				const blockHeight = numLines * content.getMeasuredLineHeight();
		
				currentY += blockHeight + bulletGap;
			});
		};
		
		this.fLoadHowToPlay = function(){
			this.howToPlay = new lib.mcHtp();
			this.addChild(this.howToPlay);
			this.howToPlay.alpha = 0;
			createjs.Tween.get(this.howToPlay).to({ alpha: 1 }, 500);
			this.fRenderInstructions(this.howToPlay.mcTT, howtoplay, "30px Roboto", "#000000", 35, 900, "left", 20);
			
			this.howToPlay.btnClose.cursor = "pointer";
			this.howToPlay.mcBlocker.cursor = "default";
			this.howToPlay.btnClose.addEventListener("click", this.fCloseHTP.bind(this));
		}
		
		this.fCloseHTP = function(){
			this.removeChild(this.howToPlay);
		}
		
		this.fLoadActCompleted = function(){
			this.EndScreen = new lib.act_completed();
			this.addChild(this.EndScreen);
			this.EndScreen.alpha = 0;
			createjs.Tween.get(this.EndScreen).to({ alpha: 1 }, 500);
			
			this.EndScreen.btnReplay.btn.cursor = "pointer";
			this.EndScreen.mcBlocker.cursor = "default";
			this.EndScreen.btnReplay.btn.addEventListener("click", this.fReplayGame.bind(this));
		
			this.fPrintEndTxt();
		}
		
		this.fPrintEndTxt = function(){
			const mm = String(Math.floor(this.elapsedSeconds / 60)).padStart(2, "0");
			const ss = String(this.elapsedSeconds % 60).padStart(2, "0");
			const finalTime = `${mm}:${ss}`;
		
			// Prepare the final message
			const endText1 = `You took ${finalTime} to complete the activity!`;
			const endText2 = `Try to beat your best time!`;
		
			// Show it on the end screen
			this.fGenerateCreateJSText(this.EndScreen.mcTT1, endText1, 0, 0, 200, 900, "40px Roboto", "#0098FF", "center");
			this.fGenerateCreateJSText(this.EndScreen.mcTT2, endText2, 0, 0, 200, 900, "40px Roboto", "#005CBC", "center");
		}
		
		this.fReplayGame = function(){
			window.location.reload(true);
		}
		this.stop();
		this.currentQuestion = 1;
		this.initFunction = function () {
			this.dragLine = null;
			this.lineStartItem = null;
			this.mcStart = new lib.start_screen();
			this.addChild(this.mcStart);
			this.mcStart.hitArea = this.mcStart.btn;
			this.mcStart.addEventListener('mousedown', this.fPlayInitScreen.bind(this));
			this.mcStart.cursor = 'pointer';
		}
		this.fPlayInitScreen = function () {
			this.fPlayBGMusic();
			setTimeout(() => {this.createDigitalClock();}, 700);
			createjs.Tween.get(this.mcClock, { loop: false}).to({ alpha: 1}, 1000);
			createjs.Tween.get(this.mcStart, { loop: false}).to({ alpha: 0}, 500).call(this.fLoadGameScreen.bind(this));
		}
		this.fLoadGameScreen = function () {
			this.removeChild(this.mcStart);
			this.mcGameScreen = new lib["game_screen" + this.currentQuestion];
			this.addChild(this.mcGameScreen);
			//this.mcGameScreen.alpha = 0;
			//createjs.Tween.get(this.mcGameScreen, { loop: false}).to({ alpha: 1}, 1500, createjs.Ease.getPowInOut(5));//.call(this.fLoadImage.bind(this));
			this.fLoadImage();
			this.fInitializegame();
		}
		this.fLoadImage = function() {
			const imageList = [];
			for (var i = 1; i <= 10; i++) {
				var numStr = (i < 10) ? "0" + i : i.toString();
				imageList.push("images/image_" + numStr + ".png");
			}
			
			// Shuffle image list and pick first 5
			imageList.sort(function() { return Math.random() - 0.5; });
			var selectedImages = imageList.slice(0, 5);
			this.selectedImageIndexes = []; // Store image index for text mapping
			for (let j = 0; j < 5; j++) {
				let imgPath = selectedImages[j];
		
				// Extract image number from file name: e.g., image_03.jpg → 2 (index)
				let imgIndex = parseInt(imgPath.match(/image_(\d+)\.png/)[1], 10) - 1;
				this.selectedImageIndexes.push(imgIndex);
				console.log(this.selectedImageIndexes);
				
				let loader = new createjs.Bitmap(imgPath);
				let mc = this.mcGameScreen["mcLeft_img" + (j + 1)].mcImage;
				while (mc.numChildren > 0) mc.removeChildAt(0);
				mc.addChild(loader);
			}
			// 🟨 Add matching text to mcTxt1–mcTxt5
			for (let k = 0; k < 5; k++) {
				let textIndex = this.selectedImageIndexes[k]; // get correct index
				let text = arrQText[textIndex]; // get text for image
		
				let txtMC = this.mcGameScreen["mcRight_Txt" + (k + 1)].mcTT;
				//this.fGenerateCreateJSText = function(mc, strText, xx, yy, nLineHeight, nLineWidth, strFont, strColor, strAlign)
				// Rect Text Edit
					this.fGenerateCreateJSText(txtMC,text,0,0,200,300,"30px Roboto", "#FFFFFF",	"center");
				//});
			}
			this.leftItems = [];
			this.rightItems = [];
		
			for (let i = 0; i < 5; i++) {
				let left = this.mcGameScreen["mcLeft_img" + (i + 1)];
				let right = this.mcGameScreen["mcRight_Txt" + (i + 1)];
		
				let matchId = this.selectedImageIndexes[i];
		
				left.matchId = matchId;
				right.matchId = matchId;
		
				left.id = matchId;
				right.id = matchId;
		
				left.isMatched = false;
				right.isMatched = false;
		
				this.leftItems.push(left);
				this.rightItems.push(right);
			}
			for (let i = 0; i < 5; i++) {
				let left = this.leftItems[i];
				let right = this.rightItems[i];
		
				left.btn.cursor = 'pointer';
				right.btn.cursor = 'pointer';
				
				left.btnAudio.cursor = 'pointer';
				right.btnAudio.cursor = 'pointer';
				
				//left.hitArea = left.btn;
				//right.hitArea = right.btn;
				
				left.btnAudio.addEventListener("click", () => {
					let audioIndex = left.matchId + 1;
					let fileName = audioIndex < 10 ? `img_audio${audioIndex}` : `img_audio${audioIndex}`;
					console.log(fileName + " -:fileName")
					//this.fPlayAudio(fileName);
					this.playAudio(fileName)
				});
		
				right.btnAudio.addEventListener("click", () => {
					let audioIndex = right.matchId + 1;
					let fileName = audioIndex < 10 ? `txt_audio${audioIndex}` : `txt_audio${audioIndex}`;
					this.playAudio(fileName);
				});
				
				left.btn.addEventListener("mousedown", this.fStartLineDrag.bind(this, left, "left"));
				right.btn.addEventListener("mousedown", this.fStartLineDrag.bind(this, right, "right"));
			}
			this.fRandomPosion();
			console.log("🔍 LEFT items:");
			this.leftItems.forEach((l, i) => {
				console.log(`Left ${i+1}: ID = ${l.matchId}, X = ${l.x}, Y = ${l.y}`);
			});
			console.log("🔍 RIGHT items:");
			this.rightItems.forEach((r, i) => {
				console.log(`Right ${i+1}: ID = ${r.matchId}, X = ${r.x}, Y = ${r.y}`);
			});
		};
		
		this.fRandomPosion = function()
		{
			var leftItems = [];
			var leftPositions = [];
		
			for (let i = 1; i <= 5; i++) {
				let item = this.mcGameScreen["mcLeft_img" + i];
				leftItems.push(item);
				leftPositions.push({ x: item.x, y: item.y }); // store original pos
			}
		
			// Shuffle positions
			leftPositions.sort(() => Math.random() - 0.5);
		
			// Reassign positions
			for (let i = 0; i < 5; i++) {
				leftItems[i].x = leftPositions[i].x;
				leftItems[i].y = leftPositions[i].y;
			}
		
		
			// Repeat for mcRight_Txt1–5
			var rightItems = [];
			var rightPositions = [];
		
			for (let i = 1; i <= 5; i++) {
				let item = this.mcGameScreen["mcRight_Txt" + i];
				rightItems.push(item);
				rightPositions.push({ x: item.x, y: item.y });
			}
		
			rightPositions.sort(() => Math.random() - 0.5);
		
			for (let i = 0; i < 5; i++) {
				rightItems[i].x = rightPositions[i].x;
				rightItems[i].y = rightPositions[i].y;
			}
		}
		this.fInitializegame  = function(){
			//console.log("btn getBounds :- "+ this.mcGameScreen.mcLeft_img1.audioBtn);
			//this.mcGameScreen.mcLeft_img1.audioBtn.btn.cursor = "pointer"
		
			this.mcInsText = this.mcGameScreen.mcInstruction.mcTT;
			// mcInsText Text Edit
			this.fGenerateCreateJSText(this.mcInsText,insText,0,0,200,500,"30px Roboto", "#FFFF00",	"left");
		
			this.mcGameScreen.btnSubmit.hitArea = this.mcGameScreen.btnSubmit.btn;
			this.mcGameScreen.btnReset.hitArea = this.mcGameScreen.btnReset.btn;
			this.btnMute.hitArea = this.btnMute.btn;
			this.btnIns.hitArea = this.btnIns.btn;
		
			this.mcGameScreen.btnSubmit.mouseEnabled = false;
			this.mcGameScreen.btnReset.mouseEnabled = false;
			this.mcGameScreen.btnSubmit.alpha = 0.5;
			this.mcGameScreen.btnReset.alpha = 0.5;
			
			this.btnMute.cursor = "pointer"
			this.btnIns.cursor = "pointer"
		
		
			this.mcGameScreen.btnSubmit.addEventListener("click", this.fSubmitAnswers.bind(this));
			this.mcGameScreen.btnReset.addEventListener("click", this.fResetGame.bind(this));
			this.btnMute.addEventListener("click", this.fMuteAudio.bind(this));
			this.btnIns.addEventListener("click", this.fLoadHowToPlay.bind(this));
		}
		this.fStartLineDrag = function(item, side) {
			if (item.isMatched) return;
		
			this.lineStartItem = item;
			let pt = item.btn.localToGlobal(0, 0); // ⭐ START FROM BUTTON
		
			this.dragLine = new createjs.Shape();
			//Line color Edit
			this.dragLine.graphics.setStrokeStyle(6, "round").beginStroke("#ffffff").moveTo(pt.x, pt.y);
			this.mcGameScreen.addChild(this.dragLine);
		
			const updateLine = (evt) => {
				this.dragLine.graphics.clear()
					.setStrokeStyle(6, "round")
					.beginStroke("#ffffff")
					.moveTo(pt.x, pt.y)
					.lineTo(evt.stageX, evt.stageY);
			};
		
			const completeDrag = (evt) => {
				this.stage.removeEventListener("stagemousemove", updateLine);
				this.stage.removeEventListener("stagemouseup", completeDrag);
		
				let targets = (side === "left") ? this.rightItems : this.leftItems;
				let hitTarget = null;
		
				for (let i = 0; i < targets.length; i++) {
					let btn = targets[i].btn;
					let local = btn.globalToLocal(evt.stageX, evt.stageY);
					if (btn.hitTest(local.x, local.y) && !targets[i].isMatched) {
						hitTarget = targets[i];
						break;
					}
				}
		
				// ✅ Remove the temp blue line BEFORE anything else
				if (this.dragLine && this.mcGameScreen.contains(this.dragLine)) {
					this.mcGameScreen.removeChild(this.dragLine);
					this.dragLine = null;
				}
		
				if (hitTarget) {
					this.fCheckAndDrawLine(this.lineStartItem, hitTarget);
				}
		
				this.lineStartItem = null;
			};
		
			this.stage.addEventListener("stagemousemove", updateLine);
			this.stage.addEventListener("stagemouseup", completeDrag);
		};
		this.matchedPairs = [];
		this.fCheckAndDrawLine = function(item1, item2) {
			// Get center positions of both buttons
			let p1 = item1.btn.localToGlobal(0, 0);
			let p2 = item2.btn.localToGlobal(0, 0);
		
			let line = new createjs.Shape();
			//Line color Edit
			line.graphics.setStrokeStyle(6, "round").beginStroke("#ffffff").moveTo(p1.x, p1.y).lineTo(p2.x, p2.y);
			this.mcGameScreen.addChild(line);
		
			// Store line reference and mark as matched
			item1.line = line;
			item2.line = line;
		
			item1.isMatched = true;
			item2.isMatched = true;
		
			// Optional: store pairs, enable submit, etc.
			this.matchedPairs.push({
				itemA: item1,
				itemB: item2,
				line: line,
				isCorrect: (item1.id === item2.id)
			});
		
			// Freeze interaction
			item1.btn.mouseEnabled = false;
			item2.btn.mouseEnabled = false;
		
			// TODO: Check for correctness by ID
			console.log("item1.id =" + item1.id +": item2.id = " + item2.id);
			if (item1.id === item2.id) {
				//line.graphics.clear().setStrokeStyle(3).beginStroke("#00CC00").moveTo(p1.x, p1.y).lineTo(p2.x, p2.y); // Green
				line.isCorrect = true;
			} else {
				//line.graphics.clear().setStrokeStyle(3).beginStroke("#FF0000").moveTo(p1.x, p1.y).lineTo(p2.x, p2.y); // Red
				line.isCorrect = false;
			}	
		
			this.fUpdateButtonStates(); // Enable submit if 5 pairs connected
		};
		this.fUpdateButtonStates = function() {
			if (this.matchedPairs.length > 0) {
				this.mcGameScreen.btnReset.mouseEnabled = true;
				this.mcGameScreen.btnReset.alpha = 1;
				this.mcGameScreen.btnReset.cursor = 'pointer';
			}
		
			if (this.matchedPairs.length === 5) {
				this.mcGameScreen.btnSubmit.mouseEnabled = true;
				this.mcGameScreen.btnSubmit.alpha = 1;
				this.mcGameScreen.btnSubmit.cursor = 'pointer';
			}
		};
		this.fSubmitAnswers = function () {
			this.fDisabledButtons();
			let correctMatches = [];
		
			for (let match of this.matchedPairs) {
				let itemA = match.itemA;
				let itemB = match.itemB;
				let line = match.line;
		
				if (itemA.matchId === itemB.matchId) {
					// ✅ Correct Match — Lock it
					line.graphics.clear()
						.setStrokeStyle(6, "round")
						//Green Line color Edit 
						.beginStroke("#00CC00")
						.moveTo(itemA.btn.localToGlobal(0, 0).x, itemA.btn.localToGlobal(0, 0).y)
						.lineTo(itemB.btn.localToGlobal(0, 0).x, itemB.btn.localToGlobal(0, 0).y);
		
					line.isCorrect = true;
					line.isLocked = true; // 🔐 Lock correct line
					itemA.isMatched = true;
					itemB.isMatched = true;
					itemA.btn.mouseEnabled = false;
					itemB.btn.mouseEnabled = false;
					itemA.btnAudio.mouseEnabled = false;
					itemB.btnAudio.mouseEnabled = false;
		
					correctMatches.push(match);
				} else {
					// ❌ Incorrect — remove from stage
					if (this.mcGameScreen.contains(line)) {
						this.mcGameScreen.removeChild(line);
					}
					itemA.isMatched = false;
					itemB.isMatched = false;
					itemA.btn.mouseEnabled = true;
					itemB.btn.mouseEnabled = true;
				}
			}
		
			this.matchedPairs = correctMatches;
		
			let correctCount = this.matchedPairs.length;
		
			if (correctCount < 5) {
				this.playAudio("wrong", () => {
				this.fRefresh(); 
				this.fShuffleUnmatchedItems(); // 🔁 Shuffle unmatched
			});
			} else {
				this.playAudio("right", this.fLoadActCompleted.bind(this));
				 clearInterval(this.clockInterval); 
			}
		
			console.log("Matched pairs:", this.matchedPairs.map(p => ({
				leftID: p.itemA.matchId,
				rightID: p.itemB.matchId,
				isCorrect: p.line.isCorrect
			})));
		};
		this.fRefresh = function () {
			this.matchedPairs = this.matchedPairs.filter(p => p.isCorrect);
			//this.fShuffleUnmatchedItems(); // ✅ Reuse the shuffle function
		};
		this.fDisabledButtons = function(){
			this.mcGameScreen.btnSubmit.mouseEnabled = false;
			this.mcGameScreen.btnSubmit.alpha = 0.5;
			this.mcGameScreen.btnReset.mouseEnabled = false;
			this.mcGameScreen.btnReset.alpha = 0.5;
			console.log(this.mcGameScreen.btnReset.alpha + " : btnReset");
		}
		this.fResetGame = function () {
			this.fDisabledButtons();
			let keptMatches = [];
		
			for (let p of this.matchedPairs) {
				if (p.line.isLocked) {
					// 🔐 Freeze only those submitted and correct
					keptMatches.push(p);
				} else {
					// 🧹 Remove the rest (including post-submit new lines)
					p.itemA.isMatched = false;
					p.itemB.isMatched = false;
					p.itemA.btn.mouseEnabled = true;
					p.itemB.btn.mouseEnabled = true;
					this.mcGameScreen.removeChild(p.line);
				}
			}
		
			this.matchedPairs = keptMatches;
			this.fDisabledButtons();
			this.fShuffleUnmatchedItems(); // 🔁 Also shuffle on reset
		};
		this.fShuffleUnmatchedItems = function() {
			let unmatchedLeft = this.leftItems.filter(item => !item.isMatched);
			let unmatchedRight = this.rightItems.filter(item => !item.isMatched);
		
			let leftPositions = unmatchedLeft.map(item => ({ x: item.x, y: item.y }));
			let rightPositions = unmatchedRight.map(item => ({ x: item.x, y: item.y }));
		
			leftPositions.sort(() => Math.random() - 0.5);
			rightPositions.sort(() => Math.random() - 0.5);
		
			for (let i = 0; i < unmatchedLeft.length; i++) {
				unmatchedLeft[i].x = leftPositions[i].x;
				unmatchedLeft[i].y = leftPositions[i].y;
			}
			for (let i = 0; i < unmatchedRight.length; i++) {
				unmatchedRight[i].x = rightPositions[i].x;
				unmatchedRight[i].y = rightPositions[i].y;
			}
		};
		this.initFunction();
		stage.addChild(this.mcLogo); 
		//stage.setChildIndex(this.mcLogo, stage.numChildren - 1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.mcLogo = new lib.ncLogo();
	this.mcLogo.name = "mcLogo";
	this.mcLogo.setTransform(1178.85,29.35,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.mcLogo).wait(1));

	// btn
	this.btnMute = new lib.MB();
	this.btnMute.name = "btnMute";
	this.btnMute.setTransform(1222.85,665.3,1,1,0,0,0,28.1,28.1);

	this.btnIns = new lib.IB();
	this.btnIns.name = "btnIns";
	this.btnIns.setTransform(1154.4,665.3,1,1,0,0,0,28.1,28.1);

	this.mcClock = new lib.Timer();
	this.mcClock.name = "mcClock";
	this.mcClock.setTransform(991.1,633.95);
	this.mcClock.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcClock},{t:this.btnIns},{t:this.btnMute}]}).wait(1));

	// BG
	this.instance = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,657.9000000000001,463.5);
// library properties:
lib.properties = {
	id: '43D59298A37CE247BFAC71FF180991A9',
	width: 1280,
	height: 720,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG.jpg?1749123528294", id:"BG"},
		{src:"images/Bitmap1.png?1749123528294", id:"Bitmap1"},
		{src:"images/Bitmap10.png?1749123528294", id:"Bitmap10"},
		{src:"images/Bitmap12.png?1749123528294", id:"Bitmap12"},
		{src:"images/Bitmap15.png?1749123528294", id:"Bitmap15"},
		{src:"images/Bitmap16.png?1749123528294", id:"Bitmap16"},
		{src:"images/Bitmap2.png?1749123528294", id:"Bitmap2"},
		{src:"images/Bitmap3.png?1749123528294", id:"Bitmap3"},
		{src:"images/Bitmap6.png?1749123528294", id:"Bitmap6"},
		{src:"images/Bitmap7.png?1749123528294", id:"Bitmap7"},
		{src:"images/Bitmap8.png?1749123528294", id:"Bitmap8"},
		{src:"images/logo1.png?1749123528294", id:"logo1"},
		{src:"images/start_bg.png?1749123528294", id:"start_bg"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['43D59298A37CE247BFAC71FF180991A9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;