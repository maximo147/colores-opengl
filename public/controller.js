    var arg1 = document.getElementById('arg1')
    var arg2 = document.getElementById('arg2')
    var arg3 = document.getElementById('arg3')
    var response = document.getElementById('response')
    var color = document.getElementById("color")
    var cajaColor = document.getElementById("caja-color")
    var valores = document.getElementById("valores")
    var check = document.getElementById("check")

    cajaColor.style.backgroundColor = "#000000"


function func() {

    var r, g, b
    r = arg1.value / 255
    g = arg2.value / 255
    b = arg3.value /255
    if(check.checked){
        response.innerHTML = `glColor4f(${Number.parseFloat(r).toFixed(4)}f, 
        ${Number.parseFloat(g).toFixed(4)}f, ${Number.parseFloat(b).toFixed(4)}f, ${Number.parseFloat(valores.value).toFixed(4)}f);`
        cajaColor.style.backgroundColor  = color.value    
    }else{
        response.innerHTML = `glColor3f(${Number.parseFloat(r).toFixed(4)}f, 
        ${Number.parseFloat(g).toFixed(4)}f, ${Number.parseFloat(b).toFixed(4)}f);`
        cajaColor.style.backgroundColor  = color.value        
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

function clear2() {
    arg1.value = ""
    arg2.value = ""
    arg3.value = ""
    response.innerHTML = ''
}

function cambioColor() {
    cajaColor.style.backgroundColor  = hexToRgb(color.value)
    cajaColor.style.backgroundColor  = color.value
    arg1.value = hexToRgb(color.value).r
    arg2.value = hexToRgb(color.value).g
    arg3.value = hexToRgb(color.value).b
    console.log(cajaColor.style.backgroundColor)
    console.log(valores.value)
    if(check.checked){
        cajaColor.style.opacity  = valores.value

    }else{
        cajaColor.style.opacity  = 1.0
    }
    func()
}

window.addEventListener("input", cambioColor)


