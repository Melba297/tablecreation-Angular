const fetchData = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    await data.forEach(item => {
        const domElement = document.getElementById('table-body-content');
        const row1 = domElement.insertRow();
        const cell1 = row1.insertCell(0);
        var id  = document.createTextNode(item.id)
        cell1.appendChild(id);
        const cell2 = row1.insertCell(1);
        const name = document.createTextNode(item.name);
        cell2.appendChild(name);
        const cell3 = row1.insertCell(2);
        const email = document.createTextNode(item.email);
        cell3.appendChild(email);
        const cell4 = row1.insertCell(2);
        const phone = document.createTextNode(item.phone);
        cell4.appendChild(phone)
    });
    // console.log(await response.json());
    
}



const loaderFunc = setTimeout(()=> fetchData(),2000);


