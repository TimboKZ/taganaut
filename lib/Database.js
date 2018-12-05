/**
 * @author v1ndic4te
 * @copyright 2018
 * @licence MIT
 */

const loki = require('lokijs');
const Promise = require('bluebird');
const LokiIndexedAdapter = require('lokijs/src/loki-indexed-adapter');

const Util = require('./Util');

/**
 * @private
 */
class Database {

    /**
     * @param {object} params
     * @param {string} params.dbFilePath
     * @param {boolean} [params.disableAutosave]
     */
    constructor(params) {
        this._lokiDb = null;
        this.params = params;
    }

    init() {
        const dbFilePath = this.params.dbFilePath;
        const disableAutosave = this.params.disableAutosave;

        return new Promise(resolve => {
            if (dbFilePath === ':memory:') {
                const config = {
                    adapter: new loki.LokiMemoryAdapter(),
                };
                this._lokiDb = new loki('memory.db', config);
                this._initializeCollections(resolve);
            } else {
                const config = {
                    adapter: new LokiIndexedAdapter(),
                    autoload: true,
                    autoloadCallback: () => this._initializeCollections(resolve),
                };
                if (!disableAutosave) {
                    config.autosave = true;
                    config.autosaveInterval = 10000;
                }
                this._lokiDb = new loki(dbFilePath, config);
            }
        });
    }

    _initializeCollections(done = null) {

        if (done) done();
    }

}

module.exports = Database;
