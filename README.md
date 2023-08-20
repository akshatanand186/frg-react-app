# Fashion Recommendation Front End

This is a front-end React application designed to search and display image results based on user queries. The app allows users to enter a user ID and a search query, which are then used to fetch and display matching images from a backend API.

![App Screenshot](FrontEndSS.png)

## Getting Started

These instructions will help you set up and run the React Front End on your local machine.

## Features

- **User Input:** Users can enter a user ID and a search query through input fields on the interface.
- **Search:** Users can initiate a search for matching images by clicking the "Find Match" button.
- **Pagination:** The app presents search results in a paginated format, with a fixed number of images per page.
- **Image Display:** Matched images are showcased along with their corresponding product display names.

### Installing

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/frg-ai/frg-react-app
   ```

2. Navigate to project directory

   ```bash
   cd frg-react-app
   ```

3. Install the required dependencies

   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm start
   ```
5. Open your web browser and navigate to http://localhost:3000 to access the app.

### Usage

- **Enter User ID:** Input the desired user ID in the "Enter User ID" field.
- **Enter Search Query:** Input the search query in the "Enter Search Query" field.
- **Find Match:** Click the "Find Match" button to initiate the search based on the provided user ID and query.
- **View Results:** Matching images will be displayed in a paginated gallery format, along with their respective product display names.
- **Pagination:** Navigate through different pages of the image results by clicking on the pagination buttons.

### Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making API requests.
- **CSS Modules:** Local scoping of styles for React components.
- **Pagination:** Implemented to handle a large number of image results.
