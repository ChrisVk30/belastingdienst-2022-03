# Notes

## Event loop

* hoe een JS-engine omgaat met asynchrone dingen
* "JavaScript is single-threaded"

Hoe de event loop werkt:

- niks wordt onderbroken
- aan het eind - als hij niks meer aan het doen is - dan pakt hij dingen op
- er is iets van een queue



JS-engines:
- V8 (Chrome)   - webkit
- SpiderMonkey (Firefox) - Gecko
- Chakra en ChakraCore - IE/Edge
- JavaScriptCore (Safari)


Node.js
- server-side JS
- runtime
- V8


## Reguliere expressies

```html
<p>hoi</p><p>hallo</p><p>doei</p>
```
```js
let regex = /<p>.+<\/p>/giu;
```

standaardvlaggetjes:
* greedy
* case-insensitive
* unicode

## Promises

* wrappers om async processen
* vergelijkbaar met bij een snackbar eten bestellen. Je krijgt niet meteen eten, je moet even wachten op het resultaat (resolve). En de frituurpan kan exploderen in het proces (reject).
* is voornamelijk een schrijfwijze om code leesbaar te houden. zie ook Pyramid of Doom.