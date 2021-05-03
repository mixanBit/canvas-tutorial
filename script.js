let canvas = document.getElementById('canvas')
    ctx    = canvas.getContext('2d')
    canvas.width = window.innerWidth; // берёт всю ширину
    canvas.height = window.innerHeight; // берёт всю высоту

let x = 50

// fill (берёт фон)
// stroke (берёт border)
// line (добавляет ширину border)


ctx.fillStyle = 'pink'

// (----текст----)
// let grad = ctx.createLinearGradient(0, 0, 500, 0)
//
// grad.addColorStop('0', 'pink')
// grad.addColorStop('.50', 'red')
// grad.addColorStop('1', 'blue')
// // ctx.textAlign = 'center'
//
// ctx.fillStyle = grad;
//
// ctx.font = '30px Roboto'
// ctx.fillText('Hello world!', 50, 50)


// (----круг----)
// ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2)
// ctx.fill()


// (----треугольник----)
// ctx.beginPath()
// ctx.moveTo(50, 50) // расположение
// ctx.lineTo(25, 100) // сдвиг
// ctx.lineTo(75, 100) // сдвиг
// // ctx.lineTo(50, 50) // сдвиг
// ctx.closePath()
// ctx.stroke()


//(----анимация----)
// setInterval(() => {
//   ctx.fillStyle = 'white';
//   ctx.fillRect(0, 0, canvas.width, canvas.height)
//
//   ctx.fillStyle = 'pink';
//   ctx.fillRect(x++, 50, 300, 200)
// }, 10)
