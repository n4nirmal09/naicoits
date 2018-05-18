/* --- --- [FrameImpulse] --- --- */

/**
 *	@namespace FrameImpulse
 *
 *	@description A utility to handle <code>requestAnimationFrame</code> loops.
 *
 *	@example
var render = function() {
  // Do some rendering logic in here
}

// When the loop needs to be activated
FrameImpulse.on(render);

// ...and when it needs to stop
FrameImpulse.off(render);
 */
export const FrameImpulse = (function() {

    var vendors = ['webkit', 'moz'];

    var r = {};
	var listeners = [], numListeners = 0, toRemove = [], numToRemove;
	var lastTime = 0;

    for(var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { 
            	callback(currTime + timeToCall); 
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

	var run = function(deltaTime) {
		requestAnimationFrame(run);

		if(numListeners == 0) return;
		
		for(var i = 0; i < numListeners; i++) {
			listeners[i].call(deltaTime);
		}

		if(numToRemove > 0) {
			var indexToRemove = [];
			for (var i = listeners.length - 1; i >= 0; i--) {
				for (var j = 0; j < toRemove.length; j++) {
					if (listeners[i] === toRemove[j])
						indexToRemove.push(i);
				};
			};

			for (var i = 0; i < indexToRemove.length; i++) {
				listeners.splice(indexToRemove[i], 1);
			};

			numListeners = listeners.length;
			toRemove = [];
			numToRemove = 0;
		}		
	}

	/**
	 *	@method on
	 *	@memberof FrameImpulse
	 *	@static
	 *
	 *	@param {Function} callback - the function used as callback for the listener
	 *	@description Adds a listener to be called on every frame
	 */
	r.on = function(f) {
		if(listeners.indexOf(f) > -1) { return; }
		listeners.push(f);
		numListeners = listeners.length;
		// console.log("FrameImpulse > new listener > total :", numListeners);
	}

	/**
	 *	@method off
	 *	@memberof FrameImpulse
	 *	@static
	 *
	 *	@param {Function} callback - the function used as callback for the listener. 
	 *	Needs to be the same function as passed to the <code>on()</code> when it was being registered.
	 *	@description Removes a listener to be called on every frame
	 */
	r.off = function(f) {
		

		// At this point we think the "late" removal patttern was more harmful than helpful, so it's gone.

		// if(listeners.indexOf(f) == -1) { return; }
		// toRemove.push(f);
		// numToRemove = toRemove.length;

		var i = listeners.indexOf(f);
		if(i == -1) return;
		listeners.splice(i, 1);
		numListeners = listeners.length;
	}

	r.getListeners = function() {
		return listeners;
	}
	
	run();
	return r;

})();
