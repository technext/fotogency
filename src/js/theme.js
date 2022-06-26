import { docReady } from './utils';
import detectorInit from './detector';
import swiperInit from './swiper';
import glightboxInit from './glightbox';
import cursor from './cursor';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(swiperInit);
docReady(glightboxInit);
docReady(cursor);
