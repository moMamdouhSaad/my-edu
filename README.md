# Education Subscription App

## Overview

This project is an **interview task** to build a subscription form for an **education** platform. The app allows **parents** to subscribe for their **children's** education by filling out a subscription form. 

### Project Structure

The application is organized into the following folders:

- **core**: Contains essential components and services that are used globally in the app.
  - **components**: Includes reusable components like `footer` and `header`.
  - **services**: Contains the `responsive.service` to handle responsive behavior.
  
- **pages**: Contains the main pages of the app.
  - **home**: Includes components like `hero-section` and `subscription-process`.
  - **subscription**: Contains components like `bill-summary` and `subscription-form`.

- **shared**: Contains reusable shared modules across the app.
  - **bases**: Includes base components like `responsive-base.component` to handle responsive design across pages.
  - **components**: Includes reusable components such as `button` and `subscription-step`.
  - **enum**: Contains enums like `device-type.enum.ts` to define the device types.
  - **models**: Contains models like `step.model.ts` for structuring data.
  - **styles**: Contains global styles for the app, including typography, colors, and custom inputs.

### Features

- **Subscription Form**: Allows parents to enter details like their full name, child’s name, grade, and birthdate.
- **Responsive Design**: The app adapts to different screen sizes using the `responsive.service` to handle mobile, tablet, and desktop views.
- **Reusable Components**: Various components are made reusable across the app to ensure modularity and easier maintenance.

### How the App Works

1. **Parent Registration**: Parents fill out a form with their details and their child’s information. 
2. **Device Responsiveness**: The app dynamically adjusts to the screen size (Mobile, Tablet, Desktop, and Large Screen) to provide an optimal user experience.
3. **Subscription Confirmation**: Once the form is filled, parents can review and submit their subscription.

## Folder Structure


### Key Components

1. **Responsive Service**: The `responsive.service.ts` file in the `core/services` folder is used to detect and handle different screen sizes and update the UI accordingly.

2. **Subscription Form**: The `subscription-form.component.ts` handles the user input for the subscription, including the child's name, grade, birthdate, and more. It also validates the form before submission.

3. **Reusable Components**:
   - **Button Component**: Located in `shared/components/button/`, this component is used for buttons across the app.
   - **Subscription Step Component**: Located in `shared/components/subscription-step/`, used inside `subscription-process` to manage subscription steps.

### How to Run the Project

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/moMamdouhSaad/my-edu/git
   npm install
   ionic serve



Feel free to contribute to this project or provide suggestions for improvements. Thank you for reviewing the work!


