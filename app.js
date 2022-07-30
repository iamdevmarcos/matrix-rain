const canvas = document.querySelector('#matrix')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const letters = [
  '日',
  'ﾊ',
  'ﾐ',
  'ﾋ',
  'ｰ',
  'ｳ',
  'ｼ',
  'ﾅ',
  'ﾓ',
  'ﾆ',
  'ｻ',
  'ﾜ',
  'ﾂ',
  'ｵ',
  'ﾘ',
  'ｱ',
  'ﾎ',
  'ﾃ',
  'ﾏ',
  'ｹ',
  'ﾒ',
  'ｴ',
  'ｶ',
  'ｷ',
  'ﾑ',
  'ﾕ',
  'ﾗ',
  'ｾ',
  'ﾈ',
  'ｽ',
  'ﾀ',
  'ﾇ',
  'ﾍ',
  ':',
  '・',
  '.',
  '=',
  '*',
  '+',
  '-',
  '<',
  '>',
  '¦',
  '｜',
  'ﾘ',
]

const fontSize = 18
const columns = canvas.width / fontSize

const drops = []
for (let x = 0; x < columns; x++) drops[x] = 1

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#0f0'
  ctx.font = `${fontSize}px arial`

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)]

    ctx.fillText(text, i * fontSize, drops[i] * fontSize)

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0
    }

    drops[i]++
  }

  window.requestAnimationFrame(draw)
}

draw()
