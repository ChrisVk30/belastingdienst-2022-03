// 🔔 note: getJson returns a promise
function getJson(url) {
  return fetch(url).then((resp) => resp.json());
}

function addTitle(title) {
  document.querySelector("#title").innerHTML = title;
}

function addStory(title, content) {
  const newStory = document.querySelector("template").content.cloneNode(true);
  newStory.querySelector("#chapterTitle").innerHTML = title;
  newStory.querySelector("#chapterContent").innerHTML = content;
  document.querySelector("#start").appendChild(newStory);
}

// --------------------------------------------------------------------------------------------

// 1. implementation with Promise.all (fast as filling array happens in parallel)
getJson('./story.json').then((story) => {
  addTitle(story.title);

  Promise.all(story.chapterUrls.map(getJson)).then((resolvedChapters) => {
    resolvedChapters.forEach((elem) => addStory(elem.title, elem.content));
  });
});

// --------------------------------------------------------------------------------------------

// 2. implementation with Promise.allSettled (as solution 1 + rejections can be handled)
//    to test, change in story.json Chapter2.json to Chapter25.json

// getJson('./story.json')
//   .then(story => {
//     addTitle(story.title);

//     Promise.allSettled(story.chapterUrls.map(getJson))
//       .then((resolvedOrRejectedChapters) => resolvedOrRejectedChapters.forEach((result) => {
//         if (result.status === 'rejected') {
//           console.error(`Error: ${result.reason}`);
//           return;
//         }
//         addStory(result.value.title, result.value.content);
//       }));
//   });

// --------------------------------------------------------------------------------------------

// 3. sequential retrieving the chapters (not fast, but more granular)
// getJson('./story.json')
//   .then(story => {
//     addTitle(story.title);

//     story.chapterUrls.map(getJson).reduce((promiseChain, currentPromise) => {
//       return promiseChain
//         .then(() => currentPromise)
//         .then(chapter => addStory(chapter.title, chapter.content));
//   }, Promise.resolve());
// });

// --------------------------------------------------------------------------------------------

// 4. as solution 3, but now using async/await syntax
// (async () => {
//   const story = await getJson('./story.json');
//   addTitle(story.title);

//   const chapterPromises = story.chapterUrls.map(getJson);

//   for (const chapterPromise of chapterPromises) {
//     const chapter = await chapterPromise;
//     addStory(chapter.title, chapter.content);
//   }
// })();
