export default {
	bind (el, binding, vnode) {
		console.log(binding.value)
		var img = new Image();
		img.src = binding.value;
		var opacityVal = el.style.opacity;
		TweenLite.set(el,{autoAlpha:0});
		img.onload = function() {
				el.src = url.value;
				el.parentNode.classList.add('image-loaded')
				TweenLite.to(el,0.5,{autoAlpha : 1});
		}
	}
}