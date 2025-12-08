# Kissbu Learns - AI & Technology Blog

A modern, dark-themed blog focused on AI, Machine Learning, RAG systems, and emerging technologies.

**Live Demo:** [kissbulearns.netlify.app](https://kissbulearns.netlify.app)

## 🚀 Features

- **Modern Dark Theme** with glassmorphism effects
- **Responsive Design** for all devices
- **Reading Progress Bar** for articles
- **Auto-generated Table of Contents**
- **Syntax Highlighted Code Blocks**
- **SEO Optimized**

## 📂 Project Structure

```
RAG_A_Study/
├── index.html              # Homepage
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Interactive features
├── articles/
│   └── rag-limitations-and-solutions.html  # Featured article
└── README.md
```

## 🛠️ Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/RAG_A_Study.git
   cd RAG_A_Study
   ```

2. Open in browser:
   - Simply open `index.html` in your browser, or
   - Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx serve
     ```

3. Visit `http://localhost:8000`

## 🌐 Deployment to Netlify

### Option 1: Deploy via GitHub

1. Push this repository to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub account
5. Select this repository
6. Deploy settings:
   - **Branch to deploy:** main
   - **Build command:** (leave empty)
   - **Publish directory:** (leave empty or `.`)
7. Click "Deploy site"
8. Go to "Site settings" → "Domain management" → "Custom domains"
9. Set your subdomain to `kissbulearns`

### Option 2: Drag & Drop

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `RAG_A_Study` folder onto the page
3. Your site will be live instantly
4. Configure custom domain in site settings

## 📝 Adding New Articles

1. Create a new HTML file in `articles/` directory
2. Use the existing article as a template
3. Update `index.html` to add a card linking to the new article

## 📚 Current Articles

1. **Beyond Simple RAG: Understanding Limitations and Building Better AI Chatbots**
   - 12 critical failure points in RAG systems
   - GraphRAG vs Traditional RAG comparison
   - RAG vs Agent Memory
   - Best practices and recommendations

## 🔧 Technologies Used

- HTML5 & CSS3
- Vanilla JavaScript
- Google Fonts (Inter, Fira Code)
- No build tools required - pure static site

## 📄 License

MIT License - feel free to use and modify for your own projects.

---

Built with 💜 for the AI community
