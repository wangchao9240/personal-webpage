# 🚀 Quick Start - Generate Navigation System Mockup

**Time to Mockup:** 2-3 minutes  
**Tool:** Stitch (or v0, Lovable, Figma AI)

---

## ⚡ 3-Step Process

### Step 1: Open the Prompt File

```bash
open docs/ui/epic3/stitch-prompt-navigation-system.md
```

Or navigate in your editor to:
```
docs/ui/epic3/stitch-prompt-navigation-system.md
```

---

### Step 2: Copy the Prompt

Find this section in the file:

```
### PROMPT START ↓
```

Copy **everything** between `PROMPT START ↓` and `PROMPT END ↑`

**Two versions available:**
- **Detailed Prompt** (recommended) - Full specifications, all states
- **Simplified Prompt** - Quick version if Stitch has token limits

**Tip:** Start with the detailed prompt for best results!

---

### Step 3: Generate in Stitch

1. Open **Stitch** (or v0.dev / Figma AI)
2. Paste the copied prompt
3. Click "Generate" or "Create"
4. Wait 30-90 seconds
5. Review the generated mockup
6. Download/export the design

---

## 📥 Save Your Mockup

Create the mockups folder if needed:
```bash
mkdir -p docs/ui/epic3/mockups
```

Save generated files as:
```
docs/ui/epic3/mockups/navigation-full-view.png     # Complete page view
docs/ui/epic3/mockups/header-detail.png            # Header close-up
docs/ui/epic3/mockups/floating-nav-detail.png      # Dots close-up
```

**Recommended format:** PNG at 2x resolution (2880px width for desktop)

---

## ✅ What You'll Get

Your mockup should include:

