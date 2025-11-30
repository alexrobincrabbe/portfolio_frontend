#  Alex Crabbe — Developer Portfolio
### *Full-Stack Developer • AI & Backend Engineering • Real-Time Systems • Cloud-Native Architecture*

This repository contains the source code for my personal portfolio website.  
It showcases my full-stack projects, technical experience, and includes an **AI-powered personal assistant** built with **FastAPI**, **OpenAI embeddings**, and a small **RAG pipeline** based on my CV and background documents.

**Live Portfolio:** https://www.alex-crabbe.vercel.app  

---

##  Tech Stack

### **Frontend**
- React
- Vite  
- TypeScript  
- TailwindCSS  
- Framer Motion  
- Custom chat UI for AI assistant  
- Deployed on **Vercel**

### **Backend**
- FastAPI (Python)  
- OpenAI embeddings for vector search  
- RAG workflow (CV + PDF documents)  
- Email sending API for the contact form  
- Deployed on Heroku

### **AI**
- OpenAI API  
- Embedding generation  
- Vector search  
- Context assembly + streaming chat responses  

---

##  Features

###  AI-powered personal assistant
Visitors can ask questions about me, my skills, experience, background, or projects.  
The chatbot uses:

- Embeddings of my CV + personal PDFs  
- A FastAPI backend endpoint for retrieval  
- Vector similarity search  
- OpenAI chat completions  
- A custom chat UI with typing animation

---

###  Home Page
- Intro + animated hero section  
- AI assistant embedded on the page  
- Clean layout optimised for employers  

---

### Projects Page
A curated list of my key work:

- **Mood Gardens** — AI-generated emotional gardens  
- **Boojum Games** — real-time multiplayer games (Django Channels)  
- **Hackathon AI apps**  
- **MRI Tumour Classifier** (ML project)  
- And more…

Each project includes:
- Description  
- Technology stack  
- Links to GitHub and live demos  

---

### Contact Page
A simple contact form that sends messages directly to my email via the backend.

The FastAPI backend:
- Accepts validated form submissions  
- Sends an email to my inbox  

---

## Architecture Overview

### RAG Architecture (Backend)

- PDF + CV text extraction
- Embedding generation (OpenAI)
- Vector store precomputed
- Query → embedding → nearest-neighbour retrieval
- Context built from top matches
- OpenAI completion with user query + context
- Response streamed to frontend chat UI

