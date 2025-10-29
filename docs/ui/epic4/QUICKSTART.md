# 🚀 QUICKSTART - Generate Epic 4 UI Mockups

**Goal:** Generate visual mockups for About, Skills, and Experience sections in under 5 minutes.

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

Open [`stitch-prompt-content-sections.md`](./stitch-prompt-content-sections.md)

**Option A - Full Prompt (Recommended):**
- Copy everything between `PROMPT START` and `PROMPT END`
- Paste into Stitch
- This gives you the most detailed, accurate mockup

**Option B - Simplified Prompt (If A doesn't work):**
- Copy the "SIMPLIFIED PROMPT" section
- Use if the full prompt is too complex
- Generates a cleaner, more focused mockup

---

### Step 3: Generate & Export

1. **Paste** the prompt into your chosen tool
2. **Generate** the mockup (usually takes 30-60 seconds)
3. **Review** - Does it match the design spec?
4. **Export** the mockup:
   - PNG/JPG: `screen.png` → Save to `mockups/` folder
   - HTML/Code: `code.html` → Save to `mockups/` folder (if available)

---

## ✅ What You Should See

Your generated mockup should include:

### About Section ✓
- [ ] Section title "About" (large, light gray)
- [ ] Card container with dark background
- [ ] 3-4 sentence paragraph text
- [ ] Clean, readable typography

### Skills Section ✓
- [ ] Section title "Skills"
- [ ] Three categories: Frontend, Backend, Tools
- [ ] Category titles in cyan color
- [ ] Tech badges with icons (React, Vue, TypeScript, Node.js, etc.)
- [ ] Badges arranged in grid with wrapping

### Experience Timeline ✓
- [ ] Section title "Experience"
- [ ] Vertical line on the left
- [ ] Cyan timeline dots (4 total)
- [ ] 4 experience cards on the right
- [ ] Each card shows: company, position, duration, highlights

### Overall Design ✓
- [ ] Dark theme (#0a0e1a background)
- [ ] Consistent card styling across all sections
- [ ] Cyan accent color (#00d9ff) used appropriately
- [ ] Professional, clean appearance
- [ ] Proper spacing between sections

---

## 🔄 If It Doesn't Look Right

### Common Issues & Fixes

**Issue:** "Badges don't have icons"
- **Fix:** Add to prompt: "Show tech badges with visible icons like React logo, Vue logo, etc."

**Issue:** "Timeline line is missing"
- **Fix:** Add to prompt: "Make the vertical timeline line more prominent, 2px wide, gray color"

**Issue:** "Cards look too similar/boring"
- **Fix:** Add to prompt: "Add subtle shadows and hover effects to cards"

**Issue:** "Text is hard to read"
- **Fix:** Add to prompt: "Increase text contrast, use lighter gray for body text"

**Issue:** "Layout looks cramped"
- **Fix:** Add to prompt: "Add more vertical spacing between sections, use 64px gaps"

---

## 🎨 Refinement Prompts

After the first generation, you can refine with these follow-up prompts:

### Make it More Professional
```
Make the design more polished and professional. Increase shadows,
improve typography hierarchy, and ensure consistent spacing.
```

### Enhance Visual Interest
```
Add subtle hover states to tech badges, make timeline dots glow,
and add smooth transitions to card borders.
```

### Improve Readability
```
Increase text contrast, use larger font sizes for headings,
and add more line height to body text.
```

### Match Reference Better
```
Make the cyan accent color more prominent in tech badges and timeline.
Ensure all cards have the same dark gray background (#0d1117).
```

---

## 💾 Saving Your Mockup

Once you're happy with the result:

1. **Screenshot (PNG):**
   - Take full-page screenshot
   - Name it `screen.png`
   - Save to `docs/ui/epic4/mockups/screen.png`

2. **Exported Code (HTML):**
   - If Stitch/v0 provides HTML export
   - Name it `code.html`
   - Save to `docs/ui/epic4/mockups/code.html`

3. **Design File (Figma):**
   - Export as PNG + share Figma link
   - Add link to README or commit message

---

## 📋 Next Steps After Mockup

1. **Share with Team:**
   - Show mockup to developers
   - Get feedback on feasibility
   - Discuss any changes needed

2. **Start Implementation:**
   - Developers reference mockup + design spec
   - Build components based on Epic 4 PRD
   - Use mockup for visual accuracy

3. **Iterate if Needed:**
   - If developers need clarification
   - Generate detail views (e.g., just Skills section)
   - Adjust colors/spacing based on feedback

---

## 🆘 Troubleshooting

### "Stitch isn't generating what I want"

**Try this:**
1. Use the **simplified prompt** instead
2. Break it into smaller requests:
   - "Generate just the About section first"
   - "Now generate the Skills section"
   - "Finally generate the Experience timeline"
3. Add more specific details:
   - "Use exactly this color: #00d9ff for cyan"
   - "Card background must be #0d1117"

### "The mockup looks too light/bright"

**Add to prompt:**
```
Use a very dark theme. Page background: #0a0e1a (almost black).
Card backgrounds: #0d1117 (dark gray). Ensure it feels dark and moody.
```

### "Tech badges don't stand out"

**Add to prompt:**
```
Make tech badges more visible with a cyan glow effect.
Use this exact badge style:
- Background: rgba(0, 217, 255, 0.1)
- Border: 1px solid rgba(0, 217, 255, 0.3)
- Text color: #00d9ff (bright cyan)
```

### "Timeline is confusing"

**Add to prompt:**
```
Make the timeline clearer:
- Vertical line: 2px solid #30363d on the left
- Dots: 12px circles, #00d9ff with glow
- Cards: aligned to the right of the timeline
- Clear connection between dots and cards
```

---

## 📚 Additional Resources

**Design Reference:**
- [Full Design Spec](./content-sections-design-spec.md) - Complete design details
- [Epic 4 PRD](../../prd/epic-4-content-sections.md) - Functional requirements
- [Epic 2 Mockups](../epic2/mockups/) - Reference for similar card-based design

**Stitch Tips:**
- Be specific with colors (use hex codes)
- Mention exact sizes (px values)
- Reference design systems ("like GitHub dark theme")
- Ask for states (hover, active, focus)

**Example Stitch Sessions:**
- Epic 2 Hero Section: See `docs/ui/epic2/`
- Epic 3 Navigation: See `docs/ui/epic3/`

---

## ⏱️ Estimated Time

- **First attempt:** 2-3 minutes
- **Review & iterate:** 2-5 minutes
- **Export & save:** 1 minute

**Total:** ~5-10 minutes for a polished mockup

---

## ✨ Pro Tips

1. **Start with the full prompt** - It has all the details
2. **Generate all sections at once** - Ensures consistency
3. **Save iterations** - Keep different versions as you refine
4. **Use hex codes** - Stitch works better with specific colors
5. **Reference existing mockups** - Compare with Epic 2/3 for consistency
6. **Don't overthink it** - First generation is usually 80% there

---

**Ready to go?** Open [`stitch-prompt-content-sections.md`](./stitch-prompt-content-sections.md) and copy the prompt!

---

**Document Owner:** UX Team  
**Last Updated:** 2025-10-29  
**Estimated Time:** ⏱️ 5-10 minutes


