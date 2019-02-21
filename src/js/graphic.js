/* global d3 */

function resize() {}

function init() {
	function typeWriter(progress) {
		const txt= 'What text prediction teaches us about language'
		const txt_progress = Math.max(0, Math.min(txt.length + 1, Math.floor(progress * txt.length)))
		const hed = d3.select('.intro__hed')

		console.log(hed.text())

		hed.text(txt.substring(0, txt_progress))
	}

	let progress = 0
	d3.interval(function() {
		progress += 0.01
		typeWriter(progress)
	}, 50)
}

export default { init, resize };
