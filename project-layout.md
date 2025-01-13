# Project Layout for Email Subscription Manager

## Frontend
```
frontend/
├── public/                     # Public assets like index.html
│   └── index.html             # Main HTML file for the application
├── src/
│   ├── components/            # React components for the application
│   │   ├── auth/              # Authentication components for different providers
│   │   │   ├── GmailAuth.jsx   # Component for Gmail authentication
│   │   │   ├── YahooAuth.jsx   # Component for Yahoo authentication
│   │   │   ├── HotmailAuth.jsx  # Component for Hotmail authentication
│   │   │   ├── iCloudAuth.jsx   # Component for iCloud authentication
│   │   │   └── ProviderSelection.jsx # Component for selecting email providers
│   │   ├── layout/            # Layout components for consistent UI structure
│   │   │   ├── Header.jsx      # Header component for the application
│   │   │   ├── Footer.jsx      # Footer component for the application
│   │   │   └── Layout.jsx      # Main layout component wrapping other components
│   │   ├── pages/             # Page components for different routes
│   │   │   ├── Home.jsx        # Home page component
│   │   │   ├── ScanPage.jsx    # Page for scanning emails
│   │   │   └── SubscriptionsPage.jsx # Page for managing subscriptions
│   │   ├── scan/              # Components related to scanning functionality
│   │   │   └── ProgressIndicator.jsx # Component showing scan progress
│   │   ├── subscription/       # Components related to subscription management
│   │   │   └── SubscriptionList.jsx # Component displaying the list of subscriptions
│   │   └── feedback/          # Components for user feedback
│   │       └── FeedbackForm.jsx # Component for submitting feedback
│   ├── services/              # Services for handling data and API calls
│   │   └── mockData.js        # Mock data for subscriptions
│   ├── theme.js               # Theme configuration for styling
│   ├── App.jsx                # Main application component
│   ├── routes.jsx             # Routing configuration for the application
│   ├── main.jsx               # Entry point for the React application
│   └── index.css              # Global CSS styles

## Backend
backend/
├── src/
│   ├── auth/                  # Authentication logic for different providers
│   │   ├── gmailAuth.js       # Logic for Gmail authentication
│   │   ├── yahooAuth.js       # Logic for Yahoo authentication
│   │   ├── hotmailAuth.js     # Logic for Hotmail authentication
│   │   └── icloudAuth.js      # Logic for iCloud authentication
│   ├── services/              # Core services for handling business logic
│   │   ├── scanners/          # Scanning logic for different email providers
│   │   │   ├── gmailScanner.js # Logic for scanning Gmail
│   │   │   ├── yahooScanner.js # Logic for scanning Yahoo
│   │   │   ├── hotmailScanner.js # Logic for scanning Hotmail
│   │   │   └── icloudScanner.js # Logic for scanning iCloud
│   │   └── unsubscriber.js     # Logic for unsubscribing from services
│   ├── middleware/            # Middleware for handling requests
│   │   └── rateLimiter.js     # Rate limiting middleware
│   ├── db/                    # Database connection and schema
│   │   └── sqlite.js          # SQLite database connection
│   └── routes/                # API routes for the backend
│       └── api.js            # Main API routes
├── config/                    # Configuration files
│   ├── default.js             # Default configuration settings
│   └── providers/             # Provider-specific configurations
│       ├── gmail.js           # Gmail provider configuration
│       ├── yahoo.js           # Yahoo provider configuration
│       ├── hotmail.js         # Hotmail provider configuration
│       └── icloud.js          # iCloud provider configuration
└── server.js                  # Main server file for the backend
```
