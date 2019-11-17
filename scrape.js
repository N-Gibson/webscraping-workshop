const Nightmare = require ('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.indeed.com/?from=gnav-homepage')
  .type('#text-input-what', 'software developer')
  .click('.icl-WhatWhere-button')
  .wait('.result')
  .evaluate(() => {
    let jobTitles = document.querySelectorAll('.title')
    let list = [].slice.call(jobTitles)
    return list.map((node) => {
      return node.innerText
    })
  })
  .end()
  .then(result => console.log(result))
  .catch(err => console.error(err))