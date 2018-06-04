export default {
	bind (el, binding, vnode) {
		var img = new Image();
		img.src = binding.value;
		var opacityVal = el.style.opacity;
		TweenLite.set(el,{autoAlpha:0});
		img.onload = function() {
				el.style.backgroundImage = 'url('+ binding.value +')';
				TweenLite.set(el,{autoAlpha : 1});
				el.classList.add('image-loaded');
		}
	}
}