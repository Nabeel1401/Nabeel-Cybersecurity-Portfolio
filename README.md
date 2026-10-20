# Nabeel Ahmad — Red & Gold Portfolio

React 18 + Vite + TypeScript + Tailwind CSS. Icons: lucide-react Menu and X only. No animation libraries.

## Run

Install Node.js with npm, then from this folder:

npm install
npm run dev

Production build: npm run build

The new React app is in src/App.tsx. The older static version remains in dist for reference; it will be replaced by a successful Vite build.

## Implemented

Centered desktop pill navigation, mobile menu with Escape support, red-and-gold hero, Ken Burns entrance, staggered text, animated fading arcs, one canvas/rAF cursor spotlight with cleanup, responsive content, certificate filters, email and social links, reduced-motion support.

Stats are based on supplied facts: six certificates, two internships, planned master's completion in 2027.

## Asset and validation limits

This session blocked file downloads and network access. The uploaded portrait is referenced through its authenticated original-file URL; if unavailable, the app uses the red portrait URL supplied in the brief. To use your photo publicly, place it at public/assets/nabeel-portrait.png and change the initial image state in App.tsx to /assets/nabeel-portrait.png.

Six certificate PDF buttons link to the originals and require owner access. Five issuer verification links are included. For public hosting, put the original PDFs in public/certificates and change each PDF href to /certificates/{cert.file}.pdf.

Dependency installation failed in this environment; compilation, browser appearance, asset loading and production deployment are unverified. The full-window canvas exports a PNG mask each frame as requested; this can be expensive on high-resolution displays.

Individual project repositories could not be verified. Project descriptions come from your supplied LinkedIn profile and link to your GitHub profile.

The registered Site ID is preserved in .openai/hosting.json. Reuse it when continuing publication.
