## ✅ Features Implemented

### 1. Basic Authentication  
Implemented a secure authentication flow using **name, email, phone**, and **password**. User credentials are validated and stored appropriately.  

### 2. All Recipes Page  
Created a dedicated page to list **all available recipes**, with support for dynamic loading and UI consistency.

### 3. Add Recipe to Cart  
- **Local Storage**: Cart items are stored locally for unauthenticated users.  
- **User Account**: If logged in, cart data syncs with the user’s account for persistence.

### 4. Multi-step Recipe Submission Form  
Developed a multi-step form:  
- Step 1: Basic info (name, category)  
- Step 2: Ingredients  
- Step 3: Instructions  
- Step 4: Image upload  
Includes form validation and state persistence between steps.

### 5. Wishlist
Users can save recipes to a wishlist, even without logging in. If logged in, it syncs to their account.

### 6. Search Functionality  
Users can search recipes by:  
- Name 
- Ingredient  
- Category

### 7. Pagination  
Implemented custom pagination logic from scratch to handle large datasets efficiently.

---
🧠 State Management
Used Redux Toolkit with react-redux to manage global state for:

Cart

Wishlist

Authentication

Recipe data
This helps maintain predictable state and improves app scalability.

---

## 🐛 Bug Fixes
Identified and resolved the following major bugs:
- Recipe Details Modal not receiving ID 
- Recipe detail API call error due to missing `await` in async function  
- Conditional rendering and query enabling in React Query  
Additional minor UI/UX and responsiveness bugs were also fixed.

---

## 🕓 Time Estimate  
Total Time Spent: Approximately 16-20 hours, including development, debugging, and responsive design polish.

---
