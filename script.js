let canvas = document.getElementById('canvas')
    ctx    = canvas.getContext('2d')

canvas.width = window.innerWidth; // берёт всю ширину
canvas.height = window.innerHeight; // берёт всю высоту


let x = 50

// fill (берёт фон)
// stroke (берёт border)
// line (добавляет ширину border)

ctx.fillStyle = 'pink'

// (----круг----)
ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2)
ctx.fill()

// (----треугольник----)

//(----анимация----)
// setInterval(() => {
//   ctx.fillStyle = 'white';
//   ctx.fillRect(0, 0, canvas.width, canvas.height)
//
//   ctx.fillStyle = 'pink';
//   ctx.fillRect(x++, 50, 300, 200)
// }, 10)
