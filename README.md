# NOBE Workshop Tutorial Dashboard

A modern, responsive React dashboard built with Vite for demonstrating GitHub and code review workflows. This application showcases best practices for building clean, maintainable web applications with a focus on user experience and responsive design.

![Dashboard Screenshot](https://github.com/user-attachments/assets/ba840feb-a8cf-4822-818d-0ea85b8bc3fd)

## Features

- **📊 Overview Statistics**: Real-time metrics for repositories, pull requests, code reviews, and contributors
- **📁 Repository Management**: Visual cards displaying repository information with language indicators and statistics
- **🔄 Pull Request Tracking**: Comprehensive PR dashboard with status indicators and priority levels
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean, professional interface with gradient backgrounds and card-based layout
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and optimized production builds

## Technologies Used

- **React 19** - Modern React with hooks and functional components
- **Vite** - Next-generation frontend build tool
- **CSS3** - Custom styling with CSS Grid, Flexbox, and responsive design
- **ESLint** - Code quality and consistency
- **Modern JavaScript (ES2022+)** - Latest JavaScript features

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rohankumarrrr/nobe-workshop-tutorial.git
cd nobe-workshop-tutorial
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── components/           # React components
│   ├── Dashboard.jsx    # Main dashboard container
│   ├── StatsCard.jsx    # Statistics overview cards
│   ├── RepoCard.jsx     # Repository information cards
│   ├── PullRequestCard.jsx # Pull request cards
│   ├── ActivityFeed.jsx # Recent activity timeline
│   └── *.css           # Component-specific styles
├── App.jsx             # Root application component
├── App.css             # Main application styles
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## Dashboard Components

### Overview Section
- **Total Repositories**: Count of all repositories
- **Active Pull Requests**: Currently open pull requests
- **Code Reviews**: Reviews in progress
- **Contributors**: Team member count

### Repository Cards
Each repository card displays:
- Repository name and description
- Programming language with color indicator
- Star count, fork count, and open PRs
- Last update timestamp

### Pull Request Cards
Pull request cards include:
- PR title and priority level
- Repository and author information
- Current status (open, review, approved, etc.)
- Reviewer count and creation time

### Activity Feed
Real-time activity stream showing:
- User actions (PR opened, code reviewed, merged, commits)
- Repository context
- Timestamp information
- Action-specific icons and colors

## Responsive Design

The dashboard is fully responsive and adapts to different screen sizes:

- **Desktop (1200px+)**: Full grid layout with side-by-side sections
- **Tablet (768px-1199px)**: Adjusted grid with optimized spacing
- **Mobile (< 768px)**: Single-column layout with stacked components

![Mobile Screenshot](https://github.com/user-attachments/assets/16b29485-dede-4ad6-a798-94f50f6508f4)

## Customization

### Adding New Data
Mock data is currently stored in the Dashboard component. To add real data:

1. Replace static data arrays with API calls
2. Add state management (Redux, Zustand, or Context API)
3. Implement loading states and error handling

### Styling
The application uses a modular CSS approach:
- Each component has its own CSS file
- CSS custom properties for consistent theming
- Responsive design with CSS Grid and Flexbox

### Theme Colors
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--card-background: rgba(255, 255, 255, 0.95)
--text-primary: #2d3748
--text-secondary: #4a5568
```

## Performance Optimizations

- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Images**: Efficient image loading and compression
- **CSS Optimization**: Purged unused styles in production
- **Tree Shaking**: Eliminates unused JavaScript code

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is part of the NOBE Workshop Tutorial and is available for educational purposes.

## Development Notes

This dashboard was built as a demonstration project for the NOBE (Network of Business Excellence) workshop focusing on:
- Modern React development practices
- Component-based architecture
- Responsive web design
- Git workflow and code review processes
- Clean, maintainable code structure

For questions or support, please refer to the workshop materials or create an issue in this repository.
