fetch("./book/story.json")
	.then((x) => x.json())
	.then((story) => {
		console.log(story);
		console.log(story.title);

		let fetches = [];

		for (let chapterUrl of story.chapterUrls) {
			fetches.push(fetch(chapterUrl).then((x) => x.json()));
		}

		Promise.allSettled(fetches).then((results) => {
			console.log(results);
		});
	});
