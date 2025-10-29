# Stitch UI Generation Prompt - Projects Showcase

**Component:** Projects Section & ProjectCard (Epic 5)  
**Design Style:** Code Aesthetics - Interactive Project Cards  
**Target Tool:** Stitch / Figma / v0  
**Date:** 2025-10-29

---

## 📋 COMPLETE PROMPT FOR STITCH

Copy the text below and paste directly into Stitch:

---

### PROMPT START ↓

Design a projects showcase section for a developer portfolio with a "Code Aesthetics" dark theme. Create a 2-column grid displaying 3 project cards with images, descriptions, tech stacks, and interactive hover effects.

**OVERALL CONTEXT:**

Create a visually striking projects section that showcases 3 completed web projects. Each project card should have:
- A large project screenshot/image at the top
- Project name and one-sentence description
- Tech stack displayed as small badge pills
- Hover effect that lifts the card and reveals Live Demo and GitHub buttons

**DESIGN THEME:**
- Dark background: `#0a0e1a`
- Card background: `#0d1117`
- Cyan accent color: `#00d9ff`
- Monospace font (Fira Code)
- Professional, modern aesthetic

---

## PROJECT CARDS LAYOUT

**Grid Configuration:**
- 2 columns on desktop
- 24px gap between cards
- 3 cards total (3rd card in left column)
- Max width: 1152px, centered

```
┌─────────────────────┐  ┌─────────────────────┐
│  [Project 1 Image]  │  │  [Project 2 Image]  │
│  Name & Description │  │  Name & Description │
│  Tech Badges        │  │  Tech Badges        │
│  [Buttons on hover] │  │  [Buttons on hover] │
└─────────────────────┘  └─────────────────────┘

┌─────────────────────┐
│  [Project 3 Image]  │
│  Name & Description │
│  Tech Badges        │
│  [Buttons on hover] │
└─────────────────────┘
```

---

## PROJECT CARD DESIGN (DETAILED)

Each card has:

### 1. CARD CONTAINER

**Default State:**
- Background: `#0d1117` (dark gray)
- Border: `1px solid #30363d` (medium gray)
- Border radius: `12px`
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.3)`
- Overflow: hidden (for rounded image corners)

**Hover State:**
- Transform: `translateY(-8px)` (lift up)
- Border color: `#00d9ff` (cyan glow)
- Shadow: `0 12px 24px rgba(0, 217, 255, 0.2)` (cyan-tinted shadow)
- Transition: `300ms ease` (smooth animation)

---

### 2. PROJECT IMAGE

**Position:** Top of card  
**Aspect Ratio:** 16:9 (widescreen)  
**Styling:**
- Width: 100% of card
- Height: Auto (maintain aspect ratio)
- Object-fit: Cover (crop to fit)
- Background: `#161b22` (dark placeholder)
- Border radius: Top corners only (12px)

**Image Placeholders (use generic project screenshots):**
1. **ChatGPT Timeline Navigator:** Browser extension interface with timeline
2. **Collaboration Platform:** Whiteboard/canvas interface
3. **MEME Alchemist:** Meme generation interface

---

### 3. CONTENT SECTION

**Padding:** `24px` (all sides)  
**Background:** `#0d1117` (same as card)

**Content Structure:**
```
├── Project Name (h3)
├── Description (p, one sentence)
├── Tech Stack Badges (flex row)
└── Action Buttons (overlay, hidden by default)
```

---

#### 3.1 PROJECT NAME

- Font: Fira Code, `24px`, `bold`
- Color: `#f3f4f6` (light gray)
- Margin bottom: `12px`

**Examples:**
- "ChatGPT Timeline Navigator"
- "Real-time Collaboration Platform"
- "MEME Alchemist"

---

#### 3.2 DESCRIPTION

- Font: Fira Code, `16px`, `regular`
- Color: `#9ca3af` (gray-400)
- Line height: `1.6`
- Margin bottom: `16px`
- Max 2-3 lines

**Examples:**
- "Browser extension for navigating ChatGPT conversation history with timeline visualization"
- "Web application featuring real-time whiteboard and document collaboration"
- "AI-powered meme generator combining trending memes with factual information"

