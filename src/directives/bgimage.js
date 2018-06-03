export default {
	bind (el, binding, vnode) {
		var img = new Image();
		img.src = binding.value;
		var opacityVal = el.style.opacity;
		TweenLite.set(el,{autoAlpha:0});
		img.onload = function() {
				el.style.backgroundImage = 'url('+ binding.value +')';
				TweenLite.to(el,0.5,{autoAlpha : 1});
				el.classList.add('image-loaded');
		}
	}
}