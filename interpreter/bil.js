/*

# BIL Interpreter
version 0.0.1

A JavaScript interpreter for the BIL Basic Instruction Language

- website: https://github.com/tomhodgins/bil
- author: Tommy Hodgins
- license: MIT

*/

// Step 1: Add CSS

window.addEventListener('load', addCSS)

// Step 2: Add Level Slider

window.addEventListener('load', addSlider)

// Step 3: Add Legend

window.addEventListener('load', addLegend)

// Step 4: Analyze Nouns

window.addEventListener('load', function(){analyze('noun')})

// Step 5: Analyze Verbs

window.addEventListener('load', function(){analyze('verb')})

// Step 6: Analyze Numbers

window.addEventListener('load', function(){analyzeNumbers()})

// Step 7: Mark up tag names with titles

window.addEventListener('load', addTitle)

function addCSS() {

  var style = document.createElement('style')

  style.innerHTML = `

    * {
      box-sizing: border-box;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-kerning: auto;
    }
    html {
      font-size: 12pt;
      line-height: 1.4;
      font-weight: 400;
      -webkit-text-size-adjust: 100%;
    }
    body {
      margin: 2em;
    }
    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      line-height: 1.2;
      font-family: sans-serif;
    }
    pre {
      white-space: pre-wrap;
    }
    ${matches('', `
      display: inline-block;
      padding: .5em;
      border-radius: .125em;
      line-height: 1.5;
      margin: 0;
      border: 1px solid rgba(0,0,0,.2);
      transition:
        box-shadow .2s ease-in-out,
        border-color .2s ease-in-out
      ;
      box-shadow:
        inset rgba(255,255,255,0) 0 0 0,
        rgba(0,0,0,0) 0 0 0
      ;
    `)}
    ${matchesInside('', `
      margin: 0 .25em;
    `)}
    ${matchesDouble('', `
      margin-left: 0 !important;
    `)}
    ${matches(':hover', `
      cursor: default;
      border-color: rgba(0,0,0,.5);
      box-shadow:
        inset rgba(255,255,255,.5) 0 1px 0,
        rgba(0,0,0,.5) 0 1px 2px
      ;
    `)}
    ${matches(':active', `
      cursor: default;
      border-color: rgba(0,0,0,.5);
      box-shadow:
        inset rgba(255,255,255,.5) 0 1px 0,
        rgba(0,0,0,.5) 0 1px 2px
      ;
    `)}
    ${matchesTwo(`
      line-height: 100%;
      border-radius: .5em;
    `)}
    ${matchesThree(`
      border-radius: .35em;
    `)}
    ${matchesFour(`
      border-radius: .25em;
    `)}
    ${matchesBefore('p >', `
      margin: 0 .25em !important;
    `)}
    ${matchesBefore('li >', `
      margin: 0 .25em !important;
    `)}
    ${matchesBefore('p', `
      margin: 0 .25em;
      padding-top: .25em;
      padding-bottom: .25em;
    `)}
    ${matchesBefore('li', `
      margin: 0 .25em;
      padding-top: .25em;
      padding-bottom: .25em;
    `)}
    p, li {
      font-size: 14pt;
      line-height: 2.5;
    }
    noun {
      background: #ccf;
    }
    noun[proper],
    noun[proper] noun[proper] {
      font-weight: bold;
    }
    noun[proper] * {
      font-weight: 400;
    }
    verb {
      background: #cfc;
    }
    number {
      background: #fcc;
    }
    adjective {
      background: #fcf;
    }
    pronoun {
      background: #ffc;
    }
    preposition {
      background: #cff;
    }
    adverb {
      background: #9ed;
    }
    conjunction {
      background: #de9;
    }
    interjection {
      background: #d9e;
    }
    phrase {
      display: block;
      margin: .75em 0;
      padding-left: .75em;
    }
    block block {
      margin-left: .75em;
      margin-right: 0;
    }
    block {
      margin: .75em .25em;
      padding: .75em;
      font-weight: 400;
      font-size: 13pt;
      display: block;
      border-radius: .25em;
      line-height: 1.5;
      border: 1px solid rgba(0,0,0,.2);
    }
    block + block {
      margin-top: .75em;
    }
    ${parent('block > noun', `
      background: rgb(224,224,255);
    `)}
    ${parent('block > verb', `
      background: rgb(224,255,224);
    `)}
    ${parent('block > number', `
      background: rgb(255,224,224);
    `)}
    ${parent('block > adjective', `
      background: rgb(255,224,255);
    `)}
    ${parent('block > pronoun', `
      background: rgb(255,255,224);
    `)}
    ${parent('block > preposition', `
      background: rgb(224,255,255);
    `)}
    ${parent('block > adverb', `
      background: rgb(192,234,246);
    `)}
    ${parent('block > conjunction', `
      background: rgb(246,234,192);
    `)}
    ${parent('block > interjection', `
      background: rgb(246,192,234);
    `)}
    block * + * {
      margin-left: 0;
    }
    phrase > :first-child {
      margin-left: 0;
    }
    block *:last-child {
      margin-right: 0;
    }
    block block:last-child,
    block phrase:last-child {
      margin-bottom: .25em;
    }
    context > phrase:not(:last-child):after {
      content: ',';
      font-size: 18pt;
      margin-left: .25em;
    }
    .legend li {
      margin: 1em;
    }
    block pre {
      font-size: 12pt;
      font-weight: 400;
      line-height: 1.5;
    }
    context:before,
    context:after {
      font-size: 18pt;
    }
    context:before {
      content: '(';
      margin-left: .25em;
    }
    context:after {
      content: ')';
    }

    @media print {
      block {
        font-size: 12pt;
      }
      h2, ul {
        display: none;
        visibility:hidden;
      }
      ${matches(':before', `
        text-transform: uppercase;
        font-size: 8pt;
        font-family: sans-serif;
        font-weight: 300;
      `)}
      noun:before {
        content: 'noun: ';
      }
      verb:before {
        content: 'verb: ';
      }
      number:before {
        content: 'number: ';
      }
      adjective:before {
        content: 'adjective: ';
      }
      adverb:before {
        content: 'adverb: ';
      }
      pronoun:before {
        content: 'pronoun: ';
      }
      preposition:before {
        content: 'preposition: ';
      }
      conjunction:before {
        content: 'conjunction: ';
      }
      interjection:before {
        content: 'interjection: ';
      }
    }

  `

  function parent(selector, rule) {

    var tag = document.querySelectorAll(selector)
    var style = ''
    var count = 0

    for (var i=0; i<tag.length; i++) {

      var attr = selector.replace(/\W+/g, '')

      tag[i].parentNode.setAttribute('data-parent-' + attr, count)

      style += '\n[data-parent-' + attr + '="' + count + '"] {\n'
               + '  ' + rule + '\n'
               + '}\n'
      count++

    }

    return style

  }

  function matches(state, rule) {

    var selector = ['noun', 'verb', 'number', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection']

    var composed = selector.map(function(tag) { return tag + state })

    var style = `${composed} { ${rule} }`

    return style

  }

  function matchesBefore(state, rule) {

    var selector = ['noun', 'verb', 'number', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection']

    var composed = selector.map(function(tag) { return state + ' ' + tag })

    var style = `${composed} { ${rule} }`

    return style

  }

  function matchesDouble(state, rule) {

    var selector = ['noun', 'verb', 'number', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection']

    var style = ''

    var permutations = []

    for (var i=0; i<selector.length; i++) {

      for (var j=0; j<selector.length; j++) {

        permutations.push(`${selector[i]} + ${selector[j]}`)

      }

    }

    style = `${permutations} { ${rule} }`

    return style

  }

  function matchesInside(state, rule) {

    var selector = ['noun', 'verb', 'number', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection']

    var style = ''

    var permutations = []

    for (var i=0; i<selector.length; i++) {

      for (var j=0; j<selector.length; j++) {

        permutations.push(`${state} ${selector[i]} > ${selector[j]}`)

      }

    }

    style = `${permutations} { ${rule} }`

    return style

  }

  function matchesTwo(rule) {

    var selector = ['noun', 'verb', 'number', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection']

    var style = ''

    var permutations = []

    for (var i=0; i<selector.length; i++) {

      for (var j=0; j<selector.length; j++) {

        permutations.push(`${selector[i]} ${selector[j]}`)

      }

    }

    var css = `${permutations} { ${rule} }`

    return css

  }

  function matchesThree(rule) {

    var selector = ['noun', 'verb', 'number', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection']

    var style = ''

    var permutations = []

    for (var i=0; i<selector.length; i++) {

      for (var j=0; j<selector.length; j++) {

        for (var k=0; k<selector.length; k++) {

          permutations.push(`${selector[i]} ${selector[j]} ${selector[k]}`)

        }

      }

    }

    var css = `${permutations} { ${rule} }`

    return css

  }

  function matchesFour(rule) {

    var selector = ['noun', 'verb', 'number', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection']

    var style = ''

    var permutations = []

    for (var i=0; i<selector.length; i++) {

      for (var j=0; j<selector.length; j++) {

        for (var k=0; k<selector.length; k++) {

          for (var l=0; l<selector.length; l++) {

            permutations.push(`${selector[i]} ${selector[j]} ${selector[k]} ${selector[l]}`)

          }

        }

      }

    }

    style = `${permutations} { ${rule} }`

    return style

  }

  document.body.appendChild(style)

}

function addSlider() { }

function addLegend() {

  var heading = document.createElement('h2')

  heading.innerHTML = 'Parts of Speech'
  document.body.appendChild(heading)

  var list = document.createElement('ul')
  var part = ['block', 'context', 'phrase', 'noun', 'verb', 'number', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection']

  list.className = 'legend'

  for (var i=0; i<part.length; i++) {

    var item = document.createElement('li')

    item.innerHTML = `<${part[i]}>${part[i]}</${part[i]}>`

    list.appendChild(item)

  }

  document.body.appendChild(list)

}

function analyze(type) {

  var heading = document.createElement('h2')

  heading.innerHTML = `Encountered ${type}s`

  var list = document.createElement('ul')
  var tag = document.querySelectorAll('block ' + type)

  list.className = 'legend'

  for (var i=0; i<tag.length; i++) {

    if (tag[i].parentNode.tagName !== 'LI') {

      var item = document.createElement('li')

      var text = tag[i].innerHTML.replace(/\<.*\>.*\<.*\>/g, '')

      if (tag[i].parentNode.parentNode.parentNode.tagName == 'BLOCK') {

        var parentText = tag[i].parentNode.parentNode.parentNode.querySelector('*').outerHTML

      }

      if (list.textContent.indexOf(text) == -1) {

        item.innerHTML = `<${type}>${text}</${type}> ${parentText ? 'in the context of ' + parentText : ''}`

        list.appendChild(item)

      }

    }

  }

  if (list.children.length) {
    document.body.appendChild(heading)
    document.body.appendChild(list)
  }

}

function analyzeNumbers() {

  var heading = document.createElement('h2')

  heading.innerHTML = `Encountered numbers`

  var list = document.createElement('ul')
  var tag = document.querySelectorAll('block number')

  list.className = 'legend'

  for (var i=0; i<tag.length; i++) {

    if (tag[i].parentNode.tagName !== 'LI') {

      var item = document.createElement('li')

      var text = tag[i].innerHTML.replace(/\<.*\>.*\<.*\>/g, '')

      var parentText = tag[i].parentNode.outerHTML

      item.innerHTML = `<number>${text}</number> ${parentText ? 'in the context of ' + parentText : ''}`

      console.log(list.textContent.indexOf(item.textContent))

      if (list.textContent.indexOf(item.textContent) == -1) {

        list.appendChild(item)

      }

    }

  }

  if (list.children.length) {
    document.body.appendChild(heading)
    document.body.appendChild(list)
  }

}

function addTitle() {

  var tag = document.querySelectorAll('noun, verb, number, adjective, adverb, pronoun, preposition, conjunction, interjection')

  for (var i=0; i<tag.length; i++) {

    tag[i].setAttribute('title', tag[i].tagName.toLowerCase())

  }

  tag = document.querySelectorAll('block > *:first-child')

  for (var i=0; i<tag.length; i++) {

    tag[i].setAttribute('title', tag[i].tagName.toLowerCase())

  }

}