import SVG from 'svg.js'

export default class Drawing {
  constructor() {
    this.draw = SVG('drawing')
    this.nested = this.draw.nested()
  }
  clear() {
    return this.draw.clear()
  }
  exportSvg() {
    return this.draw.svg()
  }
  drawSvg(color) {
    const numberOfShapes = 100
    const width = 1000
    const height = 500

    this.drawContainer(width, height)
    this.drawFirstRectangle(width, height, color)

    for (var i = 0; i < numberOfShapes; i++) {
      this.drawShapes(width, height, color)
    }
  }
  drawContainer(width, height) {
    this.draw.size(width, height).viewbox(0, 0, width, height)
  }
  drawFirstRectangle(width, height, color) {
    let rc = this.relatedRandomColor(color)
    this.draw.rect(width, height).fill(rc)
  }
  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  randomColor() {
    let color = '#000000'.replace(/0/g, function() {
      return (~~(Math.random()*16)).toString(16)
    })
    return color
  }
  relatedRandomColor(color) {
    let rr = this.randomNumber(0, 127)
    let rg = this.randomNumber(0, 127)
    let rb = this.randomNumber(0, 127)
    switch(color) {
      case 'red' :
        rr += 128
        break;
      case 'orange' :
        rr += 128
        rg += 64
        break;
      case 'yellow' :
        rr += 128
        rg += 128
        break;
      case 'green' :
        rg += 128
        break;
      case 'cyan' :
        rg += 128
        rb += 128
        break;
      case 'blue' :
        rb += 128
        break;
      case 'violet' :
        rr += 64
        rb += 128
        break;
      case 'magenta' :
        rr += 128
        rb += 128
        break;
      case 'grey' :
        rr += 64
        rg += 64
        rb += 64
        break;
      case 'all' :
        return this.randomColor()
        break;
        // include pink?
    }
    rr = Math.round(rr)
    rg = Math.round(rg)
    rb = Math.round(rb)

    return "#" + this.componentToHex(rr) + this.componentToHex(rg) + this.componentToHex(rb)
  }
  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  drawShapes(width, height, color) {
    let randomNumber = this.randomNumber(0, 5)
    randomNumber < 3 ? this.drawCircle(width, height, color) :
    randomNumber < 5 ? this.drawTriangle(width, height, color) :
    this.drawRectangle(width, height, color)
  }
  drawCircle(width, height, color) {
    let rx = this.randomNumber(-width, width)
    let ry = this.randomNumber(-height, height)
    let rr = this.randomNumber(0, Math.max(width, height))
    let rc = this.relatedRandomColor(color)
    let rf = this.randomNumber(0, 1000) / 2000

    this.draw.circle(rr).cx(rx).cy(ry).attr({
      fill: rc,
      opacity: rf
    })
  }
  drawTriangle(width, height, color) {
    let rx1 = this.randomNumber(-width, width)
    let rx2 = this.randomNumber(-width, width)
    let rx3 = this.randomNumber(-width, width)
    let ry1 = this.randomNumber(-height, height)
    let ry2 = this.randomNumber(-height, height)
    let ry3 = this.randomNumber(-height, height)
    let rc = this.relatedRandomColor(color)
    let rf = this.randomNumber(0, 1000) / 2000
    let points = `${rx1},${ry1} ${rx2},${ry2} ${rx3},${ry3}`

    this.draw.polygon(points).attr({
      fill: rc,
      opacity: rf
    })
  }
  drawRectangle(width, height, color) {
    let rx1 = this.randomNumber(-width, width)
    let rx2 = this.randomNumber(-width, width)
    let ry1 = this.randomNumber(-height, height)
    let ry2 = this.randomNumber(-height, height)
    let rc = this.relatedRandomColor(color)
    let rf = this.randomNumber(0, 1000) / 2000

    this.draw.rect(Math.abs(rx2-rx1), Math.abs(ry2-ry1)).cx(rx1).cy(ry1)
    .attr({
      fill: rc,
      opacity: rf
    })
  }
}
