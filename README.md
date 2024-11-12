# Car Storage System using LocalStorage

A simple web application to manage and store car names using the browser's Local Storage. This app allows users to add new car names, ensures no duplicates are stored, and formats car names. Users can also remove all stored car names with a confirmation dialog.

## Features

- **Add Cars**: Users can input a car name, and it will be stored in the local storage if it doesn't already exist.
- **No Duplicates**: The app checks if the car already exists (case-insensitive) before adding it.
- **Car Name Formatting**: The first letter of the car name is capitalized, and the rest are in lowercase.
- **Remove Cars**: Users can remove all cars stored in local storage via a confirmation dialog.
- **Persistent Storage**: The car names are saved in local storage and will persist even after refreshing or reopening the browser.

## Technologies Used

- **HTML**: For the structure of the web page.
- **JavaScript**: For managing the local storage and user interactions.
- **Tailwind CSS**: For styling the app, ensuring a responsive and clean design.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/car-storage-system.git
