import $ from 'jquery';

// This function is very important. It determines how animations are triggered by checking if the selected element is present on the screen (viewpoint)
// If it is, return true
//Here for reference: https://gist.github.com/EvanHerman/a1045c19e115edc18b12

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