let s;
let a;
let p1;
let smiley;
let floor;

function setup() {
	createCanvas(1427,769);	
	world.gravity.y = 10;
	
	floor = new Sprite();
	floor.y = 10;
	floor.w = 1200;
	floor.h = 10;
	floor.collider = 'static';


	floor = new Sprite();
	floor.x = 1310;
	floor.y = 500;
	floor.w =10;
	floor.h = 1000;
	floor.collider = 'static';

	floor = new Sprite();
	floor.x = 110;
	floor.y = 500;
	floor.w =10;
	floor.h = 1000;
	floor.collider = 'static';

	floor = new Sprite();
	floor.x = 150;
	floor.y = 500;
	floor.w =10;
	floor.h = 130;
	floor.collider = 'static';

	floor = new Sprite();
	floor.x = 150;
	floor.y = 560;
	floor.w =90;
	floor.h =10;
	floor.collider = 'static';

	floor = new Sprite();
	floor.x = 150;
	floor.y = 440;
	floor.w =90;
	floor.h =10;
	floor.collider = 'static';

	floor = new Sprite();
	floor.y = 759;
	floor.w = 1200;
	floor.h = 10;
	floor.collider = 'static';
	
	let smileText = `
..bb
.bbbb
.bbbb
..bb
.
..bbb
.b.b.b
b..b..b
...b
...b
..b.b
.b...b
b.....b
`

;let palette = {
	'y': color(60, 220, 255),
	'b': color(10)
};

	smiley = new Sprite();
	smiley.img = spriteArt(smileText, 16);




}

function draw() {
	clear();
	
	

	if (kb.pressing('left')) smiley.vel.x = -5; else smiley.vel.x = 0;
   
	if (kb.pressing('right')) smiley.vel.x = 5;
	
	if (kb.pressing('down')) smiley.vel.y = 50;
	
	if (kb.pressing('up')) smiley.vel.y = -5;

	if (kb.pressing('m')) smiley.vel.x = 50;
	
	if (kb.pressing('n')) smiley.vel.x = -50;


	if (mouse.presses()) new Sprite(mouse.x, mouse.y, 20);
	
	
	
	background('white');
	
	

	
}
