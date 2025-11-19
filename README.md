## Development Log

# startup-voting-board

- src/
-  api/
-  assets/
-  components/
-  context/
-  pages/
-  utils/
-  App.jsx
-  main.jsx

-- I choose 'Vite' for faster development experience.   


## Day 1 -- Components & Static UI

- Created components: `IdeaCard`, `IdeaList`, `VoteButtons`, `HomePage`.
- Integrated mock API from MockAPI.io.
- Used `useEffect` and `useState` to fetch ideas dynamically.
- Added loading and error states with `Loader`.
- Committed initial UI to GitHub.

## Day 2 --

- Add Upvote and Downvote functionality using `sueState`.
- Pass props from `IdeaCard` => `VoteButtons`.
- Each idea card should have its own independent vote counter.

## Day 3 --

- Implemented Upvote / Downvote system with real-time UI updates.
- Created dummy startup ideas data.
- Centralized vote storage using Context API.
- Fully responsive layout using Tailwind CSS.
- Added custom pink neon glow effect on votes using:

## Day 4

- Loads initial vote counts from a MockAPI backend.
- Merges API votes with any existing localStorage votes.
- Saves updated votes again into localStorage.

## Day 5

- Allows upvote and downvote actions from anywhere in the app.
    If the user has voted earlier → load previous votes.
    If first-time user → start with empty votes {}.

## Day 6

- Creating responsive Navbar using TailwindCSS.
- Hamburger menu implimented for mobile view.
    -Added navigation links: Home, About, Contact.

## Day 7

- Impliment One-time vote restriction for each idea.
    - After Upvote or Downvote button get disabled.
    - Used alert() to show a message.
        ("You can only vote once!")
- Prevents users from multiple upvotes/downvotes on the same idea.