### 1. Full Page Composition ✅
- **Dark background** (#0a0e1a) as page backdrop
- **Fixed header** at top with glassmorphism effect
- **Floating dots** on right side, vertically centered
- **Content placeholders** to show context

### 2. Header Component (Top) ✅
- **Semi-transparent background** with backdrop blur
- **3 contact icons** on the right:
  - Email (envelope)
  - LinkedIn (logo)
  - GitHub (logo)
- **Hover state example** (LinkedIn in cyan, slightly larger)

### 3. Floating Navigation Dots (Right) ✅
- **5 dots stacked vertically**:
  1. Home (inactive)
  2. About (inactive hover, label showing)
  3. Skills (active - cyan, glowing)
  4. Experience (inactive)
  5. Projects (inactive)
- **Hover label** visible on "About" dot

### 4. State Indicators ✅
- Default icon state (gray)
- Hover icon state (cyan, enlarged)
- Inactive dot (small, gray)
- Hover dot (medium, lighter gray, label)
- Active dot (largest, cyan, glowing)

---

## 🎨 Quick Visual Checklist

Before accepting your mockup, verify:

### Header
- [ ] Full width, 70px height
- [ ] Semi-transparent background visible
- [ ] Glassmorphism/blur effect evident
- [ ] 3 icons (Email, LinkedIn, GitHub) on right
- [ ] Icons properly spaced (20px apart)
- [ ] At least one icon showing hover state

### Floating Navigation
- [ ] 5 dots visible on right side
- [ ] Vertically centered on page
- [ ] Dots vary in size (inactive 10px, active 14px)
- [ ] Active dot is cyan (#00d9ff)
- [ ] Active dot has subtle glow
- [ ] At least one dot showing hover label
- [ ] Label positioned to left of dot

### Overall
- [ ] Dark background (#0a0e1a)
- [ ] Clean, minimal aesthetic
- [ ] Professional appearance
- [ ] All elements clearly visible
- [ ] No cluttered areas

---

## 🎯 Complete Prompt Preview

Here's what you're copying (abbreviated):

```
Design a modern, minimal navigation system for a developer 
portfolio with "Code Aesthetics" theme...

COMPONENT 1: FIXED HEADER
- Full width, 70px height
- Semi-transparent dark background with 10px blur
- Right side: Email, LinkedIn, GitHub icons
- Default: light gray, Hover: cyan

COMPONENT 2: FLOATING DOTS
- Right side, vertically centered
- 5 dots: Home, About, Skills, Experience, Projects
- Inactive: 10px gray, Hover: 12px with label
- Active: 14px cyan with glow

Show all states clearly with annotations...
```

---

## 🔍 Troubleshooting

### Problem: Stitch returns an error or timeout
**Solution:** 
- Try the **simplified prompt** instead (shorter, faster)
- Break into two separate prompts: one for header, one for dots
- Reduce context by removing some instructions

---

### Problem: Design doesn't match specifications
**Solution:**
- Regenerate with slight prompt tweaks
- Manually adjust specific elements in Figma
- Reference the full design spec for exact values

---

### Problem: States not clearly shown
**Solution:**
- Add to prompt: "Show clear before/after for hover states"
- Request separate artboards for each state
- Generate multiple times focusing on one component

---

### Problem: Need different viewport size
**Solution:**
- Add to prompt: "Design at 1440×900px desktop viewport"
- Or: "Create mockup for 1920×1080px display"

---

## 📚 Full Documentation

For complete design specifications:

- **Design Spec:** `navigation-system-design-spec.md` (all measurements, colors, states)
- **Full Prompts:** `stitch-prompt-navigation-system.md` (copy from here)
- **Overview:** `README.md` (context and workflow)
- **Epic Requirements:** `../prd/epic-3-navigation-system.md` (user stories)

---

## 🎯 After You Have the Mockup

### Step 1: Review & Validate
- [ ] Check mockup against design spec
- [ ] Verify all states are represented
- [ ] Confirm colors match specification
- [ ] Ensure layout is clear

### Step 2: Share (if needed)
- [ ] Export high-res version (2x)
- [ ] Share with stakeholders
- [ ] Get approval or feedback
- [ ] Make refinements if needed

### Step 3: Prepare for Development
- [ ] Save final mockup to `mockups/` folder
- [ ] Extract exact pixel values if needed
- [ ] Reference during Epic 3 implementation
- [ ] Use as visual guide for developers

### Step 4: Begin Implementation
- [ ] Switch to `@dev.md` role
- [ ] Reference both mockup AND design spec
- [ ] Start with `useScrollSpy` hook (Story 3.1)
- [ ] Build components following specification

---

## 💡 Pro Tips

### Tip 1: Generate Multiple Versions
Generate 2-3 variations to compare:
- Version A: Detailed prompt (full specs)
- Version B: Simplified prompt (minimal)
- Version C: Manual Figma based on spec

Choose the best or combine elements!

---

### Tip 2: Focus on States
The most important visual is showing different states:
- **Icons:** Default vs Hover
- **Dots:** Inactive vs Hover vs Active

Make sure these are crystal clear in mockup.

---

### Tip 3: Use Mockup as Reference, Not Gospel
The design spec is authoritative. If mockup differs:
- **Follow the spec for implementation**
- Use mockup for general visual direction
- Extract colors/fonts from spec, not mockup

---

### Tip 4: Test Accessibility Early
Once you have mockup:
- Check contrast ratios (cyan on dark)
- Verify clickable areas look tap-worthy
- Ensure hover labels are readable

---

## 🚦 Ready to Generate?

### Pre-flight Checklist

- [ ] Have Stitch (or v0/Figma AI) open
- [ ] Prompt file open: `stitch-prompt-navigation-system.md`
- [ ] Mockups folder ready: `docs/ui/epic3/mockups/`
- [ ] 2-3 minutes available
- [ ] Ready to review and iterate if needed

**All set?** 🎨

1. Copy that prompt
2. Paste into Stitch
3. Watch your navigation system come to life!

---

## ✨ What Success Looks Like

A great mockup will:

✅ Clearly show both navigation components  
✅ Demonstrate all interaction states  
✅ Match the Code Aesthetics theme  
✅ Look professional and recruiter-ready  
✅ Provide clear visual reference for development  
✅ Include helpful annotations or labels

---

**Time to create:** ~2 minutes  
**Time to review:** ~3 minutes  
**Time to implement:** ~3-5 hours (Epic 3)  
**Impact:** Always-accessible navigation for entire portfolio ⚡

---

**Ready?** Let's generate that Navigation System mockup! 🚀


