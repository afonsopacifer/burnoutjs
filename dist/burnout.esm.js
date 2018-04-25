var createMap=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,e=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:window).document.createElement("div");return e.style="\n    display: grid;\n    grid-template-columns: repeat("+t.cols+", "+r+"px);\n    grid-template-rows: repeat("+t.rows+", "+r+"px);\n    width: "+t.cols*r+"px;\n    height: "+t.rows*r+"px;\n    overflow: hidden;\n  ",e},createCamera=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,e=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:window).document.createElement("div");return e.style="\n    width: "+t.cols*r+"px;\n    height: "+t.rows*r+"px;\n  ",e},stringifyPosition=function(t){return"grid-area: \n            "+t.rowStart+" / \n            "+t.columnStart+" /\n            "+t.rowEnd+" /\n            "+t.columnEnd},createBlock=function(t){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).document.createElement("div");return r.classList.add(t.className),r.style=stringifyPosition(t.position),r},createAvatar=function(t){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).document.createElement("div");return r.classList.add(t.className),r.style=stringifyPosition(t.position),r},moveUp=function(t){return{rowStart:t.rowStart-1,columnStart:t.columnStart,rowEnd:t.rowEnd-1,columnEnd:t.columnEnd}},moveDown=function(t){return{rowStart:t.rowStart+1,columnStart:t.columnStart,rowEnd:t.rowEnd+1,columnEnd:t.columnEnd}},moveLeft=function(t){return{rowStart:t.rowStart,columnStart:t.columnStart-1,rowEnd:t.rowEnd,columnEnd:t.columnEnd-1}},moveRight=function(t){return{rowStart:t.rowStart,columnStart:t.columnStart+1,rowEnd:t.rowEnd,columnEnd:t.columnEnd+1}},wasBumped=function(t,r){return r.some(function(r){var e=t.columnStart===r.columnStart,n=t.columnEnd===r.columnEnd,o=t.rowStart===r.rowStart,i=t.rowEnd===r.rowEnd;return e&&n&&(o&&i)})},stringifyTranslate=function(t){return"transform: translate("+t.x+"px, "+t.y+"px);"},keyPress=function(t,r){return t.which===r||t.keyCode===r},setKeyboardControls=function(t,r,e,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:window,a={currentAvatarPosition:t.startPosition,currentAvatarSide:null,currentCameraPosition:{x:0,y:0}};i.addEventListener("keydown",function(i){if(keyPress(i,o.up)){var s=moveUp(a.currentAvatarPosition);if("up"!==a.currentAvatarSide&&(t.ref.className=t.side.up,a.currentAvatarSide="up"),wasBumped(s,e))return;a.currentCameraPosition.y+=n,r.style=r.style.cssText+stringifyTranslate(a.currentCameraPosition),t.ref.style=stringifyPosition(s),a.currentAvatarPosition=s}if(keyPress(i,o.down)){var l=moveDown(a.currentAvatarPosition);if("down"!==a.currentAvatarSide&&(t.ref.className=t.side.down,a.currentAvatarSide="down"),wasBumped(l,e))return;a.currentCameraPosition.y-=n,r.style=r.style.cssText+stringifyTranslate(a.currentCameraPosition),t.ref.style=stringifyPosition(l),a.currentAvatarPosition=l}if(keyPress(i,o.left)){var c=moveLeft(a.currentAvatarPosition);if("left"!==a.currentAvatarSide&&(t.ref.className=t.side.left,a.currentAvatarSide="left"),wasBumped(c,e))return;a.currentCameraPosition.x+=n,r.style=r.style.cssText+stringifyTranslate(a.currentCameraPosition),t.ref.style=stringifyPosition(c),a.currentAvatarPosition=c}if(keyPress(i,o.right)){var u=moveRight(a.currentAvatarPosition);if("right"!==a.currentAvatarSide&&(t.ref.className=t.side.right,a.currentAvatarSide="right"),wasBumped(u,e))return;a.currentCameraPosition.x-=n,r.style=r.style.cssText+stringifyTranslate(a.currentCameraPosition),t.ref.style=stringifyPosition(u),a.currentAvatarPosition=u}})},burnout=function(){var t={mapRef:null,viewRef:null,blocksRefs:[],collisionBlocksPositions:[],blockSize:null,avatar:{ref:null,startPosition:null,side:null}};return{defineMap:function(r){var e=createMap(r.map,r.blockSize),n=createCamera(r.view,r.blockSize);r.developer&&(e.style.border="1px solid",n.style.border="1px solid red",n.style.overflow="visible"),n.appendChild(e),t.viewRef=n,t.mapRef=e,t.blockSize=r.blockSize},defineBlock:function(r){var e=createBlock(r);r.collision&&t.collisionBlocksPositions.push(r.position),t.blocksRefs.push(e)},defineAvatar:function(r){var e=createAvatar(r);t.avatar.ref=e,t.avatar.startPosition=r.position,t.avatar.side=r.side},renderMap:function(r){t.blocksRefs.forEach(function(r){t.mapRef.appendChild(r)}),t.mapRef.appendChild(t.avatar.ref),r.appendChild(t.viewRef)},defineControls:function(r){r.keyboard&&setKeyboardControls(t.avatar,t.mapRef,t.collisionBlocksPositions,t.blockSize,r.keyboard)}}},burnout$1=burnout();export default burnout$1;
