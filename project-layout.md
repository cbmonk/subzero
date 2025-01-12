# Project Layout for Email Subscription Manager

## Frontend
```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── GmailAuth.jsx
│   │   │   ├── YahooAuth.jsx
│   │   │   ├── HotmailAuth.jsx
│   │   │   ├── iCloudAuth.jsx
│   │   │   └── ProviderSelection.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── ScanPage.jsx
│   │   │   └── SubscriptionsPage.jsx
│   │   ├── scan/
│   │   │   └── ProgressIndicator.jsx
│   │   ├── subscription/
│   │   │   └── SubscriptionList.jsx
│   │   └── feedback/
│   │       └── FeedbackForm.jsx
│   ├── services/
│   │   └── mockData.js
│   ├── theme.js
│   ├── App.jsx
│   ├── routes.jsx
│   ├── main.jsx
│   └── index.css

## Backend
backend/
├── src/
│   ├── auth/
│   │   ├── gmailAuth.js
│   │   ├── yahooAuth.js
│   │   ├── hotmailAuth.js
│   │   └── icloudAuth.js
│   ├── services/
│   │   ├── scanners/
│   │   │   ├── gmailScanner.js
│   │   │   ├── yahooScanner.js
│   │   │   ├── hotmailScanner.js
│   │   │   └── icloudScanner.js
│   │   └── unsubscriber.js
│   ├── middleware/
│   │   └── rateLimiter.js
│   ├── db/
│   │   └── sqlite.js
│   └── routes/
│       └── api.js
├── config/
│   ├── default.js
│   └── providers/
│       ├── gmail.js
│       ├── yahoo.js
│       ├── hotmail.js
│       └── icloud.js
└── server.js
```
