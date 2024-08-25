# Clinic App Design

This project is a mobile application designed for clinic management using React Native. The app provides features such as managing patient biodata, clinical records, and appointment scheduling.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screens](#screens)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Technologies Used](#technologies-used)
- [License](#license)

## Overview

The Clinic App Design project is aimed at providing an intuitive and user-friendly interface for managing clinical records. The app is built using React Native and supports basic operations such as entering and validating patient biodata, clinical records, and appointment scheduling.

## Features

- **Patient Biodata Management:** Users can input and manage the biodata of patients.
- **Clinical Records:** Allows users to add, edit, and validate clinical records.
- **Date Validation:** Ensures dates are entered in the correct format (DD-MM-YYYY).
- **Yes/No Input Validation:** Provides validation for inputs that require a yes/no response.
- **Navigation Tabs:** Easy navigation between Biodata and Clinical Records tabs.

## Screens

### Biodata Tab

- **Fields:** First Name, Surname, Middle Name, Date of Birth, Home Address, Date of Registration, etc.
- **Validation:** Date of Birth and Date of Registration fields are validated for the correct format.

### Clinical Record Tab

- **Fields:** Clinic Date, Nature of Ailment, Medicine Prescribed, Procedure Undertaken, Date of Next Appointment.
- **Validation:** Clinic Date and Next Appointment Date fields are validated for the correct format.

### Layout

- **Navigation:** The app uses tabs for navigation between the Biodata and Clinical Records screens.
- **Header:** Displays the app's logo and the current tab name.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/clinic-app-design.git
   ```
   
2.Navigate to the project directory:

   ```bash
   cd clinic-app-design
   ```

3.Install the dependencies:
   ```bash
   npm install
   ```

## Running the App

1. Start the development server:

   ```bash
   npx expo start
   ```
   
2.Use an Android or iOS emulator to run the app, or scan the QR code provided by Expo to run it on a physical device.

## Technologies Used
- React Native: For building the mobile application.
- Expo Router: For navigation between different screens.
- TypeScript: For static type checking.
- KeyboardAwareScrollView: For handling keyboard inputs efficiently.
- Ionicons: For tab icons.
- Custom Hooks: To manage color schemes dynamically.


## License

This project is licensed under the MIT License. See the LICENSE file for more details.
