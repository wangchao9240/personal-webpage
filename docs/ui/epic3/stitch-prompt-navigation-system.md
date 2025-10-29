# Stitch UI Generation Prompt - Navigation System

**Component:** Navigation System (Header + Floating Dots)  
**Design Style:** Code Aesthetics - Minimal, Always-Accessible  
**Target Tool:** Stitch / Figma / v0  
**Date:** 2025-10-29

---

## 📋 COMPLETE PROMPT FOR STITCH

Copy the text below and paste directly into Stitch:

---

### PROMPT START ↓

Design a modern, minimal navigation system for a developer portfolio website with a "Code Aesthetics" theme. The navigation consists of two components: a fixed header with contact icons and floating section navigation dots. Both should be unobtrusive yet always accessible.

**OVERALL CONTEXT:**

This navigation system overlays on a dark-themed portfolio website (#0a0e1a background). The design should be clean, professional, and enhance navigation without distracting from content. Include all states (default, hover, active) for interactive elements.

---

## COMPONENT 1: FIXED HEADER WITH CONTACT ICONS

**LAYOUT & POSITION:**

- Full-width header fixed to the top of the page
- Height: 70px
- Background: Semi-transparent dark with glassmorphism effect
  * Color: rgba(10, 14, 26, 0.85) - dark blue-black with 85% opacity
  * Backdrop blur: 10px blur effect
  * Bottom border: 1px solid rgba(48, 54, 61, 0.3) - very subtle separator
  * Subtle shadow: 0 1px 3px rgba(0, 0, 0, 0.12)

**CONTENT:**

- Right side only (leave left side empty for now)
- 3 contact icons aligned to the right with 32px padding from edge
- Icons from left to right: Email, LinkedIn, GitHub

**ICON SPECIFICATIONS:**

Each icon:
- Size: 20px × 20px
- Spacing between icons: 20px
- Clickable area (for visualization): 40px × 40px (subtle hover zone)
- Icon style: Simple, clean line icons or solid glyphs

**ICON STATES TO SHOW:**

1. **Default State:**
   - Color: #d1d5db (light gray)
   - Opacity: 0.9

2. **Hover State (show for LinkedIn as example):**
   - Color: #00d9ff (cyan)
   - Opacity: 1.0
   - Transform: scale(1.1) - slightly larger
   - Smooth transition suggestion

**ICONS TO USE:**

- **Email:** Envelope icon
- **LinkedIn:** LinkedIn logo or "in" text badge
- **GitHub:** GitHub octocat logo or cat silhouette

**DESIGN NOTES:**

- Show glassmorphism effect (blurred background showing content behind)
- Indicate this is a sticky/fixed component (maybe with a subtle notation)
- Professional and clean spacing

---

## COMPONENT 2: FLOATING NAVIGATION DOTS

**LAYOUT & POSITION:**

- Fixed positioning on the right side of the viewport
- Vertical centering: positioned at 50% from top, centered vertically
- Right offset: 32px from right edge
- Z-index above content but below modals

**STRUCTURE:**

5 navigation dots stacked vertically representing:
1. Home (Hero section)
2. About
3. Skills
4. Experience
5. Projects

**DOT SPECIFICATIONS:**

**Spacing:**
- 16px vertical spacing between dots
- Clean vertical alignment

**Individual Dot - Inactive State:**
- Size: 10px × 10px
- Shape: Perfect circle (border-radius: 50%)
- Color: #6b7280 (gray)
- Opacity: 0.6
- No border

**Individual Dot - Inactive Hover State (show for "About" as example):**
- Size: 12px × 12px (scale 1.2)
- Color: #9ca3af (lighter gray)
- Opacity: 0.9
- Smooth scale transition
- **Show hover label:** (see below)

**Individual Dot - Active State (show for "Skills" as example):**
- Size: 14px × 14px (largest)
- Color: #00d9ff (cyan - matches accent theme)
- Opacity: 1.0
- Subtle glow: box-shadow: 0 0 8px rgba(0, 217, 255, 0.5)
- This is the "current section" indicator

**HOVER LABEL TOOLTIP:**

When hovering over a dot (show for "About" dot as example):
- **Position:** Appears to the LEFT of the dot
- **Offset:** 12px from dot edge
- **Vertically aligned:** with center of dot

**Label Style:**
- Background: rgba(17, 24, 39, 0.95) - very dark with slight transparency
- Color: #f9fafb (nearly white)
- Padding: 6px 12px
- Border radius: 6px
- Font size: 14px
- Font weight: 500 (medium)
- Border: 1px solid rgba(255, 255, 255, 0.1) - subtle light border
- Shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
- Text: "About" (capitalize)

**Entrance animation suggestion:**
- Slide in from right (small 10px offset)
- Fade in
- Quick and smooth (200ms)

---

## COMPLETE COMPOSITION MOCKUP

**Create a mockup showing:**

1. **Full Layout View:**
   - Header spanning full width at top
   - Floating dots on right side, vertically centered
   - Show against dark background (#0a0e1a) with some content placeholder (gray boxes or lorem text) to demonstrate overlay

2. **State Variations - Close-up Views:**

   **Header Close-up (Top Right):**
   - Show all 3 icons in default state
   - Show LinkedIn icon in hover state (cyan, slightly larger)

   **Floating Dots Close-up (Right Side):**
   - Show all 5 dots
   - Dot 2 ("About"): Inactive hover with label visible
   - Dot 3 ("Skills"): Active state (larger, cyan, glowing)
   - Dots 1, 4, 5: Inactive default state

3. **Interaction Annotations:**
   - Add small arrows or notes indicating:
     * "Click to scroll to section"
     * "Active section indicator"
     * "Hover shows label"
     * "Contact links"

---

## COLOR PALETTE REFERENCE

**Background:**
- Page background: #0a0e1a (deep blue-black)
- Header background: rgba(10, 14, 26, 0.85) (semi-transparent)
- Label background: rgba(17, 24, 39, 0.95) (dark tooltip)

**Navigation Elements:**
- Inactive dot: #6b7280 (gray-500)
- Hover dot: #9ca3af (gray-400)
- Active dot: #00d9ff (cyan)
- Active glow: rgba(0, 217, 255, 0.5)

**Icons:**
- Default icon: #d1d5db (gray-300)
- Hover icon: #00d9ff (cyan)

**Text:**
- Label text: #f9fafb (gray-50 - nearly white)
- Header border: rgba(48, 54, 61, 0.3)

---

## TYPOGRAPHY

**Font Family:**
- Fira Code, Consolas, Monaco, or similar monospace font
- Clean, modern, developer-friendly aesthetic

**Label Text:**
- Font size: 14px
- Font weight: 500 (medium)
- Letter spacing: 0.02em
- Text transform: Capitalize

---

## DESIGN PRINCIPLES

- **Minimal:** Don't distract from content
- **Always Accessible:** Fixed position ensures navigation is always available
- **Visual Feedback:** Clear hover and active states
- **Professional:** Clean, modern aesthetic appropriate for recruiters
- **Glassmorphism:** Header has subtle blur/transparency effect
- **High Contrast:** Cyan accent color pops against dark background
- **Smooth Interactions:** All state changes should feel fluid (200-300ms transitions)

---

## COMPOSITION GUIDELINES

- Use dark background (#0a0e1a) for entire canvas
- Show header at very top, full width
- Position floating dots on right edge, vertically centered
- Include some content blocks (gray rectangles) to show how navigation overlays on content
- Ensure header glassmorphism effect is visible (show blurred content behind it)
- Use consistent spacing and alignment
- Show subtle shadows to create depth hierarchy

---

## ACCESSIBILITY NOTES (for visual indication)

- All interactive elements should have clear hover states
- Active section should be obviously highlighted (larger + different color)
- Clickable areas should be at least 40px × 40px (show with subtle outlines if helpful)
- Focus indicators could use same cyan color with outline

---

## DELIVERABLE EXPECTATIONS

**Main Mockup:**
- Full-page composition (1440px width recommended)
- Dark theme background
- Header at top with icons
- Floating dots on right
- Content placeholders to show context

**Detail Views:**
- Header zoom-in showing icon states
- Floating nav zoom-in showing dot states and hover label
- Clear state labels (Default, Hover, Active)

**Format:**
- High-fidelity mockup suitable for developer handoff
- Clean, production-ready design
- All states clearly demonstrated

### PROMPT END ↑

---

## 🎯 SIMPLIFIED PROMPT (If Above is Too Complex)

If Stitch has trouble with the full prompt, use this condensed version:

---

### SIMPLIFIED PROMPT START ↓

Create a minimal navigation system for a dark-themed developer portfolio:

**1. Fixed Header (top):**
- Full width, 70px height
- Semi-transparent dark background (rgba(10, 14, 26, 0.85)) with 10px blur
- Right side: 3 icons (Email, LinkedIn, GitHub) at 20px size, 20px spacing
- Default icons: light gray (#d1d5db)
- Hover state: cyan (#00d9ff), scale 1.1

**2. Floating Navigation Dots (right side, centered):**
- 5 circular dots stacked vertically, 16px spacing
- Inactive: 10px diameter, gray (#6b7280), 0.6 opacity
- Hover: 12px, lighter gray (#9ca3af), shows label on left
- Active: 14px, cyan (#00d9ff), glowing
- Label: dark tooltip (rgba(17, 24, 39, 0.95)), white text, 6px×12px padding

**Style:** Dark background (#0a0e1a), minimal, clean, professional

**Show:** All states (default, hover, active) with labels and annotations

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

**For Header:**
- "Make the header more transparent with stronger blur effect"
- "Increase icon size to 24px for better visibility"
- "Add more spacing between icons"

**For Floating Dots:**
- "Make active dot glow effect more subtle"
- "Position label closer to dot"
- "Reduce dot sizes by 2px"

**For Overall Composition:**
- "Show header with content scrolling behind it"
- "Add more vertical spacing between dots"
- "Use darker tooltip background for better contrast"

---

**Prompt Status:** Ready for Stitch  
**Next Steps:** Generate mockup, review with team, refine if needed


