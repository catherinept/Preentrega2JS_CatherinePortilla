function Producto(item, precio, stock) {
  this.item = item;
  this.precio = precio;
  this.stock = stock;
}

const Producto1 = new Producto("Bota industrial", 80000, 10);
const Producto2 = new Producto("Tapa oído", 113000, 1);
const Producto3 = new Producto("Casco", 215000, 150);
const Producto4 = new Producto("Gafas", 30000, 5);
const Producto5 = new Producto("Guantes", 14000, 250);

function verificarStockDisponible(items, itemDeseado) {
  const itemEncontrado = items.find(producto => producto.item.toUpperCase() === itemDeseado.toUpperCase());

  if (itemEncontrado && itemEncontrado.stock > 0) {
    return itemEncontrado.stock;
  } else {
    return 0;
  }
}

function sacarValor(cantidad, valorUnitario) {
  return cantidad * valorUnitario;
}

function realizarVenta() {
  const itemDeseado = prompt("¿Qué ítem desea comprar? - Opciones: Bota Industrial, Tapa Oído, Casco, Gafas o Guantes ");

  const stockDisponible = verificarStockDisponible([Producto1, Producto2, Producto3, Producto4, Producto5], itemDeseado);

  if (stockDisponible === 0) {
    alert("Lo sentimos, de este ítem no hay stock.");
  } else {
    const cantidadComprar = parseInt(prompt(`Hay ${stockDisponible} unidades disponibles. ¿Cuántos deseas comprar? `));

    if (cantidadComprar > stockDisponible) {
      alert("Venta no disponible, la cantidad a comprar superó el stock disponible.");
    } else {
      const itemEncontrado = [Producto1, Producto2, Producto3, Producto4, Producto5].find(producto => producto.item.toUpperCase() === itemDeseado.toUpperCase());
      const totalAPagar = sacarValor(cantidadComprar, itemEncontrado.precio);
      alert(`Valor a pagar: $${totalAPagar}`);
    }
  }
}

realizarVenta();
