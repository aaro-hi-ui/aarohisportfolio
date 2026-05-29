# Aarohi Gangwar — AI/ML Developer & Web Engineer

A premium, interactive, dark-mode-first portfolio showcasing machine learning, natural language processing, and full-stack web engineering projects. 

Live Local Preview: [http://localhost:5173/](http://localhost:5173/)

---

## 🌟 Key Features

* **Premium Dark Aesthetic**: Frosted glassmorphism visual cards, animated gradient mesh grids, custom particle floating effects, and elegant text-reveal shimmers.
* **Responsive Layout**: Designed for all viewports, featuring a floating sticky navigation bar with active section tracking and a fluid slide-out mobile menu.
* **Integrated AI/ML Projects**: Highlights real-world AI applications including:
  * **JD Match Resume Scorer**: Instant resume-to-job matching score and bullet suggestions using Gemini.
  * **ShopAssist Support Agent**: Customer care Shopify assistant utilizing structured I/O and function calling.
  * **AI-Based Text Processor**: Advanced machine learning NLP text corrector and summarizer.
  * **Jiva Health Dashboard**: Responsive health analytics visualization panel.
* **Interactive Skill Indicators**: pill-shaped capability badges alongside a highlighted problem-solving banner.
* **Operational Hybrid Contact Form**:
  * **Direct Background Delivery**: Asynchronous API submission via Web3Forms straight to your email inbox.
  * **Failsafe Fallback**: Automatically opens a pre-filled local `mailto` client if no API key is present or if offline.
  * **UX States**: Features interactive submitting loaders and a dedicated checkmark thank-you screen.
* **Google Drive Resume Integration**: Opens your external resume directly in a new browser tab for clean viewing.

---

## 🛠️ Technology Stack

* **Core**: [React 18](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
* **Styling & Motion**: [Tailwind CSS](https://tailwindcss.com/) & [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)
* **Components**: [shadcn/ui](https://ui.shadcn.com/) & [Radix UI Primitives](https://www.radix-ui.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Typography**: Outfit & Inter (Google Fonts)
* **Build Tool**: [Vite](https://vitejs.dev/)

---

## ⚙️ Getting Started

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### 🚀 Local Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aaro-hi-ui/aarohisportfolio.git
   cd aarohisportfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy the example environment file and add your custom API key:
   ```bash
   cp .env.example .env
   ```
   Open the `.env` file and configure your free [Web3Forms](https://web3forms.com) key to enable background email delivery:
   ```env
   VITE_WEB3FORMS_KEY=your_web3forms_access_key_here
   ```

4. **Launch Local Dev Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` to view the website.

5. **Build for Production**:
   Compile and optimize the assets into the `/dist` bundle for deployment:
   ```bash
   npm run build
   ```

---

## 📁 Directory Structure

```text
├── public/                 # Static assets (Favicon, PDF resources)
├── src/
│   ├── assets/             # Images & graphic resources
│   ├── components/         # Page layout & interactive widgets
│   │   ├── ui/             # Atomic shadcn/ui components
│   │   ├── Navigation.tsx  # Floating glass header
│   │   ├── HeroSection.tsx # Rotating ring & typewriter banner
│   │   ├── AboutSection.tsx# Interactive education timeline
│   │   ├── SkillsSection.tsx# Radial pills & problem achievements
│   │   ├── ProjectsSection.tsx# Category grid & view links
│   │   ├── ContactSection.tsx# Hybrid form & contact details
│   │   └── Footer.tsx      # Clean copyright row
│   ├── hooks/              # Custom React observer hooks
│   ├── lib/                # Utility helper functions
│   ├── pages/              # Routing templates (Index, NotFound)
│   ├── App.tsx             # Entry layout router
│   ├── index.css           # Global custom classes & animations
│   └── main.tsx            # Root renderer
├── .env.example            # Environment variables placeholder
├── tailwind.config.ts      # Styles, fonts, and animation specs
└── vite.config.ts          # Build bundler parameters
```

---

## 📄 License

This project is open-source and available under the MIT License.