---

#### 3.3 TECH STACK BADGES

**Layout:**
- Display: Flex row with wrapping
- Gap: `8px` between badges
- Margin bottom: `16px`

**Badge Style:**
- Background: `rgba(0, 217, 255, 0.1)` (subtle cyan tint)
- Border: `1px solid rgba(0, 217, 255, 0.3)` (cyan border)
- Border radius: `6px`
- Padding: `6px 10px` (smaller than Epic 4)
- Font size: `12px`
- Color: `#00d9ff` (cyan)
- Display: Inline-flex with icon + text
- Icon size: `16px × 16px`

**Tech Stacks to Show:**

**Project 1 - ChatGPT Timeline:**
- [⚛️ React]
- [📘 TypeScript]
- [🔧 Chrome Extension API]

**Project 2 - Collaboration Platform:**
- [📦 Next.js]
- [🔌 WebSocket]
- [🎨 Canvas API]
- [📘 TypeScript]

**Project 3 - MEME Alchemist:**
- [⚛️ React]
- [🟢 Node.js]
- [🤖 OpenAI API]
- [🖼️ Image Processing]

---

### 4. ACTION BUTTONS OVERLAY

**Position:** Bottom of card, absolute  
**Background:** Gradient overlay for readability
```css
linear-gradient(
  to top,
  rgba(13, 17, 23, 0.95) 0%,
  rgba(13, 17, 23, 0.8) 50%,
  transparent 100%
)
```

**Default State (Hidden):**
- Opacity: `0`
- Transform: `translateY(10px)` (slide up slightly)

**Hover State (Visible):**
- Opacity: `1`
- Transform: `translateY(0)`
- Transition: `300ms ease`

**Buttons Container:**
- Padding: `24px`
- Display: Flex row
- Gap: `12px` between buttons

---

#### 4.1 LIVE DEMO BUTTON (PRIMARY)

**Style:**
- Background: `#00d9ff` (cyan)
- Color: `#0a0e1a` (dark text)
- Padding: `10px 20px`
- Border radius: `6px`
- Font size: `14px`
- Font weight: `600` (semi-bold)
- Display: Inline-flex with icon
- Icon: External link arrow (→)
- Gap between icon and text: `8px`

**Hover:**
- Background: `#00b8d9` (darker cyan)
- Transform: `scale(1.05)`
- Transition: `200ms ease`

**Text:** "Live Demo"

**Note:** Only show for Project 2 and Project 3 (Project 1 GitHub only)

---

#### 4.2 GITHUB BUTTON (SECONDARY)

**Style:**
- Background: `#30363d` (gray)
- Color: `#f3f4f6` (light text)
- Padding: `10px 20px`
- Border radius: `6px`
- Font size: `14px`
- Font weight: `600` (semi-bold)
- Display: Inline-flex with icon
- Icon: GitHub logo
- Gap between icon and text: `8px`

**Hover:**
- Background: `#484f58` (lighter gray)
- Transform: `scale(1.05)`
- Transition: `200ms ease`

**Text:** "GitHub"

**Note:** Show for all 3 projects

---

## SECTION TITLE

**Position:** Above the grid  
**Styling:**
- Text: "Projects" or "Featured Work"
- Font: Fira Code, `32px`, `bold`
- Color: `#f3f4f6` (light gray)
- Margin bottom: `24px`

---

## OVERALL PAGE COMPOSITION

**Canvas:**
- Width: 1440px (desktop)
- Background: `#0a0e1a` (deep blue-black)
- Container: Max width 1152px, centered
- Padding: 32px horizontal

**Section:**
- Vertical spacing: 64px from previous section
- Title at top
- Grid below title

---

## STATE VARIATIONS TO SHOW

Please show:

1. **Default State Card (Card 1 or 3):**
   - No hover effect
   - Buttons hidden
   - Default border color
   - Default shadow

2. **Hovered State Card (Card 2):**
   - Lifted up (translateY -8px)
   - Cyan border glow
   - Enhanced shadow
   - Buttons visible with gradient overlay
   - Both Live Demo and GitHub buttons showing

---

## DESIGN PRINCIPLES

