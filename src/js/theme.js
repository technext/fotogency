import { docReady } from './utils';
import detectorInit from './detector';
import swiperInit from './swiper';
import glightboxInit from './glightbox';
import cursorInit from './cursor';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(swiperInit);
docReady(glightboxInit);
docReady(cursorInit);
