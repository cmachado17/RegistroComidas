// Al comienzo de tu archivo app.js
const exampleData = [
    { name: "Desayuno Saludable", date: "2023-01-10", type: "desayuno", photo: "https://images.unsplash.com/photo-1589992622081-23b0f51f6a1f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8YnJlYWtmYXN0fHx8fHx8MTcwMTYzODA4NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800" },
    { name: "Almuerzo Nutritivo", date: "2023-01-11", type: "almuerzo", photo: "https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bHVuY2h8fHx8fHwxNzAxNjM4MDg0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800" },
    { name: "Merienda Energética", date: "2023-01-12", type: "merienda", photo: "https://images.unsplash.com/photo-1560052859-7deb492b0baf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c25hY2t8fHx8fHwxNzAxNjM4MDg1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800" },
    { name: "Cena Ligera", date: "2023-01-13", type: "cena", photo: "https://images.unsplash.com/photo-1544598740-358704557d82?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGlubmVyfHx8fHx8MTcwMTYzODA4NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800" },
];

// En tu función showHistory()
function showHistory() {
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('list-section').style.display = 'block';

    const foodTableBody = document.getElementById('food-list');
    foodTableBody.innerHTML = ""; // Limpiamos la tabla antes de agregar los datos de ejemplo

    exampleData.forEach(item => {
        const row = foodTableBody.insertRow();
        const cellDate = row.insertCell(0);
        const cellName = row.insertCell(1);
        const cellType = row.insertCell(2);
        const cellImage = row.insertCell(3);

        cellDate.innerHTML = item.date;
        cellName.innerHTML = item.name;
        cellType.innerHTML = item.type;

        const image = document.createElement('img');
        image.src = item.photo;
        image.alt = item.name;
        image.crossOrigin = "anonymous"; // Añade esto para manejar CORS
        cellImage.appendChild(image);
    });
}


function showForm() {
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('list-section').style.display = 'none';
}

