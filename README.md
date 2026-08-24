NextBlog - Blog Platform

<p align="center">
  <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/homeDesktdopLight.png" width="100%">
</p>
<p align="center">
  A modern full-stack blog platform built with Next.js, featuring secure authentication, dynamic content rendering, interactive user engagement, and optimized data fetching.
</p>
<p align="center">
  <a href="">🌐 Live Demo</a> •
  <a href="https://github.com/pouyaoskuee/NextBlog-Client">Frontend</a> •
  <a href="https://github.com/pouyaoskuee/NextBlog-Server">Backend</a>
</p>

⸻

Overview

NextBlog is a full-stack blog platform built with Next.js and React.

The platform allows users to browse and search blog posts, filter content by category, and interact with posts through comments, likes, and bookmarks.

The application focuses on modern Next.js features such as dynamic and static rendering, ISR, data caching and revalidation, Server Actions, Middleware-based route protection, Streaming, Suspense, and dynamic metadata.

The backend is maintained as a separate project and communicates with the frontend through a RESTful API.

⸻

🚀 Features

* JWT Authentication with Access & Refresh Tokens
* Sign In / Sign Out
* Cookie-based Authentication
* Protected Routes with Next.js Middleware
* User Authentication State Management with Context API
* Server Actions for Form Submission
* Dynamic & Static Routes
* ISR (Incremental Static Regeneration)
* Data Caching & Revalidation
* Streaming & Suspense
* Loading States
* Error Boundaries
* Search & Category Filtering
* Pagination
* Comments, Likes & Bookmarks
* Form Handling with React Hook Form
* Form Validation with Yup
* Compound Components Pattern
* Reusable Components
* Custom Hooks
* Dynamic Metadata & SEO
* Breadcrumb Navigation
* Responsive Design (Mobile-First)
* REST API Integration

⸻

🛠️ Tech Stack

Frontend

* Next.js
* React.js
* Tailwind CSS v4
* TanStack React Query
* React Hook Form
* Yup
* Context API
* Axios
* REST API

Backend

Backend implementation is maintained separately.

The frontend communicates with the backend through a RESTful API for authentication, blog posts, categories, comments, likes, bookmarks, and user-related operations.

⸻

🔐 Authentication

NextBlog uses JWT-based authentication with Access and Refresh Tokens.

Authentication Flow

1. User signs in with their credentials.
2. The backend validates the credentials.
3. Access and Refresh Tokens are issued.
4. Authentication data is handled through cookies.
5. Protected routes are validated using Next.js Middleware.
6. The application maintains the authenticated user’s state through Context API.
7. Refresh Tokens are used to maintain authentication when the Access Token expires.

⸻

📡 API Communication

The frontend communicates with the backend through a RESTful API.

API Features

* Axios Instance
* RESTful API Integration
* Cookie-based Authentication
* withCredentials Support
* Centralized API Configuration
* Request & Response Handling
* Authentication Headers
* Error Handling
* Loading States
* FormData Submission

⸻

⚡ Next.js Architecture

The project takes advantage of several Next.js App Router features:

* Dynamic Routes
* Static Routes
* Route Groups
* Middleware
* Server Actions
* ISR
* Data Caching
* Cache Revalidation
* Streaming
* Suspense
* Loading UI
* Error Boundaries
* Dynamic Metadata

These features are used to improve rendering performance, user experience, and application structure.

⸻

📂 Routing

/
├── auth/
│   ├── sign-in
│   └── ...
├── complete-profile/
├── blogs/
│   ├── [postSlug]
│   └── ...
├── categories/
├── ...
└── *

⸻

📂 Project Structure

src/
├── app/
├── components/
├── hooks/
├── services/
├── ui/
├── utils/
├── context/
└── ...

The project follows a reusable component-based architecture with separated UI components, services, hooks, utilities, and application routes.

⸻

📝 Blog Features

Posts

* Browse blog posts
* Dynamic post pages
* Search posts
* Filter by category
* Pagination
* Dynamic metadata

User Interaction

* Like posts
* Bookmark posts
* Add comments
* View comments

Navigation

* Breadcrumb navigation
* Dynamic routing
* Protected routes

⸻

⚙️ Installation

Clone the repository:

git clone https://github.com/pouyaoskuee/NextBlog-Client.git

Install dependencies:

npm install

Run the development server:

npm run dev

Create .env.development.local:

NEXT_PUBLIC_BASE_URL=<your backend API>
# Example
NEXT_PUBLIC_BASE_URL=http://localhost:8000/api

Backend:

https://github.com/pouyaoskuee/NextBlog-Server

⸻

📸 Screenshots

🏠 Home Page

Desktop - Dark	Desktop - Light
	
Mobile	Blog Posts	Post Details	Dashboard
			

⸻

📑 Blog & Post Details

Dark	Light
	

⸻

💬 User Interaction

Comments	Likes & Bookmarks
	

⸻

💡 Future Improvements

* Unit Testing
* End-to-End Testing
* Performance Optimization
* Accessibility Improvements

⸻

📄 License

This project is intended for educational and portfolio purposes.
