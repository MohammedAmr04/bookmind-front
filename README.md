# 📝 X-Bookmarks Intelligence SaaS (X-Brain)

## 🎯 Vision

Transform messy X (Twitter) bookmarks into a structured **Personal Knowledge Base**  
that is:

- 🔍 Semantically searchable  
- 🧠 AI-organized  
- 🌐 Visually represented as a Knowledge Graph  

---

# 🏗️ Architecture Overview

## 1️⃣ Data Ingestion Layer

### 🔹 Tool: Browser Extension (Chrome / Edge)

### 🔹 Mechanisms:

- **DOM Scraping**
  - Extract visible tweet content from the Bookmarks page.

- **Network Interception**
  - Intercept JSON responses from `api.twitter.com` to obtain clean structured data.

- **Sync Button**
  - Inject a custom button inside the X Bookmarks page.
  - Allows user-triggered manual synchronization.

---

## 2️⃣ AI & Processing Layer

### 🔹 LLM Strategy

- Use cost-efficient models:
  - GPT-4o-mini  
  - Claude Haiku  

### 🔹 Global Cache Strategy

To minimize token usage:

- Store processed tweets in a shared table: `Global_Tweets`.
- If a new user bookmarks an already-processed tweet:
  - Instantly link it.
  - ❌ No additional AI token consumption.

### 🔹 AI Tasks

For each new tweet:

- 📝 Generate AI Summary  
- 🏷️ Extract Tags / Categories  
- 📊 Generate Vector Embedding  

---

## 3️⃣ Database Architecture

### 🔹 Relational Database

- **PostgreSQL**
  - User management
  - Subscriptions
  - Relationships

### 🔹 Vector Database

- **PGVector**
  - Store embeddings
  - Enable semantic search

---

## 📂 Core Tables

### 👤 Users
- id
- email
- subscription_plan
- created_at

### 🌍 Global_Tweets
- tweet_id
- content
- ai_summary
- embedding (vector)
- created_at

### 🔖 User_Bookmarks
- user_id
- tweet_id
- personal_notes
- saved_at

### 🏷️ Tags
- id
- name
- type (auto/manual)

---

# 🛠️ Tech Stack

## 🎨 Frontend
- Next.js  
- Tailwind CSS  
- Shadcn UI  

## ⚙️ Backend
- FastAPI (Python)
  - Ideal for AI + Vector workflows

## 🔐 Authentication
- NextAuth.js (Twitter OAuth 2.0)

## 📊 Graph Visualization
- react-force-graph  
- OR D3.js  

---

# 💰 Monetization Model (SaaS)

## 🆓 Free Tier
- Sync up to 50 tweets
- Basic search

## 💎 Premium Tier
- Unlimited sync
- AI Chat (Ask your bookmarks)
- Knowledge Graph View
- Export to Notion / Obsidian

---

# 🚀 Action Plan

## Phase 1
- Build Chrome Extension
- Extract:
  - tweet_id
  - text
- Print results in console

## Phase 2
- Build Backend API
- Receive tweets
- Store in PostgreSQL

## Phase 3
- Integrate OpenAI API
- Implement:
  - Categorization
  - Embeddings
- Activate Global Cache strategy

## Phase 4
- Build Dashboard
- Display categorized tweets
- Enable semantic search

---

# 🧠 Future Expansion Ideas

- Auto clustering similar tweets
- Topic timeline visualization
- Smart weekly knowledge digest
- Cross-platform support (Reddit, LinkedIn)

---

## 🔥 X-Brain Goal

Turn bookmarks into intelligence.