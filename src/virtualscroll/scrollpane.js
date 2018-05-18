import {VirtualScroll} from "./virtualscroll"
import {Simplrz} from "@/utilities/simplrz" 
import {FrameImpulse} from "@/utilities/frameimpulse"
import "GSAP"
export const scrollPaneY = (container, blockTest, scrollFunc) => {

	var contentHeight, scrollTarget, scroll, windowHeight, maxScroll;
	var ease = 0.05;
	var handle, handleHeight, trackHeight, scrollDrag = false;;
	
	var mult = Simplrz.touch ? 1.5 : .8;
	
	var onScroll = function(e) {

		if(blockTest && blockTest()) return;

		scrollTarget -= e.deltaY * mult;

		scrollTarget = Math.max(scrollTarget, 0);
		scrollTarget = Math.min(scrollTarget, maxScroll);

		
	}

	var onFrame = function() {

		if(contentHeight < windowHeight) return;

		scroll += (scrollTarget - (scroll)) * ease;
		//container.ext.setY(-scroll).transform();
		TweenLite.set(container,{y: -scroll})

		//HLT.globalScroll = scroll;

		var n = scroll / maxScroll;

		if(handle) {
			handle.style.visibility = (contentHeight < windowHeight) ? 'hidden' : 'visible';
			handle.ext.setY(n * trackHeight).setZ(0.01).transform();
		}

		if(scrollFunc) {
			scrollFunc(scroll / maxScroll);
		}
	}

	var refresh = function(h, th) {
		windowHeight = h || window.innerHeight;
		trackHeight = th - handleHeight || trackHeight;
		contentHeight = container.getBoundingClientRect().height;
		maxScroll = contentHeight - windowHeight;
		scroll = 0;
		scrollTarget = 0;
	}

	return {

		refresh: refresh,

		setScrollbar: function(_handle, _handleHeight, _trackHeight) {
			handle = _handle;
			handle.style.height = _handleHeight + 'px';
			handleHeight = _handleHeight;
			trackHeight = _trackHeight - _handleHeight;

			if(!Simplrz.touch) {

				var downEvent = 'mousedown';
				var upEvent = 'mouseup';
				var moveEvent = 'mousemove';

				
				var dragStart = new SQR.V2();

				document.addEventListener(upEvent, function() {
					scrollDrag = false;
				});

				document.addEventListener(moveEvent, function(e) {
					if(scrollDrag) {
						e = Simplrz.touch ? e.targetTouches[0] : e;
						var d = e.pageY - dragStart.y;
						scrollTarget += d / trackHeight * maxScroll;

						scrollTarget = Math.max(scrollTarget, 0);
						scrollTarget = Math.min(scrollTarget, maxScroll);

						dragStart.set(e.pageX, e.pageY);
					}
				});

				handle.ext.on(downEvent, function(e) {
					e = Simplrz.touch ? e.targetTouches[0] : e;
					dragStart.set(e.pageX, e.pageY);
					scrollDrag = true;
				});
			}
		},

		on: function(h) {
			refresh(h);
			VirtualScroll.on(onScroll);
			FrameImpulse.on(onFrame);
		},

		off: function() {
			VirtualScroll.off(onScroll);
			FrameImpulse.off(onFrame);
			container.ext.setY(0).transform();
		}
	}

}

export const scrollPaneX = (container, blockTest, scrollFunc) => {

	var contentWidth, scrollTarget, scroll, windowWidth, maxScroll;
	var ease = 0.05;
	var handle, handleHeight, trackHeight, scrollDrag = false;;
	
	var mult = Simplrz.touch ? 1.5 : .8;
	
	var onScroll = function(e) {

		if(blockTest && blockTest()) return;

		scrollTarget -= e.deltaY ? e.deltaY * mult : e.deltaX * mult;

		scrollTarget = Math.max(scrollTarget, 0);
		scrollTarget = Math.min(scrollTarget, maxScroll);

		console.log(scrollTarget)
	}

	var onFrame = function() {

		if(contentWidth < windowWidth) return;

		scroll += (scrollTarget - (scroll)) * ease;
		//container.ext.setY(-scroll).transform();
		TweenLite.set(container,{x: -scroll})

		//HLT.globalScroll = scroll;

		var n = scroll / maxScroll;

		if(handle) {
			handle.style.visibility = (contentWidth < windowWidth) ? 'hidden' : 'visible';
			handle.ext.setY(n * trackHeight).setZ(0.01).transform();
		}

		if(scrollFunc) {
			scrollFunc(scroll / maxScroll);
		}
	}

	var refresh = function(w, th) {
		windowWidth = w || window.innerWidth;
		trackHeight = th - handleHeight || trackHeight;
		contentWidth = container.getBoundingClientRect().width;
		maxScroll = contentWidth - windowWidth;
		scroll = 0;
		scrollTarget = 0;
	}

	return {

		refresh: refresh,

		setScrollbar: function(_handle, _handleHeight, _trackHeight) {
			handle = _handle;
			handle.style.height = _handleHeight + 'px';
			handleHeight = _handleHeight;
			trackHeight = _trackHeight - _handleHeight;

			if(!Simplrz.touch) {

				var downEvent = 'mousedown';
				var upEvent = 'mouseup';
				var moveEvent = 'mousemove';

				
				var dragStart = new SQR.V2();

				document.addEventListener(upEvent, function() {
					scrollDrag = false;
				});

				document.addEventListener(moveEvent, function(e) {
					if(scrollDrag) {
						e = Simplrz.touch ? e.targetTouches[0] : e;
						var d = e.pageY - dragStart.y;
						scrollTarget += d / trackHeight * maxScroll;

						scrollTarget = Math.max(scrollTarget, 0);
						scrollTarget = Math.min(scrollTarget, maxScroll);

						dragStart.set(e.pageX, e.pageY);
					}
				});

				handle.ext.on(downEvent, function(e) {
					e = Simplrz.touch ? e.targetTouches[0] : e;
					dragStart.set(e.pageX, e.pageY);
					scrollDrag = true;
				});
			}
		},

		on: function(w) {
			refresh(w);
			VirtualScroll.on(onScroll);
			FrameImpulse.on(onFrame);
		},

		off: function() {
			VirtualScroll.off(onScroll);
			FrameImpulse.off(onFrame);
			TweenLite.set(container,{x: 0})
		}
	}

}