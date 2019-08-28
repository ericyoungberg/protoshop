/**
 * ProtoShop
 */

import ProtoShop from './src/ProtoShop';

if ('protoshop' in window) {
    console.error('A ProtoShop instance has already been loaded');
}
else {
    window.protoshop = new ProtoShop();
}
