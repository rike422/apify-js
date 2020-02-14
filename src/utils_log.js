import log from 'apify-shared/log';

// Add docs for log separately, as it's imported from apify-shared.
// Adding them directly to the log object in utils in `index.js` breaks JSDoc.

/**
 * The log instance enables level aware logging of messages and we advise
 * to use it instead of `console.log()` and its aliases in most development
 * scenarios.
 *
 * A very useful use case for `log` is using `log.debug` liberally throughout
 * the codebase to get useful logging messages only when appropriate log level is set
 * and keeping the console tidy in production environments.
 *
 * The available logging levels are, in this order: `DEBUG`, `INFO`, `WARNING`, `ERROR`, `OFF`
 * and can be referenced from the `log.LEVELS` constant, such as `log.LEVELS.ERROR`.
 *
 * To log messages to the system console, use the `log.level(message)` invocation,
 * such as `log.debug('this is a debug message')`.
 *
 * To prevent writing of messages above a certain log level to the console, simply
 * set the appropriate level. The default log level is `INFO`, which means that
 * `DEBUG` messages will not be printed, unless enabled.
 *
 * **Example:**
 * ```
 * const Apify = require('apify');
 * const { log } = Apify.utils;
 *
 * log.info('Information message', { someData: 123 }); // prints message
 * log.debug('Debug message', { debugData: 'hello' }); // doesn't print anything
 *
 * log.setLevel(log.LEVELS.DEBUG);
 * log.debug('Debug message'); // prints message
 *
 * log.setLevel(log.LEVELS.ERROR);
 * log.debug('Debug message'); // doesn't print anything
 * log.info('Info message'); // doesn't print anything
 *
 * log.error('Error message', { errorDetails: 'This is bad!' }); // prints message
 * try {
 *   throw new Error('Not good!');
 * } catch (e) {
 *   log.exception(e, 'Exception occurred', { errorDetails: 'This is really bad!' }); // prints message
 * }
 * ```
 *
 * Another very useful way of setting the log level is by setting the `APIFY_LOG_LEVEL`
 * environment variable, such as `APIFY_LOG_LEVEL=DEBUG`. This way, no code changes
 * are necessary to turn on your debug messages and start debugging right away.
 * @namespace log
 */

/**
 * Map of available log levels that's useful for easy setting of appropriate log levels.
 * Each log level is represented internally by a number. Eg. `log.LEVELS.DEBUG === 5`.
 * @name LEVELS
 * @type Object
 * @memberOf log
 */

/**
 * Sets the log level to the given value, preventing messages from less important log levels
 * from being printed to the console. Use in conjunction with the `log.LEVELS` constants such as
 *
 * ```
 * log.setLevel(log.LEVELS.DEBUG);
 * ```
 *
 * Default log level is INFO.
 * @name setLevel
 * @param {number} level
 * @method
 * @memberOf log
 */

/**
 * Returns the currently selected logging level. This is useful for checking whether a message
 * will actually be printed to the console before one actually performs a resource intensive operation
 * to construct the message, such as querying a DB for some metadata that need to be added. If the log
 * level is not high enough at the moment, it doesn't make sense to execute the query.
 * @name getLevel
 * @method
 * @memberOf log
 */

/**
 * Logs a `DEBUG` message. By default, it will not be written to the console. To see `DEBUG`
 * messages in the console, set the log level to `DEBUG` either using the `log.setLevel(log.LEVELS.DEBUG)`
 * method or using the environment variable `APIFY_LOG_LEVEL=DEBUG`. Data are stringified and appended
 * to the message.
 * @name debug
 * @param {string} message
 * @param {Object} [data]
 * @method
 * @memberOf log
 */

/**
 * Logs an `INFO` message. `INFO` is the default log level so info messages will be always logged,
 * unless the log level is changed. Data are stringified and appended to the message.
 * @name info
 * @param {string} message
 * @param {Object} [data]
 * @method
 * @memberOf log
 */

/**
 * Logs a `WARNING` level message. Data are stringified and appended to the message.
 * @name warning
 * @param {string} message
 * @param {Object} [data]
 * @method
 * @memberOf log
 */

/**
 * Logs an `ERROR` message. Use this method to log error messages that are not directly connected
 * to an exception. For logging exceptions, use the `log.exception` method.
 * @name error
 * @param {string} message
 * @param {Object} [data]
 * @method
 * @memberOf log
 */

/**
 * Logs an `ERROR` level message with a nicely formatted exception. Note that the exception is the first parameter
 * here and an additional message is only optional.
 * @name exception
 * @param {Error} exception
 * @param {string} [message]
 * @param {Object} [data]
 * @method
 * @memberOf log
 */

export default log;
