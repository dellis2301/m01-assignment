// Simple Node.js script demonstrating authentication, roles, and access control

// --- Hardcoded user ---
const user = {
    username: "john_doe",
    role: "admin" // change to "user" to test different access
};

// --- Authentication Function ---
function authenticate(username) {
    if (username === user.username) {
        console.log(`User ${username} authenticated successfully.`);
        return user;
    } else {
        console.log("Authentication failed.");
        return null;
    }
}

// --- Role-based Access Control Functions ---

// Admin-only action
function adminAction(currentUser) {
    if (currentUser.role === "admin") {
        console.log("Admin action performed: Access granted to sensitive data.");
    } else {
        console.log("Access denied: Admins only.");
    }
}

// User-only action
function userAction(currentUser) {
    if (currentUser.role === "user") {
        console.log("User action performed: Access granted to user resources.");
    } else {
        console.log("Access denied: Users only.");
    }
}

// --- Simulate Login ---
const loggedInUser = authenticate("john_doe");

// --- Simulate Protected Actions ---
if (loggedInUser) {
    adminAction(loggedInUser);
    userAction(loggedInUser);
}