/* global d3 */

function resize() {}

function init() {
	const hed = d3.select('.intro__typing')
			const txt= 'What text prediction teaches us about language'

	function typeWriter(progress) {
		const txt_progress = Math.max(0, Math.min(txt.length + 1, Math.floor(progress * txt.length)))

		hed.text(txt.substring(0, txt_progress))
	}

	function delayTyping() {
		let progress = 0
		let interval = d3.interval(function() {
			if (hed.text().length == txt.length) {
				interval.stop();
				d3.select('.blink')
					.transition()
						.delay(5000)
						.style('animation', 'none')
						.style('border-right', 'none')
				return;
			} else {
				progress += 0.01
				typeWriter(progress)
			}
		}, 50)
	}

	setTimeout(delayTyping, 1000);

	window.addEventListener('scroll', function() { d3.select('.more-icon').style('display', 'none') });
}

export default { init, resize };
