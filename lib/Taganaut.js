/**
 * @author v1ndic4te
 * @copyright 2018
 * @licence MIT
 */

const Promise = require('bluebird');

const Database = require('./Database');

/**
 * The main class of the Taganaut package. Multiple instances of this class can exist at any time, each managing a
 * separate tag database.
 */
class Taganaut {

    /**
     * @param {object} params
     * @param {string} params.dbFilePath Path to an Sqlite3 database file that will hold tag data OR the string
     * `:memory:` to use the in-memory database.
     */
    constructor(params = {}) {
        this._db = new Database({dbFilePath: params.dbFilePath});

        this.notImplementedError = new Error('Not implemented.');
    }

    /**
     * @returns {Promise}
     */
    init() {
        return Promise.resolve()
            .then(() => this._db.init())
            .then(() => console.log('Hello!'));
    }

    /**
     * @param {object} params
     * @param {string} params.entityId
     * @param {string} params.tagId
     * @returns {Action}
     */
    tag(params) {
        // TODO: Implement this.
        throw this.notImplementedError;
    }

    /**
     * @param {object} params
     * @param {string} params.entityId
     * @param {string} params.tagId
     * @returns {Action}
     */
    untag(params) {
        // TODO: Implement this.
        throw this.notImplementedError;
    }

    /**
     * @returns {Tag[]}
     */
    getAllTags() {
        // TODO: Implement this.
        throw this.notImplementedError;
    }

    /**
     * @param {object} params
     * @param {string} params.tagId
     * @returns {Tag}
     */
    getTag(params) {
        // TODO: Implement this.
        throw this.notImplementedError;
    }

    /**
     * @param {object} params
     * @param {string} params.name
     * @param {string} [params.parentId]
     * @param {object} [params.properties]
     * @returns {Tag}
     */
    createTag(params) {
        // TODO: Implement this.
        throw this.notImplementedError;
    }

    /**
     * @param {object} params
     * @param {string} params.tagId
     * @returns {void}
     */
    deleteTag(params) {
        // TODO: Implement this.
        throw this.notImplementedError;
    }

    /**
     *
     * @returns {Action[]} An array of actions that were executed by this Taganaut instance.
     */
    getActionLog() {
        // TODO: Implement this.
        throw this.notImplementedError;
    }

    /**
     * @param {object} params
     * @param {string} params.actionId The ID of the action you want to undo. The ID must match some action in the
     * action log (that hasn't already been undone).
     * @returns {Action} The undo action. This is a new action, that can differ from the original action in some
     * fields.
     */
    undoAction(params) {
        // TODO: Implement this.
        throw this.notImplementedError;
    }

    /**
     * @param {object} params
     * @param {Action} params.action
     * @returns {Action} The applied action. This is a new action, that can differ from the original action in some
     * fields.
     */
    applyAction(params) {
        // TODO: Implement this.
        throw this.notImplementedError;
    }

}

module.exports = Taganaut;
