# Murphy's Review Den

Static Science Olympiad review site. No build step, no dependencies, no server code.

## Files
- `index.html` home page. `event.html?e=<slug>` is every event page.
- `data/events.js` event info, topics and allowed resources (from the 2027 Div B rule book).
- `data/questions.js` and `data/questions_bay.js` question banks and matching pairs. `questions_bay.js` was written after the first meet and adds to the first file with `add(slug, questions, pairs)`. Events with no entry show "coming soon".
- `data/meet.js` the "First meet" notes on each event (what the Bay Academy Invitational tested, plus a tip). Edit or add a new meet here.
- `js/store.js` progress, save code, "what to work on" logic.
- `js/games.js` quiz, beat the clock, Murphy's Challenge, flashcards, matching, practice exam, cipher trainer.
- `js/ui.js`, `js/home.js`, `js/event.js`, `css/style.css`.

## Add questions
Copy an entry in `data/questions.js`. The key must match an event `slug`, and each question's `t` must match a topic `id` in `data/events.js`.
```
{ t: 'topicId', q: 'Question?', a: ['Right', 'Wrong', 'Wrong', 'Wrong'], c: 0, e: 'Why it is right.' }
```
`c` is the index of the correct choice. Choices are shuffled when shown.

## Notes from the first meet
The tests inform the topics and the notes, but no test text is copied here. Questions are original. Keep the original test files off the public site.

## Save codes
Progress is saved in the browser and can be copied as a code (starts with `MUR1.`). It holds only the events picked and right/total counts per topic. It never holds names. If you add topics or events, old codes still load. If you rename a topic id, old counts for it are ignored.

## Deploy (manual)
1. github.com > New repository (for example `sciolyreview`). Public or private both work.
2. Add file > Upload files. Drag in the contents of this folder (index.html, event.html, css, js, data, README.md). Commit.
3. vercel.com > Add New > Project > Import the repo.
4. Framework Preset: Other. Leave build command and output directory empty. Deploy.
5. To update: edit or upload files on GitHub. Vercel redeploys automatically.

## Before you publish
Search the folder for emails, phone numbers and student names. This base contains none.
