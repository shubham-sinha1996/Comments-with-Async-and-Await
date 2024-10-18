# ShoutOut! Application

This project is a simple message-fetching application where users can retrieve messages and associated comments. The app demonstrates asynchronous JavaScript operations using `async` and `await`, handling multiple API calls simultaneously. If comments fail to load, the application catches the error.

## Features

- Fetches messages from a simulated API call
- Fetches comments associated with the messages
- Utilizes `async` and `await` for handling asynchronous operations
- Displays a loading spinner while data is being fetched
- Gracefully handles errors when fetching comments

## API Simulation

The application simulates two API calls:

- `getMessages()`: Fetches a list of messages after a random delay.
- `getComments()`: Fetches a list of comments for each message, with a 50% chance of failure (error).

## Application Workflow

When the "Get Messages" button is clicked, the app:

1. Displays a loading spinner.
2. Initiates two asynchronous API calls (`getMessages` and `getComments`) using `async` and `await`.
3. If `getComments` fails, an error message is displayed.

## Rendering Logic

- Messages are rendered with any associated comments (if present).
- If a message has no comments, it displays "No Comments."

## Error Handling

- If `getComments` fails, an error message is shown.
