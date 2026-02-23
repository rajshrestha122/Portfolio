
const backendUri = "http://localhost:3000/api/form"
async function fetchUsers(){
    try{
        const response = await fetch(backendUri);
        const data = await response.json();

        const list = document.querySelector(".list");
        list.innerHTML = "";
        data.message.forEach(item => {
            const ol = document.createElement("ol");
            ol.textContent = `Name: ${item.name} Email: ${item.email} Message: ${item.message}`;
            list.appendChild(ol);
        })
        console.log(data);
    }catch(error){
        console.log(error.message);
        
    }
}

fetchUsers();