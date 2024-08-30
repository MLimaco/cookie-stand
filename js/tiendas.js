'use strict';
const tiendas=[];
function Tiendas(name,direccion,horario,telefono,email,aforo){
    this.name=name,
    this.direccion=direccion,
    this.horario=horario,
    this.telefono=telefono,
    this.email=email,
    this.aforo=aforo
}

const seatle=new Tiendas("seatle","av.azangaro 341","6am-7pm","1-54321","seatle@salmoncookie.com","15");
const tokyo=new Tiendas("tokyo","av.azangaro 341","6am-7pm","1-54321","seatle@salmoncookie.com","15");
const dubai=new Tiendas("dubai","av.azangaro 341","6am-7pm","1-54321","seatle@salmoncookie.com","15");
const paris=new Tiendas("paris","av.azangaro 341","6am-7pm","1-54321","seatle@salmoncookie.com","15");
const lima=new Tiendas("lima","av.azangaro 341","6am-7pm","1-54321","seatle@salmoncookie.com","15");
tiendas.push(seatle,tokyo,dubai,paris,lima);

function mostrarTiendas(store){
    const sucursales=document.getElementById('sucursales');
    const local=document.createElement('section');

    const nombreTienda=document.createElement('h2');
    nombreTienda.textContent=store.name;
    local.appendChild(nombreTienda);

    const direccionTienda=document.createElement('p');
    direccionTienda.textContent=store.direccion;
    local.appendChild(direccionTienda);

    const horarioTienda=document.createElement('p');
    horarioTienda.textContent=store.horario;
    local.appendChild(horarioTienda);

    const telefonoTienda=document.createElement('p');
    telefonoTienda.textContent=store.telefono;
    local.appendChild(telefonoTienda);

    const emailTienda=document.createElement('p');
    emailTienda.textContent=store.email;
    local.appendChild(emailTienda);

    const aforoTienda=document.createElement('p');
    aforoTienda.textContent=store.aforo;
    local.appendChild(aforoTienda);

    sucursales.appendChild(local);
}
function ejecutar(){
    for(let i=0;i <tiendas.length;i++){
        mostrarTiendas(tiendas[i]);
    }
}
ejecutar()

tiendas=[seatle,tokyo,dubai,paris,lima]