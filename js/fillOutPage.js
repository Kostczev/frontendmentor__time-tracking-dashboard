const dashboard = document.querySelector('.dashboard');
var data = [];
fetch('./data/data.json')
   .then(resp => resp.json())
   .then(json => pushTiles(json));

function pushTiles(data) {
   data.forEach(element => {
      dashboard.append(createTile(element));
   });
}

function createTile(data) {
   let tile = document.createElement('div');
   tile.className = 'dashboard__tile';
   let tileInnerHtml = '';
   let name = data.title;
   switch (name) {
      case 'Work':
         tile.classList.add('dashboard__work');
         tileInnerHtml += '<img class="dashboard__icon" src="./images/icon-work.svg" alt="">';
         break;
      case 'Play':
         tile.classList.add('dashboard__play');
         tileInnerHtml += '<img class="dashboard__icon" src="./images/icon-play.svg" alt="">';
         break;
      case 'Tracking':
         tile.classList.add('dashboard__tracking');
         tileInnerHtml += '<img class="dashboard__icon" src="./images/icon-tracking.svg" alt="">';
         break;
      case 'Study':
         tile.classList.add('dashboard__study');
         tileInnerHtml += '<img class="dashboard__icon" src="./images/icon-study.svg" alt="">';
         break;
      case 'Exercise':
         tile.classList.add('dashboard__exercise');
         tileInnerHtml += '<img class="dashboard__icon" src="./images/icon-exercise.svg" alt="">';
         break;
      case 'Social':
         tile.classList.add('dashboard__social');
         tileInnerHtml += '<img class="dashboard__icon" src="./images/icon-social.svg" alt="">';
         break;
      case 'Self Care':
         tile.classList.add('dashboard__self-care');
         tileInnerHtml += '<img class="dashboard__icon" src="./images/icon-self-care.svg" alt="">';
         break;
   
      default:
         break;
   }
   tileInnerHtml += '<svg class="dashboard__ellipsis" width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"  fill-rule="evenodd"/></svg>';
   tile.innerHTML = tileInnerHtml;
   let tracking = document.createElement('div');
   tracking.className = 'dashboard__tracking';
   tracking.innerHTML = `<div class="dashboard__tracking-title">${name}</div>
   <div class="dashboard__tracking-times">
      <div class="dashboard__tracking-time">${data.timeframes.daily.current}hrs</div>
      <div class="dashboard__litel-text dashboard__tracking-last-time">Last Week - ${data.timeframes.daily.previous}hrs</div>
   </div>`;
   tile.append(tracking);
   return tile;
}



