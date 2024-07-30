async function fetchUserData(callback) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function extractAndLogUserData(users) {
    for (let i = 0; i < 3; i++) {
        if (users[i]) {
            console.log(`Name: ${users[i].name}, Email: ${users[i].email}`);
        }
    }
}

fetchUserData(extractAndLogUserData);