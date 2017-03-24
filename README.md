disable-cors
===
Test extension
---
```
# Load the extension
https://developer.chrome.com/extensions/getstarted

cd client

# Install packages
yarn

# Start server
yarn start

# Visit https://localhost:8083
# Open security tab in developer tools
# Add localhost.cer as a trusted certificate root in Keychain Manager
# The client makes a request to nytimes, which is protected by Access-Control-Allow-Origin: https://www.nytimes.com.
```

Publish extension
---
```
Zip the extension directory.
Upload the directory to the Chrome web store.
```
