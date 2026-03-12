# Qasim Alhardanee - Portfolio Website

A modern, high-performance portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Smooth Navigation**: Fixed navigation double-click issue with proper smooth scrolling
- **Theme Toggle**: Dark mode (default) and light mode with optimized color contrast
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with optimized animations
- **Accessible**: WCAG AA compliant with proper ARIA labels and semantic HTML
- **SEO Optimized**: Meta tags, structured data, and semantic markup

## 📦 Tech Stack

- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (motion/react)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Space Grotesk + Inter)

## 🎨 Recent Improvements

### 1. Navigation Fix
- ✅ Fixed double-click issue on navigation links
- ✅ Added smooth scrolling to page sections
- ✅ Improved mobile menu closing behavior

### 2. Light Mode Readability
- ✅ Made all borders theme-aware (light/dark)
- ✅ Added explicit text colors to skill pills
- ✅ Improved contrast in skills section
- ✅ Fixed footer border colors

### 3. Contact Section Redesign
- ✅ Simplified to clean icon buttons (Email, LinkedIn, GitHub)
- ✅ Removed complex form for better UX
- ✅ Added hover effects and transitions

### 4. Code Documentation
- ✅ Added comprehensive comments throughout
- ✅ Clear instructions for CV PDF upload
- ✅ Documented component purposes and structure

### 5. Other Updates
- ✅ Updated copyright year to 2026
- ✅ Improved CV download button with clear instructions
- ✅ Added accessibility attributes (aria-labels, rel attributes)

## 📄 How to Add Your CV PDF

To enable CV downloads on your site:

1. **Create your CV PDF** (export from Word, Google Docs, or design tool)

2. **Name the file exactly**: `Qasim-Alhardanee-CV.pdf`

3. **Place it in the public folder**:
   ```
   /apps/web/public/Qasim-Alhardanee-CV.pdf
   ```

4. **That's it!** The download buttons will automatically work:
   - Navigation CV button
   - CV page download button

**Note**: The CV page also has a "Print to PDF" button as a fallback option.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/apps/web/
├── public/
│   └── Qasim-Alhardanee-CV.pdf    # Place your CV here
├── src/
│   ├── app/
│   │   ├── layout.jsx              # Root layout with navigation
│   │   ├── page.jsx                # Homepage
│   │   ├── cv/
│   │   │   └── page.jsx            # CV page
│   │   └── projects/
│   │       ├── page.jsx            # Projects grid
│   │       └── [slug]/
│   │           └── page.jsx        # Project detail page
│   ├── data/
│   │   ├── projects.js             # All 12 projects data
│   │   └── resume.js               # Resume/CV data
│   └── components/                 # Reusable components
```

## 🎯 Key Sections

### Home Page
- **Hero**: Introduction with typing effect
- **Stats Bar**: Key metrics (projects, experience, etc.)
- **Featured Projects**: Top 3 projects
- **Skills**: Technical skills organized by category
- **About**: Personal story and timeline
- **Contact**: Direct contact buttons

### Projects Page
- Grid of all 12 projects
- Filter by category
- Search functionality
- Detailed project pages

### CV Page
- Professional summary
- Work experience
- Education
- Technical skills
- Languages
- Downloadable PDF

## 🎨 Color Palette

### Dark Mode (Default)
- Background: `#0A0A0F`
- Secondary: `#111118`
- Accent: `#6366F1` (Indigo)
- Text: `#F1F5F9`

### Light Mode
- Background: `#FFFFFF`
- Secondary: `#F8FAFC`
- Accent: `#6366F1` (Indigo)
- Text: `#0F172A`

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `/apps/web/src/app/layout.jsx`:

```css
:root {
  --bg-primary: #0A0A0F;
  --bg-secondary: #111118;
  --accent: #6366F1;
}
```

### Adding Projects
Edit `/apps/web/src/data/projects.js` and add a new project object:

```javascript
{
  id: 13,
  slug: "project-name",
  title: "Project Title",
  tagline: "One-line description",
  description: "Longer description...",
  category: "Frontend", // or "Full Stack", "AI/Automation", etc.
  tags: ["React", "Tailwind", "..."],
  demoUrl: "#",
  githubUrl: "#",
  featured: false,
  // ... rest of the fields
}
```

### Updating Resume Data
Edit `/apps/web/src/data/resume.js` to update:
- Personal information
- Work experience
- Education
- Skills
- Languages

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Tips

1. **Images**: All images use proper width/height and lazy loading
2. **Animations**: Respect `prefers-reduced-motion` setting
3. **Code Splitting**: Pages are automatically code-split
4. **Fonts**: Google Fonts loaded with `display: swap`

## 🐛 Troubleshooting

### Navigation not scrolling smoothly?
- Check that your section IDs match the navigation hrefs
- Ensure smooth scroll behavior is enabled in CSS

### CV download not working?
- Verify the PDF file exists at `/apps/web/public/Qasim-Alhardanee-CV.pdf`
- Check the file name matches exactly (case-sensitive)
- Clear browser cache and reload

### Light mode text hard to read?
- All theme colors have been optimized for WCAG AA contrast
- Check your browser's contrast settings if issues persist

## 📝 License

© 2026 Qasim Alhardanee. All rights reserved.

## 🤝 Support

For questions or issues, contact:
- Email: qasimalhardanee@gmail.com
- LinkedIn: [linkedin.com/in/qasim-alhardanee](https://linkedin.com/in/qasim-alhardanee)
- GitHub: [github.com/Qasim-Alhardanee](https://github.com/Qasim-Alhardanee)
