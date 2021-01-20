function update() {
let elms = document.querySelectorAll("a");
elms.forEach(function (elm) {
    let time = elm.querySelector("time");
    if (time) {
    let id = elm.href.split("/")[5];
    time.innerHTML = formatDate(getDateFromSnowFrake(id));
    }
});
}
function getDateFromSnowFrake(id) {
if (id < 10000000000) return;
var unixTime = Math.floor(Number(id) / 4194304) + 1288834974657;
return new Date(unixTime);
}
function formatDate(date) {
return `${date.getMonth() + 1}月` +
    `${date.getDate()}日 ` +
    `${date.getHours().toString().padStart(2, '0')}:` +
    `${date.getMinutes().toString().padStart(2, '0')}:` +
    `${date.getSeconds().toString().padStart(2, '0')}.` +
    `${date.getMilliseconds().toString().padStart(3, '0')} `
}
setInterval(update, 1000);
