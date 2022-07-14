'use strict';

const getjson = (url) => {
	return fetch(url).then(response => response.json());
};

(async () => {
	console.log('awaiting', getjson('story.json'));
	let chapterUrls = await getjson('story.json');
	console.log('done');
	console.log(chapterUrls);
})();