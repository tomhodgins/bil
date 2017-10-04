# BIL ➸ Basic Instruction Language

## What is BIL?

BIL is a superset of [HTML](https://w3c.github.io/html) that adds twelve new tags and uses doctype of `<!DOCTYPE bil>`.


## Why use BIL?

BIL attempts to bridge the gap between natural languages like english, and more structured forms of language like [computer programming languages](https://en.wikipedia.org/wiki/Programming_language), [legalese](https://en.wikipedia.org/wiki/Legal_English), and [forms](https://en.wikipedia.org/wiki/Form_%28document%29).

The challenge is to reduce ambiguity in written instructions by introducing additional markup and information about the parts of speech used, and to adhere to a consistent contextual structure for illustrating the relationships between the words.

The goal is to arrive at an instruction language that acts both as a superset of HTML as well as a simplified subset of the natural language you are marking up as BIL. The aim is to present information in a way that a reader of the same natural language who has never seen BIL can understand it with a minimal learning curve to replace confusing instructions, verbose language, and ambiguous phrasing.


## BIL Reference

### Words

- child of: any word tag, `<block>`, or `<phrase>`
- parent of: any word tag, or `<block>`

Words are the elementary building blocks of BIL. You may nest word tags inside of each other infinitely deep (this is called putting words 'in the context of' another word) and this context-based nesting is the core idea of BIL.

#### Noun

- attribute(s): `proper`

A `<noun>` tag wraps any noun or proper noun. Nouns are analogous to _generic objects_ in programming language.

The `proper` attribute can be added to signify a proper noun. This is analogous to a _named variable_ in a programming language.

#### Verb

A `<verb>` tag wraps any verb, action, or set of actions. Verbs are analogous to _functions_ in a programming language.

#### Number

A `<number>` tag wraps any numeric value.

#### Adjective

An `<adjective>` tag wraps any adjective. These are analogous to _properties_ or _attributes_ in a programming language.

#### Pronoun

A `<pronoun>` tag wraps any pronoun. These address specific instances of nouns based on context.

#### Preposition

A `<preposition>` tag wraps any preposition. These usually refer to the directionality, location, orientation, or state in which a verb or noun exists.

#### Adverb

An `<adverb>` tag wraps any adverb. When used to modify verbs adverbs are analogous to _function arguments_ in programming languages.

#### Conjunction

A `<conjunction>` tag wraps any conjunction. Conjunctions are analogous to a lot of logical keywords like `if` and `while`.

#### Interjection

An `<interjection>` tag wraps any interjection.


### Grouping Operators

#### Block

- child of: `<context>`
- parent of: any word tags, and `<context>`

A `<block>` tag is a grouping operator containing one or more words and a `<context>` tag

#### Context

- child of: `<block>`
- parent of: any word tags, and `<phrase>`

A `<context>` tag is a grouping operator containing `<phrase>` tags and and/or `<block>` tags.

#### Phrase

A `<phrase>` tag is a grouping operator containing multiple word tags.


## How to write BIL

Always begin a BIL document with a containing `<block>` tag:

```html
<block></block>
```

This containing block may contain one or more word tags, plus a `<context>` tag. This block is a `<noun>` block and will contain more words that define something in the context of a `<noun>` called 'BIL example':

```html
<block>
  <noun>BIL example</noun>
  <context></context>
</block>
```

This `<context>` tag may contain one or more word tags, more `<block>` tags, or if there are multiple separate groupings of word tags each of these gropuings can be wrapped in `<phrase>` tags:

```html
<block>
  <noun>BIL example</noun>
  <context>
    <phrase><verb>demo <noun>item 1</noun></verb></phrase>
    <phrase><verb>demo <noun>item 2</noun></verb></phrase>
  </context>
</block>
```

Here we could say that the `<noun>` 'item 1' is in the context of the `<verb>` 'demo', to demonstrate. We could also say that doing something with 'item 1' and 'item 2' are in the context of a `<noun>` called 'BIL example'.

## BIL Demos

- [How to decide which browser versions to support](examples/bil-browser.html)
- [How to make a Vegan Iced Mocha](examples/bil-mocha.html)
- [How to Make a S'more](examples/bil-smore.html)
- [How to Make a Static HTML Website](examples/bil-static.html)
- [How to Extract Audio from Youtube Videos](examples/bil-youtube.html)


> Made with &hearts; by [@innovati](https://twitter.com/innovati)