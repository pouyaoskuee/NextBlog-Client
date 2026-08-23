# Deadlancer - Freelancing Platform

<p align="center">
  <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/homeDesktdopLight.png" width="100%">
</p>

<p align="center">
  A modern full-stack freelancing platform connecting employers with freelancers through a secure and responsive web application.
</p>

<p align="center">
  <a href="https://deadlancer.ir">🌐 Live Demo</a> •
  <a href="https://github.com/pouyaoskuee/Freelancer-App-Client">Frontend</a> •
  <a href="https://github.com/pouyaoskuee/Freelancer-App-Server">Backend</a>
</p>

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154)
![License](https://img.shields.io/badge/License-Portfolio-success)

------------------------------------------------------------------------

## Overview

Deadlancer is a full-stack freelancing platform that connects employers
with freelancers. Employers can create projects while freelancers browse
projects and submit proposals. The platform provides three independent
dashboards:

-   Employer Dashboard
-   Freelancer Dashboard
-   Admin Dashboard

Users authenticate using OTP verification via mobile number. After
completing their profile, an administrator reviews and approves the
account before granting full access.

------------------------------------------------------------------------

## 🚀 Features
-  JWT Authentication with Access & Refresh Tokens
-  Sign In / Sign Out
-  Protected Routes with Next.js Middleware
-  User Authentication State Management with Context API
-  Server Actions for Form Submission
-  Dynamic & Static Routes
-  ISR (Incremental Static Regeneration)
-  Data Caching & Revalidation
-  Streaming & Suspense
-  Loading States & Error Boundaries
-  Search & Category Filtering
-  Pagination
-  Comments, Likes & Bookmarks
-  Form Validation with React Hook Form & Yup
-  Compound Components Pattern
-  Reusable Components
-  Dynamic Metadata & SEO
-  Breadcrumb Navigation
-   Responsive (Mobile First)
-   REST API Integration
-   Reusable Components
-   Custom Hooks

## 🛠️ Tech Stack

### Frontend

 Next.js
 React.js
 Tailwind CSS v4
 TanStack React Query
 React Hook Form
 Yup
 Context API
 Axios
 REST API

### Backend

Backend implementation is maintained separately. This repository focuses
on frontend development and REST API integration.

## 🔄 Authentication Flow

1.  Register / Login
2.  set email & password
3.  Receive JWT Tokens
4.  Access Platform

## 📡 API Communication

-   Axios Instance
-   RESTful API Integration
-   Cookie-based Authentication
-   withCredentials Support
-   set Header in fetch
-   Centralized API Configuration
-   Error Handling
-   Loading States

## 📂 Routing

``` text
/
├── auth
├── complete-profile
├── owner
├── freelancer
├── admin
└── *
```

## 📂 Project Structure

``` text
src/
├── features/
├── hooks/
├── pages/
├── services/
├── ui/
├── utils/
└── context/
```

## ⚙️ Installation

``` bash
git clone https://github.com/pouyaoskuee/Freelancer-App-Client.git
npm install
npm run dev
```

Create `.env.development.local`:

``` env
VITE_BASE_URL=<your backend API>
ex:http://localhost:9000
```

Backend: https://github.com/pouyaoskuee/Freelancer-App-Server

# 📸 Screenshots

## 🏠 Landing Page

| Desktop - Dark | Desktop - Light |
| :------------: | :-------------: |
| <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/dhomeDesktopDark.png" width="500"> | <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/homeDesktopdLight0.png" width="500"> |

| landing | footer | login | dashboard |
| :----: | :----: | :----: | :----: |
| <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/homeMdobileLight.PNG" width="260"> | <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/homeMobileLidght2.PNG" width="260"> | <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/loginMobildeLight.PNG" width="260"> | <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/dashboardMobildeDark.PNG" width="260"> |

---

## 📑 Project Management

| Dark | Light |
| :--: | :---: |
| <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/projectsDesdktopDark.png" width="500"> | <img src="https://raw.githubusercontent.com/pouyaoskuee/portfolio-asset/main/deadlancer/projectsDesktopLidght2.png" width="500"> |



## 💡 Future Improvements

-   Unit Testing
-   End-to-End Testing
-   darkMode

## 📄 License

This project is intended for educational and portfolio purposes.
