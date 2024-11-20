// Mostrar la hora y la fecha actual
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    
    // Actualizar la información en el elemento HTML
    document.getElementById('date-time').textContent = now.toLocaleDateString('es-ES', options);
}

// Actualizar la hora cada segundo
setInterval(updateDateTime, 1000);

// Mostrar la ubicación de los archivos seleccionados
document.getElementById('fileInput').addEventListener('change', function(event) {
    const fileList = event.target.files;
    let fileDetails = '<ul>';
    
    for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        fileDetails += `<li><strong>Nombre:</strong> ${file.name} - <strong>Ubicación:</strong> ${file.webkitRelativePath || "No disponible"}</li>`;
    }
    
    fileDetails += '</ul>';
    document.getElementById('fileDetails').innerHTML = fileDetails;
});
