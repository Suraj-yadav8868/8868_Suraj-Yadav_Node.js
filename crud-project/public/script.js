const API = "http://localhost:5000/api/users";
const form = document.getElementById("userForm");

async function fetchUsers() {
    const res = await fetch(API);
    const users = await res.json();

    const table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach((user, index) => {
        table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${user.image || 'https://via.placeholder.com/40'}" width="40"></td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>
                <button onclick="editUser('${user._id}')">Edit</button>
                <button onclick="deleteUser('${user._id}')">Delete</button>
            </td>
        </tr>
        `;
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = document.getElementById("userId").value;

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        image: document.getElementById("image").value
    };

    if (id) {
        await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
    } else {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });
    }

    form.reset();
    fetchUsers();
});

async function deleteUser(id) {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchUsers();
}

async function editUser(id) {
    const res = await fetch(`${API}/${id}`);
    const user = await res.json();

    document.getElementById("userId").value = user._id;
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("phone").value = user.phone;
    document.getElementById("image").value = user.image;
}

fetchUsers();