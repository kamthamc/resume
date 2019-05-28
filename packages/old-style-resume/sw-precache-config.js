/**
 * @author chaitanyaK
 * @date 4/27/17
 * @description
 *
 * */

module.exports = {
    stripPrefix: 'build/',
    staticFileGlobs: [
        'build/*.html',
        'build/manifest.json',
        'build/static/**/!(*map*)'
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'build/service-worker.js'
};