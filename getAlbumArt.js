const searchSong = require('./searchSong');
const { checkOptions } = require('./index2');

/**
 * @param {{apiKey: string, title: string, artist: string, optimizeQuery: boolean}} options
 */
module.exports = async function (options) {
	checkOptions(options);
	let results = await searchSong(options);
	if (!results) return null;
	return results[0].albumArt;
};
