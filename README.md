# KNMI App Website

## Overview
This website serves as a modern, interactive platform for the KNMI (Royal Netherlands Meteorological Institute) application. Built with cutting-edge web technologies, it provides an engaging user experience through smooth animations and a clean, intuitive interface. The project showcases weather data visualization and meteorological information in an accessible and visually appealing manner.

## Key Features
- **Interactive Animations**: Smooth scroll-based animations using Framer Motion and GSAP
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI Components**: Built with React and styled using Tailwind CSS
- **Performance Optimized**: Fast loading times and smooth interactions
- **Dynamic Content**: Real-time weather data integration

## Technology Stack
### Frontend
- Next.js 15.2.3
- React 19.0.0
- Tailwind CSS 4
- Framer Motion 12.5.0
- GSAP 3.12.7
- React Icons 5.5.0

### Development Tools
- Visual Studio Code
- Git & GitHub
- Vercel (Deployment)
- NPM

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (LTS version)
- npm (comes with Node.js)

### Steps
1. Clone the repository
```bash
git clone https://github.com/jessevandenberg/knmi-app-website.git
cd knmi-app-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`

## Configuration
- Environment variables can be added in `.env.local` if needed
- Next.js configuration can be modified in `next.config.mjs`
- Tailwind CSS configuration is available in `tailwind.config.js`

## Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with Turbopack |
| `npm run build` | Creates a production build |
| `npm start` | Runs the production build |
| `npm run lint` | Runs the linter to check code quality |

## Project Structure
```
knmi-app-website/
├── app/              # Next.js app directory
├── public/           # Static assets
├── components/       # React components
├── styles/          # Global styles
└── ...
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the ISC License.

## Contact
For any questions or suggestions, please open an issue in the GitHub repository.

## Acknowledgments
- KNMI for providing the meteorological data
- Next.js team for the amazing framework
- All contributors who have helped shape this project
