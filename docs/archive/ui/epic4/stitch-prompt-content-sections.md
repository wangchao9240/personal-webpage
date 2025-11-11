# Stitch UI Generation Prompt - Content Sections

**Component:** About, Skills, Experience Sections (Epic 4)  
**Design Style:** Code Aesthetics - Card-based Content Display  
**Target Tool:** Stitch / Figma / v0  
**Date:** 2025-10-29

---

## 📋 COMPLETE PROMPT FOR STITCH

Copy the text below and paste directly into Stitch:

---

### PROMPT START ↓

Design three content sections (About, Skills, Experience) for a developer portfolio website with a "Code Aesthetics" theme. These sections should be card-based, scannable, and professional, displayed against a dark background.

**OVERALL CONTEXT:**

Create three distinct sections that showcase a developer's profile. All sections use a consistent card-based design with:
- Dark theme (#0a0e1a background)
- Card containers (#0d1117 with subtle borders)
- Cyan accent color (#00d9ff) for interactive elements
- Clean, modern typography
- Subtle shadows and hover effects

---

## SECTION 1: ABOUT ME

**Layout & Content:**

Create a section with:
- Section title "About" (32px, bold, light gray #f3f4f6)
- Single card container below the title
- Card contains a 3-4 sentence paragraph

**Card Specifications:**
- Background: #0d1117 (dark gray)
- Border: 1px solid #30363d
- Border radius: 12px
- Padding: 24px
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
- Max width: 800px (centered within section)

**Content Text (use this exactly):**
```
Creative problem solver with 6+ years of front-end development experience.
I specialize in transforming complex requirements into elegant, user-friendly
web applications. Proficient in React, Vue, and modern JavaScript ecosystem,
with a strong focus on performance optimization and clean code.
```

**Text Styling:**
- Font: Fira Code or monospace
- Size: 18px
- Color: #9ca3af (gray-400)
- Line height: 1.75 (relaxed)
- Letter spacing: 0.01em

**Visual Notes:**
- Keep it simple and clean
- Text should be highly readable
- Card should feel substantial but not heavy

---

## SECTION 2: SKILLS

**Layout Structure:**

Create a section with:
- Section title "Skills" (32px, bold, #f3f4f6)
- Three subsections (Frontend, Backend, Tools & Others)
- Each subsection has:
  - Category title (20px, semi-bold, #00d9ff - cyan)
  - Grid of "tech badges" below

**Tech Badge Design:**

Each badge is a small pill/tag with:
- Background: rgba(0, 217, 255, 0.1) - subtle cyan tint
- Border: 1px solid rgba(0, 217, 255, 0.3)
- Border radius: 6px
- Padding: 8px 12px
- Display: inline-flex with icon + text
- Gap between icon and text: 8px

**Badge Components:**
- Icon: 20px × 20px, color #00d9ff
- Text: 14px, medium weight (500), color #00d9ff

**Badge Hover State:**
- Background: rgba(0, 217, 255, 0.15)
- Border: rgba(0, 217, 255, 0.5)
- Subtle scale: 1.05

**Skills to Display:**

**Frontend (6 badges):**
- [⚛️ React]
- [🎭 Vue]
- [📘 TypeScript]
- [🌐 HTML5]
- [🎨 CSS3]
- [📜 JavaScript]

**Backend (2 badges):**
- [🟢 Node.js]
- [⚡ Express]

**Tools & Others (3 badges):**
- [🔧 Git]
- [📦 CMS management]
- [🚀 SSR]

**Layout:**
- Badges arranged in a flex grid with wrapping
- Gap between badges: 12px
- Responsive wrapping to multiple rows

---

## SECTION 3: EXPERIENCE (TIMELINE)

**Overall Layout:**

Create a vertical timeline with:
- Section title "Experience" (32px, bold, #f3f4f6)
- Vertical line on the left with timeline dots
- Experience cards on the right

**Timeline Visual:**

**Vertical Line:**
- Width: 2px
- Color: #30363d (gray)
- Position: 16px from left edge
- Spans entire section height

**Timeline Dots:**
- Size: 12px diameter circles
- Color: #00d9ff (cyan)
- Border: 2px solid #00d9ff
- Background: transparent (hollow circle)
- Glow effect: 0 0 8px rgba(0, 217, 255, 0.4)
- Position: Centered on vertical line, aligned with each card

**Experience Cards (4 total):**

Each card:
- Background: #0d1117
- Border: 1px solid #30363d
- Border radius: 12px
- Padding: 20px
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
- Position: 32px gap from timeline line
- Margin bottom: 24px (between cards)

**Card Content Structure:**
```
Company Name                     ← 18px, bold, #f3f4f6
Position Title                   ← 16px, semi-bold, #9ca3af
Duration · Location              ← 14px, regular, #6b7280

• Highlight 1                    ← 16px, regular, #9ca3af
• Highlight 2
```

**Experience Data (show all 4):**

1. **Shanghai Jiufang Cloud**
   - Frontend Developer
   - Nov 2020 - Apr 2024 · Shanghai
   - • Led development of multiple web applications using React and Vue
   - • Optimized application performance resulting in 40% faster load times

2. **Shanghai YouBiHui Training School**
   - Frontend Teacher
   - Aug 2020 - Oct 2020 · Shanghai
   - • Taught HTML, CSS, JavaScript fundamentals to 50+ students
   - • Developed curriculum focusing on practical web development skills

3. **Huizhong Business Consulting**
   - Frontend Developer
   - May 2018 - Jun 2020 · Shanghai
   - • Built responsive websites for 10+ enterprise clients
   - • Implemented CMS solutions for content management

4. **Qingdao Jiaoyin Information Technology**
   - Web Developer
   - Oct 2017 - Aug 2018 · Qingdao
   - • Developed company website and internal management systems
   - • Collaborated with design team on UI/UX improvements

**Visual Flow:**
- Timeline flows top to bottom (newest to oldest)
- Connecting line between all dots
- Cards aligned consistently on the right

---

## OVERALL DESIGN REQUIREMENTS

**Color Palette:**
```
Page background: #0a0e1a (deep blue-black)
Card background: #0d1117 (dark gray)
Card borders: #30363d (medium gray)
Primary text: #f3f4f6 (light gray)
Secondary text: #9ca3af (gray-400)
Muted text: #6b7280 (gray-500)
Accent color: #00d9ff (cyan)
```

**Typography:**
- Font family: Fira Code, Consolas, Monaco (monospace)
- Section titles: 32px, bold
- Category titles: 20px, semi-bold, cyan
- Body text: 18px, regular
- Small text: 14px, regular

**Spacing:**
- Padding between sections: 64px
- Card padding: 24px
- Gap between badges: 12px
- Gap between timeline items: 24px

**Shadows:**
- Default card shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
- Hover card shadow: 0 8px 20px rgba(0, 0, 0, 0.4)

**Borders:**
- All cards: 1px solid #30363d
- Tech badges: 1px solid rgba(0, 217, 255, 0.3)
- Border radius: 12px (cards), 6px (badges)

---

## COMPOSITION GUIDELINES

**Overall Canvas:**
- Width: 1440px (desktop)
- Background: #0a0e1a (dark blue-black)
- Sections stacked vertically with 64px gaps
- Container: max-width 1152px (centered)

**Section Order:**
1. About (top)
2. Skills (middle)
3. Experience (bottom)

**Visual Hierarchy:**
- Section titles are largest and lightest (#f3f4f6)
- Category titles (Skills) are cyan (#00d9ff) to stand out
- Body text is medium gray (#9ca3af) for readability
- Muted text (dates, locations) is darker gray (#6b7280)

**Consistency:**
- All cards use same background, border, shadow
- All sections use same title styling
- Spacing is consistent throughout
- Cyan accent used sparingly for emphasis

---

## STATE VARIATIONS TO SHOW

**Tech Badge States:**
- Show at least one badge in default state
- Show at least one badge in hover state (slightly brighter, scaled)

**Card Hover (Optional):**
- Show one experience card with subtle hover effect:
  - Slightly elevated (translateY -2px)
  - Enhanced shadow
  - Brighter border

---

## DESIGN PRINCIPLES

- **Scannable:** Recruiters should grasp key info in 10 seconds
- **Professional:** Clean, modern aesthetic
- **Consistent:** Unified card-based design language
- **Minimal:** No clutter, focus on content
- **Dark Theme:** Matches "Code Aesthetics" overall theme
- **Accessible:** High contrast text, clear hierarchy

---

## DELIVERABLE EXPECTATIONS

**Main Mockup:**
- All three sections shown vertically
- Dark background consistent with portfolio theme
- Clear visual separation between sections
- Proper spacing and alignment

**Detail Requirements:**
- All tech badges visible with icons and text
- Timeline clearly shows vertical line + dots
- All 4 experience cards visible
- Text is readable and properly formatted
- Cyan accent color used appropriately

**Format:**
- High-fidelity design ready for developer handoff
- Clear typography and spacing
- All states demonstrated
- Professional presentation

### PROMPT END ↑

---

## 🎯 SIMPLIFIED PROMPT (If Above is Too Complex)

If Stitch has trouble with the full prompt, use this condensed version:

---

### SIMPLIFIED PROMPT START ↓

Create three sections for a dark-themed developer portfolio:

**1. About Section:**
- Title "About" (32px, #f3f4f6)
- Card container (#0d1117 bg, 1px #30363d border, 12px radius, 24px padding)
- Paragraph text (18px, #9ca3af):
  "Creative problem solver with 6+ years of front-end development experience..."

**2. Skills Section:**
- Title "Skills" (32px, #f3f4f6)
- Three categories: Frontend, Backend, Tools
- Category titles (20px, cyan #00d9ff)
- Tech badges: cyan pill-shaped buttons with icons
  - Frontend: React, Vue, TypeScript, HTML5, CSS3, JavaScript
  - Backend: Node.js, Express
  - Tools: Git, CMS, SSR
- Badge style: rgba(0,217,255,0.1) bg, rgba(0,217,255,0.3) border, 6px radius

**3. Experience Timeline:**
- Title "Experience" (32px, #f3f4f6)
- Left: vertical line (2px, #30363d) with cyan dots (12px, #00d9ff)
- Right: 4 experience cards (same card style as About)
- Show company, position, duration, 2 bullet highlights per card

**Theme:**
- Dark background: #0a0e1a
- Card bg: #0d1117
- Cyan accent: #00d9ff
- Monospace font (Fira Code)

### SIMPLIFIED PROMPT END ↑

---

## 📝 Usage Instructions

1. **Copy** the complete prompt (between "PROMPT START" and "PROMPT END")
2. **Paste** into Stitch or your preferred AI design tool
3. **Review** the generated mockup
4. **Iterate** if needed by adding specific refinements
5. **Export** design assets for development

---

## 🔄 Iteration Tips

If the first generation isn't perfect, try these refinements:

**For About Section:**
- "Make the card shadow more subtle"
- "Increase text line height for better readability"
- "Center the card within the section"

**For Skills Section:**
- "Make tech badge icons more prominent"
- "Add more spacing between category subsections"
- "Show badge hover state with slight glow"

**For Experience Timeline:**
- "Make timeline dots more visible with stronger glow"
- "Align all cards perfectly with timeline"
- "Add more vertical spacing between experience items"

**For Overall Composition:**
- "Increase spacing between all three sections"
- "Make section titles more prominent"
- "Ensure consistent card styling across all sections"

---

## 🎨 Design Variations to Try

1. **Alternative Badge Style:**
   - "Use solid cyan background instead of transparent"
   - "Try rounded-full pills instead of rounded-lg"

2. **Alternative Timeline:**
   - "Use filled dots instead of hollow"
   - "Add subtle connecting curve instead of straight line"

3. **Alternative Card Style:**
   - "Add subtle gradient to card backgrounds"
   - "Use dashed borders for visual interest"

---

**Prompt Status:** Ready for Stitch  
**Next Steps:** Generate mockup, review with team, refine if needed


