/* global d3 */

const $hed = d3.select('.intro__hed');

function resize() {}

function typeWriter(index) {
	const $char = $hed.selectAll('.char');
	$char.classed('is-visible', (d, i) => i <= index);
	const $blink = $hed.selectAll('.blink');
	$blink.classed('is-visible', (d, i) => i === index);
	const next = index + 1;
	if (next < $char.size()) d3.timeout(() => typeWriter(next), 100);
	else $blink.classed('is-visible', false);
}

function init() {
	const data = $hed.text().split('');

	const html = data
		.map(
			(d, i) =>
				`<span class='char' data-index='${i}'>${d}</span><span data-index='${i}' class='blink'></span>`
		)
		.join('');
	$hed.html(html);
	$hed.classed('is-visible', true);

	d3.timeout(() => typeWriter(0), 1000);

	window.addEventListener('scroll', () => {
		d3.select('.more-icon').style('display', 'none');
	});
}

export default { init, resize };
