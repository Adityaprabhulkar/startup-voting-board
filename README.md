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

## Day 2 -- Vote System Foundation (Local State)

- Add Upvote and Downvote functionality using `sueState`.
- Pass props from `IdeaCard` => `VoteButtons`.
- Each idea card should have its own independent vote counter.

## Day 3 -- Context API + Responsive UI + Effects

- Implemented Upvote / Downvote system with real-time UI updates.
- Created dummy startup ideas data.
- Centralized vote storage using Context API.
- Fully responsive layout using Tailwind CSS.
- Added custom pink neon glow effect on votes using:

## Day 4 -- API + LocalStorage Sync

- Loads initial vote counts from a MockAPI backend.
- Merges API votes with any existing localStorage votes.
- Saves updated votes again into localStorage.

## Day 5 -- UI Polish + Reusable Components

- Moved votes from dummy data to real MockAPI backend.
-  Synced votes from API on every refresh.
- Ensured localStorage + API votings merge properly.
- Added error handling and improved loading state.
- Updated UI to reflect live server votes.

## Day 6 -- Build Optimization + Error Fixes

- Creating responsive Navbar using TailwindCSS.
- Hamburger menu implimented for mobile view.
    -Added navigation links: Home, About, Contact.
- Impliment One-time vote restriction for each idea.
    - After Upvote or Downvote button get disabled.
    - Used alert() to show a message.
        ("You can only vote once!")
- Prevents users from multiple upvotes/downvotes on the same idea.

## Day 7 -- GitHub Deploy + Netlify Production Setup

- Pushed complete project to GitHub using git push origin main.
- Linked GitHub repo to Netlify for CI/CD auto-deploy.
- Resolved Netlify Node version mismatch by adding correct .nvmrc (Node 20).
- Final build deployed successfully on Netlify Production URL.
- Verified UI, API fetch, and vote persistence in live production.
- Marked first stable production release as Published. add


- finally done