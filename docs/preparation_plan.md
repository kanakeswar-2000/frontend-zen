# Frontend Developer Preparation Plan

> Your 14-week roadmap from fundamentals to frontend mastery. Follow it like a training program — show up every day, do the reps, trust the process. Foundations first, frameworks second.

---

## 0. Bonus Assignments — From a Friend Who Made It

Your friend — now a Frontend Engineer — went through his own learning journey and left behind two repos full of assignments. These are gold. They cover the HTML, CSS, JavaScript, and responsive design foundations that this plan builds on top of. Instead of finding random exercises online, you'll use *these* — battle-tested assignments that helped a real person land a real frontend job.

The plan below weaves these assignments into the schedule wherever they're relevant. They're marked with a **🔹 Friend's Assignment** tag so you can spot them easily.

### Assignment Inventory

**CSS & Layout Foundations** (`JS-and-React-Utility-apps/`)

| Assignment | What You'll Build | Skills | Folder |
|------------|-------------------|--------|--------|
| CSS-Bootstrap 1–9 | Gradients, shapes, clip-path, Bootstrap grid | CSS fundamentals, Bootstrap | `Css-Bootstrap/` |
| Flexbox 1 | Four-column logo row | Basic flexbox | `assignments/flexbox-1/` |
| Flexbox 2 | Twitter-style card (avatar, text, icons) | Flex alignment, spacing | `assignments/flexbox-2/` |
| Flexbox 3 | Product row layout | Flex, product cards | `assignments/flexbox-3/` |
| Flexbox 4 | Layout from mockup | Matching a design spec | `assignments/flexbox-4/` |
| Flexbox 5 | Responsive layout (4 breakpoints) | Responsive flex | `assignments/flexbox-5/` |
| Flexbox 6 | Holy-grail page layout | Full page flex layout | `assignments/flexbox-6/` |
| CSS Grid 2–3 | Grid template columns, spanning, areas | CSS Grid | `Css Grid/` |
| CSS Animations | Transforms, transitions, keyframes | CSS animations | `CSS Animations/` |

**Responsive Design** (`JS-and-React-Utility-apps/`)

| Assignment | What You'll Build | Skills | Folder |
|------------|-------------------|--------|--------|
| Assignment 11 | Bootstrap grid with responsive ordering | Grid reordering across breakpoints | `assignment-11/` |
| Assignment 12 | Gmail-style marketing/landing page | Bootstrap layout, responsive images | `assignment-12/` |
| Assignment 13 | GitHub trending page (dark UI) | Complex Bootstrap + custom CSS | `assignment-13/` |
| Assignment 14 | Content blocks that hide/show on mobile | Media queries, display toggling | `assignment-14/` |
| Assignment 15 | Two-column to single-column responsive | Responsive stacking | `assignment-15/` |
| Assignment 16 | Section swap across breakpoints | Responsive visibility patterns | `assignment-16/` |
| Assignment 17 | Typography scales across breakpoints | Fine-grained media queries | `assignment-17/` |
| Assignment 18 | Paragraph styling across breakpoints | Multi-breakpoint styling | `assignment-18/` |
| Assignment 19 | Phone dialer UI with tabs | Tabs, flex, mobile UI clone | `assignment-19/` |
| Assignment 20 | Weather dashboard (static mockup) | CSS layout, SVG assets, UI cloning | `assignment-20/` |

**JavaScript Foundations** (`JS-and-React-Utility-apps/js-assignments/`)

| Assignment | What You'll Build | Skills | Folder |
|------------|-------------------|--------|--------|
| Assignment-1 (31 exercises) | Variables, functions, operators, alert/prompt | Core JS basics | `js-assignments/Assignment-1/` |
| assignment-2 (31 exercises) | Continued drills, practice set 2 | Core JS basics | `js-assignments/assignment-2/` |
| assignment-5 (38 exercises) | Extended drills + practice questions | JS problem solving | `js-assignments/assignment-5/` |
| assignment-7 | Array/string problems (filter, sort, search) | Functional programming basics | `js-assignments/assignment-7/` |
| Bulb toggle | Image swap on/off | DOM basics | `js-assignments/assignment-3/` |
| Calculator | Expression builder with eval, AC, error handling | String building, DOM events | `js-assignments/a4-calculator/` |
| Sign-up form | Regex validation, password matching, gradients | Forms, validation, regex | `js-assignments/sigh-up-form/` |
| RGB color app | Color panels with reorder, resize, flip | Flexbox manipulation, DOM traversal | `js-assignments/rgb-app/` |
| Todo list | Add, complete, delete, filter, localStorage | DOM CRUD, persistence | `js-assignments/todo-list/` |
| Water count tracker | Daily water intake, weekday tabs, localStorage | State management, DOM | `js-assignments/water-count/` |

**React Foundations** (`JS-and-React-Utility-apps/react/` and `reactjs-projects/`)

| Assignment | What You'll Build | Skills | Location |
|------------|-------------------|--------|----------|
| React UMD exercises | Components rendered into multiple roots | JSX, functional/class components | `react/assignment-1/` |
| Cars fleet / clock | Live clocks with start/stop/remove | Lifecycle, intervals, lists/keys | `react/assignment-2/` |
| Temperature converter | Celsius/Fahrenheit lifting state | State lifting pattern | `react/Practice/temperatures-lifting-up-state/` |
| COVID-19 Dashboard | Country cards, filtering, detail view, theming | Routing, API, state, composition | `react/myapp/` |
| Countries dashboard | Region filter, search, HOC-based data fetching | HOC pattern, API integration | `reactjs-projects/` |
| Emoji memory game | Click-tracking game with shuffle & win | Game logic, state management | `reactjs-projects/` |
| E-commerce store | Products, cart, auth, protected routes | Full app patterns, MobX | `reactjs-projects/` |
| Multiple todo versions | Local → API → MobX → MobX v2 | State management progression | `reactjs-projects/` |
| Form exercises | Greetings, dessert, cities, state selector | Controlled components, forms | `reactjs-projects/` |
| HOCs & render props | withCountries, mouse coordinates, etc. | Advanced React patterns | `reactjs-projects/` |

### Where Each Assignment Fits in the Plan

| Plan Day(s) | Friend's Assignments to Complete |
|-------------|----------------------------------|
| Day 1 | Flexbox 1–3 (warm up your CSS muscles before React) |
| Day 2 | JS todo list (`js-assignments/todo-list`) — build in vanilla JS, then rebuild in React |
| Day 3 | JS Assignment-1 drills (cherry-pick 10 exercises as warm-up) |
| Day 5 | Calculator, water-count tracker (debugging + DOM practice) |
| Day 6 | Sign-up form (forms + validation in vanilla JS) |
| Day 8–9 | Responsive assignments 14–16 (media queries before Router layouts) |
| Day 12 | RGB color app (DOM manipulation speed drill) |
| Day 15 | JS assignment-5 drills (10 exercises as TypeScript conversion practice) |
| Day 22 | Assignment 20 — weather dashboard mockup (rebuild as functional React app) |
| Day 43–44 | Assignment 19 — phone dialer UI (rebuild with Shadcn components) |
| Day 46 | Responsive assignments 11–13, 17–18 (reference for Tailwind responsive) |
| Week 5 | Study the e-commerce store in `reactjs-projects` for state patterns |
| Week 6 | Study HOCs and render props in `reactjs-projects`, then convert to hooks |

---

## 1. Executive Summary

- **Total Duration:** 14 weeks (84 working days + 14 rest days)
  - **Week 0:** HTML & CSS Foundations
  - **Week 1:** JavaScript Fundamentals & DOM Manipulation
  - **Weeks 2-13:** React, TypeScript, and Modern Frontend Development
- **Expected Outcome:** A confident, fast-executing React developer who can build a standard CRUD app in under 30 minutes, comfortably work with TypeScript, navigate any UI library's docs, and perform well in live coding interviews. You'll have 2 portfolio-worthy projects and a proven track record of speed drills to back your confidence with evidence. Most importantly, you'll have a rock-solid foundation in HTML, CSS, and vanilla JavaScript — the skills that separate developers who truly understand the web from those who only know frameworks.
- **Key Philosophy:** *Progressive overload.* Just like in the gym, you start with weights you can handle and add more each week. Speed comes from repetition, not from reading. Confidence comes from stacking small wins, not from one big breakthrough. Every single day has a build task — because you learn by *building*, not by watching someone else do it.

**The 3 Pillars of This Plan:**

1. **Repetition breeds speed** — You'll build the same patterns (fetch data → display list → show detail) so many times that it becomes muscle memory.
2. **Progressive difficulty** — Each week adds one new layer of complexity. You never feel overwhelmed because you're always building on what you already know.
3. **Evidence-based confidence** — You'll time yourself every day. Watching your times drop from 90 minutes to 25 minutes is the most powerful confidence builder there is.

---

## 2. Weekly Overview Table

| Week | Theme | Key Skills | Project / Focus | Milestone |
|------|-------|-----------|----------------|-----------|
| 0 | HTML & CSS Foundations | Flexbox, CSS Grid, responsive design, animations | Friend's CSS & Layout Assignments | Build pixel-perfect layouts from mockups |
| 1 | JavaScript Fundamentals | DOM manipulation, events, validation, localStorage | Friend's JS Assignments: Calculator, Forms, Todo | Build complex vanilla JS apps without libraries |
| 2 | React Foundations & Speed Baseline | Component thinking, props, useState, useEffect, fetching data | PokeAPI Grid + Detail (rebuild from vanilla JS) | Complete PokeAPI challenge in under 45 min |
| 3 | React Router v6/v7 & Debugging | Dynamic routes, nested layouts, loaders, DevTools | Multi-page Movie Browser (TMDB API) | Navigate Router v7 docs and implement nested routes without getting stuck |
| 4 | TypeScript Fundamentals | TS basics, typing props, interfaces, generics basics | Convert Week 3 project to TypeScript | Comfortably type a React component with props, state, and API responses |
| 5 | TypeScript + React Patterns | Custom hooks, typed context, utility types | Weather Dashboard (OpenWeatherMap API) | Build a new typed React app from scratch in under 1 hour |
| 6 | State Management Deep Dive | useReducer, Context API, Zustand | E-commerce Product Catalog (FakeStore API) | Manage cart state with Zustand, implement add/remove/quantity |
| 7 | Advanced Hooks & Patterns | useMemo, useCallback, custom hooks, composition | Recipe Finder with Favorites (TheMealDB API) | Extract 3+ reusable custom hooks from your project |
| 8 | UI Libraries & Design Systems | Shadcn/ui, Radix primitives, theming | Job Board Dashboard (Remotive API) | Build a polished, accessible UI using Shadcn components |
| 9 | Real-World Patterns | Form handling (React Hook Form), optimistic updates, infinite scroll | **Portfolio Project 1:** GitHub Repository Explorer | Ship a polished, portfolio-ready project |
| 10 | Testing Fundamentals | Vitest, React Testing Library, testing patterns | Add tests to Portfolio Project 1 | Write unit + integration tests covering core user flows |
| 11 | Performance & Advanced Patterns | React.lazy, Suspense, code splitting, React Query/TanStack Query | **Portfolio Project 2:** Real-time Crypto Dashboard | Implement data caching, background refetch, optimistic updates |
| 12 | Portfolio Polish & Mock Interviews | Deployment, README writing, presentation skills | Polish both portfolio projects, deploy to Vercel | Both projects live with professional READMEs |
| 13 | Interview Sprint | Live coding, system design (frontend), behavioral | Daily mock interviews + rapid-fire builds | Complete a live coding challenge in 30 min consistently |

---

## 3. Detailed Day-by-Day Plan

---

### WEEK 0 — HTML & CSS Foundations

**Goal:** Master the building blocks of the web. Before touching React, you need to be fluent in HTML structure and CSS layout. React only handles the logic and state — you still need to know how to build and style interfaces. This week is about muscle memory: see a design, translate it to flex/grid, make it responsive.

**Productive hours target:** 4-5 hours/day (3-4 Pomodoros)

---

#### Day 1 (Week 0) — Setup & Flexbox Fundamentals

