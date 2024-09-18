# Cars-Commerce 🚗🛒

Cars-Commerce is an ecommerce platform for selling cars, built using **React** for the frontend and **Java Spring Boot** for the backend. The platform provides an intuitive user interface for browsing, searching, and purchasing cars, while maintaining a robust backend for managing inventory, orders, and user accounts.

## Features

- **User-friendly UI** for browsing cars by make, model, price, and other filters
- **Real-time inventory management** system
- **Secure user authentication** and authorization
- **RESTful APIs** for car listing, orders, and user management
- **Admin dashboard** for adding/removing cars, managing orders, and viewing customer data

## Tech Stack

- **Frontend**: React, Tailwind CSS, HTML, JavaScript
- **Backend**: Java Spring Boot, RESTful API
- **Database**: H2 Database
- **Deployment**: Docker, CI/CD pipeline with GitHub Actions

## Project Structure

```bash
cars-commerce/
│
├── frontend/            # React frontend
│   ├── public/          # Public assets
│   ├── src/             # React source code
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       ├── services/    # API services
│       └── styles/      # CSS and styling
│
├── backend/             # Java Spring Boot backend
│   ├── src/             # Java source code
│       ├── main/        # Main application files
│       └── test/        # Unit and integration tests
│
├── docker/              # Docker configurations
├── docs/                # Documentation files
├── README.md            # Project README
└── .github/             # GitHub workflows and CI/CD pipelines
```
