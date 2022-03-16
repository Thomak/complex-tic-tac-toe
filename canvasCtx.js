// canvas context
// define canvas and load at top for all page usage
const canvas = document.querySelector('canvas')
canvas.width = (window.innerWidth < window.innerHeight) ? window.innerWidth: window.innerHeight
canvas.height = (window.innerHeight < window.innerWidth) ? window.innerHeight : window.innerWidth

// canvas context
const ctx = canvas.getContext('2d')