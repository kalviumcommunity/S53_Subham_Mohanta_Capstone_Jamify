# **Jamify**  

_"A platform for budding music artists to showcase their music talent and discover other artists."_  


## **Features** 🚀  

- 🎨 **User-friendly UI**: Built with **React** and stylized with ShadcnUI for a seamless user experience.  
- 🎵 **Music talent showcase**: One page showing all the music talent posted by the users.
- 🛡️ **Secure Authentication**: Integrated JWTs and **Clerk** for user management.  
- 🌐 **Live-interaction**: Collaborate and meet online face to face in 1:1 private video chat rooms.
- 📊 **Database**: Flexible and fast data storage with **MongoDB**.  


## **Demo** 🎥  

Check out the live application here: **[Live Demo](https://jamify-weld.vercel.app)**  

### Screenshots  

| Home Page                          |
|------------------------------------|
| ![Home](https://i.ibb.co/Fz9xkx7/Homepage.png) |


## **Getting Started** 💻  

Follow these steps to set up the project locally.  

### Prerequisites  
- **Node.js** (v18+)
- **npm**

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/kalviumcommunity/S53_Subham_Mohanta_Capstone_Jamify.git
   cd S53_Subham_Mohanta_Capstone_Jamify
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Configure environment variables:  
   - Create a `.env` file in the root of Client directory:  
     ```plaintext
     VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-api-key>
     ```
   - Create a `.env` file in the root of Backend directory:  
     ```plaintext
     MONGO_URI=<your-database-url>
     ```

4. Start the development server:  
   ```bash
   npm run dev
   ```  

5. Visit: `http://localhost:5173`  


## **Tech Stack** 🛠  

| Layer         | Technology         |
|---------------|--------------------|
| Frontend      | React, Vite, ShadcnUI |
| Backend       | Node.js, Express.js |
| Database      | MongoDB |
| Deployment    | Vercel |
| Authentication| JWT, Clerk |
| Payment | Razorpay |


## **Contributing** 🤝  

We welcome contributions!  

1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b feature/your-feature-name
   ```  
3. Commit your changes:  
   ```bash
   git commit -m "Add feature X"
   ```  
4. Push to the branch:  
   ```bash
   git push origin feature/your-feature-name
   ```  
5. Open a Pull Request on GitHub.  


## **Acknowledgments** 🙌  

- **Clerk**: Simplifying authentication.  
- **ShadcnUI**: Clean and interactive components.
- **Razorpay**: Seamless payment flow.
- **Vercel**: For seamless deployment and scaling of the application.



## **Stay Connected** 🌐  

- **GitHub Discussions**: [Join the conversation](https://github.com/your-username/your-project/discussions)  
- **Issues**: [Report a bug or suggest a feature](https://github.com/your-username/your-project/issues)  

Let’s build something amazing together! 🎉  
