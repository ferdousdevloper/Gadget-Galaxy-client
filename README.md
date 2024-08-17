# Gadget Galaxy - Frontend
## Live site: [GADGET GALAXY](https://gadget-galaxybd.netlify.app)

This is the frontend repository for the Gadget Galaxy website, a platform to browse, search, and purchase various gadgets. The frontend is built using React and Tailwind CSS to ensure a responsive and modern UI.

## Features

- Display products with pagination
- Search and filter products by brand and category
- Sort products by various criteria
- Responsive design
- Product detail modal
- Contact page using EmailJS

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/gadget-galaxy-frontend.git
   cd gadget-galaxy-frontend

2. Install the dependencies:

    ```bash
     npm install
  or if you use Yarn:

      yarn install

### Running the Project Locally

1. Start the development server:

       npm start
   or with Yarn:

    ```bash
       yarn start

2. Open your browser and navigate to http://localhost:3000 to view the website.

### Environment Variables

To use EmailJS for the contact page, create a .env file in the root directory and add the following environment variables:


        VITE_APIKEY=Your_API_KEY
        VITE_AUTHDOMAIN=Your_AUTH_DOMAIN
        VITE_PROJECTID=Your_Project_ID
        VITE_STORAGEBUCKET=Your_Storage_Bucket
        VITE_MESSAGINGSENDERID=Your_Messaging_Sender_ID
        VITE_APPID=Your_APP_ID

### Deployment
To deploy the frontend, use Vercel, Netlify, or any static site hosting platform.

1. Build the project:
     
          npm run build

   or with Yarn:

           yarn build

2. Deploy the build folder to your hosting platform.

### Technology Stack
- React.js
- Tailwind CSS
- EmailJS (for contact page)

### Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
