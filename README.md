

# **Car Rental Management System**

A full-stack web application for managing car listings, rentals, and updates for a rental service. Built using the **MERN (MongoDB, Express.js, React, Node.js)** stack, it allows users to view, add, edit, and delete car details.

---

## **Steps A-C Recap and Moving Forward**

### **Steps A-C Recap**
1. **Step A - Project Setup**:
   - A new React application was created with the `create-react-app` command.
   - The project folder was structured to accommodate both frontend and backend files.

2. **Step B - Initial React App Setup**:
   - The React app was customized with a title and a matching theme for the Car Rental System.
   - Essential dependencies like `react-router-dom` were installed for navigation.

3. **Step C - Component Creation**:
   - Key components such as `AddCarForm`, `CarList`, `UpdateCarForm`, `DeleteCarButton`, and `CarDetails` were built to handle the core functionalities of the application.
   - Basic styling was added using `App.css`.

---

### **Steps Moving Forward**
1. **Connect Backend to MongoDB**:
   - Backend set up using **Node.js** and **Express.js**.
   - MongoDB Atlas was configured with `atlas_url.js` for database connection.
   - RESTful API routes were implemented for CRUD operations.

2. **Integrate Frontend and Backend**:
   - Axios was configured to handle HTTP requests from the frontend to the backend.
   - Components like `CarList` and `CarDetails` were updated to dynamically fetch data from the backend.

3. **Testing and Debugging**:
   - Used Postman to verify API endpoints.
   - Resolved validation issues in the MongoDB schema for smooth CRUD operations.

---

## **Features**

### **Frontend**
- **List Cars**: Display all cars with details.
- **Add Cars**: Submit new cars to the system.
- **Edit Cars**: Update car details.
- **Delete Cars**: Remove cars from the system.

### **Backend**
- **Create, Read, Update, Delete (CRUD)**:
  - Add new cars to the database.
  - Fetch car data using RESTful APIs.
  - Update or delete cars dynamically.

---

## **Installation Instructions**

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd car-rental-management-system
```

### **2. Backend Setup**
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add:
   ```plaintext
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### **3. Frontend Setup**
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

---

## **Folder Structure**

```
car-rental-management-system/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddCarForm.js
│   │   │   ├── AdminPage.js
│   │   │   ├── ApiData.js
│   │   │   ├── CarDetails.js
│   │   │   ├── CarList.js
│   │   │   ├── CarManagement.js
│   │   │   ├── DeleteCarButton.js
│   │   │   ├── Navigation.js
│   │   │   ├── UpdateCarForm.js
│   │   └── App.js
│   ├── App.css
│   ├── index.js
│   ├── axiosInstance.js
├── backend/
│   ├── server.js
│   ├── cars.js
│   ├── atlas_url.js
│   ├── package.json
│   ├── package-lock.json
├── README.md
```

---

## **API Documentation**

### **Base URL**
`http://localhost:5000/api`

### **Endpoints**
- **GET /cars**: Fetch all cars.
- **GET /cars/:id**: Fetch a specific car by ID.
- **POST /cars**: Add a new car.
- **PUT /cars/:id**: Update a car.
- **DELETE /cars/:id**: Remove a car.

---

## **Testing the Application**

### **1. Backend**
- Start the backend server using:
  ```bash
  npm run dev
  ```
- Test endpoints using Postman, ThunderClient, or a browser.

### **2. Frontend**
- Start the React app using:
  ```bash
  npm start
  ```
- Test CRUD functionalities (Add, Edit, Delete) via the UI.

---

## **Contributors**
- **Nabeel Ishfark**
