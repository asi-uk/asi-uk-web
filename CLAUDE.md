# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production application 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 15 website for ASI UK (Adventist-laymen's Services and Industries), built with:

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom ASI brand colors (`asi-blue`, `asi-darkBlue`, `asi-extraDarkBlue`, `asi-grey`)
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Icons**: Lucide React
- **Image Optimization**: Cloudinary integration via next-cloudinary

### Project Structure
- `app/` - Next.js App Router pages and components
  - `components/` - Page-specific components (MainHeader, Footer, etc.)
  - Route-based page structure (about, constitution, contact-us, etc.)
- `components/` - Reusable shadcn/ui components
- `data/` - Static JSON data (constitution content)
- `lib/` - Utility functions
- `public/` - Static assets including ASI logos

### Key Implementation Details
- Uses App Router with TypeScript/JSX (not TSX despite config)
- Constitution page renders from `data/constitution.json` 
- Mobile-responsive navigation with Sheet component for mobile menu
- Custom color scheme defined in tailwind.config.js for ASI branding
- Image optimization configured for Cloudinary hostname `res.cloudinary.com/disrkguox`
- Global layout includes MainHeader and Footer on all pages

### Content Management
- Constitution content is stored as structured JSON in `data/constitution.json`
- Static pages use standard Next.js page components
- Organization information and metadata configured in root layout