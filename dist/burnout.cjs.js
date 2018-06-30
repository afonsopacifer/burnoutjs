"use strict";var createMap=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,o=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:window).document.createElement("div");return t&&(o.style="\n      display: grid;\n      grid-template-columns: repeat("+t.cols+", "+r+"px);\n      grid-template-rows: repeat("+t.rows+", "+r+"px);\n      width: "+t.cols*r+"px;\n      height: "+t.rows*r+"px;\n      overflow: hidden;\n    "),o},createCamera=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,o=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:window).document.createElement("div");return t&&(o.style="\n      width: "+t.cols*r+"px;\n      height: "+t.rows*r+"px;\n    "),o},stringifyPosition=function(t){return"grid-area:\n    "+t.rowStart+" / \n    "+t.columnStart+" / \n    "+t.rowEnd+" / \n    "+t.columnEnd},createBlock=function(t){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).document.createElement("div");return t.className&&r.classList.add(t.className),t.position&&(r.style=stringifyPosition(t.position)),r},createAvatar=function(t){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).document.createElement("div");return t.className&&r.classList.add(t.className),t.position&&(r.style=stringifyPosition(t.position)),r},moveUp=function(t){return{rowStart:t.rowStart-1,columnStart:t.columnStart,rowEnd:t.rowEnd-1,columnEnd:t.columnEnd}},moveDown=function(t){return{rowStart:t.rowStart+1,columnStart:t.columnStart,rowEnd:t.rowEnd+1,columnEnd:t.columnEnd}},moveLeft=function(t){return{rowStart:t.rowStart,columnStart:t.columnStart-1,rowEnd:t.rowEnd,columnEnd:t.columnEnd-1}},moveRight=function(t){return{rowStart:t.rowStart,columnStart:t.columnStart+1,rowEnd:t.rowEnd,columnEnd:t.columnEnd+1}},wasBumped=function(t,r){var o=void 0;return{result:r.some(function(r){var n=t.columnStart===r.columnStart,e=t.columnEnd===r.columnEnd,a=t.rowStart===r.rowStart,i=t.rowEnd===r.rowEnd;return o=r,n&&e&&(a&&i)}),block:o}},stringifyTranslate=function(t){return"translate("+t.x+"px, "+t.y+"px)"},movements=function(t,r,o,n,e){var a={currentAvatarPosition:t.startPosition,currentAvatarSide:null,currentCameraPosition:{x:0,y:0}};return{up:function(){t.side&&!("up"===a.currentAvatarSide)&&(t.ref.className=t.side.up,a.currentAvatarSide="up");var i=moveUp(a.currentAvatarPosition),c=wasBumped(i,o);if(c.result){if(c.block.action){var l={rowStart:c.block.rowStart,columnStart:c.block.columnStart,rowEnd:c.block.rowEnd,columnEnd:c.block.columnEnd};return c.block.action(l)}return!1}t.static&&(a.currentCameraPosition.y+=e,r.style.transform=stringifyTranslate(a.currentCameraPosition)),t.ref.style=stringifyPosition(i),a.currentAvatarPosition=i;var u=wasBumped(i,n);if(u.result&&u.block.action){var s={rowStart:u.block.rowStart,columnStart:u.block.columnStart,rowEnd:u.block.rowEnd,columnEnd:u.block.columnEnd};return u.block.action(s)}return!0},down:function(){t.side&&!("down"===a.currentAvatarSide)&&(t.ref.className=t.side.down,a.currentAvatarSide="down");var i=moveDown(a.currentAvatarPosition),c=wasBumped(i,o);if(c.result){if(c.block.action){var l={rowStart:c.block.rowStart,columnStart:c.block.columnStart,rowEnd:c.block.rowEnd,columnEnd:c.block.columnEnd};return c.block.action(l)}return!1}t.static&&(a.currentCameraPosition.y-=e,r.style.transform=stringifyTranslate(a.currentCameraPosition)),t.ref.style=stringifyPosition(i),a.currentAvatarPosition=i;var u=wasBumped(i,n);if(u.result&&u.block.action){var s={rowStart:u.block.rowStart,columnStart:u.block.columnStart,rowEnd:u.block.rowEnd,columnEnd:u.block.columnEnd};return u.block.action(s)}return!0},left:function(){t.side&&!("left"===a.currentAvatarSide)&&(t.ref.className=t.side.left,a.currentAvatarSide="left");var i=moveLeft(a.currentAvatarPosition),c=wasBumped(i,o);if(c.result){if(c.block.action){var l={rowStart:c.block.rowStart,columnStart:c.block.columnStart,rowEnd:c.block.rowEnd,columnEnd:c.block.columnEnd};return c.block.action(l)}return!1}t.static&&(a.currentCameraPosition.x+=e,r.style.transform=stringifyTranslate(a.currentCameraPosition)),t.ref.style=stringifyPosition(i),a.currentAvatarPosition=i;var u=wasBumped(i,n);if(u.result&&u.block.action){var s={rowStart:u.block.rowStart,columnStart:u.block.columnStart,rowEnd:u.block.rowEnd,columnEnd:u.block.columnEnd};return u.block.action(s)}return!0},right:function(){t.side&&!("right"===a.currentAvatarSide)&&(t.ref.className=t.side.right,a.currentAvatarSide="right");var i=moveRight(a.currentAvatarPosition),c=wasBumped(i,o);if(c.result){if(c.block.action){var l={rowStart:c.block.rowStart,columnStart:c.block.columnStart,rowEnd:c.block.rowEnd,columnEnd:c.block.columnEnd};return c.block.action(l)}return!1}t.static&&(a.currentCameraPosition.x-=e,r.style.transform=stringifyTranslate(a.currentCameraPosition)),t.ref.style=stringifyPosition(i),a.currentAvatarPosition=i;var u=wasBumped(i,n);if(u.result&&u.block.action){var s={rowStart:u.block.rowStart,columnStart:u.block.columnStart,rowEnd:u.block.rowEnd,columnEnd:u.block.columnEnd};return u.block.action(s)}return!0}}},burnout=function(){var t={mapRef:null,viewRef:null,blocksRefs:[],collisionBlocksPositions:[],overBlocksPositions:[],blockSize:null,avatar:{ref:null,startPosition:null,side:null,static:!0}};return{defineMap:function(r){var o=createMap(r.map,r.blockSize),n=createCamera(r.view,r.blockSize);r.developer&&(o.style.border="1px solid",n.style.border="1px solid red",n.style.overflow="visible"),n.appendChild(o),t.viewRef=n,t.mapRef=o,t.blockSize=r.blockSize},defineBlock:function(r){var o=createBlock(r);r.collision&&t.collisionBlocksPositions.push(r.position),r.over&&t.overBlocksPositions.push(r.position),t.blocksRefs.push(o)},defineAvatar:function(r){var o=createAvatar(r);t.avatar.ref=o,t.avatar.startPosition=r.position,t.avatar.side=r.side,t.avatar.static=r.static},renderMap:function(r){t.blocksRefs.forEach(function(r){t.mapRef.appendChild(r)}),t.mapRef.appendChild(t.avatar.ref),r.appendChild(t.viewRef)},defineControlsPlugin:function(r){if(!r)return console.error("Burnout: No plugin added in defineControls() method");r(movements(t.avatar,t.mapRef,t.collisionBlocksPositions,t.overBlocksPositions,t.blockSize))},getAvatar:function(){return t.avatar.ref},getMap:function(){return t.mapRef},getView:function(){return t.viewRef},getBlock:function(r){return t.blocksRefs.filter(function(t){return stringifyPosition(r).replace(/\s/g,"")==t.style.cssText.replace(/\s/g,"").replace(/\;/g,"")})[0]}}},burnout$1=burnout();module.exports=burnout$1;
