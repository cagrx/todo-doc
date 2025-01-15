---
sidebar_label: "Token Flow & Private Key"
sidebar_position: 5
---

# Get User ID within API

## Firebase Authentication Token Flow

1. **Token Issuance**:

   - When a user signs in (anonymously or otherwise), the Firebase Authentication service, hosted by Google, generates a JWT (JSON Web Token).
   - This token is sent from Google's Firebase servers to the client (your web page in the user's browser) over an SSL/TLS encrypted connection.

2. **Token Storage**:

   - The client-side Firebase SDK typically stores this token securely in the browser.

3. **Token Usage**:

   - Your client-side application retrieves the token from storage when needed.
   - The token should be sent with all requests to your backend, usually in the Authorization header.
   - All communication between your client app and your backend should be done over HTTPS, ensuring the token remains encrypted in transit.

4. **Token Contents**:

   - The token contains the User ID (uid) of the authenticated user.
   - It also includes other information such as token expiration time, issuer, etc.
   - This information is encoded (not encrypted) within the token itself.

5. **Token Security**:

   - The token is digitally signed to prevent tampering.
   - While the token's contents are encoded, not encrypted, all transmission of the token occurs over encrypted SSL/TLS connections.

6. **Token Verification**:

   - Only the Firebase Admin SDK should be used to verify and decode the token on your server.
   - While the token can be decoded client-side, it should never be trusted without server verification.

7. **Admin SDK Role**:
   - The Firebase Admin SDK verifies the token's signature.
   - It checks if the token was indeed issued by Firebase and hasn't been altered.
   - After verification, it provides the decoded token information, including the User ID.

Key Points:

- The initial token is generated and sent by Google's Firebase Authentication servers, not your own backend.
- This communication from Google to the user's browser is encrypted via SSL/TLS.
- Subsequent use of the token (sending it to your backend) should also be over encrypted connections (HTTPS).
- Your backend then uses the Firebase Admin SDK to verify tokens received from clients.

## Role of Your Firebase Private Key in Authentication

The Firebase private key, which you generated and downloaded as a JSON file from the Firebase Console, is essential for server-side operations. Here's how it fits into the authentication flow:

1. **Purpose**:

   - The private key is used to authenticate your server to Firebase services.
   - It allows your server to act as an admin and access Firebase services securely.

2. **Usage in Token Verification**:

   - When your server receives a token from a client, it uses the Firebase Admin SDK to verify this token.
   - The Admin SDK uses the private key to securely communicate with Firebase services to validate the token.

3. **Process**:

   - Your server initializes the Firebase Admin SDK with the private key.
   - When verifying a token, the SDK uses this key to make secure API calls to Firebase.
   - Firebase uses the key to confirm that the verification request is coming from your authorized server.

4. **Security Implications**:

   - The private key grants administrative access to your Firebase project.
   - It should never be shared publicly or included in client-side code.
   - Typically, it's stored securely on your server, often as an environment variable.

5. **Key Rotation**:

   - You can generate new private keys and revoke old ones from the Firebase Console.
   - This allows you to rotate keys for security purposes without disrupting your application.

6. **Scope of Use**:
   - Besides token verification, the private key allows your server to perform other admin operations:
     - Managing users (create, delete, modify)
     - Accessing Firestore with admin privileges
     - Sending Firebase Cloud Messages

Remember:

- Keep your Firebase private key secure at all times.
- Never expose it in client-side code or public repositories.
- Use environment variables or secure secret management systems to handle the key in your server environment.
