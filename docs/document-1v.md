# Recall – Product Screens & UX Plan

SaaS idea: **Turn X (Twitter) bookmarks into a searchable knowledge base with AI summaries and recall features.**

Core concept:
Users save tweets → system syncs bookmarks → extracts knowledge → user can **search, recall, and connect ideas**.

---

# Core Product Flow

Main user journey:

```
User lands on website
        ↓
Login with X
        ↓
Onboarding (connect account + import bookmarks)
        ↓
System imports tweets
        ↓
AI generates summaries & tags
        ↓
User opens dashboard
        ↓
User searches / explores knowledge
        ↓
User adds notes & tags
        ↓
User recalls saved knowledge later
```

This flow creates the **"aha moment"**:
User realizes they can **find ideas from tweets instantly** instead of losing them in bookmarks.

---

# 1. Landing Page

Purpose:
Explain the product and convert visitors into users.

### Sections

```
Hero
How it works
Features
Product Preview
Testimonials / Feedback
Pricing (optional for MVP)
CTA
Footer
```

### Hero Example

```
Turn your bookmarks into a knowledge base

Stop losing ideas in your Twitter bookmarks.
Search, summarize, and recall them instantly.
```

### Feedback Section (Social Proof)

Cards showing quotes:

```
User avatar
User name
Short testimonial
```

Example:

```
"This finally solved my Twitter bookmark chaos."
"I can actually find tweets again."
"The search is insanely fast."
```

### Inspiration

Design inspiration:

- Notion landing pages
- Linear landing page
- Raycast website
- Readwise Reader website

---

# 2. Authentication

Authentication is **X-only for MVP**.

### Screen

```
/login
```

### UI

Single primary button:

```
Continue with X
```

### Why X Login Only

Advantages:

- Instant identity
- Access to bookmarks
- Simpler onboarding
- Less friction

---

# 3. Onboarding Flow

Onboarding is critical for first-time experience.

Goal:
Get user from **login → imported bookmarks → dashboard** quickly.

### Step 1 — Welcome

```
Welcome to Recall

Turn your bookmarks into a searchable knowledge base.
```

CTA:

```
Start importing
```

---

### Step 2 — Connect X

```
Connect your X account to import bookmarks.
```

Button:

```
Connect Account
```

---

### Step 3 — Import Progress

Show progress UI.

Example:

```
Scanning bookmarks...
Importing tweets...
Extracting content...
Generating summaries...
```

Progress bar recommended.

---

### Step 4 — Success Screen

Example message:

```
You're ready 🚀

We imported 128 bookmarks.
Your knowledge base is ready.
```

Button:

```
Open Dashboard
```

---

# 4. Dashboard

Main application screen.

### Layout Structure

```
Sidebar
Top Search
Main Content Area
```

---

### Sidebar Navigation

```
All Items
Tweets
Favorites
Tags
Graph
Daily Recall
Settings
```

---

### Main Area

Displays **tweet knowledge cards**.

Card elements:

```
User avatar
Username
Tweet content
Tags
Notes indicator
Favorite button
```

Hover actions:

```
Open details
Add note
Favorite
Add tag
```

---

### Dashboard Inspiration

UI inspiration:

- Notion dashboard layout
- Linear task lists
- Readwise Reader
- Obsidian knowledge panels

---

# 5. Add Note (Manual Bookmark)

Since bookmarks are synced automatically, the user mainly adds **notes**.

### Screen

```
Add Note Modal
```

Fields:

```
Title
Note (markdown)
Tags
Optional link
```

Use case:

```
User writes idea
User attaches related tweet
User stores knowledge manually
```

---

# 6. Bookmark / Tweet Details Page

This is one of the **most important UI screens**.

### URL

```
/bookmark/:id
```

---

### Layout

```
Tweet Preview
AI Summary
User Notes
Tags
Related Tweets
```

---

### Tweet Preview

Show tweet exactly like original format.

Elements:

```
Avatar
Username
Tweet text
Date
Engagement (likes, replies)
```

---

### AI Summary Section

Box showing structured summary.

Example:

```
Summary

Key ideas
Takeaways
Important concepts
```

---

### User Notes

Editable notes panel.

Features:

```
Markdown support
Quick edit
Save highlights
```

---

### Tags

Example:

```
#AI
#Startups
#Design
#Learning
```

---

### Related Tweets

AI suggests related bookmarks.

Example:

```
Related Ideas
Similar Tweets
Same Topic
```

This creates a **knowledge network**.

---

# 7. Global Search

Search should be **fast and accessible from anywhere**.

### UI

Search opens as **command modal**.

Shortcut:

```
⌘ + K
```

Modal shows:

```
Search tweets
Search notes
Search tags
```

---

### Results Example

```
Tweet result
Tag result
Note result
```

Each result preview includes:

```
Title
Snippet
Tags
```

---

# 8. Knowledge Graph

Visual representation of saved knowledge.

### Screen

```
/graph
```

---

### Graph Structure

Nodes represent:

```
Tweets
Notes
Tags
```

Edges represent:

```
Connections
Shared tags
Related ideas
```

---

### Features

```
Zoom
Pan
Click node to open content
Cluster by topic
```

---

### Graph Inspiration

Graph-style knowledge tools:

- Obsidian graph view
- Roam Research knowledge graph
- Logseq graph view

---

# 9. Settings Page

### URL

```
/settings
```

Sections:

---

### Profile

Fields:

```
Avatar
Username
Bio
Email
```

---

### Connected Account

```
Connected X account
Disconnect option
Reconnect
```

---

### Data Management

```
Export bookmarks
Delete account
Re-import bookmarks
```

---

### AI Settings

Options:

```
Auto summaries on/off
Semantic search on/off
Auto tag generation
```

---

### Notifications

Options:

```
Daily recall email
Weekly insights
Product updates
```

---

# 10. Daily Recall (Future Feature)

Feature for memory reinforcement.

### Concept

Every day user sees:

```
3 random saved bookmarks
```

Goal:

```
Help users remember ideas they saved.
```

Example UI:

```
Daily Recall

Review these saved ideas today:

Tweet 1
Tweet 2
Tweet 3
```

Buttons:

```
Review
Add note
Skip
```

This acts like **spaced repetition for knowledge**.

---

# Future Feature Idea – AI Ask

Possible future feature.

### Concept

User asks questions about saved knowledge.

Example:

```
Ask Recall:

"What did I save about startups?"
```

System responds:

```
Based on your saved tweets:

Tweet A
Tweet B
Tweet C

Summary:
These tweets discuss startup growth strategies.
```

This turns the product into a **personal knowledge AI assistant**.

---

# MVP Screens Summary

For first launch:

```
Landing Page
Login (X OAuth)
Onboarding
Dashboard
Tweet Details
Search Modal
Add Note
Settings
```

Optional after MVP:

```
Knowledge Graph
AI Ask
Daily Recall
Analytics
```

---

# Product Vision

Long term vision:

```
Recall becomes a personal knowledge engine
for everything users save online.
```

Possible future integrations:

```
Twitter/X
Articles
YouTube
Podcasts
Notes
```

Final idea:

```
Your saved content → structured knowledge → searchable brain.
```

---
