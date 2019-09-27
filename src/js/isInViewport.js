import $ from 'jquery';

let isInViewport  = (elem) => {
	// if the element doesn't exist, abort
	if( elem.length === 0 ) {
		return;
	}
	let $window = $(window)
	let viewport_top = $window.scrollTop()
	let viewport_height = $window.height()
	let viewport_bottom = viewport_top + viewport_height
	let $elem = $(elem)
	let top = $elem.offset().top
	let height = $elem.height()
	let bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}
export { isInViewport };