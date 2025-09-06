# !Not Tech Ltd - Official Website

A modern, responsive website for !Not Tech Ltd, a leading software solutions company. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring a beautiful dark/light theme and smooth animations.

![Light Theme](public/images/background/light.png)
![Dark Theme](public/images/background/dark.png)

## Features

- 🌓 Dark/Light Theme Support
- 📱 Fully Responsive Design
- 🎯 Smooth Scroll Navigation
- ✨ Modern UI/UX with Framer Motion Animations
- 🎨 Custom Brand Color Scheme
- 📝 Interactive Contact Form
- 🖼️ Dynamic Image Loading with Next.js Image Optimization
- 🔍 SEO Optimized
- 🚀 Fast Page Load Times

## Tech Stack

- **Framework**: [Next.js 15.5.2](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Email Service**: [Resend](https://resend.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **UI Components**: [Headless UI](https://headlessui.com/)

## Getting Started

### Prerequisites

- Node.js 21.5.0 or later
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/official-website.git
   cd official-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   RESEND_API_KEY=your_resend_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
official-website/
├── app/
│   ├── api/           # API routes
│   ├── components/    # React components
│   │   ├── common/    # Shared components
│   │   ├── layout/    # Layout components
│   │   └── sections/  # Page sections
│   ├── constants/     # Constants and config
│   ├── hooks/         # Custom React hooks
│   ├── lib/          # Utility functions
│   ├── styles/       # Global styles
│   └── types/        # TypeScript types
├── public/
│   ├── images/       # Static images
│   │   ├── background/
│   │   ├── company-assets/
│   │   └── vector/
└── package.json
```

## Key Features

### Responsive Navigation

- Mobile-friendly navigation menu
- Smooth scroll to sections
- Active section highlighting
- Animated theme toggle

### Interactive Sections

- Hero section with floating illustrations
- About section with animated cards
- Services section with hover effects
- Portfolio section with project filtering
- Team section with member cards
- Contact section with form validation

### Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading of off-screen content
- Optimized animations for better performance
- Efficient theme switching without flicker

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary and confidential. All rights reserved by !Not Tech Ltd.

## Contact

For inquiries about this website or !Not Tech's services:

- Email: info@nottechltd.com
- Phone: +234 (0)703 668 5502
- Address: 50 Adeba road, Ibeju-Lekki, Lagos State
