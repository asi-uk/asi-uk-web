# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 16 website for ASI UK (Adventist-laymen's Services and Industries), built with:

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS with custom ASI brand colors (`asi-blue`, `asi-darkBlue`, `asi-extraDarkBlue`, `asi-grey`)
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Icons**: Lucide React
- **Image Optimization**: Cloudinary integration via next-cloudinary

### Project Structure
- `app/` - Next.js App Router pages and components
  - `components/` - Shared app-level components (MainHeader, Footer, ProgressBar, YouTubeEmbed, etc.)
  - Route-based page structure (about, constitution, contact-us, etc.)
  - Route-specific components in `<route>/components/` directories
- `components/` - Reusable shadcn/ui components
- `data/` - Static data modules
  - `constitution.json` - Constitution content (structured JSON)
  - `projects.ts` - Project funding data and types
  - `convention.ts` - Convention event data (presenters, FAQ, videos, tickets)
- `lib/` - Utility functions and service integrations (Notion, Stripe, email, Discord)
- `public/` - Static assets including ASI logos

### Key Implementation Details
- Uses App Router with TypeScript/JSX (not TSX despite config)
- Constitution page renders from `data/constitution.json`
- Mobile-responsive navigation with Sheet component for mobile menu
- Custom color scheme defined in tailwind.config.js for ASI branding
- Image optimization configured for Cloudinary hostname `res.cloudinary.com/disrkguox`
- Global layout includes MainHeader and Footer on all pages
- Error boundaries at global and form-specific levels (error.tsx files)
- Global 404 page and loading skeleton

### Content Management
- Constitution content is stored as structured JSON in `data/constitution.json`
- Project and convention data extracted to typed modules in `data/`
- Static pages use standard Next.js page components
- Organization information and metadata configured in root layout

### Environment Variables
- See `.env.example` for required environment variables
- Integrations: Notion (membership + convention), Stripe (payments), Resend (email), Discord (webhooks)
