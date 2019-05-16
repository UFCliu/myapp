/**
 * 
 */
function switchVisibility(targetObjectId,eventObj,cordX,cordY){
	if(eventObj){
		var eventTarget=eventObj.target?eventObj.target:eventObj.srcElement;
		if(window.currentlyPopupTarget!=eventTarget){
			hideCurrentPopup();
			window.currentlyPopupTarget=eventTarget;}
		var styleObject=getStyleObject(targetObjectId),object=getObject(targetObjectId);
		if(!object.shim) object.shim=new iframeShim(object);
		if(styleObject){
			eventObj.cancelBubble=true;
			if(styleObject.visibility=='visible'){
				if(window.currentlyVisiblePopup) hideCurrentPopup();
				else changeObjectVisibility(targetObjectId,'hidden');}
			else showPopup(targetObjectId,eventObj,cordX,cordY)
		}else return false;
	}else return false;}
function showPopup(targetObjectId,eventObj,cordX,cordY){
	if(eventObj){
		eventObj.cancelBubble=true;
		var eventTarget=eventObj.target?eventObj.target:eventObj.srcElement;
		if(window.currentlyPopupTarget!=eventTarget){
			hideCurrentPopup();
			window.currentlyPopupTarget=eventTarget;}
		if(window.currentlyVisiblePopup==targetObjectId) return;
		var object=getObject(targetObjectId);
		if(!object.shim) object.shim=new iframeShim(object);
		stopTimeG();
		hideCurrentPopup();
		if(positionObject(targetObjectId,cordX,cordY)){
	    	changeObjectVisibility(targetObjectId,'visible');
	    	window.currentlyVisiblePopup=targetObjectId;
	    	return true;
		}else return false;
    }else return false;}
function hideCurrentPopup(){if(window.currentlyVisiblePopup){changeObjectVisibility(window.currentlyVisiblePopup,'hidden');window.currentlyVisiblePopup=false;}}if(window.clickBlankHidePopup) myAttachEvent(document,'click',hideCurrentPopup);
function positionObject(objectId,x,y){
    var styleObject=getStyleObject(objectId),object=getObject(objectId);
	if(!object.shim) object.shim=new iframeShim(object);
	if(styleObject){
		var topY=0,leftX=0;
		var screenHeight=screen.availHeight-144,screenWidth=screen.availWidth-20;
		var windowHeight=document.body.clientHeight,windowWidth=document.body.clientWidth;
		var objectHeight=object.offsetHeight,objectWidth=object.offsetWidth;
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop,scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
		if(objectWidth>screenWidth){
			leftX=0 + scrollLeft;
		}else if(typeof x!='undefined'&&x!=null&&x!=''){
			if(x+objectWidth>windowWidth+scrollLeft) leftX=windowWidth-objectWidth+scrollLeft;
			else leftX=x;
		}else{
			leftX=(screenWidth-objectWidth)/2+scrollLeft;}
		if(objectHeight>screenHeight){
			topY=0 + scrollTop;
		}else if(typeof y!='undefined'&&y!=null&&y!=''){
			if(y+objectHeight>windowHeight+scrollTop) topY=windowHeight-objectHeight+scrollTop;
			else topY=y;
		}else{
			topY=(screenHeight-objectHeight)/2+scrollTop;}
		if(leftX<0) leftX=0;
		if(topY<0) topY=0;
		return setXY(objectId,leftX+'px',topY+'px');
	}else return false;}
function getObject(objectId){
    if(document.getElementById&&document.getElementById(objectId)){
		return document.getElementById(objectId);
    }else if(document.all&&document.all(objectId)){
		return document.all(objectId);
    }else if(document.layers&&document.layers[objectId]){
		return document.layers[objectId];
    }else return false;}
function getStyleObject(objectId){
    if(document.getElementById&&document.getElementById(objectId)){
		return document.getElementById(objectId).style;
    }else if(document.all&&document.all(objectId)){
		return document.all(objectId).style;
    }else if(document.layers&&document.layers[objectId]){
		return document.layers[objectId];
    }else return false;}
function dashify(str){return str.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();}
function getCurrentStyle(element,styleProp){
    var retVal;
    if(element.currentStyle){
       retVal=element.currentStyle[styleProp];
    }else if(document.defaultView&&document.defaultView.getComputedStyle){
       retVal=document.defaultView.getComputedStyle(element,null).getPropertyValue(dashify(styleProp));
    }else{
       retVal=null;
    }return retVal;}
function getLocalOffset(offset,direction){
	var y=offset['offset' + direction];
    var div;
    try{div=offset.offsetParent;}
	catch(ex){return y;}
        y += div['offset' + direction];
        try{div=div.offsetParent;}
		catch(ex){return y;}
		return y;}
