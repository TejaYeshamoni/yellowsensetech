# React Job Listing App

This project is a React-based mobile-first application for Android that fetches and displays job listings using an API. It allows users to browse job listings, view job details, and bookmark jobs for offline access.

## Features

- **Bottom Navigation**: The app provides two sections - "Jobs" and "Bookmarks" - accessible via the bottom navigation bar.
- **Job Listing**: The Jobs section fetches data from the API and displays it in a card format, including details like title, location, salary, and phone.
- **Pagination**: Jobs are loaded page by page using pagination.
- **Bookmark Jobs**: Users can bookmark jobs and view them in the "Bookmarks" section, which are stored for offline access using local storage.
- **Loading & Error States**: The app handles loading, empty, and error states gracefully.
  
## API

The app fetches data from the following API:

- `GET https://testapi.getlokalapp.com/common/jobs?page=1`

## Technologies Used

- **React**: The primary framework used to build the application.
- **React Router**: For navigating between different views and handling routing.
- **LocalStorage**: For storing bookmarked jobs to allow offline access.
- **CSS**: For styling the application.

