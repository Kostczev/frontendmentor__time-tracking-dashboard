const links = document.querySelector('.dashboard__links');

let trackingTime;
let trackingLastTime;

let firstLoad = true;

links.addEventListener('click', e => {
   if( e.target.classList.contains('active') || e.target.nodeName != 'LI' ) return;
   if( firstLoad ) {
      firstLoad = false;
      loadPageElements();
   }
   deactivateLinks();
   e.target.classList.add('active');

   fetch('./data/data.json')
      .then(resp => resp.json())
      .then(json => updateTime(json, e.target.innerText.toLowerCase()));
})

function loadPageElements() {
   trackingTime = document.querySelectorAll('.dashboard__tracking-time');
   trackingLastTime = document.querySelectorAll('.dashboard__tracking-last-time');
}

function updateTime(data, time) {
   for( let i = 0; i < data.length; i++ ) {
      let dataTimes = data[i].timeframes[time];
      trackingTime[i].innerHTML = `${dataTimes.current}hrs`;
      trackingLastTime[i].innerHTML = `Last Week - ${dataTimes.previous}hrs`;
   }
}

function deactivateLinks() {
   for (let i = 0; i < links.childElementCount; i++) {
      links.children[i].classList.remove('active');
   }
}