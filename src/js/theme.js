import { docReady } from './utils';
import navbarInit from './navbar-darken-on-scroll';
import detectorInit from './detector';
import swiperInit from './swiper';
import glightboxInit from './glightbox';
import cursor from './cursor';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(navbarInit);
docReady(detectorInit);
docReady(swiperInit);
docReady(glightboxInit);
docReady(cursor);
