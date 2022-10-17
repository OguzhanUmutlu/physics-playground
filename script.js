const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const {Engine, Render, Runner, Bodies, Composite, MouseConstraint, Mouse} = Matter;
const engine = Engine.create();
const render = Render.create({
    canvas, engine
});
const boxA = Bodies.rectangle(400, 200, 80, 80);
const boxB = Bodies.rectangle(450, 50, 80, 80);
const ground = Bodies.rectangle(400, 610, 810, 60, {isStatic: true});
Composite.add(engine.world, [boxA, boxB, ground]);
Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);
const onResize = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
};
addEventListener("resize", onResize);
onResize();
const mouse = Mouse.create(canvas);
const mouseConstraint = MouseConstraint.create(engine, {mouse, constraint: {stiffness: 0.2, render: {visible: true}}});

(function animate() {
    requestAnimationFrame(animate);
})();