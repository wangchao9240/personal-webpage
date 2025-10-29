# Stitch UI Generation Prompt - Hero Section

**Component:** Personal Portfolio Hero Section  
**Design Style:** Code Aesthetics - Modern Developer Portfolio  
**Target Tool:** Stitch / Figma / v0  
**Date:** 2025-10-29

---

## 📋 COMPLETE PROMPT FOR STITCH

Copy the text below and paste directly into Stitch:

---

### PROMPT START ↓

Design a modern, full-screen hero section for a developer portfolio website with a "Code Aesthetics" theme. The design should immediately capture attention while showcasing technical sophistication.

**LAYOUT STRUCTURE:**

Create a full-viewport-height (100vh) hero section with these layers:

1. **Background Layer:**
   - Deep dark blue-black gradient (#0a0e1a to #050810)
   - Overlay with animated geometric code pattern (abstract floating code symbols: {, }, [, ], <, >, ;, .)
   - Particles in cyan (#00d9ff), purple (#bd93f9), and green (#50fa7b) with subtle glow effects
   - Low opacity (15-25%) to not overpower foreground content
   - Suggest subtle animation paths with motion blur

2. **Foreground - Center Content:**
   - Vertically and horizontally centered terminal window
   - Terminal window specifications:
     * Width: 700px
     * Auto height based on content (~400px)
     * Background: Very dark gray (#0d1117)
     * Border: 1px subtle gray (#30363d)
     * Border radius: 12px
     * Large drop shadow (0 20px 60px rgba(0,0,0,0.5))

3. **Terminal Window Details:**
   
   **Header Bar (40px height):**
   - Slightly lighter dark background (#161b22)
   - Three macOS-style traffic light dots on the left (12px from edge, 8px apart):
     * Red (#ff5f56)
     * Yellow (#ffbd2e)
     * Green (#27c93f)
   - Centered title text "Terminal" in muted gray (#8b949e), small font

   **Code Content Area:**
   - Padding: 24px all sides
   - Background: Terminal dark (#0d1117)
   - Display this code with syntax highlighting:

```javascript
const skills = {
  frontend: ['React', 'Vue', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
  backend: ['Node.js', 'Express'],
  tools: ['Git', 'CMS management', 'SSR']
}█
```

   **Color Scheme for Syntax:**
   - `const` keyword: Pink (#ff79c6)
   - `skills` variable: Terminal green (#00ff41)
   - Property names (frontend, backend, tools): Light green (#50fa7b)
   - Strings (in quotes): Yellow (#f1fa8c)
   - Punctuation ({, }, [, ], :, ,): Muted gray (#8b949e)
   - Cursor (█): Bright green (#00ff41)

   **Typography:**
   - Font: Fira Code or Consolas (monospace)
   - Font size: 18px
   - Line height: 1.6
   - Suggest visual indication of typewriter effect (partial text or cursor position)

4. **Run Button (Below Terminal):**
   - Position: 40px below terminal window, horizontally centered
   - Size: 180px × 50px
   - Style: Outline button with 2px border
   - Border color: Cyan (#00d9ff)
   - Background: Transparent (default state)
   - Text: "▶ RUN CODE" in cyan (#00d9ff), uppercase, semi-bold (16px)
   - Border radius: 8px
   
   **Show two button states:**
   - Default: Outlined style
   - Hover: Filled background (#00d9ff), text becomes dark (#0a0e1a), slight lift shadow effect

**OVERALL DESIGN PRINCIPLES:**

- Minimalist and clean
- Dark theme optimized for developers
- High contrast for readability
- Professional yet creative
- Subtle animations suggested (don't overdo)
- Code-centric aesthetic with terminal/IDE vibes

**COMPOSITION GUIDELINES:**

- Center the terminal window both vertically and horizontally
- Ensure ample breathing room around elements
- Background particles should be abstract and artistic, not cluttered
- Terminal should be the clear focal point
- Button should be secondary but noticeable

**COLOR PALETTE REFERENCE:**

Background: #0a0e1a (dark blue-black)
Terminal BG: #0d1117 (GitHub dark)
Terminal Green: #00ff41
Cyan Accent: #00d9ff
Purple Accent: #bd93f9
Green Accent: #50fa7b
Pink Keyword: #ff79c6
Yellow String: #f1fa8c
Muted Gray: #8b949e

**DELIVERY FORMAT:**

- Design at 1440px width (desktop primary)
- Full height viewport (use 900px as reference)
- Export as high-fidelity mockup
- Show both static state and hover state for button
- Include annotations for interactive elements

**STYLE REFERENCES:**

- Think: GitHub dark mode + terminal aesthetics + modern portfolio
- Inspiration: Developer tools, code editors, tech conferences
- Vibe: Professional, creative, technically impressive but not overwhelming

### PROMPT END ↑

---

## 📝 Additional Notes for Designer

### What Stitch Should Produce

1. **Primary Artboard:** Full hero section mockup (1440×900px)
2. **Component Details:** 
   - Terminal window (isolated)
   - Button states (default + hover)
   - Geometric background pattern sample

3. **Specifications:**
   - All colors in HEX format
   - Typography specs (Fira Code, sizes, weights)
   - Spacing measurements
   - Shadow values

### Export Requirements

- **Format:** PNG or SVG
- **Resolution:** 2x for retina displays
- **Files:**
  - `hero-section-full.png` - Complete hero section
  - `terminal-window.png` - Terminal component isolated
  - `button-states.png` - Button variations
  - `geometric-background.png` - Background pattern sample

### Design Tokens to Extract

After receiving the design, document:
- Exact color values
- Font sizes and line heights
- Spacing values (margin, padding)
- Border radius values
- Shadow specifications
- Animation timing suggestions

---

## 🎨 Alternative Prompt (Simplified)

If the above is too detailed, use this shorter version:

---

### SIMPLIFIED PROMPT START ↓

Design a dark-themed hero section for a developer portfolio featuring:

1. **Background:** Dark blue-black (#0a0e1a) with floating geometric code symbols in cyan, purple, and green (low opacity)

2. **Center Terminal Window:**
   - 700px wide, dark (#0d1117)
   - macOS-style red/yellow/green dots header
   - Code content with syntax highlighting:
     ```js
     const skills = {
       frontend: ['React', 'Vue', 'TypeScript'...],
       backend: ['Node.js', 'Express'],
       tools: ['Git', 'CMS management', 'SSR']
     }
     ```
   - Pink keywords, green variables, yellow strings, gray punctuation
   - Monospace font (Fira Code)

3. **Button:** Cyan outlined "▶ RUN CODE" button below terminal

**Style:** Modern, minimalist, code-centric, dark theme, high contrast

### SIMPLIFIED PROMPT END ↑

---

## ✅ Success Criteria

The design is successful when:

- [ ] Terminal window is clearly the focal point
- [ ] Code syntax is readable and properly highlighted
- [ ] Background is subtle and doesn't distract
- [ ] Button is discoverable but not overwhelming
- [ ] Overall aesthetic screams "developer portfolio"
- [ ] Colors are consistent with the spec
- [ ] Layout is balanced and professional
- [ ] Design could be implemented in React/Next.js

---

## 🔗 Related Files

- Design Specification: `hero-section-design-spec.md`
- Epic Requirements: `../prd/epic-2-hero-section.md`
- Architecture: `../ui-architecture.md`

---

**Status:** Ready for Stitch  
**Created By:** Sally (UX Expert)  
**Next Step:** Paste prompt into Stitch and generate mockup

