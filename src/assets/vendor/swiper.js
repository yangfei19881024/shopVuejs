<<<<<<< HEAD
!function(t){"use strict";function i(t,i){return i.indexOf(t)>-1}function e(t){return"[object Array]"===Object.prototype.toString.call(t)}function s(t){return"[object Object]"===Object.prototype.toString.call(t)}function n(t,i){return t.className.match(new RegExp("(\\s|^)("+i+")(\\s|$)"))}function a(t,i){n(t,i)||(t.className+=" "+i)}function h(t,i){n(t,i)&&(t.className=t.className.replace(RegExp("(\\s|^)("+i+")(\\s|$)"),"$3"))}function r(t){if(/<\/?[^>]*>/g.test(t))return!1;var i="^(((https|http|ftp|rtsp|mms):)?//)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})?(:[0-9]{1,4})?([^?#]+)?(\\?[^#]+)?(#.+)?$";return new RegExp(i).test(t)}function o(t){return Array.prototype.slice.apply(t,Array.prototype.slice.call(arguments,1))}var l=function(){var t=o(arguments,0,3);if(!t.length)throw new Error("Parameters required!");var i=s(t.slice(-1)[0])?t.pop():{};switch(t.length){case 2:i.data=i.data||t[1];case 1:i.dom=i.dom||t[0]}if(!i.dom)throw new Error("Container can not be empty!");if(!i.data||!i.data.length)throw new Error("Data must be an array and must have more than one element!");this._opts=i,this._LSN={},this._EventHandle={},i=null,t=null,this._setting(),this.fire("initialize"),this._renderWrapper(),this._initPlugins(),this._bindHandler(),this.fire("initialized"),this._autoPlay()};l.EVENTS="initialize initialized pluginInitialize pluginInitialized slide slideStart slideEnd slideChange slideChanged slideRestore slideRestored loadData reset destroy".split(" "),l.EASING=["linear ease ease-in ease-out ease-in-out".split(" "),/cubic-bezier\(([^\d]*(\d+.?\d*)[^\,]*\,?){4}\)/],l.FIX_PAGE_TAGS="SELECT INPUT TEXTAREA BUTTON LABEL".split(" "),l.EMPTY_FUNCTION=function(){},l.extend=function(){var t,i,e=arguments;switch(e.length){case 0:return;case 1:t=l.prototype,i=e[0];break;case 2:t=e[0],i=e[1]}for(var s in i)i.hasOwnProperty(s)&&(t[s]=i[s])},l.plugins={},l.regPlugin=function(t,i){l.plugins[t]=l.plugins[t]||i},l._animateFuncs={normal:function(){function t(t,i,e,s,n){t.style.webkitTransform="translateZ(0) translate"+i+"("+(n+e*(s-1))+"px)"}return t.effect="transform",t}()},l._transitionEndEvent=function(){var t;return function(){if(t)return t;var i=document.createElement("fakeElement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var s in e)if(e.hasOwnProperty(s)&&void 0!==i.style[s])return t=e[s]}}();var d=l.prototype;d.extend=l.extend,d._setting=function(){this._plugins=l.plugins,this._animateFuncs=l._animateFuncs,this.holding=!1,this.locking=!1;var s=this._opts;this.wrap=s.dom,this.data=s.data,this.isVertical=!!s.isVertical,this.isOverspread=!!s.isOverspread,this.duration=s.duration||2e3,this.initIndex=s.initIndex>0&&s.initIndex<=s.data.length-1?s.initIndex:0,this.fixPage=null==s.fixPage?!0:!!s.fixPage,this.fillSeam=!!s.fillSeam,this.slideIndex=this.slideIndex||this.initIndex||0,this.axis=this.isVertical?"Y":"X",this.reverseAxis="Y"===this.axis?"X":"Y",this.width="number"==typeof s.width?s.width:this.wrap.clientWidth,this.height="number"==typeof s.height?s.height:this.wrap.clientHeight,this.ratio=this.height/this.width,this.scale=this.isVertical?this.height:this.width,this.offset=this.offset||{X:0,Y:0},this.isTouchable=null==s.isTouchable?!0:!!s.isTouchable,this.isLooping=s.isLooping&&this.data.length>1?!0:!1,this.delay=s.delay||0,this.isAutoplay=s.isAutoplay&&this.data.length>1?!0:!1,this.animateType=s.animateType in this._animateFuncs?s.animateType:"normal",this._animateFunc=this._animateFuncs[this.animateType],this._animateReverse=function(){var t=[];for(var i in this._animateFuncs)this._animateFuncs.hasOwnProperty(i)&&this._animateFuncs[i].reverse&&t.push(i);return t}.bind(this)(),this.isVertical&&"card"===this.animateType&&(this.isOverspread=!0),this.log=s.isDebug?function(){t.console.log.apply(t.console,arguments)}:l.EMPTY_FUNCTION,this._setUpDamping(),this.animateTime=null!=s.animateTime&&s.animateTime>-1?s.animateTime:300,this.animateEasing=i(s.animateEasing,l.EASING[0])||l.EASING[1].test(s.animateEasing)?s.animateEasing:"ease",this.inAnimate=0,this.deviceEvents=function(){var i=!!("ontouchstart"in t||t.DocumentTouch&&document instanceof t.DocumentTouch);return{hasTouch:i,startEvt:i?"touchstart":"mousedown",moveEvt:i?"touchmove":"mousemove",endEvt:i?"touchend":"mouseup"}}(),this.fingerRecognitionRange=s.fingerRecognitionRange>-1?parseInt(s.fingerRecognitionRange):10,this.isMoving=!1,this.events={},this.on("initialize",s.oninitialize,1),this.on("initialized",s.oninitialized,1),this.on("pluginInitialized",s.onplugininitialized,1),this.on("slide",s.onslide,1),this.on("slideStart",s.onslidestart,1),this.on("slideEnd",s.onslideend,1),this.on("slideChange",s.onslidechange,1),this.on("slideChanged",s.onslidechanged,1),this.on("slideRestore",s.onsliderestore,1),this.on("slideRestored",s.onsliderestored,1),this.pluginConfig=function(){if(e(s.plugins)){var t={};return s.plugins.forEach(function(i){e(i)?t[i[0]]=i.slice(1):"string"==typeof i&&(t[i]=[])}),t}return{}}()},d._initPlugins=function(){var t=this.pluginConfig,i=this._plugins;for(var e in t)t.hasOwnProperty(e)&&i.hasOwnProperty(e)&&(this.log("[INIT PLUGIN]:",e,i[e]),i[e]&&"function"==typeof i[e]&&typeof i[e].apply&&i[e].apply(this,t[e]));this.fire("pluginInitialized")},d._setUpDamping=function(){var t=this.scale>>1,i=t>>1,e=i>>2;this._damping=function(s){var n,a=Math.abs(s);return n=t>a?a>>1:t+i>a?i+(a-t>>2):i+e+(a-t-i>>3),s>0?n:-n}},d._itemType=function(t){if(isNaN(t)||(t=this.data[t]),t.hasOwnProperty("type"))return t.type;var i,e=t.content;return i=null==e?"empty":Boolean(e.nodeName)&&Boolean(e.nodeType)?"node":"string"==typeof e?r(e)?"pic":"html":"unknown",t.type=i,i},d._renderItem=function(t,i){var e,s=this,n=this.data.length,a=function(){var i=' src="'+e.content+'"';i+=e.height/e.width>s.ratio?' height="100%"':' width="100%"',s.isOverspread&&(t.style.cssText+="background-image:url("+e.content+");background-repeat:no-repeat;background-position:50% 50%;background-size:cover",i+=' style="display:block;opacity:0;height:100%;width:100%;"'),t.innerHTML="<img"+i+" />"};if(t.innerHTML="",t.style.background="",this.isLooping||null!=this.data[i]){i=(n+i)%n,e=this.data[i];var h=this._itemType(e);switch(this.log("[Render ITEM]:",h,i,e),t.className="islider-"+h,h){case"pic":if(2===e.load)a();else{var r=new Image;r.src=e.content,r.onload=function(){e.height=r.height,e.width=r.width,a(),e.load=2}}break;case"dom":case"html":t.innerHTML=e.content;break;case"node":case"element":if(11===e.content.nodeType){var o=document.createElement("div");o.appendChild(e.content),e.content=o}t.appendChild(e.content)}}},d._renderIntermediateScene=function(){null!=this._intermediateScene&&(this._renderItem.apply(this,this._intermediateScene),this._intermediateScene=null)},d._changedStyles=function(){var t=["islider-prev","islider-active","islider-next"];this.els.forEach(function(i,e){h(i,t.join("|")),a(i,t[e]),this.fillSeam&&this.originScale(i)}.bind(this))},d._renderWrapper=function(){this.wrap.style.overflow="hidden";var i;this.outer?(i=this.outer,i.innerHTML=""):i=document.createElement("ul"),i.className="islider-outer",i.style.overflow="hidden",this.els=[];for(var e=0;3>e;e++){var s=document.createElement("li");this.els.push(s),this._animateFunc(s,this.axis,this.scale,e,0),this.fixPage||(s.style.overflow="auto"),!this.isVertical||"rotate"!==this.animateType&&"flip"!==this.animateType?this._renderItem(s,e-1+this.slideIndex):this._renderItem(s,1-e+this.slideIndex),i.appendChild(s)}this._changedStyles(),this.fillSeam&&this.els.forEach(function(t,i){a(t,"islider-sliding"+(1===i?"-focus":""))}),t.setTimeout(function(){this._preloadImg(this.slideIndex)}.bind(this),200),this.outer||(this.outer=i,this.wrap.appendChild(i)),this.currentEl=this.els[1],this.fire("renderComplete",this.slideIndex,this.currentEl,this)},d._preloadImg=function(t){if(this.data.length>3){var i=this.data,e=i.length,s=this,n=function(t){var e=i[t];if("pic"===s._itemType(e)&&!e.load){var n=new Image;n.src=e.content,n.onload=function(){e.width=n.width,e.height=n.height,e.load=2},e.load=1}};n((t+2)%e),n((t-2+e)%e)}},d._watchTransitionEnd=function(i,e){function s(){a&&t.clearTimeout(a),h.inAnimate--,h.log("Event:","watchTransitionEnd::stuck::release",h.inAnimate),0===h.inAnimate&&("slideChanged"===e&&h._changedStyles(),h.fire.call(h,e,h.slideIndex,h.currentEl,h),h._renderIntermediateScene(),h.play()),n()}function n(){h.els.forEach(function(t){t.removeEventListener(l._transitionEndEvent(),s)})}var a,h=this;this.log("Event:","watchTransitionEnd::stuck::pile",this.inAnimate),i>0&&h.els.forEach(function(t){t.addEventListener(l._transitionEndEvent(),s)}),a=t.setTimeout(s,i),h.inAnimate++},d._bindHandler=function(){var i=this.outer;if(this.isTouchable){var e=this.deviceEvents;e.hasTouch||(i.style.cursor="pointer",i.ondragstart=function(t){return t?!1:!0}),i.addEventListener(e.startEvt,this),i.addEventListener(e.moveEvt,this),i.addEventListener(e.endEvt,this),!this.deviceEvents.hasTouch&&i.addEventListener("mouseout",this)}t.addEventListener("orientationchange",this),t.addEventListener("resize",this),t.addEventListener("focus",this,!1),t.addEventListener("blur",this,!1)},d.handleEvent=function(t){var i=this.deviceEvents;switch(t.type){case"mousedown":if(0!==t.button)break;case"touchstart":this.startHandler(t);break;case i.moveEvt:this.moveHandler(t);break;case i.endEvt:case"mouseout":case"touchcancel":this.endHandler(t);break;case"orientationchange":this.orientationchangeHandler();break;case"focus":this.play();break;case"blur":this.pause();break;case"resize":this.resizeHandler()}},d.startHandler=function(t){if(this.fixPage&&l.FIX_PAGE_TAGS.indexOf(t.target.tagName)<0&&t.preventDefault(),!this.holding&&!this.locking){var i=this.deviceEvents;this.isMoving=!0,this.pause(),this.log("Event: start"),this.fire("slideStart",t,this),this.startTime=(new Date).getTime(),this.startX=i.hasTouch?t.targetTouches[0].pageX:t.pageX,this.startY=i.hasTouch?t.targetTouches[0].pageY:t.pageY}},d.moveHandler=function(t){if(this.isMoving){this.log("Event: moving");var i=this.deviceEvents,e=this.data.length,s=this.axis,n=this.reverseAxis,a={X:i.hasTouch?t.targetTouches[0].pageX-this.startX:t.pageX-this.startX,Y:i.hasTouch?t.targetTouches[0].pageY-this.startY:t.pageY-this.startY};if(this.offset=a,Math.abs(a[s])-Math.abs(a[n])>10){t.preventDefault(),this.isLooping||(a[s]>0&&0===this.slideIndex||a[s]<0&&this.slideIndex===e-1)&&(a[s]=this._damping(a[s]));for(var h=0;3>h;h++){var r=this.els[h];r.style.visibility="visible",r.style.webkitTransition="none",this._animateFunc(r,s,this.scale,h,a[s],a[s]),this.fillSeam&&this.seamScale(r)}this.fire("slide",t,this)}}},d.endHandler=function(i){function e(i){if(null!=i)if("A"===i.tagName){if(i.href)return"_blank"===i.getAttribute("target")?window.open(i.href):t.location.href=i.href,!1}else{if("LI"===i.tagName&&i.className.search(/^islider\-/)>-1)return!1;e(i.parentNode)}}if(this.isMoving){this.log("Event: end"),this.isMoving=!1;var s=this.offset,n=this.axis,a=this.scale/2,h=(new Date).getTime(),r=this.fingerRecognitionRange;a=h-this.startTime>300?a:14;var o=Math.abs(s[n]),l=Math.abs(s[this.reverseAxis]);this.log(a,s[n],o,l,this),this.fire("slideEnd",i,this),s[n]>=a&&o>l?this.slideTo(this.slideIndex-1):s[n]<-a&&o>l?this.slideTo(this.slideIndex+1):Math.abs(this.offset[this.axis])>=r&&this.slideTo(this.slideIndex),Math.abs(this.offset[this.axis])<r&&this.fixPage&&i.target&&(i.preventDefault(),e(i.target)),this.offset.X=this.offset.Y=0}},d.orientationchangeHandler=function(){t.setTimeout(function(){this.reset(),this.log("Event: orientationchange")}.bind(this),100)},d.resizeHandler=function(){(this.height!==this.wrap.clientHeight||this.width!==this.wrap.clientWidth)&&(this._LSN.resize&&t.clearTimeout(this._LSN.resize),this._LSN.resize=t.setTimeout(function(){this.reset(),this._LSN.resize&&t.clearTimeout(this._LSN.resize),this.log("Event: resize")}.bind(this),500))},d.slideTo=function(t,e){if(this.isAutoplay&&this.pause(),!this.locking){this.unhold();var s,n=this.animateTime,r=this.animateType,o=this._animateFunc,l=this.data,d=this.els,c=t,u=t-this.slideIndex,f=this.offset;"object"==typeof e&&(e.animateTime>-1&&(n=e.animateTime),"string"==typeof e.animateType&&e.animateType in this._animateFuncs&&(r=e.animateType,o=this._animateFuncs[r]));var p=Math.abs(f[this.axis])/this.scale*n;Math.abs(u)>1&&this._renderItem(u>0?this.els[2]:this.els[0],c),this._preloadImg(c),l[c]?this.slideIndex=c:this.isLooping?this.slideIndex=u>0?0:l.length-1:u=0,this.log("Index:"+this.slideIndex);var g,m,v;0===u?s="slideRestore":((this.isVertical&&i(r,this._animateReverse))^u>0?(d.push(d.shift()),g=d[2],m=d[0],v=1):(d.unshift(d.pop()),g=d[0],m=d[2],v=-1),this.currentEl=d[1],1===Math.abs(u)?(this._renderIntermediateScene(),this._renderItem(g,c+u)):Math.abs(u)>1&&(this._renderItem(g,c+v),this._intermediateScene=[m,c-v]),g.style.webkitTransition="none",p=n-p,s="slideChange",this.fillSeam&&(d.forEach(function(t){h(t,"islider-sliding|islider-sliding-focus")}),a(this.currentEl,"islider-sliding-focus"),a(g,"islider-sliding"))),this.fire(s,this.slideIndex,this.currentEl,this),this._watchTransitionEnd(p,s+"d");for(var E=0;3>E;E++)d[E]!==g&&(d[E].style.webkitTransition=(o.effect||"all")+" "+p/1e3+"s "+this.animateEasing),o.call(this,d[E],this.axis,this.scale,E,0,v),this.fillSeam&&this.seamScale(d[E])}},d.slideNext=function(){this.slideTo.apply(this,[this.slideIndex+1].concat(o(arguments)))},d.slidePrev=function(){this.slideTo.apply(this,[this.slideIndex-1].concat(o(arguments)))},d.regPlugin=function(){var t=o(arguments),e=t.shift(),s=t[0];(this._plugins.hasOwnProperty(e)||"function"==typeof s)&&("function"==typeof s&&(this._plugins[e]=s,t.shift()),i(e,this._opts.plugins)||(this._opts.plugins.push(t.length?[].concat([e],t):e),"function"==typeof this._plugins[e]&&this._plugins[e].apply(this,t)))},d.bind=d.delegate=function(i,e,s){function n(i){for(var n=t.event?t.event:i,a=n.target,h=document.querySelectorAll(e),r=0;r<h.length;r++)if(a===h[r]){s.call(a);break}}this.wrap.addEventListener(i,n,!1);var a=i+";"+e;this._EventHandle.hasOwnProperty(a)?(this._EventHandle[a][0].push(s),this._EventHandle[a][1].push(n)):this._EventHandle[a]=[[s],[n]]},d.unbind=d.unDelegate=function(t,i,e){var s=t+";"+i;if(this._EventHandle.hasOwnProperty(s)){var n=this._EventHandle[s][0].indexOf(e);if(n>-1)return this.wrap.removeEventListener(t,this._EventHandle[s][1][n]),this._EventHandle[s][0][n]=this._EventHandle[s][1][n]=null,!0}return!1},d.destroy=function(){var i=this.outer,e=this.deviceEvents;this.fire("destroy"),this.isTouchable&&(i.removeEventListener(e.startEvt,this),i.removeEventListener(e.moveEvt,this),i.removeEventListener(e.endEvt,this),!this.deviceEvents.hasTouch&&i.removeEventListener("mouseout",this)),t.removeEventListener("orientationchange",this),t.removeEventListener("focus",this),t.removeEventListener("blur",this);var s;for(s in this._EventHandle)for(var n=this._EventHandle[s][1],a=0;a<n.length;a++)"function"==typeof n[a]&&this.wrap.removeEventListener(s.substr(0,s.indexOf(";")),n[a]);this._EventHandle=null;for(s in this._LSN)this._LSN.hasOwnProperty(s)&&this._LSN[s]&&t.clearTimeout(this._LSN[s]);this._LSN=null,this.wrap.innerHTML=""},d.on=function(t,e,s){i(t,l.EVENTS)&&"function"==typeof e&&(!(t in this.events)&&(this.events[t]=[]),s?this.events[t].unshift(e):this.events[t].push(e))},d.has=function(t,i){return t in this.events?-1<this.events[t].indexOf(i):!1},d.off=function(t,i){if(t in this.events){var e=this.events[t].indexOf(i);e>-1&&delete this.events[t][e]}},d.fire=function(t){var i=o(arguments,1);t.split(/\x20+/).forEach(function(t){if(this.log("[EVENT FIRE]:",t,i),t in this.events)for(var e=this.events[t],s=0;s<e.length;s++)"function"==typeof e[s]&&e[s].apply&&e[s].apply(this,i)}.bind(this))},d.reset=function(){this.pause(),this.width="number"==typeof this._opts.width?this._opts.width:this.wrap.clientWidth,this.height="number"==typeof this._opts.height?this._opts.height:this.wrap.clientHeight,this.ratio=this.height/this.width,this.scale=this.isVertical?this.height:this.width,this._renderWrapper(),this._autoPlay(),this.fire("reset slideRestored",this.slideIndex,this.currentEl,this)},d.loadData=function(t,i){this.pause(),this.slideIndex=i||0,this.data=t,this._renderWrapper(),this._autoPlay(),this.fire("loadData slideChanged",this.slideIndex,this.currentEl,this)},d._autoPlay=function(){this.delay>0?t.setTimeout(this.play.bind(this),this.delay):this.play()},d.play=function(){this.pause(),this.isAutoplay&&(this.isLooping||this.slideIndex<this.data.length-1)&&(this._LSN.autoPlay=t.setTimeout(this.slideNext.bind(this),this.duration))},d.pause=function(){this._LSN.autoPlay&&t.clearTimeout(this._LSN.autoPlay)},d.hold=function(){this.holding=!0},d.unhold=function(){this.holding=!1,this.unlock()},d.lock=function(){this.hold(),this.locking=!0},d.unlock=function(){this.locking=!1},d.seamScale=function(t){var i=/scale([XY]?)\(([^\)]+)\)/;i.test(t.style.webkitTransform)?t.style.webkitTransform=t.style.webkitTransform.replace(i,function(t,i,e){var s={};return i?(s[i]=parseFloat(e),"scale"+this.axis+"("+(i===this.axis?1.001*s[this.axis]:1.001)+")"):(e.indexOf(",")>-1?(e=e.split(","),s.X=parseFloat(e[0]),s.Y=parseFloat(e[1])):s.Y=s.X=parseFloat(e),s[this.axis]*=1.001,"scale("+s.X+", "+s.Y+")")}.bind(this)):t.style.webkitTransform+="scale"+this.axis+"(1.001)"},d.originScale=function(t){var i=/([\x20]?scale)([XY]?)\(([^\)]+)\)/;t.style.webkitTransform=t.style.webkitTransform.replace(i,function(t,i,e,s){return t={},e?"1.001"===s?"":(t[e]=parseFloat(s),"scale"+this.axis+"("+(e===this.axis?t[this.axis]/1.001:1)+")"):(s.indexOf(",")>-1?(s=s.split(","),t.X=parseFloat(s[0]),t.Y=parseFloat(s[1])):t.Y=t.X=parseFloat(s),t[this.axis]/=1.001,"scale("+t.X+", "+t.Y+")")}.bind(this))},"function"==typeof require&&"object"==typeof module&&module&&"object"==typeof exports&&exports?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t.iSlider=t.iSlider||l}(this||window);
=======
/*
 * Swipe 2.0
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
*/

function Swipe(container, options) {

  "use strict";

  // utilities
  var noop = function() {}; // simple no operation function
  var offloadFn = function(fn) { setTimeout(fn || noop, 0) }; // offload a functions execution

  // check browser capabilities
  var browser = {
    addEventListener: !!window.addEventListener,
    touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
    transitions: (function(temp) {
      var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
      for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
      return false;
    })(document.createElement('swipe'))
  };

  // quit if no root element
  if (!container) return;
  var element = container.children[0];
  var slides, slidePos, width, length;
  options = options || {};
  var index = parseInt(options.startSlide, 10) || 0;
  var speed = options.speed || 300;
  options.continuous = options.continuous !== undefined ? options.continuous : true;

  function setup() {

    // cache slides
    slides = element.children;
    length = slides.length;

    // set continuous to false if only one slide
    if (slides.length < 2) options.continuous = false;

    //special case if two slides
    if (browser.transitions && options.continuous && slides.length < 3) {
      element.appendChild(slides[0].cloneNode(true));
      element.appendChild(element.children[1].cloneNode(true));
      slides = element.children;
    }

    // create an array to store current positions of each slide
    slidePos = new Array(slides.length);

    // determine width of each slide
    width = container.getBoundingClientRect().width || container.offsetWidth;

    element.style.width = (slides.length * width) + 'px';

    // stack elements
    var pos = slides.length;
    while(pos--) {

      var slide = slides[pos];

      slide.style.width = width + 'px';
      slide.setAttribute('data-index', pos);

      if (browser.transitions) {
        slide.style.left = (pos * -width) + 'px';
        move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
      }

    }

    // reposition elements before and after index
    if (options.continuous && browser.transitions) {
      move(circle(index-1), -width, 0);
      move(circle(index+1), width, 0);
    }

    if (!browser.transitions) element.style.left = (index * -width) + 'px';

    container.style.visibility = 'visible';

  }

  function prev() {

    if (options.continuous) slide(index-1);
    else if (index) slide(index-1);

  }

  function next() {

    if (options.continuous) slide(index+1);
    else if (index < slides.length - 1) slide(index+1);

  }

  function circle(index) {

    // a simple positive modulo using slides.length
    return (slides.length + (index % slides.length)) % slides.length;

  }

  function slide(to, slideSpeed) {

    // do nothing if already on requested slide
    if (index == to) return;

    if (browser.transitions) {

      var direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward

      // get the actual position of the slide
      if (options.continuous) {
        var natural_direction = direction;
        direction = -slidePos[circle(to)] / width;

        // if going forward but to < index, use to = slides.length + to
        // if going backward but to > index, use to = -slides.length + to
        if (direction !== natural_direction) to =  -direction * slides.length + to;

      }

      var diff = Math.abs(index-to) - 1;

      // move all the slides between index and to in the right direction
      while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);

      to = circle(to);

      move(index, width * direction, slideSpeed || speed);
      move(to, 0, slideSpeed || speed);

      if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place

    } else {

      to = circle(to);
      animate(index * -width, to * -width, slideSpeed || speed);
      //no fallback for a circular continuous if the browser does not accept transitions
    }

    index = to;
    offloadFn(options.callback && options.callback(index, slides[index]));
  }

  function move(index, dist, speed) {

    translate(index, dist, speed);
    slidePos[index] = dist;

  }

  function translate(index, dist, speed) {

    var slide = slides[index];
    var style = slide && slide.style;

    if (!style) return;

    style.webkitTransitionDuration =
    style.MozTransitionDuration =
    style.msTransitionDuration =
    style.OTransitionDuration =
    style.transitionDuration = speed + 'ms';

    style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
    style.msTransform =
    style.MozTransform =
    style.OTransform = 'translateX(' + dist + 'px)';

  }

  function animate(from, to, speed) {

    // if not an animation, just reposition
    if (!speed) {

      element.style.left = to + 'px';
      return;

    }

    var start = +new Date;

    var timer = setInterval(function() {

      var timeElap = +new Date - start;

      if (timeElap > speed) {

        element.style.left = to + 'px';

        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

        clearInterval(timer);
        return;

      }

      element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

    }, 4);

  }

  // setup auto slideshow
  var delay = options.auto || 0;
  var interval;

  function begin() {

    interval = setTimeout(next, delay);

  }

  function stop() {

    delay = 0;
    clearTimeout(interval);

  }


  // setup initial vars
  var start = {};
  var delta = {};
  var isScrolling;

  // setup event capturing
  var events = {

    handleEvent: function(event) {

      switch (event.type) {
        case 'touchstart': this.start(event); break;
        case 'touchmove': this.move(event); break;
        case 'touchend': offloadFn(this.end(event)); break;
        case 'webkitTransitionEnd':
        case 'msTransitionEnd':
        case 'oTransitionEnd':
        case 'otransitionend':
        case 'transitionend': offloadFn(this.transitionEnd(event)); break;
        case 'resize': offloadFn(setup); break;
      }

      if (options.stopPropagation) event.stopPropagation();

    },
    start: function(event) {

      var touches = event.touches[0];

      // measure start values
      start = {

        // get initial touch coords
        x: touches.pageX,
        y: touches.pageY,

        // store time to determine touch duration
        time: +new Date

      };

      // used for testing first move event
      isScrolling = undefined;

      // reset delta and end measurements
      delta = {};

      // attach touchmove and touchend listeners
      element.addEventListener('touchmove', this, false);
      element.addEventListener('touchend', this, false);

    },
    move: function(event) {

      // ensure swiping with one touch and not pinching
      if ( event.touches.length > 1 || event.scale && event.scale !== 1) return

      if (options.disableScroll) event.preventDefault();

      var touches = event.touches[0];

      // measure change in x and y
      delta = {
        x: touches.pageX - start.x,
        y: touches.pageY - start.y
      }

      // determine if scrolling test has run - one time test
      if ( typeof isScrolling == 'undefined') {
        isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
      }

      // if user is not trying to scroll vertically
      if (!isScrolling) {

        // prevent native scrolling
        event.preventDefault();

        // stop slideshow
        stop();

        // increase resistance if first or last slide
        if (options.continuous) { // we don't add resistance at the end

          translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);

        } else {

          delta.x =
            delta.x /
              ( (!index && delta.x > 0               // if first slide and sliding left
                || index == slides.length - 1        // or if last slide and sliding right
                && delta.x < 0                       // and if sliding at all
              ) ?
              ( Math.abs(delta.x) / width + 1 )      // determine resistance level
              : 1 );                                 // no resistance if false

          // translate 1:1
          translate(index-1, delta.x + slidePos[index-1], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(index+1, delta.x + slidePos[index+1], 0);
        }

      }

    },
    end: function(event) {

      // measure duration
      var duration = +new Date - start.time;

      // determine if slide attempt triggers next/prev slide
      var isValidSlide =
            Number(duration) < 250               // if slide duration is less than 250ms
            && Math.abs(delta.x) > 20            // and if slide amt is greater than 20px
            || Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

      // determine if slide attempt is past start and end
      var isPastBounds =
            !index && delta.x > 0                            // if first slide and slide amt is greater than 0
            || index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0

      if (options.continuous) isPastBounds = false;

      // determine direction of swipe (true:right, false:left)
      var direction = delta.x < 0;

      // if not scrolling vertically
      if (!isScrolling) {

        if (isValidSlide && !isPastBounds) {

          if (direction) {

            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index-1), -width, 0);
              move(circle(index+2), width, 0);

            } else {
              move(index-1, -width, 0);
            }

            move(index, slidePos[index]-width, speed);
            move(circle(index+1), slidePos[circle(index+1)]-width, speed);
            index = circle(index+1);

          } else {
            if (options.continuous) { // we need to get the next in this direction in place

              move(circle(index+1), width, 0);
              move(circle(index-2), -width, 0);

            } else {
              move(index+1, width, 0);
            }

            move(index, slidePos[index]+width, speed);
            move(circle(index-1), slidePos[circle(index-1)]+width, speed);
            index = circle(index-1);

          }

          options.callback && options.callback(index, slides[index]);

        } else {

          if (options.continuous) {

            move(circle(index-1), -width, speed);
            move(index, 0, speed);
            move(circle(index+1), width, speed);

          } else {

            move(index-1, -width, speed);
            move(index, 0, speed);
            move(index+1, width, speed);
          }

        }

      }

      // kill touchmove and touchend event listeners until touchstart called again
      element.removeEventListener('touchmove', events, false)
      element.removeEventListener('touchend', events, false)

    },
    transitionEnd: function(event) {

      if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

      }

    }

  }

  // trigger setup
  setup();

  // start auto slideshow if applicable
  if (delay) begin();


  // add event listeners
  if (browser.addEventListener) {

    // set touchstart event on element
    if (browser.touch) element.addEventListener('touchstart', events, false);

    if (browser.transitions) {
      element.addEventListener('webkitTransitionEnd', events, false);
      element.addEventListener('msTransitionEnd', events, false);
      element.addEventListener('oTransitionEnd', events, false);
      element.addEventListener('otransitionend', events, false);
      element.addEventListener('transitionend', events, false);
    }

    // set resize event on window
    window.addEventListener('resize', events, false);

  } else {

    window.onresize = function () { setup() }; // to play nice with old IE

  }

  // expose the Swipe API
  return {
    setup: function() {

      setup();

    },
    slide: function(to, speed) {

      // cancel slideshow
      stop();

      slide(to, speed);

    },
    prev: function() {

      // cancel slideshow
      stop();

      prev();

    },
    next: function() {

      // cancel slideshow
      stop();

      next();

    },
    stop: function() {

      // cancel slideshow
      stop();

    },
    getPos: function() {

      // return current index position
      return index;

    },
    getNumSlides: function() {

      // return total number of slides
      return length;
    },
    kill: function() {

      // cancel slideshow
      stop();

      // reset element
      element.style.width = '';
      element.style.left = '';

      // reset slides
      var pos = slides.length;
      while(pos--) {

        var slide = slides[pos];
        slide.style.width = '';
        slide.style.left = '';

        if (browser.transitions) translate(pos, 0, 0);

      }

      // removed event listeners
      if (browser.addEventListener) {

        // remove current event listeners
        element.removeEventListener('touchstart', events, false);
        element.removeEventListener('webkitTransitionEnd', events, false);
        element.removeEventListener('msTransitionEnd', events, false);
        element.removeEventListener('oTransitionEnd', events, false);
        element.removeEventListener('otransitionend', events, false);
        element.removeEventListener('transitionend', events, false);
        window.removeEventListener('resize', events, false);

      }
      else {

        window.onresize = null;

      }

    }
  }

}


if ( window.jQuery || window.Zepto ) {
  (function($) {
    $.fn.Swipe = function(params) {
      return this.each(function() {
        $(this).data('Swipe', new Swipe($(this)[0], params));
      });
    }
  })( window.jQuery || window.Zepto )
}

export default Swipe;
>>>>>>> swiper