# Auth MiniApp (node.js)

## What this app does
This is a simple Node.js script that demonstrates:
- Login simulation with a hardcoded user
- Two roles: admin and user
- Role-based access control

## How it works
- The script checks a username to simulate login
- Each user has a role
- Two functions act like protected endpoints:
  - adminAction() → admin only
  - userAction() → user only

## CIA Triad 
This app demonstrates Confidentiality:
- Only authorized roles can access certain actions
- Admin-only data is protected from regular users
- Unauthorized access is denied

## How to run
Open your terminal/shell and run:
- node index.js
