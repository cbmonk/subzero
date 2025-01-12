# Technical Architecture for Email Subscription Manager

## Configuration (config/default.js)
```javascript
module.exports = {
  system: {
    maxConcurrentUsers: 50,
    scanTimeout: 30 * 60 * 1000,  // 30 minutes
    scanInterval: 60 * 60 * 1000   // 1 hour between scans
  },
  ui: { // Added UI configuration
      primaryColor: '',
      secondaryColor: '',
      accentColor: '',
      fontFamily: 'Inter, Roboto, sans-serif' // Example, include both for fallback
  }
};
```

## Database Schema
```sql
-- Users
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE,
    provider TEXT CHECK(provider IN ('gmail', 'yahoo', 'hotmail', 'icloud')),
    last_scan_time DATETIME
);

-- Active Scans
CREATE TABLE active_scans (
    user_id TEXT PRIMARY KEY,
    provider TEXT,
    start_time DATETIME,
    progress INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Feedback
CREATE TABLE feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT,
    rating INTEGER CHECK(rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## API Endpoints
```javascript
// Auth routes
POST /api/auth/:provider/login
POST /api/auth/:provider/callback

// Scan routes
POST /api/scan/start
GET  /api/scan/progress
POST /api/scan/cancel

// Subscription routes
POST /api/subscription/unsubscribe

// Feedback route
POST /api/feedback
```

## Error Handling
```javascript
const errorTypes = {
    AUTH_FAILED: 'Authentication failed',
    SCAN_FAILED: 'Scan failed',
    RATE_LIMITED: 'Too many requests',
    SYSTEM_BUSY: 'System at capacity'
};
```

## Core Metrics
- Active scans count
- Scan success rate
- Unsubscribe success rate
- Average user rating

## Security Measures
- OAuth tokens stored in memory only
- No email content storage
- HTTPS for all communications
