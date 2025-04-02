//Producto , Descuento

function Producto(precio, nombre){
    this.nombre = nombre
    this.precio = precio
}

// let p1 = 'hola'
// p1 = 8

let producto = new Producto(10, 'CocaCola')
producto = 'este es un producto'

console.log(producto)

class Producto{

    #precioBase //hago que el atributo sea privado

    constructor(nombre, precioBase, cantidad){
        this.nombre = nombre
        this.#precioBase = precioBase
        this.cantidad = cantidad
        this.descuentos = []
    }
    agregarDescuento(nuevoDescuento){
        this.descuentos.push(nuevoDescuento)
    }
    precioFinal(){
        const precioBaseTotal = this.#precioBase * this.cantidad
        console.log()
        const precioFinal = this.descuentos.reduce(
            (precioAnterior, descuento) => {
                precioAnterior - descuento.valorDescontado(precioBaseTotal, this.cantidad)
            }, precioBaseTotal
        )
        return Math.max(0, precioFinal)

    }
    get precioBase(){
        return this.#precioBase
    }
    set precioBase(nuevoPrecio){
        this.#precioBase = nuevoPrecio
    }

}
const p1 = new Producto('cocacola',10, 1)
console.log(p1.precioBase)

class DescuentoFijo {
    constructor(valor){
        this.valor = valor
    }
    valorDescontado(precioBase,cantidad){
        return this.valor
    }
}
class DescuentoPorcentual{
    constructor(porcentaje){
        this.porcentaje = porcentaje
    }
    valorDescontado(precioBase,_){
        return precioBase * this.porcentaje / 100
    }
}
class DescuentoPorCantidad{
    constructor(cantidadMinima,porcentaje){
        this.cantidadMinima = cantidadMinima
        this.porcentaje = porcentaje
    }
    valorDescontado(precioBase,cantidad){
        const vecesRepetido = Math.floor(cantidad / this.cantidadMinima)
        let valorDescontado = 0
        if(vecesRepetido >= 1){
            valorDescontado = precioBase * (this.porcentaje / 100) * vecesRepetido
        }
        return valorDescontado
    }
}
module.exports = {Producto, DescuentoFijo, DescuentoPorCantidad, DescuentoPorcentual}