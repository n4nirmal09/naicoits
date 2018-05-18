import {scrollPaneX} from './scrollpane'
import 'GSAP'

export default (container) => {
	let vs = scrollPaneX(document.querySelector(container), null, null)

	vs.on(window.innerWidth);

	window.addEventListener('resize', () => {
		vs.refresh(window.innerWidth)
	})
}