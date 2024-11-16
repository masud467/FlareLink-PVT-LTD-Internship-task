# Task Manager

This is a simple Task Manager application built using React. It allows users to manage their tasks effectively with functionalities like adding tasks, deleting tasks, searching, sorting, and marking tasks as completed. The tasks are stored in the browser's local storage to ensure persistence across sessions.
# Features
## Basic Features
1.Task Input: Add tasks with a title and priority level (Low, Medium, High).

2.Task Deletion: Remove tasks from the list.

3.Task Persistence: Tasks are stored in local storage and remain available after refreshing the page.
## Stretch Goals
1.Task Search: Search tasks using a search bar.

2.Task Completion: Mark tasks as completed or uncompleted.

3.Priority Setting: Assign priority levels to tasks (Low, Medium, High).

4.Task Sorting: Sort tasks by title, completion status, or priority.

5.UI Animation: Animated transitions for task addition and deletion using Framer Motion.

## Setup and Launch Process
### Prerequisites
A package manager like npm or yarn.
## Installation Steps
Clone the repository:
git clone https://github.com/your-username/task-manager.git
cd task-manager
## Install the dependencies:
npm install
## Start the development server:
npm run dev
Open the app in your browser at http://localhost:5173/5172 etc.

# Assumptions
1.Task Persistence:
The application uses localStorage to persist tasks. This assumes the user's browser supports localStorage.

2.Task Priority:
Three priority levels are defined: Low, Medium, and High. These levels are fixed and cannot be dynamically altered.

3.Sorting Criteria:
Sorting is implemented based on:
Completion: Incomplete tasks appear before completed tasks.
Priority: Tasks are ordered from High to Low priority.

4.Search Functionality:
Search is based only on the task title. Partial and case-insensitive matches are supported.

5.UI Animations:
Framer Motion is used for task animations. It is assumed that basic animations suffice for enhancing user experience.
