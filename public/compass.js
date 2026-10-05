const compass = document.querySelector('.compass');
const needle = document.querySelector('.needle');
const ne = document.querySelector('#ne');

document.addEventListener('mousemove', function(event) {
  const compassRect = compass.getBoundingClientRect();
  const centerX = compassRect.left + compassRect.width / 2;
  const centerY = compassRect.top + compassRect.height / 2;
  const mouseAngle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * 180 / Math.PI - 90;
  needle.style.transform = `rotate(${mouseAngle}deg)`;

  const mouseDistance = Math.pow(event.clientX - centerX, 2) + Math.pow(event.clientY - centerY, 2);
  ne.style.top = Math.min(mouseDistance / 25000 + 43, 57) + "%";
});