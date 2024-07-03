let fecha=new Date(); // Lee fecha y hora
salida=document.querySelector("#salida");
window.onload=()=>{
    document.querySelector("#fechaHoy").addEventListener("click", mostrarFechaHoy);
    document.querySelector("#diaHoy").addEventListener("click", mostrarDia);
    document.querySelector("#mesActual").addEventListener("click", mostrarMes);
    document.querySelector("#anioActual").addEventListener("click", mostrarAnio);
    document.querySelector("#fechaCompleta").addEventListener("click", mostrarFechaCompleta);
    document.querySelector("#hora").addEventListener("click", mostrarHora);
}

function mostrarFechaHoy() {
    salida.textContent=fecha.toLocaleDateString(); 
    // textContent e innerHTML es prácticamente lo mismo, muestran la salida
    // toLocalString muestra la fecha según formato local
}

function mostrarDia() {
    salida.textContent="Hoy es " + fecha.getDate(); // Muestra el día del mes actual
}

function mostrarMes() {
    salida.textContent="Mes " + (fecha.getMonth()+1); // Muestra el mes actual en número pero enero = 0
}

function mostrarAnio() {
    salida.textContent="Año " + fecha.getFullYear(); 
}

function mostrarFechaCompleta() {
    salida.textContent="La fecha de hoy es " + fecha.toLocaleDateString
    ("es-ES",{ 
        weekday:"long", 
        year:"numeric", 
        month:"long", 
        day:"numeric"
    }).toUpperCase();
}

function mostrarHora() {
    const intervalID=setInterval(()=> {
        let now= new Date(); // leer cada segundo la hora
        document.querySelector("#salida").innerHTML ="La hora actual es " + now.toLocaleTimeString("es-ES")})
        document.querySelector("#pararHora").addEventListener("click", ()=>{
            clearInterval(intervalID);
        })
};