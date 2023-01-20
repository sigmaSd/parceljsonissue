import url from 'url:./bug.json'


(async function() {
  console.log(await fetch(url).then(r => r.text()))
  console.log(await fetch(url).then(r => r.json()))
})()
