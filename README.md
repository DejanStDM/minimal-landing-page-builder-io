# Minimal Landing Page Builder.io Test Project

## Project Data
- **Project name:** minimal-landing-page-builder-io
- **Builder.io project:** [Zenith Haven on Builder.io](https://builder.io/app/projects/bb91d57690b742ebac59fcb6b349cfce/zenith-haven)
- **GitHub repo:** [minimal-landing-page-builder-io](https://github.com/DejanStDM/minimal-landing-page-builder-io)
- **Figma:** [Drupal Whitelabel Test](https://www.figma.com/design/H2Mr63iVutD2RzXXRsM3Ky/Drupal-Whitelabel-Test?node-id=0-1&p=f&m=dev)

This is a test project for evaluating [Builder.io](https://www.builder.io/) capabilities in converting Figma designs to actual code.

## Project Purpose
This project is intended to:
- Test the workflow of converting a Figma design into a working codebase using Builder.io.
- Serve as a minimal example for experimenting with design system extraction and landing page implementation.

## Figma Design
The design used for this project is a simple landing page with a design system, selected for its suitability as a test case.

- **Figma file:** [Drupal Whitelabel Test](https://www.figma.com/design/H2Mr63iVutD2RzXXRsM3Ky/Drupal-Whitelabel-Test?node-id=0-1&p=f&m=dev)

## Project Structure
- `app/` — Main application code, including components and design system pages
- `scss/` — SCSS styles, organized by base, components, utils, and vendors
- `public/` — Static assets

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Notes
- This project is for testing and demonstration purposes only.
- The codebase is generated and adapted from the provided Figma file using Builder.io tools.

---

# Documentation-Driven Development

## Components

All major UI sections are implemented as React components in `app/components/`. Each component is data-driven, pulling content from JSON files in `/data/`.

### List of Components
- **Button, IconButton, Link**: Reusable, styled buttons and links. Props: `type`, `size`, `disabled`, `loading`, `iconLeft`, `iconRight`, `onClick`, `href`, `className`, etc. See `/app/components/Button.tsx`.
- **Navigation**: Persistent header with logo, navigation links, login/signup buttons, and mobile menu. Uses Button components. See `/app/components/Navigation.tsx`.
- **Hero**: Swiper carousel for hero slides. Data: `/data/heroSlides.json`. Props: `className`. See `/app/components/Hero.tsx`.
- **Achievements**: Displays key stats (icon, number, label) from `/data/achievements.json`. See `/app/components/Achievements.tsx`.
- **Clients**: Renders client logos and description from `/data/clients.json`. See `/app/components/Clients.tsx`.
- **Community**: Renders cards (icon, title, description) from `/data/community.json`. See `/app/components/Community.tsx`.
- **CommunityUpdates**: Section with articles (image, title, read more) from `/data/communityUpdates.json`. See `/app/components/CommunityUpdates.tsx`.
- **Customer**: Testimonial, customer info, image, from `/data/customer.json`. See `/app/components/Customer.tsx`.
- **Unlock, UnlockFooter**: Section with title, description, button, image, from `/data/unlock.json` and `/data/unlockFooter.json`. See `/app/components/Unlock.tsx`, `/app/components/UnlockFooter.tsx`.
- **Footer**: Call to action, company info, social links, navigation links, from `/data/footer.json`. See `/app/components/Footer.tsx`.
- **SpacingGuide, LayoutGuide**: Visualizes spacing/layout rules, used in design system guide. See `/app/components/SpacingGuide.tsx`.

### Component Usage Pattern
- All content is loaded from JSON files in `/data/`.
- To update content, edit the relevant JSON file (no code changes needed).
- To add a new section: create a new JSON file, a new component, and import it in the page layout.

## Design System

The design system is in `app/design-system/` and includes:
- **Buttons**: All button variants and states.
- **Colors**: Color palette and usage.
- **Effects**: Shadows, overlays, etc.
- **Guide**: Layout and spacing rules.
- **Icons**: Iconography reference.
- **Typography**: Font styles, sizes, weights.

Each subfolder contains a `page.tsx` for documentation and demo.

## Editing Content

- All major content is stored in `/data/*.json`.
- To update text, images, or stats, edit the corresponding JSON file.
- No code changes are needed for content updates.
- Images are stored in `/public/images/` and referenced by path in JSON.

## Styling Conventions

- SCSS is modular: `scss/base/`, `scss/components/`, `scss/utils/`, `scss/vendors/`.
- Use `@forward` for SCSS imports (not `@import`).
- Use design system classes for typography, spacing, color, etc.
- Section titles: always use `sec__title` plus a design system class (e.g., `headline-1`, `headline-2`).
- No utility classes, no Tailwind CSS.
- To style a section variant, target `.component-class .sec__title` in SCSS.

## Adding New Features or Sections

1. Add a new JSON file in `/data/` for your content.
2. Create a new component in `/app/components/` that loads and renders this data.
3. Add your component to the main page layout in `/app/page.tsx`.
4. Add and import a new SCSS file in `scss/components/` if needed, and use `@forward` in the index.
5. Document your new feature in this README under Components.

## Contributing Documentation

- Every new feature, component, or section must be documented here.
- If you add a new endpoint, service, or config, update this README immediately.
- Use the structure above for new documentation.
- Keep documentation up to date with code changes.

---

# Changelog

- 2025-07-10: Added Achievements component and documentation.
- 2025-07-08: Integrated Swiper carousel for Hero section.
- 2025-07-07: Added Navigation, SpacingGuide, and LayoutGuide components.
- 2025-07-03: Introduced Button, IconButton, and Link components with full documentation.
