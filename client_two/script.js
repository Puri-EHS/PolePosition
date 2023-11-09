import Two from 'two.js';

var params = {
    fullscreen: true
};
var elem = document.body;
var two = new Two(params).appendTo(elem);

var rect = two.makeSprite('./assets/car.png');
var circle = two.makeCircle(-70, 0, 50);
circle.fill = '#FF8000';
rect.fill = 'rgba(0, 200, 255, 0.75)';

var cx = two.width * 0.5;
var cy = two.height * 0.5;
var group = two.makeGroup(circle, rect);
group.position.set(cx, cy);
group.scale = 0;
group.noStroke();

// Bind a function to scale and rotate the group to the animation loop.
two.bind('update', update);
// Finally, start the animation loop
two.play();

function update(frameCount) {
// This code is called every time two.update() is called.
if (group.scale > 0.9999) {
    group.scale = group.rotation = 0;
}
var t = (1 - group.scale) * 0.125;
group.scale += t;
group.rotation += t * 4 * Math.PI;
}