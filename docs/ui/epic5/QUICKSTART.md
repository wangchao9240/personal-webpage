# 🚀 QUICKSTART - Generate Epic 5 UI Mockups

**Goal:** Generate visual mockups for Projects Showcase section in under 5 minutes.

---

## ⚡ 3-Step Process

### Step 1: Choose Your Tool

Pick one of these AI design tools:

| Tool | Best For | Link |
|------|----------|------|
| **Stitch** ⭐ | Quick, high-quality mockups | [stitch.stream](https://stitch.stream) |
| **v0 by Vercel** | Interactive React components | [v0.dev](https://v0.dev) |
| **Figma AI** | Full design system integration | [figma.com](https://figma.com) |

**Recommended:** Stitch (easiest and fastest)

---

### Step 2: Copy the Prompt

Open [`stitch-prompt-projects-showcase.md`](./stitch-prompt-projects-showcase.md)

**Option A - Full Prompt (Recommended):**
- Copy everything between `PROMPT START` and `PROMPT END`
- Most detailed, best results
- Includes all specs and examples

**Option B - Simplified Prompt (If A doesn't work):**
- Copy the "SIMPLIFIED PROMPT" section
- Cleaner, more focused
- Good for quick iterations

---

### Step 3: Generate & Export

1. **Paste** the prompt into Stitch
2. **Generate** (takes ~1-2 minutes)
3. **Review** - Does it show:
   - 2-column grid with 3 project cards?
   - Project images at top of each card?
   - Hover state with lifted card + visible buttons?
4. **Export:**
   - PNG/JPG: Save as `screen.png` → `mockups/` folder
   - HTML: Save as `code.html` → `mockups/` folder (if available)

---

## ✅ What You Should See

Your generated mockup should include:

### Projects Section ✓
- [ ] Section title "Projects" or "Featured Work"
- [ ] 2-column grid layout (desktop)
- [ ] 3 project cards total
- [ ] Consistent card styling
- [ ] Dark background (#0a0e1a)

### Individual Project Cards ✓
- [ ] Project image at top (16:9 aspect ratio)
- [ ] Project name (large, bold, light gray)
- [ ] One-sentence description (medium gray)
- [ ] Tech stack badges (cyan theme, with icons)
- [ ] Buttons overlay (at least one card showing hover state)

### Hover State (Critical!) ✓
- [ ] At least ONE card showing hover state:
  - Card lifted up (translateY -8px)
  - Cyan border glow (#00d9ff)
  - Enhanced shadow with cyan tint
  - Buttons visible (Live Demo + GitHub)
  - Gradient overlay at bottom

### Buttons ✓
- [ ] Live Demo button (cyan background, dark text)
- [ ] GitHub button (gray background, light text)
- [ ] Both buttons with icons
- [ ] Buttons at bottom of card

---

## 🔄 If It Doesn't Look Right

### Common Issues & Fixes

**Issue:** "Cards don't have images"
- **Fix:** Add to prompt: "Show realistic project screenshots at top of each card, 16:9 aspect ratio"

**Issue:** "Hover state not shown"
- **Fix:** Add to prompt: "Show at least one card in hover state with lifted effect and visible buttons"

**Issue:** "Buttons always visible"
- **Fix:** Add to prompt: "Buttons should only be visible on hover, hidden by default with opacity 0"

**Issue:** "Cards look flat/boring"
- **Fix:** Add to prompt: "Add subtle shadows, make hover effect more dramatic with cyan glow"

**Issue:** "Grid doesn't have 2 columns"
- **Fix:** Add to prompt: "Use 2-column grid layout with 24px gap, 3 cards total (3rd card in left column)"

**Issue:** "Tech badges too large"
- **Fix:** Add to prompt: "Make tech badges compact and small, 12px text size, cyan theme"

---

## 🎨 Refinement Prompts

After first generation, refine with:

### Make Hover Effect More Prominent
```
Show the hover state more clearly: lift card higher (translateY -12px), 
brighter cyan border glow, stronger shadow with cyan tint. Make it feel 
like the card is floating above the page.
```

### Improve Button Visibility
```
Make buttons more obvious on hover. Use brighter cyan for Live Demo button,
add external link icons, increase button padding for better click targets.
```

### Enhance Visual Hierarchy
```
Make project images more prominent, increase project name size to 26px,
ensure tech badges are clearly visible with good contrast.
```

### Fix Layout Issues
```
Ensure 2-column grid is balanced, cards align properly, 
3rd card is in left column only, consistent spacing throughout.
```

---

## 💾 Saving Your Mockup

Once satisfied:

1. **Screenshot (PNG):**
   - Take full-page screenshot
   - Name: `screen.png`
   - Save to: `docs/ui/epic5/mockups/screen.png`

2. **Code Export (HTML):**
   - If Stitch/v0 provides HTML
   - Name: `code.html`
   - Save to: `docs/ui/epic5/mockups/code.html`

3. **Design File:**
   - Export from Figma if used
   - Share link or export PNG

---

## 📋 Next Steps After Mockup

1. **Share with Team:**
   - Show to developers
   - Get feedback on feasibility
   - Confirm hover interactions work

2. **Prepare Assets:**
   - Collect actual project screenshots
   - Create ChatGPT Timeline concept diagram
   - Optimize images (< 300KB each)

3. **Start Implementation:**
   - Developers use mockup + spec
   - Build ProjectCard component
   - Implement hover effects
   - Add real project data

---

## 🆘 Troubleshooting

### "Stitch isn't understanding the hover effect"

**Try this:**
1. Use **two separate requests**:
   - First: "Generate project cards in default state"
   - Second: "Now show one card in hover state with buttons visible"

2. Add more specific details:
```
For hover state:
- Transform: translateY(-8px) - card lifts up
- Border changes from #30363d to #00d9ff (cyan glow)
- Shadow changes to: 0 12px 24px rgba(0, 217, 255, 0.2)
- Buttons fade in from opacity 0 to 1
- Gradient overlay appears at bottom
```

### "Images look wrong or missing"

**Add to prompt:**
```
Each card must have a project screenshot image at the very top:
- Full width of card
- 16:9 aspect ratio (widescreen)
- Rounded top corners (12px)
- Use placeholder screenshots showing:
  1. Browser extension interface
  2. Whiteboard/collaboration tool
  3. Meme generation interface
```

### "Tech badges don't match design"

**Add to prompt:**
```
Tech badges must use exact Epic 4 styling:
- Background: rgba(0, 217, 255, 0.1)
- Border: 1px solid rgba(0, 217, 255, 0.3)
- Text color: #00d9ff
- Border radius: 6px
- Small size: 12px text
- Include icons (React, TypeScript, etc.)
```

### "Buttons need improvement"

**Add to prompt:**
```
Buttons styling:

Live Demo (primary):
- Background: #00d9ff (bright cyan)
- Text: #0a0e1a (dark)
- Icon: External link arrow
- Hover: darker cyan #00b8d9

GitHub (secondary):
- Background: #30363d (gray)
- Text: #f3f4f6 (light)
- Icon: GitHub logo
- Hover: lighter gray #484f58

Both buttons:
- Padding: 10px 20px
- Font size: 14px
- Font weight: 600 (semi-bold)
- Border radius: 6px
```

---

## 📚 Additional Resources

**Design Reference:**
- [Full Design Spec](./projects-showcase-design-spec.md) - Complete details
- [Epic 5 PRD](../../prd/epic-5-projects-showcase.md) - Requirements
- [Epic 4 Mockups](../epic4/mockups/) - TechBadge reference

**Stitch Tips:**
- Be very specific about hover states
- Request "show both states" (default + hover)
- Use exact hex colors
- Mention exact pixel measurements
- Reference "modern SaaS product cards" for inspiration

**Example Prompts That Work:**
- "2-column grid with 24px gap"
- "Card lifts up 8px on hover with cyan glow"
- "Buttons hidden by default, fade in on hover"
- "Tech badges use cyan theme with icons"

---

## ⏱️ Estimated Time

- **First attempt:** 2-3 minutes
- **Review & refine:** 3-5 minutes
- **Export & save:** 1 minute

**Total:** ~5-10 minutes for polished mockup

---

## ✨ Pro Tips

1. **Generate two versions:**
   - Version 1: All cards in default state
   - Version 2: One card in hover state
   - This makes the hover interaction clearer

2. **Use specific measurements:**
   - Don't say "lift card on hover"
   - Say "translateY(-8px) on hover"

3. **Reference similar designs:**
   - "Like GitHub repo cards"
   - "Similar to Vercel deployment cards"
   - "Modern product showcase style"

4. **Show state variations:**
   - Explicitly ask for "before and after hover"
   - Request side-by-side comparison

5. **Iterate on details:**
   - First pass: overall layout
   - Second pass: hover effects
   - Third pass: button styling

---

## 🎯 Critical Elements to Verify

Before considering mockup complete:

**Must Have:**
- ✅ 2-column grid visible
- ✅ 3 project cards shown
- ✅ Images at top of each card
- ✅ At least ONE hover state demonstrated
- ✅ Buttons visible in hover state
- ✅ Cyan border glow on hover
- ✅ Tech badges with cyan theme

**Nice to Have:**
- ✅ External link icons on buttons
- ✅ Gradient overlay on hover state
- ✅ GitHub logos and React icons
- ✅ Proper aspect ratio on images

---

**Ready to go?** Open [`stitch-prompt-projects-showcase.md`](./stitch-prompt-projects-showcase.md) and copy the prompt!

---

**Document Owner:** UX Team  
**Last Updated:** 2025-10-29  
**Estimated Time:** ⏱️ 5-10 minutes


