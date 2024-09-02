# Khatabook

Khatabook is a simple web application built with Node.js, Express, and EJS that allows users to manage financial records by creating, editing, viewing, and deleting text files.

## Features

- View all existing records
- Create new financial records
- Edit existing records
- View content of specific records
- Delete records

## Installation

1. Clone the repository:

   git clone https://github.com/chandrayan0417/khatabook.git

    Navigate to the project directory:
    ```
    cd khatabook
   ```
2. Install the dependencies:
    ```
    npm install
    ```

## Usage

1. Start the server:

    ```
    node app.js
    ```
2. Open your browser and go to http://localhost:3000 to manage your financial records.



## Routes

    / - View all files.
    /create - Form to create a new record.
    /createhisaab - Handle form submission to create a new file.
    /edit/:filename - Edit a specific file.
    /update/:filename - Handle form submission to update an existing file.
    /view/:filename - View the content of a specific file.
    /delete/:filename - Delete a specific file.