- **Visual Hierarchy:** Image → Name → Description → Tech Stack → Buttons
- **Interactivity:** Clear hover feedback, smooth transitions
- **Consistency:** Match dark theme from rest of portfolio
- **Professional:** Clean, modern, recruiter-friendly
- **Scannable:** All key info (name, tech stack) visible without hover

---

## ACCESSIBILITY NOTES

- All buttons should look clickable
- External link icons on buttons
- Clear contrast between text and backgrounds
- Hover states obvious and smooth

---

## EXAMPLES OF SIMILAR DESIGNS

Reference: GitHub repository cards, Vercel/Netlify deploy cards, modern SaaS product showcases

---

### PROMPT END ↑

---

## 🎯 SIMPLIFIED PROMPT (If Above is Too Complex)

If Stitch has trouble, use this condensed version:

---

### SIMPLIFIED PROMPT START ↓

Create a dark-themed projects section with 3 project cards in a 2-column grid:

**Section Title:**
- "Projects" (32px, bold, #f3f4f6)

**Card Structure:**
1. **Top:** Project image (16:9 ratio)
2. **Content (24px padding):**
   - Project name (24px, bold, #f3f4f6)
   - Description (16px, #9ca3af, one sentence)
   - Tech badges: cyan pill-shaped buttons (12px text, #00d9ff)
3. **Bottom (on hover):** Buttons overlay with gradient background
   - "Live Demo" button (cyan #00d9ff bg, dark text)
   - "GitHub" button (gray #30363d bg, light text)

**Card Styling:**
- Background: #0d1117
- Border: 1px solid #30363d
- Border radius: 12px
- Shadow: 0 4px 12px rgba(0,0,0,0.3)

**Hover Effect:**
- Lift card up (translateY -8px)
- Border color: #00d9ff (cyan)
- Shadow: 0 12px 24px rgba(0,217,255,0.2)
- Show buttons with fade-in animation

**Grid:**
- 2 columns, 24px gap
- Dark background #0a0e1a
- Max width 1152px

**3 Projects:**
1. ChatGPT Timeline Navigator (React, TypeScript) - GitHub only
2. Collaboration Platform (Next.js, WebSocket) - Live Demo + GitHub
3. MEME Alchemist (React, Node.js) - Live Demo + GitHub

### SIMPLIFIED PROMPT END ↑

---

## 📝 Usage Instructions

1. **Copy** the complete prompt (between "PROMPT START" and "PROMPT END")
2. **Paste** into Stitch or your preferred AI design tool
3. **Review** the generated mockup
4. **Save** mockup to `docs/ui/epic5/mockups/screen.png`
5. **Iterate** if needed

---

## 🔄 Iteration Tips

If the first generation isn't perfect:

**For Card Hover Effect:**
- "Make the hover lift effect more pronounced"
- "Show the cyan border glow more clearly on hover"
- "Make buttons fade in smoothly when hovering"

**For Buttons:**
- "Make Live Demo button more prominent with brighter cyan"
- "Add external link icon arrows to buttons"
- "Show button hover state with slight scale effect"

**For Images:**
- "Use placeholder project screenshots with modern UI"
- "Ensure images have 16:9 aspect ratio"
- "Images should fill card width completely"

**For Tech Badges:**
- "Make tech badges smaller and more compact"
- "Ensure badges wrap to multiple lines if needed"
- "Use consistent cyan theme for all badges"

**For Overall Layout:**
- "Increase spacing between cards"
- "Make 3rd card align to left column"
- "Ensure all cards have same height in each row"

---

## 🎨 Design Variations to Try

1. **Alternative Button Layout:**
   - "Stack buttons vertically instead of horizontal"
   - "Make buttons full width on mobile"

2. **Alternative Hover Effect:**
   - "Try rotating card slightly on hover"
   - "Add subtle glow around entire card"

3. **Alternative Image Treatment:**
   - "Add subtle gradient overlay on images"
   - "Try different aspect ratios (2:1)"

---

**Prompt Status:** Ready for Stitch  
**Estimated Generation Time:** 2-5 minutes  
**Next Steps:** Generate mockup, review, save to mockups folder


