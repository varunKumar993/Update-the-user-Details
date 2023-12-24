
    let editedUserId = null;

    // Dummy data (replace with your actual user data)
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
        // Add more user details as needed
    ];

    // Function to display users
    function displayUsers() {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${user.name} (${user.email})
                <span onclick="editUser(${user.id})">🖊️</span>
                <span onclick="deleteUser(${user.id})">❌</span>
            `;
            userList.appendChild(listItem);
        });
    }

    // Function to edit user
    function editUser(userId) {
        editedUserId = userId;

        // Find the user by ID
        const userToEdit = users.find(user => user.id === userId);

        // Populate the edit form with user details
        document.getElementById('editName').value = userToEdit.name;
        document.getElementById('editEmail').value = userToEdit.email;

        // Show the edit form
        document.getElementById('editForm').style.display = 'block';
    }

    // Function to submit edit form
    function submitEditForm() {
        // Find the user index to update in the array
        const userIndex = users.findIndex(user => user.id === editedUserId);

        // Update user details
        users[userIndex].name = document.getElementById('editName').value;
        users[userIndex].email = document.getElementById('editEmail').value;

        // Hide the edit form
        document.getElementById('editForm').style.display = 'none';

        // Display updated user list
        displayUsers();
    }

    // Function to delete user (replace with your actual delete functionality)
    function deleteUser(userId) {
        // Delete user logic (not implemented in this example)
        console.log(`User ${userId} deleted`);
        // Display updated user list
        displayUsers();
    }

    // Initial display
    displayUsers();
