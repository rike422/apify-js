export function computeUniqueKey({ url, method, payload, keepUrlFragment, useExtendedUniqueKey }: {
    url: any;
    method: any;
    payload: any;
    keepUrlFragment: any;
    useExtendedUniqueKey: any;
}): any;
export function hashPayload(payload: any): string;
export default Request;
/**
 * Specifies required and optional fields for constructing a [`Request`](../api/request).
 */
export type RequestOptions = {
    /**
     * URL of the web page to crawl. It must be a non-empty string.
     */
    url: string;
    /**
     * A unique key identifying the request.
     * Two requests with the same `uniqueKey` are considered as pointing to the same URL.
     *
     * If `uniqueKey` is not provided, then it is automatically generated by normalizing the URL.
     * For example, the URL of `HTTP://www.EXAMPLE.com/something/` will produce the `uniqueKey`
     * of `http://www.example.com/something`.
     *
     * The `keepUrlFragment` option determines whether URL hash fragment is included in the `uniqueKey` or not.
     *
     * The `useExtendedUniqueKey` options determines whether method and payload are included in the `uniqueKey`,
     * producing a `uniqueKey` in the following format: `METHOD(payloadHash):normalizedUrl`. This is useful
     * when requests point to the same URL, but with different methods and payloads. For example: form submits.
     *
     * Pass an arbitrary non-empty text value to the `uniqueKey` property
     * to override the default behavior and specify which URLs shall be considered equal.
     */
    uniqueKey?: string;
    method?: string;
    /**
     * HTTP request payload, e.g. for POST requests.
     */
    payload?: string | Buffer;
    /**
     * HTTP headers in the following format:
     * ```
     * {
     * Accept: 'text/html',
     * 'Content-Type': 'application/json'
     * }
     * ```
     */
    headers?: any;
    /**
     * Custom user data assigned to the request. Use this to save any request related data to the
     * request's scope, keeping them accessible on retries, failures etc.
     */
    userData?: any;
    /**
     * If `false` then the hash part of a URL is removed when computing the `uniqueKey` property.
     * For example, this causes the `http://www.example.com#foo` and `http://www.example.com#bar` URLs
     * to have the same `uniqueKey` of `http://www.example.com` and thus the URLs are considered equal.
     * Note that this option only has an effect if `uniqueKey` is not set.
     */
    keepUrlFragment?: boolean;
    /**
     * If `true` then the `uniqueKey` is computed not only from the URL, but also from the method and payload
     * properties. This is useful when making requests to the same URL that are differentiated by method
     * or payload, such as form submit navigations in browsers.
     */
    useExtendedUniqueKey?: boolean;
};
/**
 * Specifies required and optional fields for constructing a [`Request`](../api/request).
 *
 * @typedef {Object} RequestOptions
 * @property {String} url URL of the web page to crawl. It must be a non-empty string.
 * @property {String} [uniqueKey] A unique key identifying the request.
 *   Two requests with the same `uniqueKey` are considered as pointing to the same URL.
 *
 *   If `uniqueKey` is not provided, then it is automatically generated by normalizing the URL.
 *   For example, the URL of `HTTP://www.EXAMPLE.com/something/` will produce the `uniqueKey`
 *   of `http://www.example.com/something`.
 *
 *   The `keepUrlFragment` option determines whether URL hash fragment is included in the `uniqueKey` or not.
 *
 *   The `useExtendedUniqueKey` options determines whether method and payload are included in the `uniqueKey`,
 *   producing a `uniqueKey` in the following format: `METHOD(payloadHash):normalizedUrl`. This is useful
 *   when requests point to the same URL, but with different methods and payloads. For example: form submits.
 *
 *   Pass an arbitrary non-empty text value to the `uniqueKey` property
 *   to override the default behavior and specify which URLs shall be considered equal.
 * @property {String} [method='GET']
 * @property {String|Buffer} [payload]
 *   HTTP request payload, e.g. for POST requests.
 * @property {Object} [headers={}]
 *   HTTP headers in the following format:
 *   ```
 *   {
 *       Accept: 'text/html',
 *       'Content-Type': 'application/json'
 *   }
 *   ```
 * @property {Object} [userData={}]
 *   Custom user data assigned to the request. Use this to save any request related data to the
 *   request's scope, keeping them accessible on retries, failures etc.
 * @property {Boolean} [keepUrlFragment=false]
 *   If `false` then the hash part of a URL is removed when computing the `uniqueKey` property.
 *   For example, this causes the `http://www.example.com#foo` and `http://www.example.com#bar` URLs
 *   to have the same `uniqueKey` of `http://www.example.com` and thus the URLs are considered equal.
 *   Note that this option only has an effect if `uniqueKey` is not set.
 * @property {Boolean} [useExtendedUniqueKey=false]
 *   If `true` then the `uniqueKey` is computed not only from the URL, but also from the method and payload
 *   properties. This is useful when making requests to the same URL that are differentiated by method
 *   or payload, such as form submit navigations in browsers.
 */
