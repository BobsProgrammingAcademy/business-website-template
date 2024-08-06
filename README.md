# Business Website Template

This is a business website template for a company built using **React 18** (with **TypeScript 4**), **Material UI 5**, **Django 4**, and **Django REST Framework 3**.

### Dark mode:

![plot](https://github.com/BobsProgrammingAcademy/business-website-template/blob/master/frontend/public/images/dark_theme.png?raw=true)

### Light mode:

![plot](https://github.com/BobsProgrammingAcademy/business-website-template/blob/master/frontend/public/images/light_theme.png?raw=true)

## Table of Contents 
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the application](#run-the-application)
- [Running the tests](#run-the-tests)
- [Adding data to the application](#add-data-to-the-application)
- [Customizing the application](#customize-the-application)
- [Copyright and License](#copyright-and-license)

## Prerequisites

Install the following prerequisites:

1. [Python 3.8-3.11](https://www.python.org/downloads/)
<br> This project uses **Django v4.2.4**. For Django to work, you must install a correct version of Python on your machine. More information [here](https://django.readthedocs.io/en/stable/faq/install.html).
2. [Node.js](https://nodejs.org/en/)
3. [Visual Studio Code](https://code.visualstudio.com/download)

## Installation

### Backend

#### 1. Create a virtual environment

From the **root** directory, run:

```bash
cd backend
```
```bash
python -m venv venv
```

#### 2. Activate the virtual environment

From the **backend** directory, run:

On macOS:

```bash
source venv/bin/activate
```

On Windows:

```bash
venv\scripts\activate
```

#### 3. Install required backend dependencies

From the **backend** directory, run:

```bash
pip install -r requirements.txt
```

#### 4. Run migrations

From the **backend** directory, run:

```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```

#### 5. Create an admin user to access the Django Admin interface

From the **backend** directory, run:

```bash
python manage.py createsuperuser
```

When prompted, enter a username, email, and password.

### Frontend

#### 1. Install required frontend dependencies

From the **root** directory, run:

```bash
cd frontend
```
```bash
npm install
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

### 1. Run backend

From the **backend** directory, run:

```bash
python manage.py runserver
```

### 2. Run frontend

From the **frontend** directory, run:

```bash
npm start
```

## View the application

Go to http://localhost:3000/ to view the application.

## Run the tests

### 1. Run the backend tests

From the **backend** directory, run:

```bash
python manage.py test --pattern="tests.py"

```

### 2. Run the frontend tests

From the **frontend** directory, run:

```bash
npm run test
```

## Add data to the application

Add data through Django Admin.

Go to http://127.0.0.1:8000/admin to access the Django Admin interface and sign in using the admin credentials.

## Customize the application

This section describes how to customize the application. 

### Changing Section Titles and Subtitles 

#### 1. Products

To modify the title and subtitle of the **Products** section, make changes in the ```frontend/src/components/Products.tsx``` file.

#### 2. Services

To modify the title and subtitle of the **Services** section, make changes in the ```frontend/src/components/Services.tsx``` file.

#### 3. Pricing

To modify the title and subtitle of the **Pricing** section, make changes in the ```frontend/src/components/Pricing.tsx``` file.

#### 4. About

To modify the title and subtitle of the **About** section, make changes in the ```frontend/src/components/About.tsx``` file.

#### 5. Contact

To modify the title and subtitle of the **Contact** section, make changes in the ```frontend/src/components/Contact.tsx``` file.

### Changing Colors

To modify the colors in the application, make changes in the ```frontend/src/theme/palette.ts``` file.

### Changing Fonts

To modify the fonts in the application, first, add a new font to the ```frontend/public/index.html``` file, and then make changes in the ```frontend/src/theme/theme.ts``` file.

### Changing Logo

To modify the logo in the application, make changes in the ```frontend/src/layout/Header.tsx``` and ```frontend/src/layout/Sidebar.tsx``` files.

### Changing Buttons in the Hero Section

To modify the two buttons in the Hero section, make changes in the ```frontend/src/components/HeroButtons.tsx``` file.

## Copyright and License

Copyright © 2022 Bob's Programming Academy. Code released under the MIT license.
