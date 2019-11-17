const Nightmare = require ('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.indeed.com/?from=gnav-homepage')
  .type('#text-input-what', 'software developer')
  .click('.icl-WhatWhere-button')
  .wait('.result')
  .evaluate(() => {
    let jobTitles = document.querySelector('.title')
    var list = [].slice.call(jobTitles); // Why did I have to do this?
    return list.map((node) => {
      return node.innerText
    })
  })
  .end()
  .then(result => console.log(result))
  .catch(err => console.error(err))