/**
 * Represents a URL to be crawled, optionally including HTTP method, headers, payload and other metadata.
 * The `Request` object also stores information about errors that occurred during processing of the request.
 *
 * Each `Request` instance has the `uniqueKey` property, which can be either specified
 * manually in the constructor or generated automatically from the URL. Two requests with the same `uniqueKey`
 * are considered as pointing to the same web resource. This behavior applies to all Apify SDK classes,
 * such as {@link RequestList}, {@link RequestQueue} or {@link PuppeteerCrawler}.
 *
 * Example use:
 *
 * ```javascript
 * const request = new Apify.Request({
 *     url: 'http://www.example.com',
 *     headers: { Accept: 'application/json' },
 * });
 *
 * ...
 *
 * request.userData.foo = 'bar';
 * request.pushErrorMessage(new Error('Request failed!'));
 *
 * ...
 *
 * const foo = request.userData.foo;
 * ```
 * @param {RequestOptions} options `Request` parameters including the URL, HTTP method and headers, and others.
 *
 * @property {String} id
 *   Request ID
 * @property {String} url
 *   URL of the web page to crawl.
 * @property {String} loadedUrl
 *   An actually loaded URL after redirects, if present. HTTP redirects are guaranteed
 *   to be included.
 *
 *   When using {@link PuppeteerCrawler}, meta tag and JavaScript redirects may,
 *   or may not be included, depending on their nature. This generally means that redirects,
 *   which happen immediately will most likely be included, but delayed redirects will not.
 * @property {String} uniqueKey
 *   A unique key identifying the request.
 *   Two requests with the same `uniqueKey` are considered as pointing to the same URL.
 * @property {String} method
 *   HTTP method, e.g. `GET` or `POST`.
 * @property {String|Buffer} payload
 *   HTTP request payload, e.g. for POST requests.
 * @property {Boolean} noRetry
 *   The `true` value indicates that the request will not be automatically retried on error.
 * @property {Number} retryCount
 *   Indicates the number of times the crawling of the request has been retried on error.
 * @property {String[]} errorMessages
 *   An array of error messages from request processing.
 * @property {Object} headers
 *   Object with HTTP headers. Key is header name, value is the value.
 * @property {Object} userData
 *   Custom user data assigned to the request.
 * @property {Date} handledAt
 *   Indicates the time when the request has been processed.
 *   Is `null` if the request has not been crawled yet.
 */
declare class Request {
    constructor(options?: {});
    id: any;
    url: any;
    loadedUrl: any;
    uniqueKey: any;
    method: any;
    payload: any;
    noRetry: any;
    retryCount: any;
    errorMessages: any;
    headers: any;
    userData: any;
    handledAt: any;
    /**
     * Stores information about an error that occurred during processing of this request.
     *
     * You should always use Error instances when throwing errors in JavaScript.
     *
     * Nevertheless, to improve the debugging experience when using third party libraries
     * that may not always throw an Error instance, the function performs a type
     * inspection of the passed argument and attempts to extract as much information
     * as possible, since just throwing a bad type error makes any debugging rather difficult.
     *
     * @param {Error|String} errorOrMessage Error object or error message to be stored in the request.
     * @param {Object} [options]
     * @param {Boolean} [options.omitStack=false] Only push the error message without stack trace when true.
     */
    pushErrorMessage(errorOrMessage: string | Error, options?: {
        omitStack?: boolean;
    }): void;
    /**
     * Flags the request with no retry which prevents {@link BasicCrawler}
     * (as well as {@PuppeteerCrawler} and {@CheerioCrawler}, since they use {@BasicCrawler} internally)
     * from retrying the request after an error occurs.
     *
     * Optionally accepts a message that will be used to construct
     * and throw an Error.
     *
     * @param {String} [message]
     * @deprecated 2019/06/26
     * @ignore
     */
    doNotRetry(message?: string): void;
}
