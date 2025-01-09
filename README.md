# Synesis IT Blog

A modern blog application built with React, Redux Toolkit, and Framer Motion.

## Features

- Responsive design with Tailwind CSS
- Infinite scroll for blog posts
- Real-time search functionality
- Beautiful animations with Framer Motion
- State management with Redux Toolkit
- API integration with RTK Query
- Blog post notifications
- Newsletter subscription form
- Review system

## Tech Stack

- React
- TypeScript
- Redux Toolkit (RTK Query)
- React Router DOM
- Framer Motion
- Tailwind CSS
- Lucide React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `/src/components`: Reusable UI components
- `/src/pages`: Page components
- `/src/store`: Redux store configuration
  - `/services`: RTK Query API services
  - `/slices`: Redux slices
- `/src/types`: TypeScript type definitions

## Implementation Details

- Used RTK Query for efficient data fetching and caching
- Implemented infinite scroll for better performance
- Added animations for enhanced user experience
- Integrated notification system for blog interactions
- Created responsive layouts for all screen sizes

## Assumptions

- API endpoints are available and follow the specified format
- Authentication endpoints will be added in the future
- Reviews are currently static (to be integrated with backend)
- Newsletter subscription is UI-only (backend integration pending)