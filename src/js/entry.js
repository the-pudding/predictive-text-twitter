/* global d3 */
import 'jquery'
import debounce from 'lodash.debounce';
import isMobile from './utils/is-mobile';
import graphic from './graphic';
import eval_scores from './eval_scores_per_language_model';
import example_tweets from './example_tweets';
import nearest_neighbours from './nearest_neighbours';
import neighbours_viz from './neighbours_visualization';

const $body = d3.select('body');
let previousWidth = 0;

function resize() {
	// only do resize on width changes, not height
	// (remove the conditional if you want to trigger on height change)
	const width = $body.node().offsetWidth;
	if (previousWidth !== width) {
		previousWidth = width;
		graphic.resize();
	}
}

function setupStickyHeader() {
	const $header = $body.select('header');
	if ($header.classed('is-sticky')) {
		const $menu = $body.select('.header__menu');
		const $toggle = $body.select('.header__toggle');
		$toggle.on('click', () => {
			const visible = $menu.classed('is-visible');
			$menu.classed('is-visible', !visible);
			$toggle.classed('is-visible', !visible);
		});
	}
}

function init() {
	// add mobile class to body tag
	$body.classed('is-mobile', isMobile.any());
	// setup resize event
	window.addEventListener('resize', debounce(resize, 150));
	// setup sticky header menu
	setupStickyHeader();
	// kick off graphic code
	graphic.init();
	eval_scores.init();
	example_tweets.init();
	nearest_neighbours.init();
	neighbours_viz.init();
}

init();
