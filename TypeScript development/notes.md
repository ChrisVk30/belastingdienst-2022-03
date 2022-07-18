# TypeScript notes

## Waarom?

- omdat het (deels) typesafe is
- omdat we coole taaldingen willen kunnen gebruiken
- 2012 eerste release
  2016 - Angular
- 2021   IE dood

features die je niet had in IE:
- symbols
- template literals `\`\``
- imports
- classes
- () => {}

features die browsers vandaag de dag nog steeds niet hebben:
- `private` (`#` daargelaten), `readonly` en `abstract`
- decorators
- types en generics
- enums

## Sourcemap

- zeer handig voor developers
- niet deployen naar productie
  - grootte
  - hackers

## Structuring

* namespaces: vertalen richting het oude namespace pattern
  * heeft een use case voor het definiëren van types, zoals [bij d3](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3/index.d.ts)
* ES modules: de voorkeursmethode. Dit wordt native gesupport in browsers/Node en een hoop module bundlers werken ermee.
