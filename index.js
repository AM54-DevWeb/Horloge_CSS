window.onload = function()
{

var d    = new Date();
var time = d.getSeconds() + 60 * d.getMinutes() + 3600 * d.getHours();

var minute = document.getElementById('minute');
var heure = document.getElementById('heure');
var seconde = document.getElementById('seconde');

seconde.style.MozTransform    = 'rotate(' + (time * 6) + 'deg)';
seconde.style.WebkitTransform = 'rotate(' + (time * 6) + 'deg)';
seconde.style.OTransform      = 'rotate(' + (time * 6) + 'deg)';
seconde.style.msTransform     = 'rotate(' + (time * 6) + 'deg)';
seconde.style.transform       = 'rotate(' + (time * 6) + 'deg)';
minute.style.MozTransform    = 'rotate(' + Math.round(time / 10) + 'deg)';
minute.style.WebkitTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
minute.style.OTransform      = 'rotate(' + Math.round(time / 10) + 'deg)';
minute.style.msTransform     = 'rotate(' + Math.round(time / 10) + 'deg)';
minute.style.transform       = 'rotate(' + Math.round(time / 10) + 'deg)';
heure.style.MozTransform    = 'rotate(' + Math.round(time / 120) + 'deg)';
heure.style.WebkitTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
heure.style.OTransform      = 'rotate(' + Math.round(time / 120) + 'deg)';
heure.style.msTransform     = 'rotate(' + Math.round(time / 120) + 'deg)';
heure.style.transform       = 'rotate(' + Math.round(time / 120) + 'deg)';

setInterval(function() {
    time++;
    seconde.style.MozTransform    = 'rotate(' + (time * 6) + 'deg)';
    seconde.style.WebkitTransform = 'rotate(' + (time * 6) + 'deg)';
    seconde.style.OTransform      = 'rotate(' + (time * 6) + 'deg)';
    seconde.style.msTransform     = 'rotate(' + (time * 6) + 'deg)';
    seconde.style.transform       = 'rotate(' + (time * 6) + 'deg)';
    minute.style.MozTransform    = 'rotate(' + Math.round(time / 10) + 'deg)';
    minute.style.WebkitTransform = 'rotate(' + Math.round(time / 10) + 'deg)';
    minute.style.OTransform      = 'rotate(' + Math.round(time / 10) + 'deg)';
    minute.style.msTransform     = 'rotate(' + Math.round(time / 10) + 'deg)';
    minute.style.transform       = 'rotate(' + Math.round(time / 10) + 'deg)';
    heure.style.MozTransform    = 'rotate(' + Math.round(time / 120) + 'deg)';
    heure.style.WebkitTransform = 'rotate(' + Math.round(time / 120) + 'deg)';
    heure.style.OTransform      = 'rotate(' + Math.round(time / 120) + 'deg)';
    heure.style.msTransform     = 'rotate(' + Math.round(time / 120) + 'deg)';
    heure.style.transform       = 'rotate(' + Math.round(time / 120) + 'deg)';
    }, 1000);

}