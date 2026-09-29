# 🇮🇳 BharatQuest — Guardians of Time

> **An interactive 3D learning experience that turns Indian history into an adventure.**

BharatQuest is a browser-based educational game designed for students aged 9–15. Players
travel through important eras of Indian history, explore interactive environments, meet
historical guides, solve puzzles, answer knowledge checks, and unlock the next chapter.

This repository contains the working prototype prepared for presentation at the **Smart
India Hackathon (SIH)**.

## 🎯 Problem

History is often taught as a chapter to memorise rather than a story to experience.
Students can lose interest when learning is limited to static text, while educators need
engaging ways to connect facts, context, and curiosity.

## 💡 Solution

BharatQuest transforms history learning into a guided game loop:

1. Explore a historically inspired 3D environment.
2. Discover clues, artefacts, and landmarks.
3. Talk to the in-game guide, Kalam.
4. Complete a quiz to reinforce learning.
5. Solve an era-specific puzzle.
6. Earn a Time Seal and unlock the next era.

The result is a self-paced, low-barrier learning experience that combines storytelling,
discovery, assessment, and feedback in one browser application.

## ✨ Key Features

- **Interactive 3D worlds** inspired by major periods of Indian history
- **Quest-based learning** instead of passive reading
- **Kalam 🤖**, an in-game history guide with offline answers and a RAG-ready interface
- **Knowledge checks** with supportive retry feedback
- **Hands-on puzzles** connected to each historical setting
- **Artefact collection and a History Museum** for revision
- **Achievements, stars, Time Seals, and progression tracking**
- **Demo Mode** for a fast, presentation-friendly walkthrough
- **Local account flow** for the prototype login and registration experience
- **Responsive controls** for keyboard, mouse, and touch devices
- **Offline-friendly history knowledge base** when deployed as a static site

## 🗺️ Learning Chapters

| Chapter | Historical theme | Learning activity |
|---|---|---|
| 1. The Lost City | Indus Valley civilisation | Drainage-pipe puzzle |
| 2. The Scholar's Challenge | Nalanda and ancient learning | Library shelving puzzle |
| 3. Rise of the Cholas | Chola architecture and engineering | Vimana stacking puzzle |
| 4. The Fort of Secrets | Forts, inscriptions, and strategy | Four-trials challenge |
| 5. The Road to Freedom | India's freedom movement | Newspaper front-page puzzle |
| 6. Final History Chamber | Review across all chapters | Mixed final quiz |

## 🧑‍⚖️ Suggested SIH Demo Flow

The prototype can be demonstrated in approximately 2–3 minutes:

1. Open the application and register a demo explorer account.
2. Select **🎬 Demo Mode** from the main menu.
3. Move to a golden artefact and press **E** to collect it.
4. Speak with the City Elder to receive a historical clue.
5. Complete the remaining collection objectives.
6. Attempt the History Gate quiz.
7. Solve the drainage puzzle and collect the first Time Seal.
8. Open Kalam and ask: **“Why is Nalanda important?”**
9. Show the History Museum and Achievements screens.

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript ES modules
- **3D engine:** Three.js
- **Backend:** Node.js HTTP server
- **Persistence:** Browser `localStorage` for prototype progression and account data
- **Deployment:** GitHub Actions and GitHub Pages
- **Build approach:** Zero build step; no framework or bundler required

## ▶ Run Locally

### Requirements

- Node.js 18 or newer
- A modern Chromium, Edge, or Firefox browser

### Start the application

```bash
npm install
npm start
```

Open **http://localhost:8080**.

The Node server provides:

- `GET /api/health` — service health check
- `POST /api/history` — optional backend route for Kalam's history responses

Run the project checks with:

```bash
npm test
```

## 🌐 GitHub Pages Deployment

The static frontend is deployed through the workflow in
[`/.github/workflows/pages.yml`](.github/workflows/pages.yml).

To enable deployment:

1. Open **Settings → Pages** in the GitHub repository.
2. Select **GitHub Actions** as the source.
3. Push to `main`, or run the deployment workflow manually.

The project repository is:

**https://github.com/sahildhillon803/bharat_quest**

GitHub Pages does not run the Node backend. In that environment, Kalam uses the bundled
offline knowledge base. Run `npm start` when the `/api/history` route is needed.

## 🎮 Controls

| Input | Action |
|---|---|
| WASD / Arrow keys | Move |
| Shift | Run |
| Mouse drag | Orbit the camera |
| Mouse wheel | Zoom |
| Space | Jump |
| E | Interact, talk, or collect |
| I | Open inventory |
| Esc | Pause |
| Touch controls | On-screen movement and action buttons |

## 🧱 Project Structure

```text
index.html          Authentication, screens, HUD, and game layout
css/style.css       Responsive visual theme
js/main.js          Application boot and fatal-error handling
js/game.js          Game orchestration, quests, HUD, portals, and progression
js/world.js         Procedural 3D environments for each era
js/player.js        Player movement and camera-relative controls
js/data.js          Levels, NPCs, quizzes, artefacts, and achievements
js/quiz.js          Quiz interface and scoring
js/puzzles.js       Era-specific puzzle interfaces
js/save.js          Local progression persistence
js/audio.js         Synthesised music and sound effects
js/kalam.js         History guide and offline knowledge base
js/ui.js            Screen, toast, achievement, and visual-effect helpers
server.js           Local Node server and optional history API
```

## 🔭 Future Scope

- Teacher and administrator dashboards
- Classroom groups and progress analytics
- Regional-language narration and subtitles
- Accessibility improvements, including screen-reader-first quest support
- Verified curriculum-aligned content reviewed by history educators
- Secure multi-user accounts and cloud synchronisation
- Expanded eras, maps, and collaborative challenges

## 📄 Prototype Note

BharatQuest is an educational prototype. Its local login, registration, and progression
storage are intended for demonstration only and are not a production authentication
system. The project is designed to demonstrate the learning experience and the
technical direction for a scalable classroom platform.
