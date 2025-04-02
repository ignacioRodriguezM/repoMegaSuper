const {Producto, DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual} = require('./domain.js')
const p1 = new Producto('cocoa', 10 , 1)
const descuentoFijo = new DescuentoFijo(5)
console.log(p1.precioBase)
p1.precioBase = 10
console.log(p1.precioBase)

p1.agregarDescuento(descuentoFijo)
console.log(p1.precioFinal())

const carrito = [p1]
const galletitas = new Producto('Galletitas', 20, 2)
function aumentarPrecio(productos, monto){
    productos.forEach(producto => {
        productos.precioBase = prodcto.precioBase + monto
    })
}
aumentarPrecioBaseForEach(carrito, 10)
console.log('coca: ' + p1.precioBase)