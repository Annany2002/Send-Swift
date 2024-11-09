**SendSwift: A Next.js File Storage Application**

**Overview**

SendSwift is a feature-rich file storage application built with Next.js, TypeScript, Convex, Clerk, and Shadcn. It offers a seamless user experience for file management, collaboration, and security.

**Key Features**

* **File Upload and Management:**
  * Easily upload files to your cloud storage.
  * Organize files into folders and subfolders.
  * Search for files using keywords and filters.
* **Real-time Collaboration:**
  * Collaborate with team members on files simultaneously.
  * View real-time updates and changes made by others.
* **Role-Based Access Control:**
  * Implement granular permissions for different user roles.
  * Control who can access, edit, and delete files.
* **Robust Backend:**
  * Powered by Convex for efficient data management and real-time updates.
  * Securely store and manage files using advanced backend infrastructure.
* **User Authentication and Authorization:**
  * Utilize Clerk for seamless user authentication and authorization.
  * Protect sensitive data with robust security measures.

**Technology Stack**

* **Frontend:** Next.js, TypeScript, React, Shadcn
* **Backend:** Convex
* **Authentication and Authorization:** Clerk

**Getting Started**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Annany2002/Send-Swift.git
   ```
2. **Install Dependencies:**
   ```bash
   cd sendswift
   npm install
   ```
3. **Set Up Environment Variables:**
   Create a `.env.local` file and add your environment variables, including:
   * `NEXT_PUBLIC_CONVEX_URL`
   * `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   * `CLERK_SECRET_KEY`
   * `CONVEX_DEPLOYMENT`
  
4. **Set up Environment Variables inside Convex**
    * `CLERK_HOSTNAME`
    * `WEBHOOK_SECRET` - from clerk

5. **Run the Convex Server**
    ```bash
    npx convex dev
    ```

6. **Start the Development Server:**
   ```bash
   npm run dev
   ```

**Contributing**

We welcome contributions to SendSwift. Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Create a pull request to the main branch.

**License**

This project is licensed under the MIT License.

**Additional Notes**

* For more detailed information, please refer to the project's documentation.
* If you encounter any issues, please report them on the GitHub issue tracker.

**We hope you find SendSwift a valuable tool for your file management needs!**
