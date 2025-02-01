# lab3_restaurant_database

## Project Description
This project is a Node.js application using Express and MongoDB (Mongoose) to manage a restaurant database. The project includes a REST API to retrieve restaurant details based on different criteria. The data is stored in MongoDB Atlas and queried using Mongoose.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **Postman** (for API testing)
- **GitHub** (for version control)

## Installation and Setup

### 1. Clone the Repository
```sh
git clone <repository-url>
cd lab3_restaurant_database
```

### 2. Install Dependencies
```sh
npm install express mongoose dotenv cors
```

### 3. Create a `.env` file
Create a `.env` file in the root directory and add the MongoDB Atlas connection string:
```
MONGODB_URI=<your_mongodb_atlas_connection_string>
PORT=3000
```

### 4. Run the Application
```sh
npm start
```

The server will run on `http://localhost:3000`

## Database Setup
1. **Create a MongoDB Atlas account** at [MongoDB Atlas](https://account.mongodb.com/account/login)
2. **Create a cluster** and a database named `lab3_restaurant_database`
3. **Create a collection** named `Restaurants`
4. **Seed the database** using the seed data script from the following link:
   [Seed Data](https://drive.google.com/file/d/1ON-ARc3cHHb45zi1att3StiP9Y37MIEG/view?usp=sharing)

## API Endpoints

### 1. Get All Restaurants
**Endpoint:** `GET /restaurants`
**Description:** Returns all restaurant details.
**Example:**
```
GET http://localhost:3000/restaurants
```

### 2. Get Restaurants by Cuisine
**Endpoint:** `GET /restaurants/cuisine/:cuisine`
**Description:** Returns all restaurants filtered by cuisine.
**Example:**
```
GET http://localhost:3000/restaurants/cuisine/Japanese
GET http://localhost:3000/restaurants/cuisine/Bakery
GET http://localhost:3000/restaurants/cuisine/Italian
```

### 3. Get Restaurants Sorted by `restaurant_id`
**Endpoint:** `GET /restaurants?sortBy=ASC|DESC`
**Description:** Returns restaurants with selected columns (id, cuisines, name, city, restaurant_id) sorted by `restaurant_id` in ascending or descending order.
**Example:**
```
GET http://localhost:3000/restaurants?sortBy=ASC
GET http://localhost:3000/restaurants?sortBy=DESC
```

### 4. Get Restaurants with Cuisine "Delicatessen" and Not in Brooklyn
**Endpoint:** `GET /restaurants/Delicatessen`
**Description:** Returns restaurants where cuisine is "Delicatessen" and city is not "Brooklyn". The response includes `cuisines`, `name`, and `city`, sorted in ascending order by name.
**Example:**
```
GET http://localhost:3000/restaurants/Delicatessen
```

## Testing with Postman
1. Open **Postman**
2. Import the API endpoints and test the responses
3. Verify that the responses return the expected results from MongoDB Atlas

## Version Control
All code is committed to **GitHub** in a repository named `lab3_restaurant_database`.
```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

## Future Work (Lab04 & Lab05)
- Additional query enhancements
- Implement authentication and authorization
- Add more advanced filtering and sorting options
- Implement caching for optimized performance

