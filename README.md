# Seven Cells Round Two

This repository contains a Django backend and a React frontend for a web application. The project is designed to demonstrate the ability to build a full-stack application with a focus on collaboration, CI/CD pipelines, and best practices.

## Project Structure

```plaintext
seven-cells-round-two/
├── backend/
│   ├── manage.py
│   ├── myproject/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   └── myapp/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── serializers.py
│       ├── tests.py
│       └── views.py
└── frontend/
    ├── README.md
    ├── package.json
    ├── public/
    └── src/
```

## Getting Started

### Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

### Setup Backend

1. Create a virtual environment and activate it:

    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

2. Install the dependencies:

    ```sh
    pip install -r backend/requirements.txt
    ```

3. Run the migrations:

    ```sh
    python backend/manage.py migrate
    ```

4. Start the development server:

    ```sh
    python backend/manage.py runserver
    ```

The backend will be running at `http://localhost:8000/`.

### Setup Frontend

1. Navigate to the `frontend` directory:

    ```sh
    cd frontend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

The frontend will be running at `http://localhost:3000/`.

## Available Scripts (Frontend)

In the `frontend` directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. 

## CI/CD Pipeline

This project uses GitHub Actions for CI/CD. The workflow file is located at `.github/workflows/ci.yml`.

### Workflow

- **Build**: Installs dependencies, runs migrations, and runs tests for both backend and frontend.

### Running Tests (Backend)

To run tests for the backend:

```sh
python backend/manage.py test
```

## Learn More

To learn more about Django, visit the [Django Documentation](https://docs.djangoproject.com/en/stable/).

To learn more about React, visit the [React Documentation](https://reactjs.org/).
