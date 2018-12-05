/**
 * @author v1ndic4te
 * @copyright 2018
 * @licence MIT
 */

const ConsolePrefix = '[taganaut]';

class Util {

    /**
     * @returns {boolean}
     */
    static isBrowser() {
        return typeof window !== 'undefined';
    }

    static warn(/*arguments*/) {
        const args = Array.prototype.slice.call(arguments);
        args.unshift(ConsolePrefix);
        console.warn.apply(this, args);
    }

}

module.exports = Util;