**Morning Block (2 hours) — Theory & Environment Setup**
- Install VS Code, set up Live Server extension
- **Resources:**
  - Read: [MDN - Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML) (30 min)
  - Read: [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) (30 min) — bookmark this, you'll reference it daily
  - Watch: [Flexbox Crash Course by Traversy Media](https://www.youtube.com/watch?v=3YW65K6LcIA) (20 min)
- Practice: Open CodePen, create 5 quick flex layouts (row with 3 items, centered box, space-between nav, card with image + text, footer with 3 columns)

**Afternoon Block (2.5 hours) — Building**
- **🔹 Friend's Assignments:**
  - **Flexbox 1** (`css/flexbox/flexbox-1/`): Four-column logo row layout. Target: 20 min
  - **Flexbox 2** (`css/flexbox/flexbox-2/`): Twitter-style card with avatar, username, tweet text, action icons (like, retweet, reply). Target: 25 min
  - **Flexbox 3** (if exists in your repo): Product card row. Target: 20 min
- Build from scratch: A navigation bar (logo left, menu items right, center vertically) — 15 min
- Build from scratch: A hero section (centered text + button, background image) — 20 min

**End-of-Day Reflection**
- "Which flex property confused me the most? Which alignment scenario took the longest?"

---

#### Day 2 (Week 0) — Advanced Flexbox & Layout Patterns

**Morning Block (1.5 hours) — Theory**
- **Resources:**
  - Read: [MDN - Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) (30 min)
  - Watch: [Kevin Powell - Flexbox design patterns](https://www.youtube.com/watch?v=vQAvjof1oe4) (20 min)
  - Practice: Build a card grid (3 columns, auto-wrap) in CodePen — 15 min

**Afternoon Block (3 hours) — Building**
- **🔹 Friend's Assignments:**
  - **Flexbox 4** (if exists): Match the layout from mockup/screenshot. Target: 30 min
  - **Flexbox 5** (if exists): Responsive layout with 4 breakpoints (mobile, tablet, desktop, wide). Target: 40 min
  - **Flexbox 6** (`css/flexbox/flexbox-6/`): Holy-grail layout (header, nav sidebar, main content, aside, footer). Read `flexbox.html` for structure, implement in `flexbox.css`. Target: 40 min

**Speed Drill (30 min)**
- Build a pricing card (3 columns, center one highlighted, button at bottom of each). Target: 15 min

**End-of-Day Reflection**
- "How comfortable am I with flex-direction, justify-content, align-items? Can I build a layout from memory?"

---

#### Day 3 (Week 0) — CSS Grid Fundamentals

**Morning Block (2 hours) — Theory**
- **Resources:**
  - Read: [CSS-Tricks - A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) (40 min) — bookmark this
  - Watch: [Wes Bos - CSS Grid in 20 Minutes](https://www.youtube.com/watch?v=0-DY8J_skZ0) (20 min)
  - Interactive: [CSS Grid Garden](https://cssgridgarden.com/) — complete all 28 levels (30 min)

**Afternoon Block (2.5 hours) — Building**
- **🔹 Friend's Assignments:**
  - **CSS Grid 2-3** (from `Css Grid/` folder): Practice `grid-template-columns`, `grid-area`, spanning cells, named grid areas. Target: 45 min
- Build from scratch: Photo gallery (4 columns on desktop, 2 on tablet, 1 on mobile) using Grid — 30 min
- Build from scratch: Dashboard layout (sidebar, header, main content area, footer) using Grid — 40 min

**Speed Drill (30 min)**
- Recreate a Pinterest-style masonry grid layout using `grid-auto-flow: dense`. Target: 20 min

**End-of-Day Reflection**
- "When should I use Grid vs Flexbox? Which one felt more natural?"

---

#### Day 4 (Week 0) — Responsive Design & Media Queries

**Morning Block (2 hours) — Theory**
- **Resources:**
  - Read: [MDN - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) (30 min)
  - Read: [A List Apart - Responsive Web Design](https://alistapart.com/article/responsive-web-design/) (20 min)
  - Watch: [Kevin Powell - 5 simple tips to making responsive layouts](https://www.youtube.com/watch?v=VQraviuwbzU) (15 min)
- Practice: Open your Day 2 layouts, add media queries to make them mobile-friendly — 30 min

**Afternoon Block (2.5 hours) — Building**
- **🔹 Friend's Assignments (from `responsive_design/` folder):**
  - **Assignment 11** (if exists): Bootstrap grid with responsive column reordering across breakpoints. Target: 35 min
  - **Assignment 12** (if exists): Gmail-style marketing page with responsive images and sections. Target: 40 min
- Build from scratch: Single-page portfolio (hero, about, projects grid, contact) — make it fully responsive. Target: 50 min

**Speed Drill (30 min)**
- Build a responsive navigation (hamburger menu on mobile, horizontal on desktop). Target: 20 min

**End-of-Day Reflection**
- "What breakpoints did I use? Did I design mobile-first or desktop-first?"

---

#### Day 5 (Week 0) — Advanced Responsive Patterns & Bootstrap

**Morning Block (1.5 hours) — Theory**
- **Resources:**
  - Skim: [Bootstrap 5 Documentation - Grid System](https://getbootstrap.com/docs/5.3/layout/grid/) (20 min)
  - Skim: [Bootstrap 5 - Breakpoints](https://getbootstrap.com/docs/5.3/layout/breakpoints/) (15 min)
  - Watch: [Bootstrap 5 Crash Course](https://www.youtube.com/watch?v=4sosXZsdy-s) (30 min) — watch at 1.5x speed

**Afternoon Block (3 hours) — Building**
- **🔹 Friend's Assignments:**
  - **Assignment 13** (if exists): GitHub trending page dark UI clone with Bootstrap + custom CSS. Target: 50 min
  - **Assignment 14-16** (if exist): Content blocks with responsive visibility toggling (show/hide sections on mobile vs desktop). Target: 20 min each = 60 min
- Build from scratch: Landing page with Bootstrap components (navbar, cards, carousel, footer). Target: 40 min

**Speed Drill (30 min)**
- Build a responsive email template layout (header, hero, 3-column features, footer). Target: 20 min

**End-of-Day Reflection**
- "Am I faster with utility classes (Bootstrap) or writing custom CSS?"

---

#### Day 6 (Week 0) — CSS Animations & Complex Layouts

**Morning Block (1.5 hours) — Theory**
- **Resources:**
  - Read: [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) (25 min)
  - Read: [MDN - CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) (20 min)
  - Interactive: [CSS Animations examples on CodePen](https://codepen.io/topic/animation/picks) — study 5 examples (20 min)

**Afternoon Block (3 hours) — Building**
- **🔹 Friend's Assignments:**
  - **CSS Animations exercises** (from `CSS Animations/` folder): Hover effects, transforms, keyframe animations. Target: 40 min
  - **Assignment 17-18** (if exist): Typography scaling across breakpoints, fine-grained media query control. Target: 30 min
  - **Assignment 19** (`responsive_design/assignment-19/` if exists): Phone dialer UI with tabs. Target: 60 min
  - **Assignment 20** (`responsive_design/assignment-20/` if exists): Weather dashboard static mockup with SVG assets. Target: 50 min

**Speed Drill (30 min)**
- Build a modal popup with fade-in animation and backdrop blur. Target: 15 min

**End-of-Day Reflection**
- "Which animation property did I use most? Am I comfortable with keyframes?"

---

#### Day 7 (Week 0) — REST DAY

Take the day off or do a light review. Re-read the CSS-Tricks Flexbox/Grid guides. Look through your assignments — can you rebuild any from memory?

---

### WEEK 1 — JavaScript Fundamentals & DOM Manipulation

**Goal:** Build the JavaScript skills you'll use every day in React. You'll build real, complex UIs with raw JavaScript: forms with validation, interactive trackers, calculators, todo lists.

**Productive hours target:** 5 hours/day (4 Pomodoros)

---

#### Day 1 (Week 1) — JavaScript Syntax & Fundamentals

**Morning Block (2 hours) — Theory**
- **Resources:**
  - Read: [MDN - JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps) (skim, 30 min)
  - Watch: [JavaScript Crash Course by Traversy Media](https://www.youtube.com/watch?v=hdI2bqOjy3c) (watch first 60 min at 1.5x speed)
  - Practice: Open browser console, practice variables, functions, arrays, objects, loops

**Afternoon Block (3 hours) — Drilling**
- **🔹 Friend's Assignments:**
  - **Assignment-1** (`js-assignments/Assignment-1/practice-set1.html`): Complete exercises 1-15 (variables, operators, functions, alerts, prompts). Target: 60 min (4 min per exercise)
  - **assignment-2** (`js-assignments/assignment-2/practice-set2.html`): Complete exercises 1-15. Target: 60 min
  - **assignment-5** (`js-assignments/assignment-5/`): Cherry-pick exercises 1-10 from the 38 available. Target: 40 min
- These are pure JavaScript drills. No DOM, just logic. If you can't solve one in 5 minutes, skip it and come back later.

**Speed Drill (30 min)**
- Write 5 utility functions from scratch: `reverse(str)`, `isPalindrome(str)`, `findMax(arr)`, `factorial(n)`, `removeDuplicates(arr)`. Target: 20 min

**End-of-Day Reflection**
- "Which JS concept felt weakest? Arrays? Objects? Functions? Loops?"

---

#### Day 2 (Week 1) — DOM Manipulation Basics

**Morning Block (1.5 hours) — Theory**
- **Resources:**
  - Read: [MDN - Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) (30 min)
  - Read: [JavaScript.info - DOM Navigation](https://javascript.info/dom-navigation) (20 min)
  - Watch: [Traversy Media - JavaScript DOM Crash Course](https://www.youtube.com/watch?v=0ik6X4DJKCc) (watch first 30 min)

**Afternoon Block (3.5 hours) — Building**
- **🔹 Friend's Assignment:**
  - **Bulb Toggle** (`js-assignments/assignment-3/` or similar): Toggle an image on/off using `addEventListener` and `src` swap. Target: 20 min
- Build from scratch:
  - Color changer: 3 buttons (red, blue, green) change background color — 15 min
  - List builder: Input field + button, adds items to a `<ul>` — 20 min
  - Show/hide toggle: Button that shows/hides a paragraph — 10 min
- **🔹 More drills from assignment-5:** Complete exercises 11-20. Target: 40 min

**Speed Drill (30 min)**
- Build a character counter: `<textarea>` displays live character count and remaining (max 280). Target: 12 min

**End-of-Day Reflection**
- "How comfortable am I with `querySelector`, `addEventListener`, `createElement`?"

---

#### Day 3 (Week 1) — Forms, Validation & Events

**Morning Block (1.5 hours) — Theory**
- **Resources:**
  - Read: [MDN - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) (30 min)
  - Read: [JavaScript.info - Forms, controls](https://javascript.info/forms-controls) (25 min)
  - Watch: [Form Validation Tutorial](https://www.youtube.com/watch?v=rsd4FNGTRBw) (20 min)

**Afternoon Block (3.5 hours) — Building**
- **🔹 Friend's Assignment:**
  - **Sign-up Form** (`js-assignments/sigh-up-form/`): Multi-field form with regex validation (name, mobile, email, password + confirm, DOB min year 2002, branch select, gender radio, terms checkbox), two color pickers for gradient background, typing speed slider. Validate on blur and submit. Read `instructions.txt`, refer to `sign-up-form.png`. Target: 90 min
  - This is a BEAST. It tests everything: regex, events, form controls, styling with gradients, date validation. Your friend spent 2+ hours on this. Take your time.

**Speed Drill (30 min)**
- Build a simple login form (email + password, validate non-empty on submit, show error messages inline). Target: 15 min

**End-of-Day Reflection**
- "How painful was manual form validation? What would I want abstracted away?"

---

#### Day 4 (Week 1) — Advanced DOM: Calculator & Expression Building

**Morning Block (1 hour) — Theory**
- **Resources:**
  - Read: [MDN - String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (20 min) — you'll use these extensively
  - Review: `try/catch` for error handling (15 min)

**Afternoon Block (4 hours) — Building**
- **🔹 Friend's Assignment:**
  - **Calculator** (`js-assignments/assignment-13/` or `a4-calculator/`): Build an expression-building calculator. Display shows the full expression string (`"5 + 3 * 2"`), equals button evaluates with `eval()` wrapped in `try/catch`, AC button clears, error handling for invalid expressions. Refer to `calculator.png` and `instructions.txt`. Target: 90 min
  - **assignment-7** (`js-assignments/assignment-7/`): Array and string problems (filter, sort, search, functional programming patterns). Target: 60 min

**Speed Drill (30 min)**
- Build a tip calculator: bill input, tip % selector (10%, 15%, 20%), shows tip amount and total. Target: 15 min

**End-of-Day Reflection**
- "How did string building feel vs state management? What's hard about manual DOM updates?"

---

#### Day 5 (Week 1) — State Management in Vanilla JS: Todo List

**Morning Block (1 hour) — Theory**
- **Resources:**
  - Read: [JavaScript.info - LocalStorage](https://javascript.info/localstorage) (20 min)
  - Study: Review array methods (`map`, `filter`, `find`, `reduce`) — 20 min

**Afternoon Block (4 hours) — Building**
- **🔹 Friend's Assignment:**
  - **Todo List** (`js-assignments/todo-list/`): Full-featured todo app with add (Enter key + button), complete (checkbox, strikethrough), delete (with confirmation), edit, filter tabs (All/Active/Completed with counts), "Clear Completed" button, localStorage persistence. Read `instructions.txt`, watch `todo-list.mov` if available. Target: 120 min
  - This is the most important assignment of the week. It's a mini state-management system in vanilla JS. You'll rebuild this in React tomorrow and see the difference.
- Remaining time: Polish your todo app, add transitions, improve UX.

**Speed Drill (30 min)**
- Build a shopping list: add items, delete items, mark as purchased (strikethrough). No localStorage. Target: 15 min

**End-of-Day Reflection**
- "How many lines of code did my todo app take? How much was DOM manipulation vs logic? What felt repetitive?"

---

#### Day 6 (Week 1) — Interactive UI State: RGB App & Water Tracker

**Morning Block (30 min) — Theory Refresh**
- Review Flexbox order property, DOM traversal (parent/sibling navigation)

**Afternoon Block (4.5 hours) — Building**
- **🔹 Friend's Assignments:**
  - **RGB Color App** (`js-assignments/rgb-app/`): Two colored panels with R/G/B buttons (hover effects, change background on click), up/down arrows to adjust height of left panel (+/- 10px per click), left/right arrows to swap the two panels, vertical swap arrows for right panel's internal layout. Read `instructions.txt`. Target: 90 min
  - **Water Count Tracker** (`js-assignments/water-count/`): 8 glasses (click to fill/empty), main container shows percentage and litres remaining (12.5% per glass), weekday tabs with separate counts per day, localStorage persistence across page reloads. Read `instructions.txt`, watch `water-count.mov`. Target: 90 min
  - Note: The `water-count.js` file in your repo has unresolved git merge conflicts (`<<<<<<<`, `=======`, `>>>>>>>`). Build from the instructions, not from the code.

**Speed Drill (30 min)**
- Build a simple counter with +/-, localStorage to persist count across reloads. Target: 10 min

**End-of-Day Reflection**
- "How much code did I write just to update the DOM? What patterns did I repeat 5+ times?"

---

#### Day 7 (Week 1) — REST DAY

Take the day off. You've earned it. Optionally: Skim through the React docs homepage ([https://react.dev](https://react.dev)) to get excited about what's coming. Don't code. Rest.

---

### WEEK 2 — React Foundations & Speed Baseline

**Goal:** Now that you've felt the pain of vanilla DOM manipulation, experience the relief of React. This week is about speed and repetition — you'll rebuild the same patterns until they're automatic. By the end of Week 2, you should be significantly faster than you were with vanilla JS.

**Productive hours target:** 5 hours/day (4 Pomodoros of 50 min work / 10 min break + 1 final Pomodoro)

---

#### Day 1 (Week 2) — React Setup & Component Thinking

**Morning Block (2 hours) — Theory & Setup**
- **Resources:**
  - Read: [React Official Docs - Quick Start](https://react.dev/learn) (30 min)
  - Read: [React docs — Thinking in React](https://react.dev/learn/thinking-in-react) (30 min)
  - Read: [React docs — Your First Component](https://react.dev/learn/your-first-component) (20 min)
  - Watch: [React in 100 Seconds by Fireship](https://www.youtube.com/watch?v=Tn6-PIqc4UM) (2 min)
- Set up your dev environment: Node.js, VS Code, create first Vite React project
  - `npm create vite@latest my-react-app -- --template react`
  - Install ESLint, Prettier
  - Install VS Code extensions: ES7+ React snippets, Tailwind CSS IntelliSense, Error Lens
- Exercise: Take your Week 1 todo app. Draw boxes around what would become React components. Label them: `<TodoApp>`, `<TodoList>`, `<TodoItem>`, `<AddTodoForm>`, `<FilterBar>`. Spend 20 min.

**Afternoon Block (3 hours) — Building**
- Build in React (compare to Week 0 CSS versions):
  - Static profile card component (name, avatar, bio, stats) — target: 15 min (compare: no manual DOM building!)
  - Reusable Button component with props for variants (primary, secondary, outline) — target: 12 min
  - Navbar + Footer layout using components — target: 15 min
- **🔹 Friend's Assignment:**
  - **React Assignment 1** (`react/assignment-1/`): Build `Strikethrough`, `ImageViews` (StandardImageView, RoundedCornersImageView, CircularImageView with loading states), and `AlertMessage` components that render based on props. Read `instructions.txt`. Target: 60 min

**Speed Drill (30 min)**
- Timer on. Build a card grid (3x3) displaying 9 hardcoded items (image + title + description) using `.map()`. Target: 10 min. Compare to vanilla JS — how many lines saved?

**End-of-Day Reflection**
- "How many lines was my React card grid vs my vanilla JS version from Week 1? What disappeared? (createElement, appendChild, manual updates)"

---

#### Day 2 (Week 2) — Props, State & Event Handling

**Morning Block (2 hours) — Theory**
- **Resources:**
  - Read: [React docs — Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component) (25 min)
  - Read: [React docs — State: A Component's Memory](https://react.dev/learn/state-a-components-memory) (25 min)
  - Read: [React docs — Responding to Events](https://react.dev/learn/responding-to-events) (25 min)
  - Watch: [Web Dev Simplified - useState in 9 minutes](https://www.youtube.com/watch?v=O6P86uwfdR0) (10 min)
- Quick practice drills:
  - Build a counter with increment, decrement, reset — target: 8 min
  - Build a toggle (show/hide) component — target: 7 min
  - Build a color picker (3 buttons, change background) — target: 8 min

**Afternoon Block (3 hours) — Building**
- **THE BIG COMPARISON:** You already built the Todo List in vanilla JS (Week 1 Day 5). Now rebuild it in React:
  - Features: add on Enter, complete checkbox (strikethrough), delete (with confirmation), filter tabs (All/Active/Completed), clear completed. **Skip localStorage for now** (we'll add it with useEffect tomorrow).
  - Target: 45 min
  - **After you finish:** Open your vanilla JS version side-by-side. Count the lines. Count the `document.querySelector` calls. Count the `createElement` calls. Write down the comparison. This is why React exists.
- Refactor your React todo app:
  - Extract `<TodoItem>`, `<TodoList>`, `<AddTodoForm>`, `<FilterBar>` as separate components
  - Pass props down, lift state up to `<TodoApp>`
  - Target: 40 min

**Speed Drill (30 min)**
- Timer on. Build a shopping list (add items, delete items, mark as purchased with strikethrough). Target: 12 min.

**End-of-Day Reflection**
- "Vanilla JS todo: ___ lines. React todo: ___ lines. Lines saved: ___. What took 10 lines in vanilla that took 1 line in React?"

---

#### Day 3 (Week 2) — useEffect & Data Fetching

**Morning Block (2 hours) — Theory**
- **Resources:**
  - Read: [React docs — Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects) (35 min)
  - Read: [React docs — You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) (25 min)
  - Watch: [Web Dev Simplified — Learn useEffect in 13 Minutes](https://www.youtube.com/watch?v=0ZJgIjIuY7U) (13 min)
  - Read: [JavaScript.info - Fetch API](https://javascript.info/fetch) (20 min)
- Practice: Fetch a random joke from `https://official-joke-api.appspot.com/random_joke` and display it. Add a "Next Joke" button. Target: 12 min.
- Add localStorage persistence to your todo app from yesterday using `useEffect`. Target: 15 min.

**Afternoon Block (3 hours) — Building**
- **IMPORTANT:** Before every API project this week, spend 5 min looking at the API response in browser/Postman. Map out which fields you need. This is the **API-to-UI planning** step you must internalize.
- Build a User Directory:
  - Fetch from `https://jsonplaceholder.typicode.com/users`
  - Display as cards (name, email, company)
  - Add search filter by name
  - Add loading spinner and error state
  - Target: 50 min
- Build a GitHub User Search:
  - Input username → fetch `https://api.github.com/users/{username}`
  - Display avatar, name, bio, repos, followers
  - Handle 404 (user not found), empty input, loading
  - Target: 40 min

**Speed Drill (30 min)**
- Timer on. Fetch data from `https://jsonplaceholder.typicode.com/posts`, display as cards (title + body truncated to 100 chars), include loading spinner. Target: 12 min.

**End-of-Day Reflection**
- "How long did I spend analyzing the API before coding? Did I draw out my component tree first?"

---

#### Day 4 (Week 2) — React Router Basics & The PokeAPI Challenge (Baseline)

**Morning Block (2 hours) — Router Theory & Prep**
- **Resources:**
  - Read: [React Router v7 - Getting Started](https://reactrouter.com/start/overview) (30 min)
  - Watch: [React Router v6 Tutorial by Web Dev Simplified](https://www.youtube.com/watch?v=Ul3y1LXxzdU) (25 min) — v6 and v7 are similar enough
  - Study: [PokeAPI Documentation](https://pokeapi.co/docs/v2) (20 min) — explore the API in your browser
- Sketch on paper (20 min):
  - What components: `<HomePage>`, `<PokemonCard>`, `<DetailPage>`
  - What routes: `/` and `/pokemon/:id`
  - What data: list endpoint, detail endpoint
  - What state: loading, error, pokemon data

**Afternoon Block (3 hours) — THE BASELINE CHALLENGE**
- **Start a timer. Record your time.**
- Build from scratch in a new Vite project:
  1. Install React Router: `npm install react-router-dom`
  2. **Home page** (`/`): Grid of 20 Pokémon cards (image + name) fetched from `https://pokeapi.co/api/v2/pokemon?limit=20`
  3. **Detail page** (`/pokemon/:id`): Show name, image, height, weight, types, abilities, stats
  4. Clicking a card navigates to detail page
  5. Add loading states, error handling
- **Record your final time.** This is your baseline. Don't judge — just record.
- Write down (be specific): "I got stuck when ___. I didn't know how to ___. I spent the most time on ___."

**Speed Drill (30 min)**
- Rebuild *just* the card grid (no routing, no detail page) from memory. Timer on. Target: 10 min.

**End-of-Day Reflection**
- "My baseline time: ___ min. Top 3 blockers: 1.___ 2.___ 3.___. Tomorrow I'll improve ___."

---

#### Day 5 (Week 2) — React Debugging & DevTools Mastery

**Morning Block (2 hours) — Debugging Theory**
- **Resources:**
  - Read: [Chrome DevTools - Console overview](https://developer.chrome.com/docs/devtools/console/) (20 min)
  - Read: [Chrome DevTools - Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/) (30 min)
  - Watch: [Fireship - Chrome DevTools in 100 seconds](https://www.youtube.com/watch?v=gTVpBbFWry8) (2 min)
  - Install [React Developer Tools](https://react.dev/learn/react-developer-tools) browser extension
  - Watch: [React DevTools Tutorial](https://www.youtube.com/watch?v=rb1GWqCJid4) (15 min)
- **Practice exercise (40 min):** Intentionally break your Todo app from Day 2 in 5 ways:
  1. Wrong `key` in `.map()` (use index, add duplicate keys)
  2. Undefined prop access (`todo.titl` instead of `todo.title`)
  3. Infinite useEffect loop (missing dependency array)
  4. Calling setState on unmounted component
  5. Wrong API URL (simulate network error)
  - Fix each using only DevTools + error messages + React DevTools

**Afternoon Block (3 hours) — Building**
- Build a **Countries Explorer**:
  - Fetch `https://restcountries.com/v3.1/all`
  - Display cards: flag, name, capital, population, region
  - Add filters: search by name, filter by region (dropdown)
  - Add sorting: by name, by population
  - Target: 60 min
- Build a **Random User Generator**:
  - Fetch `https://randomuser.me/api/?results=10`
  - Display user cards with avatar, name, email, location
  - "Load More" button fetches 10 more
  - Target: 40 min

**Speed Drill (30 min)**
- Timer on. Fetch and display a list of dog breeds from `https://dog.ceo/api/breeds/list/all`, show random image for each on click. Target: 15 min.

**End-of-Day Reflection**
- "What's my debugging workflow now? Do I check React DevTools first? How fast can I spot a missing dependency array?"

---

#### Day 6 (Week 2) — PokeAPI Challenge REBUILD + Speed Push

**Morning Block (1.5 hours) — Review & Strategic Planning**
- Review your Day 4 notes: What slowed you down? What errors did you hit?
- **Resources:**
  - Re-read: [React Router - useParams hook](https://reactrouter.com/hooks/use-params) (10 min)
  - Watch: [React Router Quick Refresher](https://www.youtube.com/watch?v=59IXY5IDrBA) (12 min)
- Write out a step-by-step build plan on paper (like a recipe):
  1. `npm create vite@latest pokemon-rebuild`, `cd`, `npm install`, `npm install react-router-dom`
  2. Set up Router in `main.jsx` with 2 routes: `/` and `/pokemon/:id`
  3. Build `<PokemonCard>` component (receives pokemon obj as prop)
  4. Build `<HomePage>`: fetch list, loading state, map to cards, `<Link>` wrapping
  5. Build `<DetailPage>`: extract `id` from `useParams`, fetch detail, display
  6. Style with Tailwind or plain CSS

**Afternoon Block (3 hours) — TIMED REBUILD**
- **Delete your Day 4 project. Start completely fresh.**
- **Timer on.** Build the PokeAPI challenge following your written plan.
- **Record your time.** Compare to Day 4. Celebrate any improvement — even 5 minutes is progress.
- **If you finish early:**
  - Add a search bar to filter Pokémon by name (client-side filtering)
  - Add pagination (Next/Previous buttons using the `offset` param)
  - Add a "Back to Home" button on the detail page
  - Add a loading skeleton instead of just "Loading..."

**Speed Drill (30 min)**
- Rebuild just the detail page from memory (hardcode `id = 25`, fetch and display). Target: 8 min.

**End-of-Day Reflection**
- "Day 4 time: ___ min. Day 6 time: ___ min. Improvement: ___ min. What clicked today that didn't click on Day 4?"

---

#### Day 14 (Week 2) — REST DAY

- No coding. Seriously.
- Go for a walk, exercise, watch a movie, hang out with friends.
- If you *must* do something productive: watch one conference talk from [React Conf](https://www.youtube.com/c/ReactConf) for inspiration.
- **Reflection:** Review your Week 2. Compare your Day 4 PokeAPI baseline time to your Day 6 rebuild time. How much faster did you get? What patterns are now automatic?
- Journal: "I learned React in 6 days. Vanilla JS todo: ___ lines. React todo: ___ lines. Next week I'm learning Router."

---

### WEEK 3 — React Router v6/v7 Mastery & Debugging

**Goal:** Make React Router second nature. You should never get stuck on routing again. Also level up your debugging to be systematic, not panicked.

**Productive hours target:** 5.5 hours/day

---

#### Day 15 (Week 3) — React Router Deep Dive: Basics

**🔹 Friend's Assignments — Responsive Foundations (60 min)**
- Before diving into Router layouts, strengthen your responsive design fundamentals. Complete these CSS-only assignments:
  - **Assignment 14** (`assignment-14/`): Content blocks that hide/show on mobile using `@media` queries. Target: 15 min.
  - **Assignment 15** (`assignment-15/`): Two-column layout that stacks to single-column on small screens. Target: 15 min.
  - **Assignment 16** (`assignment-16/`): Section swap — different sections visible at different breakpoints. Target: 15 min.
- These drill the exact responsive patterns you'll implement with Tailwind later. Understanding raw media queries first makes Tailwind's `sm:`/`md:`/`lg:` prefixes intuitive.

**Morning Block (2 hours) — Theory**
- Read: [React Router v7 docs — Getting Started](https://reactrouter.com/) (30 min)
- Read: [React Router v7 docs — Route Configuration](https://reactrouter.com/start/framework/routing) (30 min)
- Key concepts to lock in: `<BrowserRouter>`, `<Routes>`, `<Route>`, `<Link>`, `<NavLink>`, `useParams`, `useNavigate`, `useLocation`
- Create a cheat sheet: Write down every Router hook/component with a one-line description and example. Keep this next to you for the rest of the plan.

**Afternoon Block (3 hours) — Building**
- Build a multi-page app with the following routes:
  - `/` — Home page
  - `/about` — About page
  - `/users` — User list (fetch from JSONPlaceholder)
  - `/users/:id` — User detail page
  - `/404` — Catch-all not-found page
- Use `<NavLink>` with active styling. Target: 60 min.
- Add a shared Layout component with Navbar and Footer using `<Outlet>`. Target: 20 min.

**Speed Drill (30 min)**
- Timer on. Set up a fresh Vite project with React Router, create 3 pages with navigation between them. Target: 10 min.

**End-of-Day Reflection**
- "Can I explain the difference between `useParams`, `useNavigate`, and `useLocation` without looking it up?"

---

#### Day 16 (Week 3) — Nested Routes & Layout Patterns

**Morning Block (2 hours) — Theory**
- Read: [React Router — Nested Routes](https://reactrouter.com/start/framework/routing#nested-routes) (30 min)
- Read: [React Router — Layout Routes](https://reactrouter.com/start/framework/routing#layout-routes) (20 min)
- Understand: `<Outlet>`, index routes, layout routes, pathless routes
- Draw out a diagram of nested routes for an e-commerce site: `/shop`, `/shop/:category`, `/shop/:category/:productId`, `/cart`, `/account`, `/account/orders`, `/account/settings`

**🔹 Friend's Assignment — Complex Responsive Pages (45 min)**
- Complete **Assignment 17** (`assignment-17/`): Typography and spacing that changes across multiple breakpoints. Target: 20 min.
- Complete **Assignment 18** (`assignment-18/`): Paragraph styling with colors and borders changing at each Bootstrap breakpoint. Target: 25 min.
- These reinforce multi-breakpoint thinking — the same skill you need for building responsive dashboard layouts.

**Afternoon Block (3 hours) — Building**
- Build a Dashboard Layout app:
  - `/dashboard` — Overview (layout with sidebar + header)
  - `/dashboard/analytics` — Analytics page (nested inside dashboard layout)
  - `/dashboard/users` — Users page (nested)
  - `/dashboard/settings` — Settings page (nested)
  - Sidebar should highlight the active route
- Target: 75 min for full implementation

**Speed Drill (30 min)**
- Timer on. Set up nested routes with a layout (header + sidebar + outlet) from scratch. Target: 12 min.

**End-of-Day Reflection**
- "Do I understand why `<Outlet>` exists? Can I nest routes 3 levels deep without confusion?"

---

#### Day 17 (Week 3) — Dynamic Routes & Data Loading Patterns

**Morning Block (2 hours) — Theory**
- Read: [React Router — URL Params](https://reactrouter.com/start/framework/routing#dynamic-segments) (20 min)
- Study pattern: List page → fetch list → click item → navigate to `/items/:id` → fetch single item by ID → display detail
- This is the #1 most common pattern in frontend apps. Drill it until it's unconscious.

**Afternoon Block (3 hours) — Building**
- Build a Movie Browser using TMDB API (`https://api.themoviedb.org/3/`):
  - Sign up for free API key at [themoviedb.org](https://www.themoviedb.org/)
  - `/` — Trending movies grid
  - `/movie/:id` — Movie detail page (poster, overview, rating, genres, cast)
  - `/search?q=query` — Search results page with URL-based search (use `useSearchParams`)
- Target: 90 min for basic version

**Speed Drill (30 min)**
- Timer on. Fetch a list from any API, render cards, make each card a `<Link>` to a detail route with `useParams`. Target: 15 min.

**End-of-Day Reflection**
- "Can I implement the list → detail navigation pattern without thinking? What's my reflex sequence of steps?"

---

#### Day 18 (Week 3) — Advanced Debugging & Error Handling

**Morning Block (2 hours) — Theory**
- Read: [React docs — Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) (20 min)
- Read: [React docs — Troubleshooting](https://react.dev/learn/troubleshooting) (20 min)
- Learn the **debugging checklist** (memorize this):
  1. Read the error message. Fully. Every word.
  2. Check which file and line number the error points to.
  3. Console.log the data at that point — is it what you expect?
  4. Check the Network tab — did the API call succeed? What's the response shape?
  5. Check the Components tab — is state/props what you expect?
  6. Google the exact error message if still stuck.
  7. Isolate the problem — comment out code until the error disappears, then add back.

**Afternoon Block (3 hours) — Building**
- Continue the Movie Browser from Day 10:
  - Add genre-based filtering (`/movies/genre/:genreId`)
  - Add pagination (page 1, 2, 3... using URL search params)
  - Add proper error handling: API key invalid, movie not found, network error
  - Add a loading skeleton (use a simple animated placeholder, not a library yet)
- Target: 90 min

**Speed Drill (30 min)**
- Download this broken React project (or intentionally break your own): Fix 5 bugs as fast as possible using only DevTools. Target: 3 min per bug.

**End-of-Day Reflection**
- "When I hit an error today, did I follow the debugging checklist? Where did I skip steps?"

---

#### Day 19 (Week 3) — Patterns & Repetition Day

**Morning Block (1.5 hours) — Pattern Drilling**
- The API-to-UI Pipeline (drill this sequence):
  1. Open API in browser/Postman → study the response shape (2 min)
  2. Identify which fields you need for the UI (1 min)
  3. Plan your components on paper (2 min)
  4. Write the fetch logic with loading/error states (5 min)
  5. Map data to JSX (5 min)
  6. Style with Tailwind (5 min)
- Do this pipeline 3 times with 3 different APIs:
  - `https://api.spacexdata.com/v4/launches` (SpaceX launches)
  - `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita` (Cocktails)
  - `https://api.github.com/repos/facebook/react/issues` (GitHub issues)

**🔹 Friend's Assignment — RGB Color App (45 min)**
- Complete the **RGB color app** (`js-assignments/rgb-app/`). Build color panels with buttons to set background to red/green/blue/white, arrow buttons to reorder panels vertically (flex `order` swapping), flip row direction, and resize panel height. Open `rgb-app.png` and `instructions.txt` for the spec. Target: 45 min.
- This is excellent DOM manipulation practice — flex order, event delegation, DOM traversal. Doing it in vanilla JS makes you appreciate how React state eliminates manual DOM juggling.

**Afternoon Block (3.5 hours) — Speed Building**
- Build 3 mini-apps in sequence, each timed:
  1. SpaceX Launch Viewer — list of launches with mission name, date, rocket name. Target: 20 min.
  2. Cocktail Search — search input, display matching cocktails with image and instructions. Target: 20 min.
  3. GitHub Issue Tracker — list issues from any repo, show labels and state. Target: 20 min.

**Speed Drill (30 min)**
- PokeAPI Challenge again. From scratch. Timer on. Target: 35 min.

**End-of-Day Reflection**
- "My PokeAPI time has gone from ___ (Day 4) to ___ (Day 6) to ___ (today). Am I seeing the pattern yet?"

---

#### Day 20 (Week 3) — Movie Browser Final Push + Week Review

**Morning Block (2 hours) — Review**
- Review all your projects from Weeks 1–2. For each one:
  - Is the code clean? Are components well-named?
  - Is there unnecessary state? Could any component be simplified?
  - Are there any console warnings or errors?
- Read: [React docs — Keeping Components Pure](https://react.dev/learn/keeping-components-pure) (20 min)

**Afternoon Block (2.5 hours) — Final Timed Challenge**
- **PokeAPI Challenge — Final attempt this week.** From scratch. Timer on.
  - This time, also add: Search bar, Pagination, Type badges with colors
- Target: 30 min for basic, 45 min with extras.
- Push to GitHub. Write a proper README with screenshots.

**Speed Drill (30 min)**
- Build a "Quote of the Day" app fetching from `https://api.quotable.io/random`. Show quote, author, and a "New Quote" button. Target: 8 min.

**End-of-Day Reflection**
- Write a week-in-review: "Week 1 vs Week 2: What's different? What am I faster at? What do I still need to improve?"

---

#### Day 21 (Week 3) — REST DAY

- No coding.
- Review your week journal. Celebrate the time improvements in Router implementation.
- Optional: Watch [Theo Browne's YouTube channel](https://www.youtube.com/@t3dotgg) — pick any video that interests you. It's good exposure to how senior devs think about frontend.

---

### WEEK 4 — TypeScript Fundamentals

**Goal:** Learn TypeScript basics and start feeling comfortable typing your React code. TypeScript isn't scary — it's just JavaScript with labels.

**Productive hours target:** 6 hours/day

---

#### Day 22 (Week 4) — TypeScript Basics: Types & Interfaces

**Morning Block (2.5 hours) — Theory**
- Read: [TypeScript Handbook — The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html) (30 min)
- Read: [TypeScript Handbook — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) (30 min)
- Watch: [Fireship — TypeScript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA) (2 min)
- Watch: [Jack Herrington — No BS TS — #1 to #5](https://www.youtube.com/playlist?list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n) (60 min)
- Practice on [TypeScript Playground](https://www.typescriptlang.org/play): type 10 variables with different types, create 3 interfaces, create 2 type aliases

**🔹 Friend's Assignment — JS Drills in TypeScript (30 min)**
- Open `js-assignments/assignment-5/` and pick 10 exercises (e.g. assignments 1, 5, 10, 15, 20, 25, 30, 33, 35, 38). These are pure JS exercises. Redo them in TypeScript — add types to every variable, parameter, and return value. Run them in the [TypeScript Playground](https://www.typescriptlang.org/play). This is the fastest way to internalize TS syntax: apply it to problems you can already solve in JS.

**Afternoon Block (3 hours) — Building**
- Set up a new Vite project with React + TypeScript template: `npm create vite@latest my-app -- --template react-ts`
- Convert your Day 2 Todo app to TypeScript:
  - Type the `Todo` interface: `{ id: number; text: string; completed: boolean }`
  - Type all component props
  - Type all event handlers (`React.ChangeEvent<HTMLInputElement>`, `React.FormEvent<HTMLFormElement>`)
  - Type the `useState` hooks
- Target: 60 min for full conversion

**Speed Drill (30 min)**
- Timer on. Create a typed React component that accepts props `{ title: string; items: string[]; onSelect: (item: string) => void }` and renders a list. Target: 10 min.

**End-of-Day Reflection**
- "What TypeScript errors confused me? Did I understand what the error was telling me to do?"

---

#### Day 23 (Week 4) — Typing React Components & Hooks

**Morning Block (2.5 hours) — Theory**
- Read: [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example) (45 min)
- Key patterns to learn:
  - `React.FC<Props>` vs function with typed props (prefer the latter)
  - `useState<Type>()`
  - `useEffect` (no special typing needed)
  - Event types: `React.MouseEvent`, `React.ChangeEvent`, `React.FormEvent`
  - Children: `React.ReactNode`
- Practice: Type 5 different component signatures from memory

**Afternoon Block (3 hours) — Building**
- Build a typed Contact List app:
  - Interface: `Contact { id: number; name: string; email: string; phone: string; avatar: string }`
  - Fetch from `https://jsonplaceholder.typicode.com/users`
  - Components: `ContactCard`, `ContactList`, `SearchBar`, `ContactDetail`
  - All props typed, all state typed, all API responses typed
- Target: 60 min

**Speed Drill (30 min)**
- Timer on. Create a typed custom hook `useFetch<T>(url: string)` that returns `{ data: T | null; loading: boolean; error: string | null }`. Target: 12 min.

**End-of-Day Reflection**
- "Can I type a component's props without looking up the syntax? What about event handlers?"

---

#### Day 24 (Week 4) — Typing API Responses & Generics Basics

**Morning Block (2.5 hours) — Theory**
- Read: [TypeScript Handbook — Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) (30 min)
- Key skill: Looking at an API response and writing the TypeScript interface for it
- Exercise: Open these APIs in your browser and write TypeScript interfaces for their responses (don't overthink — type what you need, use `any` for nested stuff you won't use):
  - `https://pokeapi.co/api/v2/pokemon/1`
  - `https://api.themoviedb.org/3/movie/popular` (use your API key)
  - `https://jsonplaceholder.typicode.com/posts/1`
- Target: 30 min for all three

**Afternoon Block (3 hours) — Building**
- Convert your Week 2 Movie Browser to TypeScript:
  - Type the Movie interface
  - Type the API response (list response with pagination)
  - Type all components
  - Type the search params
  - Type the Router params
- Target: 90 min for full conversion

**Speed Drill (30 min)**
- Timer on. Given this API: `https://api.spacexdata.com/v4/launches/latest` — write the interface and fetch + display the data in a typed component. Target: 15 min.

**End-of-Day Reflection**
- "Am I able to look at JSON and write an interface quickly? What fields did I struggle to type?"

---

#### Day 25 (Week 4) — TypeScript Utility Types & Practical Patterns

**Morning Block (2 hours) — Theory**
- Read: [TypeScript Handbook — Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) (30 min)
- Focus on: `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, V>`
- Read: [React TypeScript Cheatsheet — Hooks section](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks) (20 min)
- Practice: Create a `User` type. Then create: `UserPreview` using Pick, `UserUpdate` using Partial, `UserWithoutPassword` using Omit

**Afternoon Block (3.5 hours) — Building**
- Build a Bookshelf App (Google Books API: `https://www.googleapis.com/books/v1/volumes?q=react`):
  - Search for books by query
  - Display results as cards (thumbnail, title, author, description)
  - Click to view detail
  - Add to "My Shelf" (stored in state)
  - Remove from shelf
  - All fully typed
- Target: 90 min

**Speed Drill (30 min)**
- Timer on. Build a typed list + detail pattern (any API). From `npm create vite` to working app. Target: 20 min.

**End-of-Day Reflection**
- "Is TypeScript slowing me down or speeding me up? Where is it catching real bugs?"

---

#### Day 26 (Week 4) — TypeScript Speed Day

**Morning Block (2 hours) — Drill Practice**
- Do 4 rapid-fire typed mini-builds (30 min each):
  1. Typed counter with history (stores past values in `number[]`)
  2. Typed color palette generator (fetch from `https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=5`)
  3. Typed user card from JSONPlaceholder with typed custom hook
  4. Typed search input with debounce (use `setTimeout` — type the timeout ref)

**Afternoon Block (3.5 hours) — Building**
- Rebuild the PokeAPI challenge, this time in TypeScript. Full typing. Timer on.
- Target: 35 min
- After completing: Add type-safe search, pagination, and a favorites feature (store in state).

**Speed Drill (30 min)**
- Timer on. From zero to typed React app fetching and displaying data from any API. Target: 18 min.

**End-of-Day Reflection**
- "My PokeAPI time in TypeScript: ___. Compare to my first attempt (Day 4): ___. TypeScript adds maybe ___ minutes of overhead. That will shrink."

---

#### Day 27 (Week 4) — Week Review & Consolidation

**Morning Block (2 hours) — Review**
- Go through all TypeScript code written this week. Clean it up.
- Create a personal TypeScript cheat sheet with every pattern you've used this week
- Push all projects to GitHub with READMEs

**Afternoon Block (3.5 hours) — Challenge**
- Build a new app from scratch, fully typed, using an API you haven't used before: [Dog CEO API](https://dog.ceo/dog-api/)
  - Browse random dog images by breed
  - Filter by breed (fetch breed list)
  - Favorites system
  - All typed
- Target: 60 min for full build

**Speed Drill (30 min)**
- Build a typed component that fetches data, handles loading/error, and renders a list. Any API. Target: 12 min.

**End-of-Day Reflection**
- "Week 3 summary: TypeScript went from ___ (scary/confusing/manageable/comfortable). My biggest takeaway is ___."

---

#### Day 28 (Week 4) — REST DAY

- No coding.
- Review your TypeScript journey. Journal: "What errors did TypeScript catch that would have been runtime bugs?"

---

### WEEK 5 — TypeScript + React Patterns

**Goal:** Build a complete, real-world-feeling app using TypeScript and solidify patterns like custom hooks, typed context, and component composition.

**Productive hours target:** 6.5 hours/day

---

#### Day 22 (Week 4) — Custom Hooks Deep Dive

**Morning Block (2 hours) — Theory**
- Read: [React docs — Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) (30 min)
- Watch: [Jack Herrington — Custom Hooks Explained](https://www.youtube.com/watch?v=J-g9ZJha8FE) (20 min)
- Study these common custom hooks and implement each from scratch:
  - `useLocalStorage<T>(key, defaultValue)` — persists state in localStorage
  - `useDebounce<T>(value, delay)` — debounces a value
  - `useFetch<T>(url)` — generic data fetcher with loading/error
  - `useToggle(initial)` — boolean toggle

**🔹 Friend's Assignment — Weather Dashboard Mockup (30 min)**
- Open **Assignment 20** (`assignment-20/`). Your friend built a static HTML/CSS weather dashboard with location display, temperature, stats, and a weekly forecast strip. Open `weather-app-design.png` for the target design. Study it — this is the *exact UI* you're about to build in React, but with real API data instead of hardcoded content. Spend 15 min completing the static version if it's not done, then 15 min planning how to componentize it (which parts become components, where state lives, which API endpoints feed each section).

**Afternoon Block (4 hours) — Building**
- Start building a **functional** Weather Dashboard (OpenWeatherMap API — free tier):
  - Sign up at [openweathermap.org](https://openweathermap.org/api) for free API key
  - Search for a city → display current weather (temp, humidity, wind, description, icon)
  - Show 5-day forecast
  - Use custom hooks: `useWeather(city)`, `useDebounce(searchInput)`, `useLocalStorage('recentCities')`
  - All fully typed
  - **Design reference:** Use your friend's assignment-20 design as the visual target. Same layout, but now with live data.
- Target: Build the basic version (current weather only) in 60 min. Add forecast in next 60 min.

**Speed Drill (30 min)**
- Timer on. Write a typed `useLocalStorage` hook and use it in a component that saves/loads a user's name. Target: 10 min.

**End-of-Day Reflection**
- "What logic did I extract into custom hooks? Could I have extracted more? How did having the static design mockup from my friend's assignment speed up the React build?"

---

#### Day 30 (Week 5) — Context API with TypeScript

**Morning Block (2 hours) — Theory**
- Read: [React docs — Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context) (30 min)
- Read: [React docs — Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context) (30 min)
- Key pattern: `createContext` → `Provider` → `useContext` custom hook
- Type-safe context pattern:
  ```typescript
  interface ThemeContextType { theme: 'light' | 'dark'; toggleTheme: () => void }
  const ThemeContext = createContext<ThemeContextType | null>(null)
  const useTheme = () => { const ctx = useContext(ThemeContext); if (!ctx) throw new Error('useTheme must be inside ThemeProvider'); return ctx }
  ```

**Afternoon Block (4 hours) — Building**
- Continue Weather Dashboard:
  - Add a `ThemeContext` (light/dark mode that persists in localStorage)
  - Add a `FavoriteCitiesContext` (save favorite cities, persist in localStorage)
  - Add a `UnitContext` (Celsius/Fahrenheit toggle)
  - Create a Settings page where user can change theme and units
- Target: 90 min for all context additions

**Speed Drill (30 min)**
- Timer on. Set up a typed ThemeContext with Provider, custom hook, and a toggle button that actually changes the page background. Target: 12 min.

**End-of-Day Reflection**
- "When should I use Context vs. props? Can I articulate the trade-offs?"

---

#### Day 31 (Week 5) — useReducer + Complex State

**Morning Block (2 hours) — Theory**
- Read: [React docs — Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer) (30 min)
- Watch: [Web Dev Simplified — useReducer](https://www.youtube.com/watch?v=kK_Wqx3RnHk) (15 min)
- Pattern: `useReducer` is for state that has multiple related sub-values or complex update logic
- Practice: Convert a counter with history (undo/redo) from useState to useReducer. Type the state and actions with discriminated unions.

**Afternoon Block (4 hours) — Building**
- Continue Weather Dashboard:
  - Refactor the favorites feature to use `useReducer` with typed actions:
    ```typescript
    type FavoritesAction =
      | { type: 'ADD_CITY'; payload: City }
      | { type: 'REMOVE_CITY'; payload: string }
      | { type: 'REORDER'; payload: { from: number; to: number } }
    ```
  - Add a "Recent Searches" feature using useReducer (max 10, no duplicates)
  - Add weather alerts display (mock data is fine)
- Target: 90 min

**Speed Drill (30 min)**
- Timer on. Build a shopping cart with useReducer: add item, remove item, update quantity, clear cart. All typed. Target: 15 min (no UI styling needed, just functional).

**End-of-Day Reflection**
- "When does useReducer make more sense than useState? Can I identify this in future projects?"

---

#### Day 32 (Week 5) — Component Composition Patterns

**Morning Block (2 hours) — Theory**
- Read: [React docs — Composition vs Inheritance](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children) (20 min)
- Read: [Patterns.dev — Compound Component Pattern](https://www.patterns.dev/react/compound-pattern) (20 min)
- Read: [Patterns.dev — Render Props Pattern](https://www.patterns.dev/react/render-props-pattern) (20 min)
- Key patterns to understand:
  - Children as props (`children: React.ReactNode`)
  - Compound components (like `<Tabs>` + `<Tabs.Tab>` + `<Tabs.Panel>`)
  - Render props (less common now, but understand the concept)
  - Higher-order components (understand, don't use much — hooks replaced most HOCs)
- **🔹 Friend's Code Study (20 min):** Read through `reactjs-projects/src/components/common/hocs/` — your friend built HOCs like `withCountries` (wraps a component and injects fetched country data as props) and `withFormatCurrency`. Also check the render props example under the practice-advanced-concepts route (`MouseCoordinates`). Understand how these patterns work, then note how a custom hook (`useCountries()`, `useMouse()`) would do the same thing with less code. This progression (HOC → render props → hooks) comes up in interviews.

**Afternoon Block (4 hours) — Building**
- Build reusable UI components using composition:
  - `<Card>` with `<Card.Header>`, `<Card.Body>`, `<Card.Footer>` (compound component)
  - `<Modal>` that renders via portal, accepts children
  - `<Accordion>` with `<Accordion.Item>`, `<Accordion.Trigger>`, `<Accordion.Content>`
  - `<DataList>` component that accepts a render function for each item: `<DataList items={items} renderItem={(item) => <div>{item.name}</div>} />`
- Target: 30 min per component

**Speed Drill (30 min)**
- Timer on. Build a reusable typed `<Modal>` component with open/close state, backdrop, and children. Target: 12 min.

**End-of-Day Reflection**
- "What makes a component truly reusable? What decisions do I make as the component author vs. leave to the consumer?"

---

#### Day 33 (Week 5) — Full App Build Day

**Morning Block (1 hour) — Planning**
- Plan a complete app on paper: A News Reader using [NewsAPI](https://newsapi.org/) or [GNews API](https://gnews.io/):
  - Home: Top headlines by category (business, tech, sports, etc.)
  - Category pages (tabs or routes)
  - Article detail view
  - Bookmarks (save articles to read later)
  - Search functionality
  - Dark mode
- Draw the component tree, identify what state lives where, plan the routes, list the custom hooks you'll need.

**Afternoon Block (5 hours) — Full Build**
- Build the News Reader from scratch. TypeScript. React Router. Context for bookmarks and theme. Custom hooks for data fetching and debounce. Tailwind for styling.
- Target: Complete basic version in 2.5 hours. Polish + extras in remaining time.
- Push to GitHub with README.

**Speed Drill (30 min)**
- PokeAPI Challenge one more time. TypeScript. Timer on. Target: under 30 min.

**End-of-Day Reflection**
- "How did planning on paper first affect my build speed? Did I change my plan during building?"

---

#### Day 34 (Week 5) — Week Review & Milestone Check

**Morning Block (2 hours) — Review**
- Review all code from Week 4. Refactor anything that bothers you.
- Update your TypeScript cheat sheet with new patterns learned.
- Push everything to GitHub.

**Afternoon Block (3.5 hours) — Milestone Challenge**
- **Week 4 Milestone Challenge (timed):**
  Build a Country Explorer app from scratch using [REST Countries API](https://restcountries.com/v3.1/all):
  - Home page: grid of country cards (flag, name, population, region)
  - Filter by region (dropdown)
  - Search by name
  - Click → detail page with borders (linking to other countries), currencies, languages
  - Dark mode toggle
  - All TypeScript
  - **Target: 60 minutes**

**Speed Drill (30 min)**
- Rapid fire: 3 typed components in 10 min each. A `<Badge>` with variants. A `<Tooltip>` (CSS only, no library). A `<Skeleton>` loader.

**End-of-Day Reflection**
- "Week 4 milestone time: ___. I feel ___ about TypeScript now. My biggest growth area this month was ___."

---

#### Day 35 (Week 5) — REST DAY

- No coding. You've been at this for 5 weeks solid. Take stock of how far you've come.
- Go back and look at your Week 0 CSS layouts and Week 1 vanilla JS code. Notice the difference.
- Optional: Read a blog post from [Josh Comeau's blog](https://www.joshwcomeau.com/) — his articles are excellent for building frontend intuition.

---

### WEEK 6 — State Management Deep Dive

**Goal:** Master state management from simple to complex. After this week, you should know *when* to use each approach, not just *how*.

**Productive hours target:** 7 hours/day

---

#### Day 36 (Week 6) — State Management Mental Model

**Morning Block (2.5 hours) — Theory**
- **🔹 Friend's Code Study (30 min):** Before learning Zustand, study how your friend managed state in `reactjs-projects`. Open `src/App.js` and look at the `stores` and `globalStores` objects passed to the MobX `Provider`. Then open one of the todo store files — your friend built 4 versions of the same todo app: local state → JSONPlaceholder API → MobX → MobX v2. This is the exact state management progression you're about to learn, but you'll use simpler tools (hooks → Context → Zustand instead of MobX).
- Read: [React docs — Managing State](https://react.dev/learn/managing-state) — all 5 articles in this section (60 min)
- Key framework — ask these questions for every piece of state:
  1. Can it be computed from other state/props? → Don't store it, derive it.
  2. Does only one component need it? → `useState` in that component.
  3. Do a parent and a few children need it? → Lift state up.
  4. Do distant/unrelated components need it? → Context or Zustand.
  5. Is the state update logic complex? → `useReducer`.
- Practice: Take your Weather Dashboard. Draw the component tree and for each piece of state, justify where it lives using the framework above.

**Afternoon Block (4 hours) — Building**
- Start building an E-commerce Product Catalog using [FakeStore API](https://fakestoreapi.com/):
  - Product listing page with grid
  - Category filtering
  - Sort by price (asc/desc)
  - Product detail page
  - Shopping cart (add, remove, update quantity)
  - Cart icon in header showing item count
- Start with useState only. Get it working first. Target: 2 hours.
- Then identify: where is state management painful? What prop drilling exists?

**Speed Drill (30 min)**
- Timer on. Build a filtered, sorted list from an API. Target: 15 min.

**End-of-Day Reflection**
- "Where did prop drilling feel painful? Which pieces of state are used by distant components?"

---

#### Day 37 (Week 6) — Zustand Introduction

**Morning Block (2.5 hours) — Theory**
- Read: [Zustand GitHub README](https://github.com/pmndrs/zustand) (20 min)
- Read: [Zustand docs](https://zustand-demo.pmnd.rs/) (30 min)
- Watch: [Jack Herrington — Zustand Tutorial](https://www.youtube.com/watch?v=KCr-UNsM3vA) (20 min)
- Key Zustand pattern:
  ```typescript
  interface CartStore {
    items: CartItem[]
    addItem: (product: Product) => void
    removeItem: (id: number) => void
    clearCart: () => void
    totalItems: () => number
  }
  const useCartStore = create<CartStore>((set, get) => ({ ... }))
  ```
- Practice: Build a simple Zustand store for a counter, then a todo list. 20 min each.

**Afternoon Block (4 hours) — Building**
- Refactor the E-commerce Catalog:
  - Move cart state to Zustand store
  - Move filter/sort preferences to a separate Zustand store
  - Add "wishlist" functionality using a third store
  - Add persist middleware to keep cart in localStorage
- Target: 90 min for refactor
- Notice: How much cleaner is the code without prop drilling?

**Speed Drill (30 min)**
- Timer on. Create a Zustand store for a cart with add/remove/total, wire it into a component. Target: 10 min.

**End-of-Day Reflection**
- "How did Zustand compare to Context + useReducer? When would I use one vs. the other?"

---

#### Day 38 (Week 6) — Redux Toolkit (Awareness, Not Mastery)

**Morning Block (2.5 hours) — Theory**
- Read: [Redux Toolkit Quick Start](https://redux-toolkit.js.org/tutorials/quick-start) (45 min)
- Read: [Redux Toolkit — Why Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) (20 min)
- Key concepts: `configureStore`, `createSlice`, `useSelector`, `useDispatch`
- Understand the pattern but don't go deep — Zustand is simpler and preferred at most startups. Redux Toolkit knowledge is useful for interviews and legacy codebases.

**Afternoon Block (4 hours) — Building**
- Build a simple version of the cart using Redux Toolkit (separate mini-project). Target: 60 min.
- Continue E-commerce Catalog:
  - Add product search (debounced)
  - Add "Recently Viewed" (track last 5 viewed products in Zustand store)
  - Add order summary page (list items, calculate subtotal, tax, total)
- Target: 90 min

**Speed Drill (30 min)**
- Timer on. Build a typed Zustand store from scratch for a new use case: a notification system (add notification, dismiss, auto-dismiss after 5s). Target: 15 min.

**End-of-Day Reflection**
- "Can I explain the difference between Zustand and Redux Toolkit in 2 sentences? When would I pick each?"

---

#### Day 39 (Week 6) — Advanced State Patterns

**Morning Block (2 hours) — Theory**
- Derived state: Computing values from state instead of storing redundant data
- Optimistic updates: Updating UI before the server confirms
- Read: [TkDodo's blog — Practical React Query](https://tkdodo.eu/blog/practical-react-query) (30 min) — just the first article for now
- Practice: In your E-commerce Catalog, identify every piece of derived state (e.g., `totalItems`, `totalPrice`, `filteredProducts`). Make sure none of these are stored in state — compute them.

**Afternoon Block (4.5 hours) — Building**
- Polish the E-commerce Catalog to completion:
  - Responsive design (mobile + desktop)
  - Smooth transitions (CSS transitions on cart open/close, hover effects)
  - Empty states (empty cart, no search results)
  - Proper loading skeletons
  - Error boundaries for each section
- Target: 2 hours for polish
- Push to GitHub with README and screenshots

**Speed Drill (30 min)**
- Timer on. From scratch: Zustand store + component that uses it + full CRUD operations. Target: 15 min.

**End-of-Day Reflection**
- "My E-commerce Catalog is done. Looking at it, would I be proud to show it in an interview? What would I improve?"

---

#### Day 40 (Week 6) — Full Build Challenge

**Morning Block (1 hour) — Planning**
- Plan a Recipe Finder app using [TheMealDB](https://www.themealdb.com/api.php):
  - Browse by category
  - Search by name
  - Recipe detail (ingredients, instructions, video link)
  - Favorites (Zustand + persist)
  - Meal planner (assign recipes to days of the week)

**Afternoon Block (5.5 hours) — Full Build**
- Build it. TypeScript. React Router. Zustand for favorites and meal planner. Tailwind.
- Target: Complete in 3 hours.
- Push to GitHub.

**Speed Drill (30 min)**
- PokeAPI Challenge. TypeScript. Zustand for favorites. Timer on. Target: 25 min.

**End-of-Day Reflection**
- "PokeAPI time update: ___. Am I under 30 min yet?"

---

#### Day 41 (Week 6) — Milestone Check

**Morning Block (2 hours) — Code Review**
- Review all Week 5 code. Look at your Zustand stores — are they well-structured?
- Read: [Zustand docs — Best Practices](https://zustand-demo.pmnd.rs/) — check if your stores follow them

**Afternoon Block (4.5 hours) — Milestone Challenge**
- **Week 5 Milestone Challenge (timed):**
  Build a task management board (like a simple Trello) using [JSONPlaceholder Todos](https://jsonplaceholder.typicode.com/todos):
  - 3 columns: Todo, In Progress, Done
  - Drag is NOT required — use buttons to move between columns
  - Add new task
  - Delete task
  - Filter by status
  - Zustand for state
  - All TypeScript
  - **Target: 75 minutes**

**Speed Drill (30 min)**
- Build any list + detail + favorites app from any API. Target: 20 min.

**End-of-Day Reflection**
- "Week 5 milestone time: ___. State management decisions I made and why: ___"

---

#### Day 42 (Week 6) — REST DAY

- No coding. You're 6 weeks in — almost halfway through!

---

### WEEK 7 — Advanced Hooks & Patterns

**Goal:** Master the hooks that separate junior from mid-level devs. Understand performance implications and write truly reusable code.

**Productive hours target:** 7 hours/day

---

#### Day 36 (Week 6) — useMemo & useCallback

**Morning Block (2.5 hours) — Theory**
- Read: [React docs — useMemo](https://react.dev/reference/react/useMemo) (20 min)
- Read: [React docs — useCallback](https://react.dev/reference/react/useCallback) (20 min)
- Watch: [Jack Herrington — Mastering React Memo](https://www.youtube.com/watch?v=DEPwA3mv_R8) (20 min)
- Key insight: Don't memoize everything. Use when: expensive computation, referential equality for child components, or dependency of another hook.
- Practice: Build a component with an expensive filter/sort operation. Demonstrate the re-render problem. Fix with useMemo.

**Afternoon Block (4 hours) — Building**
- Build a Data Table component:
  - Accepts generic data `<T>`
  - Sortable columns (click header to sort)
  - Filterable (search input filters all columns)
  - Pagination (client-side)
  - Use `useMemo` for sorted/filtered/paginated data
  - Use `useCallback` for handlers passed to child column headers
- Test with 1000+ rows (generate mock data) to see if memoization matters
- Target: 90 min

**Speed Drill (30 min)**
- Timer on. Build a search input that filters a large list (500 items) with debounce and memoized filter results. Target: 12 min.

**End-of-Day Reflection**
- "Can I explain when to use useMemo vs useCallback? Do I understand the cost of memoization?"

---

#### Day 37 (Week 6) — useRef & Uncontrolled Components

**Morning Block (2 hours) — Theory**
- Read: [React docs — useRef](https://react.dev/reference/react/useRef) (20 min)
- Read: [React docs — Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs) (20 min)
- Key uses: DOM access (focus management, scroll position, measuring elements), storing mutable values that don't trigger re-renders (timers, previous values)
- Practice: Build a component that auto-focuses an input on mount. Build a "previous value" hook using useRef.

**Afternoon Block (4.5 hours) — Building**
- Start building a Recipe Finder with Favorites ([TheMealDB API](https://www.themealdb.com/api.php)):
  - Category grid → recipes in category → recipe detail
  - Search with auto-focus using useRef
  - Infinite scroll using Intersection Observer + useRef
  - Favorites stored in Zustand with persist
  - Custom hooks: `useIntersectionObserver`, `usePrevious`, `useDebounce`
- Target: 2 hours for basic version

**Speed Drill (30 min)**
- Timer on. Build an infinite scroll list fetching paginated data. Target: 15 min.

**End-of-Day Reflection**
- "When should I use useRef instead of useState? Can I name 3 legitimate use cases?"

---

#### Day 38 (Week 6) — Custom Hooks Mastery

**Morning Block (2 hours) — Theory**
- Study these advanced custom hook patterns and implement each:
  - `useMediaQuery(query)` — responds to CSS media queries
  - `useOnClickOutside(ref, handler)` — detects clicks outside an element
  - `useKeyPress(key)` — detects specific key presses
  - `useWindowSize()` — tracks window dimensions
  - `useIntersectionObserver(ref, options)` — intersection observer wrapper

**Afternoon Block (4.5 hours) — Building**
- Continue Recipe Finder:
  - Use `useMediaQuery` for responsive layout changes
  - Use `useOnClickOutside` for closing the mobile menu
  - Use `useKeyPress('/')` to focus the search input
  - Add a "Meal Planner" feature: drag-free meal planning (dropdowns to assign recipes to weekdays)
  - Extract every reusable hook into a `hooks/` folder
- Target: 90 min for additions

**Speed Drill (30 min)**
- Timer on. Write `useLocalStorage`, `useDebounce`, and `useToggle` from memory. Target: 8 min total.

**End-of-Day Reflection**
- "How many custom hooks have I written from scratch across this whole plan? Could I write any of them from memory right now?"

---

#### Day 39 (Week 6) — Error Boundaries & Suspense

**Morning Block (2 hours) — Theory**
- Read: [React docs — Suspense](https://react.dev/reference/react/Suspense) (20 min)
- Read: [React docs — lazy](https://react.dev/reference/react/lazy) (15 min)
- Read: [React docs — Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) (15 min)
- Understand: `React.lazy()` for code splitting, `<Suspense>` for loading fallbacks, Error Boundaries for graceful error handling
- Practice: Lazy-load a route component. Wrap it in Suspense with a loading fallback.

**Afternoon Block (4.5 hours) — Building**
- Polish Recipe Finder:
  - Add code splitting: lazy-load the recipe detail page and meal planner page
  - Add Suspense boundaries with skeleton fallbacks
  - Add Error Boundaries around each section (if recipe API fails, other sections still work)
  - Add a "Random Meal" feature (API: `https://www.themealdb.com/api/json/v1/1/random.php`)
  - Polish styling, add transitions
- Push to GitHub with README

**Speed Drill (30 min)**
- Timer on. Add lazy loading + Suspense + Error Boundary to an existing project. Target: 10 min.

**End-of-Day Reflection**
- "Can I explain code splitting and why it matters to a non-technical person?"

---

#### Day 40 (Week 6) — Full Build Sprint

**Morning Block (1 hour) — Planning**
- Plan a full app on paper: Lyrics Finder using a free lyrics API or a Music Discovery app using [Deezer API](https://developers.deezer.com/api) (via a CORS proxy like `https://corsproxy.io/`)
- Spec: Search, browse, detail view, favorites, dark mode, fully typed, Zustand, custom hooks, code splitting

**Afternoon Block (5.5 hours) — Full Build**
- Build it from scratch. Use every pattern you've learned in Weeks 1–6.
- Target: Complete working version in 3 hours.
- Push to GitHub with README.

**Speed Drill (30 min)**
- PokeAPI Challenge. Everything. TypeScript, Zustand favorites, Router, search, pagination. Timer on. Target: 22 min.

**End-of-Day Reflection**
- "PokeAPI time: ___. If I can do this in under 25 min, I can build any API-driven list+detail app quickly."

---

#### Day 41 (Week 6) — Milestone Check

**Morning Block (2 hours) — Code Review**
- Review all Week 6 code. Check for: unnecessary re-renders, missing memoization where needed, hooks following the rules, clean custom hook APIs.

**Afternoon Block (4.5 hours) — Milestone Challenge**
- **Week 6 Milestone Challenge (timed):**
  Build a Dictionary App using [Free Dictionary API](https://dictionaryapi.dev/):
  - Search for a word → display definitions, phonetics, examples, synonyms
  - Audio pronunciation (play the audio from the API)
  - Search history (last 10 searches, stored in Zustand + persist)
  - Font size/family preference (Context)
  - Dark mode
  - All TypeScript, custom hooks, code splitting
  - **Target: 75 minutes**

**Speed Drill (30 min)**
- Build a fully typed, Zustand-powered, routed mini-app from scratch. Any API. Target: 20 min.

**End-of-Day Reflection**
- "Week 6 milestone time: ___. Halfway through the plan. I have ___ GitHub repos now. Each one is better than the last."

---

#### Day 42 (Week 6) — REST DAY

- You're halfway done. Take a real break.
- Optional: Listen to the [Syntax.fm podcast](https://syntax.fm/) — great for absorbing frontend culture and vocabulary.

---

### WEEK 8 — UI Libraries & Design Systems

**Goal:** Learn to use Shadcn/ui and build professional-looking interfaces quickly. This is where your apps stop looking like "student projects" and start looking like real products.

**Productive hours target:** 7.5 hours/day

---

#### Day 50 (Week 8) — Shadcn/ui Setup & Core Components

**Morning Block (2.5 hours) — Theory**
- Read: [Shadcn/ui docs — Introduction](https://ui.shadcn.com/docs) (20 min)
- Read: [Shadcn/ui docs — Installation (Vite)](https://ui.shadcn.com/docs/installation/vite) (15 min)
- Understand the philosophy: Shadcn/ui is NOT a component library — it's a collection of reusable components you copy into your project. You own the code.
- Browse through all available components. Pick 10 you think are most useful. Read their docs.
- Set up a new Vite + React + TypeScript + Tailwind project with Shadcn/ui installed

**Afternoon Block (4.5 hours) — Building**
- Build a sample page using Shadcn components:
  - Navigation with `NavigationMenu`
  - Data display with `Card`, `Badge`, `Avatar`
  - Forms with `Input`, `Button`, `Select`, `Checkbox`
  - Feedback with `Toast`, `Alert`, `Dialog`
  - Layout with `Tabs`, `Accordion`, `Sheet` (mobile sidebar)
- Target: Build a settings page with all these components. 90 min.

**Speed Drill (30 min)**
- Timer on. Set up a new project with Shadcn/ui and build a login form (email, password, submit button, "forgot password" link) using Shadcn components. Target: 15 min.

**End-of-Day Reflection**
- "How does using a UI library change my development speed? What took me 30 min to build manually now takes ___ min."

---

#### Day 51 (Week 8) — Data Display Patterns with Shadcn

**🔹 Friend's Assignment — Phone Dialer UI Rebuild (45 min)**
- Open **Assignment 19** (`assignment-19/`). Your friend built a phone dialer UI with tabs (Recents/Contacts), call history rows, and a dial pad — all in raw HTML/CSS/Bootstrap. Now rebuild this same UI using React + Shadcn components: use Shadcn `Tabs` for the tab navigation, `Avatar` for contact photos, `Button` for the dial pad, and `Sheet` for a slide-up dial pad on mobile. Target: 45 min. Notice how much faster and more polished it is with a component library.

**Morning Block (2 hours) — Theory**
- Read: [Shadcn/ui — Data Table](https://ui.shadcn.com/docs/components/data-table) (30 min)
- Read: [Shadcn/ui — Command](https://ui.shadcn.com/docs/components/command) (15 min)
- Study how Shadcn composes Radix primitives — understand the layered architecture
- Look at [Shadcn/ui examples](https://ui.shadcn.com/examples) for layout inspiration

**Afternoon Block (5 hours) — Building**
- Start building a Job Board Dashboard using [Remotive API](https://remotive.com/api/remote-jobs):
  - Job listing with Shadcn `Card` components
  - Filters: category, job type, company — using Shadcn `Select`, `Checkbox`
  - Search with Shadcn `Command` (combobox-like search)
  - Job detail in a `Sheet` (slide-out panel) or `Dialog`
  - Saved jobs with Zustand
  - Dark mode with Shadcn's built-in theme support
- Target: 2.5 hours for basic version

**Speed Drill (30 min)**
- Timer on. Build a data display card grid with Shadcn (Card, Badge, Avatar, Button) for any API. Target: 12 min.

**End-of-Day Reflection**
- "Am I reading the Shadcn docs efficiently? Can I find and implement a component in under 5 min?"

---

#### Day 52 (Week 8) — Forms & Validation

**Morning Block (2.5 hours) — Theory**
- Read: [React Hook Form docs — Get Started](https://react-hook-form.com/get-started) (30 min)
- Read: [Zod docs — Introduction](https://zod.dev/) (20 min)
- Read: [Shadcn/ui — Form](https://ui.shadcn.com/docs/components/form) (20 min) — Shadcn forms use React Hook Form + Zod
- **🔹 Friend's Code Study (15 min):** Open your friend's signup form (`js-assignments/sigh-up-form/sign-up.js`). Study the raw regex validation on blur/keyup, manual error message display, and DOM manipulation for each field. Then open the form exercises in `reactjs-projects` (`/form-components/` route). Your friend did forms both the vanilla JS way and the React class component way. Today you learn the *modern* way: React Hook Form + Zod, which replaces all that manual validation with a declarative schema. Much cleaner, much less code.
- Key pattern: Zod schema → React Hook Form → Shadcn Form components
- Practice: Build a registration form with validation (name, email, password, confirm password) using this stack. Target: 30 min.

**Afternoon Block (4.5 hours) — Building**
- Continue Job Board Dashboard:
  - Add a "Post a Job" form using React Hook Form + Zod + Shadcn Form components
  - Fields: title, company, category, type, salary range, description, URL
  - Full validation with helpful error messages
  - Add a "Report Job" dialog with a form (reason dropdown, description textarea)
  - Add a "Contact" page with a feedback form
- Target: 90 min for all forms

**Speed Drill (30 min)**
- Timer on. Build a validated form (3+ fields with different validation rules) using React Hook Form + Zod + Shadcn. Target: 15 min.

**End-of-Day Reflection**
- "Form handling used to be ___. With React Hook Form + Zod, it's now ___. What's the most complex validation rule I implemented?"

---

#### Day 53 (Week 8) — Responsive Design & Polish

**🔹 Friend's Assignments — Responsive Design Reference (45 min)**
- Open your friend's responsive assignments and study the completed HTML/CSS:
  - **Assignment 11** (`assignment-11/`): Bootstrap grid with responsive ordering — compare the multi-file CSS approach to Tailwind's `order-1 md:order-3` syntax
  - **Assignment 12** (`assignment-12/`): Gmail-style landing page — a complex responsive layout your friend built with Bootstrap. Study the breakpoint decisions.
  - **Assignment 13** (`assignment-13/`): GitHub trending page (dark UI) — complex layout with multiple responsive elements
- For each one, note: "In Tailwind, I'd replace this media query with ___". This builds your Tailwind vocabulary.
- Also open **Flexbox 4, 5, 6** (`assignments/flexbox-4/`, `flexbox-5/`, `flexbox-6/`) — these are responsive flex layouts. The same patterns apply in Tailwind with `flex-col md:flex-row`, `hidden lg:block`, etc.

**Morning Block (2 hours) — Theory**
- Read: [Tailwind docs — Responsive Design](https://tailwindcss.com/docs/responsive-design) (20 min)
- Study mobile-first design patterns: hamburger menu, bottom navigation, stacked layouts, touch targets
- Review 3 well-designed web apps on both mobile and desktop. Note what changes between breakpoints.

**Afternoon Block (5 hours) — Building**
- Polish the Job Board Dashboard:
  - Make it fully responsive (mobile, tablet, desktop)
  - Mobile: bottom navigation, sheet for filters, stacked cards
  - Tablet: sidebar + content layout
  - Desktop: full layout with sidebar, header, content area
  - Add micro-interactions: hover effects, transitions, skeleton loading
  - Add empty states with illustrations (use free illustrations from [undraw.co](https://undraw.co/))
  - Add proper favicon and page titles
- Target: 3 hours for full polish

**Speed Drill (30 min)**
- Timer on. Make an existing single-column layout responsive (mobile + desktop) with Tailwind. Target: 10 min.

**End-of-Day Reflection**
- "Does my Job Board look like a real product? Would I be comfortable showing it in an interview?"

---

#### Day 54 (Week 8) — Accessibility & Best Practices

**Morning Block (2 hours) — Theory**
- Read: [MDN — Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) (20 min)
- Read: [Radix docs — Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility) (15 min)
- Key a11y checklist: keyboard navigation, focus management, ARIA labels, color contrast, screen reader text
- Use Lighthouse in Chrome DevTools to audit your Job Board. Fix any accessibility issues.

**Afternoon Block (5 hours) — Building**
- Finalize Job Board Dashboard:
  - Fix all Lighthouse accessibility issues
  - Add keyboard shortcuts (/ for search, Esc to close dialogs)
  - Ensure all interactive elements are keyboard-accessible
  - Add proper semantic HTML (`<main>`, `<nav>`, `<article>`, `<aside>`)
  - Add `aria-label` where needed
  - Add skip-to-content link
- Deploy to Vercel (free tier)
- Push to GitHub with comprehensive README (screenshots, features, tech stack, live link)

**Speed Drill (30 min)**
- Timer on. Build a complete mini-app with Shadcn (card grid + detail view) from scratch. Target: 18 min.

**End-of-Day Reflection**
- "My Job Board is deployed and live. I built this. It looks professional. That's real."

---

#### Day 55 (Week 8) — Milestone Check

**Morning Block (2 hours) — Review**
- Review all Week 7 work. Check code quality, component structure, TypeScript types.

**Afternoon Block (5 hours) — Milestone Challenge**
- **Week 7 Milestone Challenge (timed):**
  Build a User Management Dashboard:
  - Fetch users from `https://jsonplaceholder.typicode.com/users`
  - Data table (using Shadcn Table) with sortable columns
  - Search + filter
  - Click user → Dialog/Sheet with user details
  - "Add User" form with React Hook Form + Zod validation
  - Dark mode toggle
  - Responsive
  - All TypeScript, Zustand, Shadcn
  - **Target: 90 minutes**

**Speed Drill (30 min)**
- Full stack speed: From `npm create vite` to deployed on Vercel. A simple app with Shadcn. Target: 25 min.

**End-of-Day Reflection**
- "Week 7 milestone time: ___. I can now build professional-looking apps. That changes everything."

---

#### Day 56 (Week 8) — REST DAY

---

### WEEK 9 — Portfolio Project 1: GitHub Repository Explorer

**Goal:** Build your first portfolio-worthy project. This is the one you'll put on your resume and walk through in interviews.

**Productive hours target:** 8 hours/day

---

#### Day 57 (Week 9) — Project Planning & Architecture

**Full Day (3 hours planning + 5 hours building)**

**Planning (3 hours)**
- Project: **GitHub Repository Explorer** using the [GitHub API](https://docs.github.com/en/rest)
- Features spec:
  - Search GitHub users by username
  - View user profile (avatar, bio, stats, links)
  - Browse user's repositories with filters (language, sort by stars/updated)
  - Repository detail: description, stats, languages, recent commits
  - Compare two users side-by-side
  - Trending repositories section (use `https://api.github.com/search/repositories?q=stars:>1000&sort=stars`)
  - Bookmarks for users and repos (Zustand + persist)
  - Dark mode, responsive, fully accessible
- Tech stack: React + TypeScript + React Router + Zustand + Shadcn/ui + Tailwind + React Hook Form (for search) + React Query (stretch goal)
- Draw component tree and route structure on paper
- Design the Zustand stores
- List all API endpoints you'll need
- Create the project and set up the folder structure

**Building (5 hours)**
- Implement: User search + profile display + repository list
- Target: Working search → profile → repo list by end of day

---

#### Day 58 (Week 9) — Core Features

**Full Day (8 hours)**
- Build:
  - Repository detail page (stats, languages chart, recent commits list)
  - User comparison feature
  - Trending repositories section
  - All with proper loading states, error handling, empty states
- Target: All core features working by end of day

---

#### Day 59 (Week 9) — Polish & Advanced Features

**Full Day (8 hours)**
- Build:
  - Bookmarks system (Zustand + persist)
  - Infinite scroll for repository lists
  - Skeleton loading throughout
  - Responsive design (mobile, tablet, desktop)
  - Dark mode
  - Keyboard shortcuts
  - Rate limit handling (GitHub API has rate limits — show appropriate messages)
- Target: Feature-complete by end of day

---

#### Day 60 (Week 9) — Testing Introduction & Project Testing

**Morning Block (3 hours) — Theory**
- Read: [Vitest docs — Getting Started](https://vitest.dev/guide/) (30 min)
- Read: [React Testing Library docs — Introduction](https://testing-library.com/docs/react-testing-library/intro/) (30 min)
- Watch: [Jack Herrington — React Testing](https://www.youtube.com/watch?v=cchqeWY0Eo4) (20 min)
- Set up Vitest + React Testing Library in the GitHub Explorer project

**Afternoon Block (5 hours) — Building**
- Write tests for GitHub Explorer:
  - Unit tests: Zustand stores (add/remove bookmark, search history)
  - Component tests: UserCard renders correctly with props, SearchBar calls onSearch
  - Integration tests: Search → shows results → click user → shows profile
- Target: 10+ meaningful tests

---

#### Day 61 (Week 9) — Deploy & Document

**Full Day (8 hours)**
- Final polish: fix any bugs, improve animations, check responsiveness on real devices
- Write a professional README:
  - Project description
  - Screenshots / GIF demo
  - Tech stack with reasons for choices
  - How to run locally
  - Architecture decisions
  - What I'd improve with more time
- Deploy to Vercel
- Push to GitHub
- Record a 2-minute demo video walkthrough (use Loom, free tier) — great for portfolio and LinkedIn

---

#### Day 62 (Week 9) — Review & Stretch Goals

**Full Day (7 hours)**
- Code review your own project: would a senior dev approve this?
- Stretch goals if time allows:
  - Add React Query for data fetching with caching
  - Add chart visualizations (contribution chart, language breakdown)
  - Add PWA support (installable on mobile)

**Speed Drill (30 min)**
- PokeAPI Challenge. Final timing this month. Target: under 20 min.

---

#### Day 63 (Week 9) — REST DAY

---

### WEEK 10 — Testing Fundamentals

**Goal:** Learn to write meaningful tests. Not 100% coverage for the sake of it — focus on testing behavior that matters.

**Productive hours target:** 8 hours/day

---

#### Day 64 (Week 10) — Testing Philosophy & Unit Tests

**Morning Block (3 hours) — Theory**
- Read: [Kent C. Dodds — Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) (20 min)
- Read: [Kent C. Dodds — Common Mistakes with RTL](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library) (20 min)
- Read: [Vitest docs — Mocking](https://vitest.dev/guide/mocking.html) (30 min)
- Key insight: Test behavior, not implementation. "When the user clicks the add button, a new item appears in the list" — not "when handleClick is called, setItems is called with a new array."

**Afternoon Block (5 hours) — Practice**
- Create a testing playground project. Practice these patterns:
  - Render a component and assert text content
  - Simulate user events (click, type, submit form)
  - Test async operations (API calls with mocked fetch)
  - Test conditional rendering
  - Test component with Zustand store
  - Test custom hooks with `renderHook`
- Write 20 small tests across these categories. Target: 3 hours.

---

#### Day 65 (Week 10) — Integration Testing

**Morning Block (2.5 hours) — Theory**
- Read: [Testing Library — User Event](https://testing-library.com/docs/user-event/intro) (20 min)
- Read: [MSW (Mock Service Worker) — Getting Started](https://mswjs.io/docs/getting-started) (30 min)
- MSW lets you mock API calls in tests without changing your application code — powerful for integration tests.
- Set up MSW in your testing playground.

**Afternoon Block (5 hours) — Practice**
- Write integration tests:
  - Full user flow: search → results → click → detail → bookmark → check bookmarks page
  - Form submission: fill form → submit → see success message
  - Error handling: API fails → error message shown → retry → success
- Add integration tests to your GitHub Explorer project (at least 5 integration tests)

---

#### Day 66 (Week 10) — Testing Real Projects

**Full Day (8 hours)**
- Add comprehensive tests to your E-commerce Catalog (Week 5) or Recipe Finder (Week 6):
  - Unit tests for Zustand stores
  - Component tests for key UI components
  - Integration tests for main user flows
  - At least 15 tests total
- Practice TDD: Write a test first, then implement the feature (try this for 2-3 small features)

---

#### Day 67 (Week 10) — Testing Patterns & Best Practices

**Morning Block (2.5 hours) — Theory**
- Study testing anti-patterns:
  - Testing implementation details (checking state values)
  - Snapshot testing overuse
  - Not testing error states
  - Writing tests that pass even when the feature is broken
- Read: [React Testing Library — Queries priority](https://testing-library.com/docs/queries/about#priority) — which query to use when

**Afternoon Block (5 hours) — Practice**
- Revisit your GitHub Explorer tests. Improve them:
  - Replace any `getByTestId` with more accessible queries (`getByRole`, `getByLabelText`)
  - Add edge case tests (empty results, very long text, special characters)
  - Add a11y tests using `jest-axe`
- Write a testing guide/cheat sheet for yourself

---

#### Day 68 (Week 10) — Week Review & Consolidation

**Full Day (7 hours)**
- Review all tests written this week. Are they testing the right things?
- Make sure all tests pass. Fix any flaky tests.
- Update GitHub repos with tests.
- Practice explaining your testing approach — this comes up in interviews.

---

#### Day 62–63 (Week 9) — Milestone Challenge + REST DAY

**Day 62 — Milestone Challenge:**
- **Week 9 Milestone Challenge (timed):**
  Build a mini CRUD app (any data) with:
  - Full CRUD operations
  - Zustand store
  - 5 unit tests
  - 3 integration tests
  - **Target: 2 hours total (app + tests)**

**Day 63 — REST DAY**

---

### WEEK 11 — Performance & TanStack Query

**Goal:** Learn data fetching the professional way with TanStack Query. Understand React performance optimization.

**Productive hours target:** 8 hours/day

---

#### Day 71 (Week 11) — TanStack Query Introduction

**Morning Block (3 hours) — Theory**
- Read: [TanStack Query docs — Overview](https://tanstack.com/query/latest/docs/react/overview) (30 min)
- Read: [TanStack Query docs — Quick Start](https://tanstack.com/query/latest/docs/react/quick-start) (30 min)
- Watch: [Theo Browne — Why React Query?](https://www.youtube.com/watch?v=novnyCaa7To) (15 min)
- Key benefits: automatic caching, background refetching, loading/error states built-in, pagination support, optimistic updates
- Practice: Convert a simple fetch-and-display component to use `useQuery`. Notice how much boilerplate disappears.

**Afternoon Block (5 hours) — Building**
- Start building **Portfolio Project 2: Real-time Crypto Dashboard** using [CoinGecko API](https://www.coingecko.com/en/api/documentation):
  - Top 100 cryptocurrencies with price, market cap, 24h change
  - Search and filter
  - Price detail page with historical data
  - Portfolio tracker (add coins, track total value)
  - All data fetching via TanStack Query
- Target: List + detail pages with TanStack Query working. 3 hours.

**Speed Drill (30 min)**
- Timer on. Set up TanStack Query and fetch + display data from any API. Target: 10 min.

---

#### Day 72 (Week 11) — Advanced TanStack Query

**Morning Block (2.5 hours) — Theory**
- Read: [TanStack Query — Pagination](https://tanstack.com/query/latest/docs/react/guides/paginated-queries) (20 min)
- Read: [TanStack Query — Infinite Queries](https://tanstack.com/query/latest/docs/react/guides/infinite-queries) (20 min)
- Read: [TanStack Query — Mutations](https://tanstack.com/query/latest/docs/react/guides/mutations) (20 min)
- Read: [TanStack Query — Optimistic Updates](https://tanstack.com/query/latest/docs/react/guides/optimistic-updates) (20 min)

**Afternoon Block (5 hours) — Building**
- Continue Crypto Dashboard:
  - Infinite scroll for coin list using `useInfiniteQuery`
  - Background refetching every 30 seconds (prices update in real-time feel)
  - Optimistic updates for portfolio add/remove
  - Query invalidation when switching between tabs
  - Add a "Watchlist" feature with mutations

---

#### Day 73 (Week 11) — React Performance

**Morning Block (2.5 hours) — Theory**
- Read: [React docs — React.memo](https://react.dev/reference/react/memo) (15 min)
- Read: [React docs — Lazy](https://react.dev/reference/react/lazy) (10 min)
- Read: [Josh Comeau — Why React Re-Renders](https://www.joshwcomeau.com/react/why-react-re-renders/) (30 min)
- Use React DevTools Profiler to identify unnecessary re-renders in your Crypto Dashboard
- Learn to read the Profiler flame graph

**Afternoon Block (5 hours) — Building**
- Optimize Crypto Dashboard performance:
  - Profile with React DevTools — identify re-render problems
  - Add `React.memo` where appropriate
  - Code split routes with `React.lazy`
  - Add `Suspense` boundaries
  - Virtualize the long coin list (use `@tanstack/react-virtual` or `react-window`)
  - Measure and document: "Before optimization: X re-renders. After: Y re-renders."

---

#### Day 74 (Week 11) — Polish & Advanced Features

**Full Day (8 hours)**
- Crypto Dashboard final features:
  - Price charts using a charting library (Recharts — free, works with React)
  - Currency conversion (USD, EUR, GBP)
  - Price alerts (set a target price, show notification when reached — use browser notifications)
  - Responsive design with Shadcn components
  - Dark mode
  - Full TypeScript, TanStack Query, Zustand for local state, React Router

---

#### Day 75 (Week 11) — Deploy & Document

**Full Day (8 hours)**
- Final polish, bug fixes
- Comprehensive README with:
  - Screenshots + GIF demo
  - Architecture diagram (component tree, data flow)
  - Performance optimizations documented
  - Tech stack with reasoning
- Deploy to Vercel
- Push to GitHub
- Record a demo video

---

#### Day 76 (Week 11) — Milestone Check

**Milestone Challenge:**
- **Week 11 Milestone Challenge (timed):**
  Build a mini dashboard with TanStack Query:
  - Fetch data from 2 different API endpoints
  - Show loading/error states
  - Auto-refetch on focus
  - Pagination or infinite scroll
  - One mutation (add/delete something)
  - **Target: 60 minutes**

---

#### Day 77 (Week 11) — REST DAY

Take the day off. You've completed 11 weeks! Review your progress and prepare for the final push.

---

### WEEK 12 — Portfolio Polish & Mock Interviews

**Goal:** Both portfolio projects should be job-application ready. Start intensive interview practice.

**Productive hours target:** 8 hours/day

---

#### Day 78 (Week 12) — Portfolio Review & Polish

**Full Day (8 hours)**
- Review both portfolio projects with fresh eyes:
  - GitHub Explorer: Fix any bugs. Improve UI details. Ensure mobile works.
  - Crypto Dashboard: Same treatment.
- For each project, make sure:
  - README is comprehensive (screenshots, tech stack, architecture, setup instructions)
  - Code is clean (no `console.log`, no unused imports, consistent formatting)
  - Types are correct (no `any` unless justified)
  - Loading and error states are polished
  - Mobile layout works well
  - Lighthouse score > 90 for performance and accessibility
  - Deployed and live on Vercel

---

#### Day 79 (Week 12) — Interview Prep: Behavioral

**Morning Block (3 hours) — Theory**
- Prepare answers for common frontend interview questions:
  - "Tell me about yourself" (1-minute pitch focused on React skills and projects)
  - "Walk me through a challenging technical problem you solved"
  - "Why did you choose [tech/tool] for your project?"
  - "How do you approach debugging?"
  - "What's your development process?"
  - "How do you handle working on something you've never done before?"
- Write out and practice each answer out loud (yes, out loud)

**Afternoon Block (5 hours) — Practice**
- Mock interview simulation (self-directed):
  1. Set a timer for 5 minutes. Explain your GitHub Explorer project as if presenting to an interviewer. Include: what it does, tech choices, architecture, challenges, what you'd improve.
  2. Timer for 45 minutes. Build a coding challenge: Create a paginated list from an API with search and filtering. Explain your approach out loud as you code.
  3. Review your performance. Were you clear? Did you explain your reasoning?

---

#### Day 80 (Week 12) — Interview Prep: Technical Concepts

**Morning Block (3 hours) — Theory**
- Study these frequently asked concepts:
  - Virtual DOM: How it works, why it matters
  - React lifecycle: Mounting, updating, unmounting in functional components (hooks)
  - State vs props
  - Controlled vs uncontrolled components
  - Keys in React and why they matter
  - useEffect cleanup and when it runs
  - Closure in React hooks (stale closures)
  - React Strict Mode and why components render twice in dev
- For each: Write a 2-3 sentence explanation. Then write a code example that demonstrates it.

**Afternoon Block (5 hours) — Practice**
- Speed coding challenges (simulate interview conditions):
  1. Build a searchable, filterable table. Timer: 20 min.
  2. Build a multi-step form with validation. Timer: 25 min.
  3. Build a real-time search with debounce fetching from an API. Timer: 15 min.
  4. Build a todo app with undo/redo. Timer: 20 min.

---

#### Day 81 (Week 12) — Mock Interview Day

**Full Day (8 hours)**
- 3 full mock interview simulations:

**Mock 1 (90 min) — Easy:**
- Build a user directory from JSONPlaceholder. Grid of cards, search by name, click for detail. Target: 30 min.
- After building: 15 min of explaining your code decisions
- Self-review: 15 min

**Mock 2 (90 min) — Medium:**
- Build a movie search app with TMDB API. Search, results grid, detail page, favorites. Target: 40 min.
- After building: 15 min of explaining
- Self-review: 15 min

**Mock 3 (90 min) — Hard:**
- Build a mini project management board. 3 columns, add/move/delete tasks, persist in localStorage. Target: 45 min.
- After building: 15 min of explaining
- Self-review: 15 min

---

#### Day 82 (Week 12) — Frontend System Design

**Morning Block (3 hours) — Theory**
- Study frontend system design concepts:
  - Component architecture: how to break down a complex UI
  - State management: when to use local vs global vs server state
  - API layer design: abstraction, error handling, caching strategies
  - Performance: lazy loading, virtualization, code splitting, image optimization
  - Accessibility: semantic HTML, ARIA, keyboard navigation
- Practice: Design a Twitter-like feed (component tree, state management plan, API structure, performance considerations) on paper. 30 min.

**Afternoon Block (5 hours) — Practice**
- Implement the Twitter-like feed you designed using [JSONPlaceholder](https://jsonplaceholder.typicode.com/):
  - Post feed with infinite scroll
  - Create post
  - Like/unlike
  - User profile page
  - Follow system (mock)
- Target: 2.5 hours for working version

---

#### Day 83 (Week 12) — Application Prep

**Full Day (8 hours)**
- Create/update your resume:
  - Highlight React, TypeScript, Tailwind, testing skills
  - Feature both portfolio projects with live links and GitHub repos
  - Quantify where possible ("Built a React app consuming 5+ API endpoints with full TypeScript coverage")
- Create/update your LinkedIn:
  - Post about what you've been learning (share a project)
  - Connect with frontend developers at startups you're interested in
- Create a portfolio website (optional but recommended — can be a simple Vercel-deployed page listing your projects)
- Research 10 product-based startups/companies you'd like to apply to

---

#### Day 84 (Week 12) — REST DAY

---

### WEEK 13 — Interview Sprint

**Goal:** Simulate real interview conditions every day. Build speed and confidence under pressure. Apply to jobs.

**Productive hours target:** 8–10 hours/day

---

#### Day 85 (Week 13) — Daily Mock Interview + Apply

**Morning Block (3 hours) — Mock Interview**
- Full simulation: 45-minute coding challenge (pick a random API from [Public APIs](https://github.com/public-apis/public-apis), build something with list + detail + search + filter)
- 15 min: Explain your code and decisions out loud
- 15 min: Self-review using rubric (see Section 7)
- 15 min: Fix any issues, refactor

**Afternoon Block (5 hours) — Apply & Prep**
- Apply to 5 jobs (LinkedIn, AngelList/Wellfound, company career pages)
- Tailor resume for each application
- Research each company's product — be ready to discuss it

**Speed Drill (30 min)**
- Random challenge: Timer on. Build any app from memory. Target: Keep pushing your best time.

---

#### Days 86–90 (Week 13) — Repeat the Pattern

Each day follows the same structure:

**Morning: Mock Interview (3 hours)**
- Pick a new API and challenge each day:
  - Day 86: Build a weather app with city comparison
  - Day 87: Build a recipe search with meal planner
  - Day 88: Build an e-commerce product page with cart
  - Day 89: Build a dashboard with charts and data tables
  - Day 90: Build a social media feed with posts and profiles
- Increasing difficulty and time pressure each day

**Afternoon: Apply + Learn (5 hours)**
- Apply to 3–5 more jobs each day
- Research companies you've applied to
- Practice answering behavioral questions
- Review and refine your portfolio projects if needed

---

#### Day 91 (Week 13) — Final Day: Celebration & Next Steps

**Morning Block (3 hours)**
- Final PokeAPI Challenge. One last time. Timer on.
  - Your target: under 15 minutes for full TypeScript, routed, styled app.
  - Record your time. Compare to Day 4. Feel that.
- Review your time log from Day 1. Look at the journey.

**Afternoon Block (3 hours)**
- Write a "letter to yourself" about what you've accomplished:
  - Skills gained
  - Projects built
  - Speed improvements
  - Confidence changes
- Plan your ongoing learning: What's next? (Next.js? Full-stack? Mobile with React Native?)
- Celebrate. You've put in the work. The results will come.

**REST OF THE DAY: Celebrate.**

---

## 4. Weekly Milestones & Self-Assessment

### Week 1 Milestone
- **Can do:** Fetch data from any API and display it in a card grid
- **Mini-challenge:** Build a card grid from any new API in 15 min
- **Checklist:** [ ] Can create components from scratch [ ] Can use useState and useEffect [ ] Can fetch and display API data [ ] Can handle loading/error states [ ] Can use `.map()` to render lists

### Week 2 Milestone
- **Can do:** Build a multi-page app with React Router v7, debug issues systematically
- **Mini-challenge:** Build list → detail navigation with dynamic routes in 12 min
- **Checklist:** [ ] Can set up React Router from memory [ ] Can use useParams, useNavigate, useSearchParams [ ] Can build nested routes with Outlet [ ] Can follow the debugging checklist without skipping steps [ ] Can read and understand error messages

### Week 3 Milestone
- **Can do:** Write TypeScript React components confidently
- **Mini-challenge:** Build a typed fetch + display component in 12 min
- **Checklist:** [ ] Can type props, state, and events without looking up syntax [ ] Can create interfaces for API responses [ ] Can use basic generics [ ] Can use Partial, Pick, Omit [ ] TypeScript adds less than 5 min overhead to any task

### Week 4 Milestone
- **Can do:** Build complex apps with custom hooks, context, and composition
- **Mini-challenge:** Build a full app (API + routing + dark mode + context) in 60 min
- **Checklist:** [ ] Can write custom hooks from scratch [ ] Can implement typed Context [ ] Can use useReducer for complex state [ ] Can build compound components [ ] Can plan an app architecture on paper in 5 min

### Week 5 Milestone
- **Can do:** Choose and implement the right state management approach
- **Mini-challenge:** Build a CRUD app with Zustand in 45 min
- **Checklist:** [ ] Can articulate when to use useState vs Context vs Zustand [ ] Can set up Zustand store with persist middleware [ ] Can identify derived state vs stored state [ ] Understand Redux Toolkit basics [ ] No unnecessary prop drilling in any project

### Week 6 Milestone
- **Can do:** Write performance-aware React code with reusable patterns
- **Mini-challenge:** Build an app with 3+ custom hooks, code splitting, and memoization in 60 min
- **Checklist:** [ ] Can explain useMemo vs useCallback [ ] Can write 5+ custom hooks from memory [ ] Can implement code splitting [ ] Can use Error Boundaries [ ] Can profile and fix re-render issues

### Week 7 Milestone
- **Can do:** Build professional-looking UIs with Shadcn/ui quickly
- **Mini-challenge:** Build a dashboard with Shadcn (table + forms + dialogs) in 60 min
- **Checklist:** [ ] Can set up Shadcn in a new project in 5 min [ ] Can implement validated forms with React Hook Form + Zod [ ] Can build responsive layouts [ ] Can pass a Lighthouse a11y audit [ ] Apps look professional, not "student projects"

### Week 8 Milestone
- **Can do:** Ship a portfolio-worthy project with testing
- **Checklist:** [ ] GitHub Explorer is deployed, polished, and tested [ ] README is comprehensive [ ] Demo video recorded [ ] Code is clean enough for a code review

### Week 9 Milestone
- **Can do:** Write meaningful tests for React applications
- **Checklist:** [ ] Can write unit tests for Zustand stores [ ] Can write component tests with RTL [ ] Can write integration tests [ ] Can mock API calls with MSW [ ] Understand testing philosophy (behavior over implementation)

### Week 10 Milestone
- **Can do:** Use TanStack Query and optimize React performance
- **Checklist:** [ ] Crypto Dashboard is deployed, polished, and performant [ ] Can use useQuery, useMutation, useInfiniteQuery [ ] Can profile and optimize React performance [ ] Can implement virtualization for long lists

### Week 11 Milestone
- **Can do:** Perform well in mock interviews, have job-ready materials
- **Checklist:** [ ] Can explain any technical decision in your projects [ ] Can complete a coding challenge in 30 min under pressure [ ] Resume is updated [ ] Portfolio is live [ ] Applied to first batch of jobs

### Week 12 Milestone
- **Can do:** Interview with confidence, build fast under pressure
- **Checklist:** [ ] PokeAPI challenge in under 15 min [ ] Can build any standard CRUD app in under 30 min [ ] Applied to 20+ positions [ ] Can explain React concepts clearly [ ] Confident in your abilities (backed by evidence)

---

## 5. Project Portfolio Roadmap

### Foundation Exercises (Not Projects — Skill Builders)

Before the portfolio projects, your friend's assignments serve as foundational exercises throughout the plan:

| Exercise Set | When You Do Them | What They Build |
|-------------|------------------|-----------------|
| Flexbox 1–6 | Days 1, 4 | Layout confidence — you can't build UIs without solid flex skills |
| CSS Grid, Animations | Day 4 | Grid layouts, transitions — completes your CSS toolbox |
| JS Drills (90+ exercises) | Days 3, 15 | JavaScript fluency — fast, automatic JS problem solving |
| Todo List (vanilla JS) | Day 2 | DOM manipulation pain → appreciate React's declarative model |
| Calculator | Day 5 | DOM events, string manipulation, error handling |
| Water Count Tracker | Day 5 | State + persistence in vanilla JS — same patterns you'll use in React with useState + localStorage |
| Sign-Up Form | Day 6 | Forms + regex validation in raw JS — appreciate React Hook Form later |
| RGB Color App | Day 12 | Advanced DOM traversal, flex ordering — complex DOM manipulation |
| Responsive pages (11–18) | Days 8–9, 46 | Media queries, Bootstrap grids — foundation for Tailwind responsive |
| Phone Dialer UI (19) | Day 44 | Mobile UI patterns — rebuild with Shadcn for dramatic comparison |
| Weather Dashboard mockup (20) | Day 22 | Static design → functional React app with live API data |
| Friend's React projects | Days 25, 29, 45 | Study patterns: HOCs, MobX stores, forms — understand the evolution to modern hooks |

### Project 1: PokeAPI Explorer (Weeks 1–2, recurring speed drill)
- **Description:** Grid of Pokémon cards with search, pagination, and detail view
- **Skills practiced:** React fundamentals, API fetching, React Router, component architecture
- **Estimated time:** Day 4: 90 min → Day 84: under 15 min
- **Stretch goals:** Type-based filtering, favorites, compare two Pokémon
- *Not portfolio-worthy — this is a training tool*

### Project 2: Movie Browser (Week 2)
- **Description:** Browse trending movies, search, filter by genre, detailed movie pages
- **Skills practiced:** React Router v7 (nested routes, search params), API integration, pagination
- **Estimated time:** 3–4 hours
- **Stretch goals:** Similar movies, actor filmography, watchlist
- *Not portfolio-worthy — training project*

### Project 3: E-commerce Product Catalog (Week 5)
- **Description:** Product browsing with filters, sorting, cart management, order summary
- **Skills practiced:** Zustand, useReducer, complex state, derived state
- **Estimated time:** 5–6 hours
- **Stretch goals:** Wishlist, recently viewed, stock management
- *Borderline portfolio-worthy — good for demonstrating state management*

### Project 4: Recipe Finder with Meal Planner (Week 6)
- **Description:** Browse recipes by category, search, favorites, weekly meal planner
- **Skills practiced:** Custom hooks, advanced patterns, Zustand, composition
- **Estimated time:** 5–6 hours
- **Stretch goals:** Grocery list generator, nutritional info, share meal plan
- *Borderline portfolio-worthy*

### Project 5: GitHub Repository Explorer (Week 8) — PORTFOLIO PROJECT
- **Description:** Search GitHub users, browse repos, compare users, trending repos, bookmarks
- **Skills practiced:** Everything from Weeks 1–7, testing, professional code quality
- **Estimated time:** ~30 hours over 1 week
- **Stretch goals:** React Query caching, contribution charts, PWA support
- **Why it's portfolio-worthy:** Shows API integration skills, complex state management, TypeScript, testing, clean architecture, professional UI

### Project 6: Real-time Crypto Dashboard (Week 10) — PORTFOLIO PROJECT
- **Description:** Live crypto prices, portfolio tracker, price charts, alerts, currency conversion
- **Skills practiced:** TanStack Query, performance optimization, real-time data, charts
- **Estimated time:** ~30 hours over 1 week
- **Stretch goals:** WebSocket for real-time prices, price prediction mockup, social sentiment
- **Why it's portfolio-worthy:** Shows performance optimization, data visualization, TanStack Query, real-time patterns — impressive and practical

---

## 6. Resource Library

### Essential (Must Use)

**Official Documentation**
- [React docs](https://react.dev/) — The new React docs are excellent. Read them.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/) — Official and comprehensive
- [React Router docs](https://reactrouter.com/) — Essential for routing
- [Zustand GitHub](https://github.com/pmndrs/zustand) — Simple, well-documented
- [TanStack Query docs](https://tanstack.com/query/latest) — Best data-fetching library docs
- [Shadcn/ui docs](https://ui.shadcn.com/) — Component reference
- [Tailwind CSS docs](https://tailwindcss.com/docs) — CSS framework reference

**YouTube Channels**
- [Jack Herrington](https://www.youtube.com/@jherr) — **Essential.** Best React + TypeScript tutorials. No fluff.
- [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) — Clear explanations of React concepts
- [Fireship](https://www.youtube.com/@Fireship) — Quick concept overviews (100 seconds series)

**Blogs**
- [Josh Comeau's blog](https://www.joshwcomeau.com/) — **Essential.** Deep, visual explanations of React and CSS
- [Kent C. Dodds' blog](https://kentcdodds.com/blog) — Testing and React patterns
- [TkDodo's blog](https://tkdodo.eu/blog/) — TanStack Query best practices

**Cheat Sheets**
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) — Bookmark this. Reference daily.

### Optional (Helpful but Not Required)

**Courses**
- [Scrimba — Learn React for Free](https://scrimba.com/learn/learnreact) — Interactive, good for reinforcing basics (Free)
- [Total TypeScript — Beginners Tutorial](https://www.totaltypescript.com/tutorials/beginners-typescript) — Free, excellent for TS fundamentals

**YouTube (Supplementary)**
- [Theo Browne (t3)](https://www.youtube.com/@t3dotgg) — Frontend ecosystem opinions and discussions
- [Traversy Media](https://www.youtube.com/@TraversyMedia) — Good project-based tutorials
- [Codevolution](https://www.youtube.com/@Codevolution) — Systematic React tutorials

**Podcasts**
- [Syntax.fm](https://syntax.fm/) — Frontend web development podcast (listen during rest time)

**Practice Platforms**
- [Frontend Mentor](https://www.frontendmentor.io/) — Real design-to-code challenges (Free tier available)
- [DevChallenges](https://devchallenges.io/) — Real-world project challenges

**APIs for Practice**
- [Public APIs list](https://github.com/public-apis/public-apis) — Massive list of free APIs categorized by topic

---

## 7. Mock Interview Schedule

### Weekly Format (Starting Week 4)

**Solo Mock Interview Protocol (60–90 min):**
1. Pick a random API from the [Public APIs list](https://github.com/public-apis/public-apis)
2. Set requirements (write them on paper — like an interviewer would give you):
   - "Build a home page showing a list/grid of [items]. Add search. Click an item to see its detail page."
3. Start timer. Build it.
4. After building: Spend 10 min explaining your code decisions out loud (pretend someone is listening)
5. Self-evaluate using the rubric below

### Difficulty Progression

**Easy (Weeks 4–5) — 30 min target:**
- Simple list + detail (one API endpoint, basic display)
- Examples: Random users, dog breeds, country info, quotes

**Medium (Weeks 6–8) — 40 min target:**
- List + detail + search + filter + favorites
- Examples: Movie search, recipe finder, job listings, book search

**Hard (Weeks 9–12) — 45 min target:**
- CRUD operations, multiple state domains, forms, complex UI
- Examples: Task board, e-commerce cart, dashboard with charts, social feed

### Self-Evaluation Rubric

Score each area 1–5 after every mock:

| Area | 1 (Struggling) | 3 (Competent) | 5 (Confident) |
|------|----------------|---------------|----------------|
| **Planning** | Jumped into code with no plan | Sketched components before coding | Drew component tree, planned state, identified data flow in < 3 min |
| **Speed** | Missed the time target by 50%+ | Hit the time target (±10%) | Finished early with time for extras |
| **Code Quality** | Messy, no structure | Organized components, some types | Clean architecture, full types, no redundant state |
| **Error Handling** | No loading/error states | Basic loading spinner | Skeleton loaders, error boundaries, retry logic, empty states |
| **Debugging** | Panicked when something broke | Fixed errors by reading messages | Systematic debugging, fixed issues in < 2 min each |
| **Communication** | Couldn't explain decisions | Explained what, but not why | Clearly articulated trade-offs and alternatives |

**Target scores by week:**
- Week 4: Average 2.5
- Week 8: Average 3.5
- Week 12: Average 4.5

### How to Practice Alone

1. **Record yourself** (screen + audio) during the mock. Watch it back. Cringe. Improve.
2. **Talk out loud** while coding — narrate your thought process. "I'm going to start by fetching the data... I'll need a loading state here... I'll use useParams to get the ID..."
3. **Use a random challenge generator:** Write 20 challenge descriptions on paper strips. Pull one randomly. Build it.
4. **Post your code on Reddit** ([r/reactjs](https://www.reddit.com/r/reactjs/)) or Discord communities and ask for feedback.
5. **Find a mock interview partner:** Use [Pramp](https://www.pramp.com/) (free) for peer mock interviews.

---

## 8. Confidence & Mindset Guide

### Daily Confidence Habits

1. **Time logging:** Record your build times every day. Plot them weekly. The downward trend is your confidence engine.
2. **"I built this" list:** At the end of each day, write one sentence: "Today I built ___." After 12 weeks, you'll have 72 entries. That's proof of ability.
3. **Teach-back:** After learning something new, explain it out loud in simple terms (or write a 3-sentence explanation). If you can teach it, you know it.
4. **Compare to your past self, not to others.** The only benchmark that matters: "Can I do things today that I couldn't do last week?"

### How to Handle Getting Stuck

Follow this protocol (the **STOP Method**):

1. **S — Stop** panicking. Take 3 deep breaths. Getting stuck is normal and expected.
2. **T — Think** about what you're actually trying to do. State the problem in one sentence.
3. **O — Observe** the evidence. Read the error message. Check the console. Check the Network tab. Console.log the relevant data.
4. **P — Proceed** with one small action. Change one thing and see what happens. Google the exact error message. Check the docs for the specific function/hook you're using.

**Rule:** If you're stuck for more than 15 minutes on the same problem, you MUST take a 5-minute break (walk away from the screen), then return and re-read the error with fresh eyes.

### Progress Tracking Template

Create a spreadsheet or notebook with these columns:

| Date | Day # | Key Activity | Speed Drill Time | What I Built | Stuck On | How I Solved It | Confidence (1-10) |
|------|-------|-------------|------------------|-------------|----------|----------------|-------------------|
| | | | | | | | |

Fill this in every single day. It takes 2 minutes and gives you powerful data about your growth.

### Strategies for Increasing Productive Hours

**Current:** 4–5 hours/day → **Target:** 8–10 hours/day by Week 8

**The Ramp-Up Schedule:**
- Weeks 1–2: 5 hours/day (4 Pomodoros of 50/10 + 1 final session)
- Weeks 3–4: 6–6.5 hours/day (5 Pomodoros + 1 longer session)
- Weeks 5–6: 7 hours/day (5 Pomodoros + 1 deep work block of 90 min)
- Weeks 7–8: 7.5–8 hours/day (2 deep work blocks of 90 min + 3 Pomodoros)
- Weeks 9–12: 8 hours/day (comfortable full day)

**Techniques:**
- **Pomodoro (Weeks 1–3):** 50 min work, 10 min break. 4–5 rounds per day. Use a physical timer, not your phone.
- **Deep Work Blocks (Weeks 4+):** 90-minute uninterrupted sessions. Phone in another room. No notifications. No social media. Only code and docs.
- **Environment design:** Work at the same desk, at the same time, every day. Your brain will start associating that space with focused work.
- **Shutdown ritual:** At the end of each day, write tomorrow's plan. Close all tabs. Leave the desk. This trains your brain to fully rest.
- **Energy management:** Hardest tasks in the morning when energy is highest. Speed drills and review in the afternoon. Never code when exhausted — bad code creates more work.

### Dealing with Imposter Syndrome

- **Imposter syndrome is a sign you're growing.** If you felt completely comfortable, you wouldn't be learning.
- **Keep a "wins" file.** Every time something works, something clicks, or you beat your own time — write it down. Read this file when doubt hits.
- **The PokeAPI time log is your antidote.** When you feel "I'm not good enough," look at Day 4 vs your current time. That's objective, undeniable improvement.
- **Remember:** Every senior developer was once a struggling junior. The only difference is they didn't quit during this phase.

---

## 9. Speed Training Protocol

### The API-to-UI Pipeline (Memorize This)

Every time you build from an API, follow these 6 steps. Time yourself on each:

| Step | Action | Target Time |
|------|--------|-------------|
| 1 | Open API endpoint in browser. Study the response shape. | 2 min |
| 2 | Identify which fields the UI needs. Write them down. | 1 min |
| 3 | Sketch the component tree on paper (or in your head). | 2 min |
| 4 | Write the fetch logic with loading/error states. | 5 min |
| 5 | Map data to JSX components. | 5 min |
| 6 | Style with Tailwind. | 5 min |

**Total: 20 min for any API → UI conversion.** Practice until this is muscle memory.

### Pattern Recognition Exercises

These are the 10 most common UI patterns. You should be able to build each one from memory:

1. **Card Grid** — Grid of cards from array data (`.map()` + Tailwind grid)
2. **List → Detail** — Click item in list → navigate to detail page with `useParams`
3. **Search + Filter** — Input field + filter logic + display filtered results
4. **Pagination** — Page buttons + API offset/limit params
5. **Infinite Scroll** — Intersection Observer + append to list
6. **Form + Validation** — Controlled inputs + validation logic + error display
7. **Modal/Dialog** — Toggle visibility + portal rendering + focus trap
8. **Tabs** — Tab headers + conditional content rendering
9. **Accordion** — Expandable/collapsible sections
10. **Toast/Notification** — Temporary messages that auto-dismiss

**Drill:** Pick 3 random patterns from this list each day. Build each one in under 5 minutes.

### Keyboard Shortcuts & Tooling Efficiency

**VS Code (learn these first week, use every day):**
- `Cmd/Ctrl + P` — Quick open file
- `Cmd/Ctrl + Shift + P` — Command palette
- `Cmd/Ctrl + D` — Select next occurrence
- `Cmd/Ctrl + Shift + L` — Select all occurrences
- `Alt + Up/Down` — Move line up/down
- `Cmd/Ctrl + Shift + K` — Delete line
- `Cmd/Ctrl + /` — Toggle comment
- `Cmd/Ctrl + B` — Toggle sidebar
- `Cmd/Ctrl + `` ` — Toggle terminal
- `Ctrl + Tab` — Switch between open files

**React Snippets (ES7+ extension):**
- `rafce` — React Arrow Function Component Export
- `useState` — useState snippet
- `useEffect` — useEffect snippet

**Emmet (built into VS Code, use in JSX):**
- `div.container>div.card*3` → Generates 3 nested divs with classes
- `ul>li*5` → Generates ul with 5 li elements

**Browser DevTools:**
- `Cmd/Ctrl + Shift + I` — Open DevTools
- `Cmd/Ctrl + Shift + C` — Inspect element mode
- `Cmd/Ctrl + Shift + M` — Device emulation mode

**Terminal:**
- Learn to use your terminal efficiently. Alias common commands:
  ```
  alias dev="npm run dev"
  alias nv="npm create vite@latest"
  ```

### Daily Speed Drill Format

Every day, do at least one 15-30 minute speed drill:

1. **Set a timer** (phone timer or [timer.guru](https://timer.guru/))
2. **Pick a challenge** (new API, or rebuild a pattern from memory)
3. **Start from scratch** (`npm create vite@latest` or use a pre-configured template)
4. **Build as fast as possible** — functionality first, styling second
5. **Record your time** in your tracking spreadsheet
6. **Review:** What slowed you down? What was automatic?

**🔹 Friend's Projects as Speed Drill Alternatives:**
When you want variety, rebuild one of your friend's projects in React as a timed drill:
- **Calculator** → React version with `useState` for expression. Target: 15 min.
- **Todo list** → React version with add/delete/filter/localStorage. Target: 12 min.
- **Water count tracker** → React version with `useState` + `useLocalStorage` hook. Target: 15 min.
- **RGB color app** → React version with state for colors and flex order. Target: 20 min.
- **Sign-up form** → React version with React Hook Form + Zod. Target: 15 min.
- **Emoji memory game** (from `reactjs-projects`) → Rebuild with hooks + TypeScript. Target: 25 min.
- **Countries dashboard** (from `reactjs-projects`) → Rebuild with hooks + Zustand. Target: 20 min.

These are excellent drills because you already know *what* to build — you just need to build it *fast* in modern React.

**The goal is not perfection — it's speed.** Clean code comes after fast code. First make it work, then make it good.

---

## Final Words

This plan is a lot. But remember — you don't have to see the whole staircase to take the first step.

Tomorrow, do Day 1. Just Day 1. Don't think about Week 12.

The day after that, do Day 2. Just Day 2.

Stack these days. Trust the process. The speed will come. The confidence will come. It always does for people who show up and do the reps.

You already know more than you think you do. This plan isn't about learning React from scratch — it's about **unlocking what's already in your head** and making it fast, reliable, and confident.

You've got this. Now go build something.
