Westminster Bible info
https://github.com/honza/westminster-reference-bible/blob/master/data/bible.json
https://reformedstandards.com/bible/

Other older bible translations
https://sourceforge.net/projects/biblesuper/files/All%20Bibles%20-%20JSON/EN-English/

Bible commentaries
https://github.com/HistoricalChristianFaith/Commentaries-Database
https://catenabible.com/mt/2
https://www.biblesearch.es/?search_within=0&q=heavens+and+earth&t=verse&v=AKJV

Bible api
https://bible.helloao.org/docs/guide/making-requests.html
https://www.helloao.org/free-api

```ts
fetch(`https://bible.helloao.org/api/available_commentaries.json`)
    .then(request => request.json())
    .then(availableCommentaries => {
      console.log('The API has the following commentaries:', availableCommentaries);
    });

const commentary = 'adam-clarke'; // or tyndale
const book = 'GEN';
const chapter = 1;

// Get Genesis 1 from the adam-clarke commentary
fetch(`https://bible.helloao.org/api/c/${commentary}/${book}/${chapter}.json`)
  .then(request => request.json())
  .then(chapter => {
    console.log('Genesis 1 (adam-clarke):', chapter);
  });
```

Tyndale bible commentary
https://tyndaleopenresources.com/

