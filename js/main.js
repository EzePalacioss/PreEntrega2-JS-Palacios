alert("Bienvenido a nuestra tienda digital, vea nuestros productos y elija qué comprar");

const tiendaDigital = [
    {id: '0000', producto: 'celular', marca: 'Motorola', nombre: 'MotoG30', precio: '$300000', stock: 3},
    {id: '0111', producto: 'celular', marca: 'Samsung', nombre: 'Galaxy A05', precio: '$250000', stock: 5},
    {id: '0222', producto: 'celular', marca: 'Motorola', nombre: 'Moto G04', precio: '$200000', stock: 0},
    {id: '0333', producto: 'celular', marca: 'Xiaomi', nombre: 'Redmi 13C', precio: '$320000', stock: 0},
    {id: '0444', producto: 'celular', marca: 'Samsung', nombre: 'Galaxy A23', precio: '$400000', stock: 2},
    {id: '0555', producto: 'celular', marca: 'Alcatel', nombre: 'Alcatel Ultra 32', precio: '$74999', stock: 9},
    {id: '0666', producto: 'celular', marca: 'ZTE', nombre: 'Blade A53', precio: '$170000', stock: 2},
    {id: '0777', producto: 'celular', marca: 'Motorola', nombre: 'Moto G14', precio: '$289000', stock: 3},
    {id: '0888', producto: 'celular', marca: 'Samsung', nombre: 'Galaxy A14', precio: '$430000', stock: 3},
    {id: '0999', producto: 'celular', marca: 'Apple', nombre: 'Iphone 15 Pro', precio: '$3200000', stock: 0},
];

const nuevoCelular = {
    id: '1000',
    producto: 'celular',
    marca: 'Nokia',
    nombre: 'Nokia X100',
    precio: '$280000',
    stock: 4
};

tiendaDigital.push(nuevoCelular);
tiendaDigital.sort((a, b) => parseFloat(b.precio.slice(1)) - parseFloat(a.precio.slice(1)));

function conStock() {
    return tiendaDigital.filter(cel => cel.stock > 0);
}

function sinStock() {
    return tiendaDigital.filter(cel => cel.stock === 0);
}

function comprarCelular(){
    const tipoFiltrado = prompt("¿Qué tipo de productos desea ver?\n1. Con stock\n2. Sin stock");
    let productosFiltrados;

    if (tipoFiltrado === '1') {
        productosFiltrados = conStock();
    } else if (tipoFiltrado === '2') {
        productosFiltrados = sinStock();
    } else {
        alert("Elegí una opción valida");
        return;
    }

    const mensaje = "¿Qué desea comprar?\n";
    const celulares = productosFiltrados.map((cel, index) => 
        `${index + 1} ${cel.nombre} | Precio: ${cel.precio} | Stock: ${cel.stock}`).join('\n');
    prompt(mensaje + celulares);

}


function añadirProducto() {
let añadirProductos = conStock();
if(añadirProductos.length >= 0 && añadirProductos.length <= 8){
alert('Añadido al carrito')
}else{
    alert('Elige una opción válida')
}
}

comprarCelular();
añadirProducto()



