# Neo-Brutalism Presentation: Authenticity and Arbitration

A web-based presentation application built with React, styled with Neo-Brutalism design principles for the review paper "Authenticity and Arbitration: A Conceptual Framework for Human Differentiation in AGI-Saturated Digital Ecosystems."

## Design Theme

This presentation follows **Neo-Brutalism** design principles:
- Pure black (#000000) and white (#FFFFFF) color scheme
- Thick black borders (3-5px)
- High contrast typography
- No gradients or soft shadows
- Geometric shapes and asymmetric layouts
- Bold, uppercase titles

## Features

- 11 comprehensive slides covering the review paper
- Smooth slide transitions with Framer Motion
- Keyboard navigation support
- Responsive Neo-Brutalism design
- Slide progress indicator
- Quick slide access via number keys

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd RM-Presentation
   ```
   Stuff that i do !

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The application will automatically open at `http://localhost:3000`

## Usage

### Navigation Controls

- **Arrow Keys:** Use `←` and `→` to navigate between slides
- **Spacebar:** Move to the next slide
- **Number Keys:** Press `1-9` to jump directly to a specific slide
- **Mouse:** Click "Previous" and "Next" buttons
- **Slide Dots:** Click on any dot to jump to that slide

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `1-9` | Jump to slide 1-9 |

## Project Structure

```
RM-Presentation/
├── src/
│   ├── components/
│   │   └── slides/
│   │       ├── Slide1.jsx    # Title Slide
│   │       ├── Slide2.jsx    # Introduction
│   │       ├── Slide3.jsx    # Problem Statement
│   │       ├── Slide4.jsx    # Literature Review
│   │       ├── Slide5.jsx    # Overview of Existing Work
│   │       ├── Slide6.jsx    # Methodologies Reviewed
│   │       ├── Slide7.jsx    # Comparative Analysis
│   │       ├── Slide8.jsx    # The Trilemma
│   │       ├── Slide9.jsx    # Future Scope
│   │       ├── Slide10.jsx   # Conclusion
│   │       └── Slide11.jsx   # References
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles with Tailwind
├── index.html               # HTML entry point
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies
```

## Slides Overview

1. **Title Slide** - Project introduction and team information
2. **Introduction** - Background, importance, scope, and objectives
3. **Problem Statement** - Crisis of differentiation and central tension
4. **Literature Review** - Research methodology and screening process
5. **Overview** - Existing approaches and comparison
6. **Methodologies** - DetectGPT, CAPTCHA, Worldcoin, Behavioral Biometrics
7. **Comparative Analysis** - Detailed comparison table with metrics
8. **The Trilemma** - Core contribution: Usability-Verification-Freewill
9. **Future Scope** - Research gaps and proposed directions
10. **Conclusion** - Key contributions and final insights
11. **References** - Bibliography and Q&A

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## Customization

### Changing Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  'brutal-white': '#FFFFFF',
  'brutal-black': '#000000',
  'brutal-gray-light': '#F5F5F5',
  'brutal-gray-medium': '#CCCCCC',
}
```

### Modifying Slides

Each slide is a separate React component in `src/components/slides/`. Edit the respective `.jsx` file to modify content.

### Adjusting Typography

Font sizes are configured in `tailwind.config.js` under the `fontSize` theme extension.

## Fonts

The presentation uses the following Google Fonts:
- **Inter** - Primary sans-serif font
- **Space Grotesk** - Alternative display font
- **JetBrains Mono** - Monospace font for code/data

## Accessibility

- High contrast (WCAG AAA compliant)
- Keyboard navigation support
- Semantic HTML structure
- Clear visual hierarchy

## Team

**Team 163**
- Bharath Hegde
- Priyanshu
- Mahananda

**Faculty Advisor:** Veena Mayya

**Institution:** JAIN University, Department of Computer Science (Data Analytics)

## License

MIT License - feel free to use this template for your own presentations.

## Credits

Design inspired by Neo-Brutalism principles and modern web design trends.

---

**For questions or support, please contact Team 163 at JAIN University.**
