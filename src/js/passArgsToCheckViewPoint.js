import $ from 'jquery';
import { isInViewport } from './isInViewport';

//Please pass jquery ID to use
 let passArgsToCheckViewPoint = $.fn.passArgsToCheckViewPoint = (ident, args) => {
            
    if (isInViewport($(ident))) {

        return args;
    }else{
        console.log('somethings wrong in passArgsToCheckViewPoint');
    }
}
    

export { passArgsToCheckViewPoint };