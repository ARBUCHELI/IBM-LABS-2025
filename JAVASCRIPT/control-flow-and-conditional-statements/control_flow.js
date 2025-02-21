/*let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);*/

let authorized = false;
let interaction = false;
let partial = false;
let role = 'Non-subscriber'
let message = '';

switch (role) {
    case 'Employee':
        authorized = true;
        break;
    case 'Enrolled Member':
        authorized = true;
        interaction = true;
        break;
    default:
        partial = true;
}

if (authorized && !interaction) {
    message = 'You can enter to the building'
}
else if (authorized && interaction) {
    message = 'You can enter to the building, and you can interact with a dietician';
}
else {
    message = 'You don\'t have access to the building';
}

console.log(message);