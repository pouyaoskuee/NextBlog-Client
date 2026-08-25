NextBlog — Full-Stack Blog Platform

<p align="center">
  <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/nextblog/home.png" width="100%">
</p>
<p align="center">
  A modern full-stack blog platform built with Next.js, featuring secure authentication, dynamic content rendering, user interactions, and optimized data fetching.
</p>
<p align="center">
  <a href="">🌐 Live Demo</a> •
  <a href="https://github.com/pouyaoskuee/NextBlog-Client">Frontend</a> •
  <a href="https://github.com/pouyaoskuee/NextBlog-Server">Backend</a>
</p>

⸻

📌 Overview

NextBlog is a full-stack blog platform built with Next.js and React, designed to provide a modern blogging experience with authentication, content management, and user engagement features.

Users can browse, search, and filter blog posts by category, interact with content through likes, bookmarks, and comments, and manage their own content through a protected dashboard.

The project focuses on modern Next.js App Router concepts including dynamic rendering, static rendering, ISR, data caching and revalidation, Server Actions, Middleware-based route protection, Streaming, Suspense, loading states, error boundaries, and dynamic metadata.

The backend is maintained as a separate project and communicates with the frontend through a RESTful API.

⸻

🚀 Features

Authentication & Authorization

* JWT Authentication with Access & Refresh Tokens
* Cookie-based authentication
* Sign In / Sign Out
* Protected routes with Next.js Middleware
* Authentication state management with Context API
* Automatic authentication persistence using Refresh Tokens

Blog & Content

* Create, edit, and delete posts
* Dynamic post pages
* Search posts
* Filter posts by category
* Pagination
* Related posts
* Dynamic metadata and SEO
* Breadcrumb navigation

User Engagement

* Like posts
* Bookmark posts
* Add and view comments
* Interactive post actions

Next.js Features

* App Router
* Dynamic & Static Rendering
* ISR (Incremental Static Regeneration)
* Data Caching & Revalidation
* Server Actions
* Middleware
* Streaming
* Suspense
* SpinnerLoading UI
* Error Boundaries
* Dynamic Metadata

UI & Architecture

* Responsive Mobile-First Design
* Reusable Components
* Custom Hooks
* Compound Components Pattern
* Centralized API Services
* Form Handling & Validation

⸻

🛠️ Tech Stack

Frontend

* Next.js
* React.js
* JavaScript
* Tailwind CSS v4
* TanStack React Query
* React Hook Form
* Yup
* Context API
* Axios
* REST API

Backend

The backend is maintained separately and provides RESTful endpoints for:

* Authentication
* Users
* Blog Posts
* Categories
* Comments
* Likes
* Bookmarks

Backend Repository:
https://github.com/pouyaoskuee/NextBlog-Server

⸻

🔐 Authentication Flow

NextBlog uses JWT-based authentication with Access and Refresh Tokens.

```
User
 │
 ▼
Sign In
 │
 ▼
Backend Authentication
 │
 ├── Access Token
 └── Refresh Token
 │
 ▼
Cookies
 │
 ▼
Next.js Middleware
 │
 ├── Protected Route
 │
 └── Public Route
 │
 ▼
Authenticated Application
```

When the Access Token expires, the Refresh Token is used to maintain the user’s authenticated session.

⸻

📡 API Communication

The frontend communicates with the backend through a centralized REST API layer.

Key aspects include:

* Axios instance configuration
* Centralized API services
* Cookie-based authentication
* withCredentials
* Authentication headers
* Request & response handling
* Error handling
* SpinnerLoading states
* FormData support for file uploads

⸻

⚡ Next.js Architecture

The application takes advantage of modern Next.js App Router capabilities:

Feature	Usage
Dynamic Routes	Blog posts and categories
Route Groups	Authentication, blog, and dashboard sections
Middleware	Route protection and authentication
Server Actions	Server-side form operations
ISR	Efficient content regeneration
Data Cache	Optimized server-side data fetching
Revalidation	Keeping cached content up to date
Streaming	Progressive page rendering
Suspense	Async UI boundaries
SpinnerLoading UI	Navigation and data loading states
Error Boundaries	Route-level error handling
Metadata API	Dynamic SEO metadata

⸻

📂 Project Structure

The project follows a feature-oriented App Router structure with reusable UI components and separated data-access logic.
```
src/
├── app/
│   ├── (auth)/
│   │   ├── signin/
│   │   └── signup/
│   │
│   ├── (blog)/
│   │   └── blogs/
│   │       ├── category/
│   │       ├── [postSlug]/
│   │       └── _components/
│   │
│   ├── (dashboard)/
│   │   └── profile/
│   │       └── posts/
│   │
│   ├── error.jsx
│   ├── not-found.jsx
│   └── page.js
│
├── components/
│   └── Header.jsx
│
├── context/
│   └── authContext.jsx
│
├── hooks/
│   ├── useMoveBack.js
│   └── useOutSideClick.js
│
├── lib/
│   └── action.js
│
├── providers/
│   └── ReactQueryProvider.js
│
├── services/
│   ├── authServices.js
│   ├── commentsSevices.js
│   ├── postSevices.js
│   └── httpServices.js
│
├── ui/
│   ├── Button.jsx
│   ├── Modal.jsx
│   ├── Pagination.jsx
│   ├── Search.jsx
│   ├── Table.jsx
│   └── ...
│
├── utils/
│   ├── fileFormatter.js
│   ├── generatePagination.js
│   └── ...
│
├── constants/
├── styles/
└── middleware.js
```

The architecture separates:

* Routes & Pages → app/
* Reusable UI → ui/ and components/
* API Communication → services/
* Global State → context/ and providers/
* Reusable Logic → hooks/
* Server Actions → lib/
* Utilities → utils/

⸻

📝 Blog Features

Posts

* Browse blog posts
* Create, edit, and delete posts
* Dynamic post pages
* Search and category filtering
* Pagination
* Related posts
* Dynamic metadata

User Interaction

* Like posts
* Bookmark posts
* Add comments
* View comments

Dashboard

* Protected user dashboard
* Post management
* Create and edit posts
* Delete posts
* Form validation
* File upload handling

⸻

⚙️ Installation

1. Clone the repository

git clone https://github.com/pouyaoskuee/NextBlog-Client.git
cd NextBlog-Client

2. Install dependencies

npm install

3. Configure environment variables

Create:

.env.development.local

Add your backend API URL:

NEXT_PUBLIC_BASE_URL=http://localhost:8000/api

4. Run the development server

npm run dev

The application will be available at:

http://localhost:3000

Backend

Clone and run the backend separately:

https://github.com/pouyaoskuee/NextBlog-Server

⸻

📸 Screenshots


| dashboard | posts |
| :------------: | :-------------: |
| <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/nextblog/dashboard.png" width="500"> | <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/nextblog/posts.png" width="500"> |

---

| landing | footer | login | dashboard |
| :----: | :----: | :----: | :----: |
| <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/homeMobidleLight.PNG" width="260"> | <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/homeModbileLight2.PNG" width="260"> | <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/loginMdobileLight.PNG" width="260"> | <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/dashbodardMobileDark.PNG" width="260"> |

---


| createpost | login |
| :--: | :---: |
| <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/nextblog/createpost.png" width="500"> | <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/nextblog/login.png" width="500"> |

⸻

💡 Future Improvements

* Unit Testing
* End-to-End Testing
* Further Performance Optimization
* Accessibility Improvements
* Advanced Search
* Infinite Scrolling

⸻

📄 License

This project is developed for educational and portfolio purposes.