function getLocalOffsetTop(offset){return getLocalOffset(offset,'Top');}
function getLocalOffsetLeft(offset){return getLocalOffset(offset,'Left');}
function getXY(object){var pt=new Point(0,0);pt.x=getLocalOffsetLeft(object);pt.y=getLocalOffsetTop(object);return pt;}
function Point(iX,iY){this.x=iX;this.y=iY;}
function iframeShim(theDiv){
    this.div=theDiv;
    if(this.div.currentStyle){
        if(navigator.userAgent.indexOf("MSIE 7") != -1){
            this.setStyle=this.setStyleNonIE;
            this.setOpacity=this.setOpacityIE;
            this.getOpacity=this.getOpacityIE;
        }else{
            var frame=document.createElement("iframe");
            frame.src="javascript:''"
            frame.frameBorder="0";
            frame.scrolling="no";
            frame.className = "iframeShim";
            if (isNaN(this.div.currentStyle.zIndex))
            {
                frame.style.zIndex =-1;
            }
            else
            {
                
                frame.style.zIndex = this.div.currentStyle.zIndex - 1;
            }
            var offsetLeft=getLocalOffsetLeft(this.div);
            var styleLeft=this.div.currentStyle.left;
            if(offsetLeft==0&&styleLeft) frame.style.left=styleLeft;
            else frame.style.left=offsetLeft;
            var offsetTop=getLocalOffsetTop(this.div)
            var styleTop=this.div.currentStyle.top;
            var styleBottom=this.div.currentStyle.bottom;
            if(offsetTop==0&&(styleTop||styleBottom)){
            	frame.style.top=styleTop;
                frame.style.bottom=styleBottom;
            }else frame.style.top=offsetTop;
			frame.style.width=this.div.offsetWidth;
            frame.style.height=this.div.offsetHeight;
            frame.style.position="absolute";
            frame.style.display=this.div.currentStyle.display;
			frame.style.visibility=this.div.currentStyle.visibility;
            this.iframe=frame;
            this.div.parentNode.insertBefore(this.iframe,this.div);
            this.setStyle=this.setStyleIE;
            this.setOpacity=this.setOpacityIE;
            this.getOpacity=this.getOpacityIE;}
    }else{
        this.setStyle=this.setStyleNonIE;
        this.setOpacity=this.setOpacityNonIE;
        this.getOpacity=this.getOpacityNonIE;}
}
iframeShim.prototype={
    setStyleNonIE:function(prop,val){this.div.style[prop]=val;},
    setStyleIE:function(prop,val){this.div.style[prop]=val;if(prop != 'position'){this.iframe.style[prop]=val;}this.iframe.style.width=this.div.offsetWidth + "px";this.iframe.style.height=this.div.offsetHeight + "px";this.iframe.style.left=getLocalOffsetLeft(this.div);this.iframe.style.top=getLocalOffsetTop(this.div);},
    setOpacityNonIE:function(val){if(val<0) val=0;if(val>1) val=1;this.div.style.opacity=val;},
    setOpacityIE:function(val){if(val<0) val=0;if(val>1) val=1;this.div.filters.alpha.opacity=(val * 100);},
    getOpacityNonIE:function(){return getCurrentStyle(this.div,'opacity');},
    getOpacityIE:function(){return this.div.filters.alpha.opacity / 100.0;},
    getStyle:function(prop){return this.div.style[prop];}
}
function changeObjectVisibility(objectId,newVisibility){
    var styleObject=getStyleObject(objectId),object=getObject(objectId);
	if(!object.shim) object.shim=new iframeShim(object);
    if(styleObject){
		if(typeof popupDivUseFilter!='undefined'&&popupDivUseFilter){
			if(typeof styleObject.filter!='undefined'){
				styleObject.filter=(typeof popupDivFilterType=='string')?popupDivFilterType:'blendTrans(duration=0.2)';
				object.filters[0].Apply();
				object.shim.setStyle('visibility',newVisibility);
				if(object.mask) object.mask.hideMask();
				object.filters[0].Play();
			}else if(typeof styleObject.MozOpacity!='undefined'){
				styleObject.visibility='visible';
				if(newVisibility=='visible'){
					object.from=0.0;
					object.to=1.0;
					styleObject.MozOpacity=object.from;
				}else{object.from=1.0;
					object.to=0.0;
					styleObject.MozOpacity=object.from;}
				object.duration=500;
				object.startTime=(new Date).getTime()-13;
				if(object.timer!=null){
					clearInterval(object.timer);
					object.timer=null;
				}object.timer=setInterval('blendTrans4Gecko("'+newVisibility+'","'+objectId+'")',13);
			}else{object.shim.setStyle('visibility',newVisibility);if(object.mask) object.mask.hideMask();}
		}else{object.shim.setStyle('visibility',newVisibility);if(object.mask) object.mask.hideMask();}
		if(window['MYRESUME']&&typeof(MYRESUME.divMask)=='function'&&object['bodyMask']){
			if(!document.body.mask) document.body.mask = new MYRESUME.divMask(document.body,object.parentNode);
			if(newVisibility=='visible'){
					if(document.body.mask.maskFlag) return true;
			document.body.mask.showMask();
			}
			else document.body.mask.hideMask();
		}
		
		return true;
    }else return false;
}
function setXY(objectId,newXCoordinate,newYCoordinate){var styleObject=getStyleObject(objectId),object=getObject(objectId);if(!object.shim) object.shim=new iframeShim(object);if(styleObject){object.shim.setStyle('left',newXCoordinate);object.shim.setStyle('top',newYCoordinate);return true;}else return false;}
function blendTrans4Gecko(newVisibility,objId){
	var styleObject=getStyleObject(objId),object=getObject(objId);
	var T,ease,time=(new Date).getTime();
	T=sp_clampTo(time-object.startTime,0,object.duration);
	if(T>=object.duration){
		clearInterval(object.timer);
		object.timer=null;
		styleObject.visibility=newVisibility;
	}else{ease=0.5-(0.5 * Math.cos(Math.PI*T/object.duration));
		object.now=sp_computeNextFloat (object.from,object.to,ease);
		if(styleObject.MozOpacity) styleObject.MozOpacity=object.now<1?object.now:0.99;}}
function sp_clampTo(value,min,max){return value<min?min:value>max?max:value;}
function sp_computeNextFloat(from,to,ease){return from + (to-from) * ease;}
var timeID=null;
function stopTimeG(){if(timeID!=null){clearTimeout(timeID);timeID=null;}}
function startTimeG(){if(timeID==null) timeID=setTimeout('hideCurrentPopup()',100);}