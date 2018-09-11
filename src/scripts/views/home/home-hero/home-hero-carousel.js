import Carousel from '../../../components/carousel';

export default class HomeHeroCarousel extends Carousel {

  initConfigHook() {

    this.namespace = 'js-hc';
    this.$scope = $(`#${this.namespace}`);

    this.isDragEnable = false;

    return Promise.resolve();
  }

  /* eslint-disable */
  tweenHook($out, $in, resolve, isPrevious, currentIndex, prevIndex) {

    const timelineOut = new TimelineMax({ease: Expo.easeInOut, paused: true, onComplete: () => resolve()});
    const timelineIn = new TimelineMax({ease: Expo.easeInOut, paused: true});

    const toOut = isPrevious ? '-100%' : '100%'
    const fromIn = isPrevious ? '100%' : '-100%'

    $out.css({'z-index': '1'});
    timelineOut
      .set($out, {x: '0%'})
      .to($out, 0.75, {x: toOut})
      .set($out, {x: '100%', css: {'display': 'none'}});

    $in.css({'z-index': '2', 'display': 'block'});
    timelineIn
      .set($in, {x: fromIn})
      .to($in, 0.75, {x: '0%'});

    return {timelineOut, timelineIn};
  }
  /* eslint-enable */

}
