# Ayrah M&A Advisory Showcase - Style Guide

## Color Palette

### Primary Colors
- **Navy Blue** (`#0A2342`): Primary brand color, representing trust, professionalism, and stability
- **Gold** (`#D4AF37`): Accent color, representing value, excellence, and premium service

### Secondary Colors
- **Light Gray** (`#F5F7FA`): Background color for sections, providing clean contrast
- **Dark Gray** (`#333333`): Primary text color, ensuring readability
- **White** (`#FFFFFF`): Background color for sections, providing clean contrast

### Tertiary Colors
- **Light Blue** (`#E6EEF8`): Subtle accent for hover states and backgrounds
- **Medium Gray** (`#909090`): Secondary text and borders
- **Success Green** (`#28A745`): For success indicators and call-to-action elements

## Typography

### Font Families
- **Primary Font**: 'Montserrat', sans-serif
  - Headers, navigation, and buttons
  - Clean, modern, and professional appearance
- **Secondary Font**: 'Open Sans', sans-serif
  - Body text, paragraphs, and smaller content
  - Excellent readability at various sizes

### Font Sizes
- **H1 (Hero Title)**: 48px (mobile: 36px)
- **H2 (Section Headers)**: 36px (mobile: 28px)
- **H3 (Sub-headers)**: 24px (mobile: 20px)
- **H4 (Card Titles)**: 20px (mobile: 18px)
- **Body Text**: 16px (mobile: 14px)
- **Small Text/Footer**: 14px (mobile: 12px)
- **Button Text**: 16px (mobile: 14px)

### Font Weights
- **Bold**: 700 (for headers and emphasis)
- **Semi-Bold**: 600 (for subheadings and navigation)
- **Regular**: 400 (for body text)
- **Light**: 300 (for captions and small text)

## Spacing

### Margins and Paddings
- **Container Padding**: 80px top/bottom, 5% left/right (mobile: 40px top/bottom, 5% left/right)
- **Section Spacing**: 120px between major sections (mobile: 80px)
- **Component Spacing**: 24px between related components
- **Text Spacing**: 16px between paragraphs
- **Button Padding**: 12px vertical, 24px horizontal

### Grid System
- **12-column grid** with 24px gutters
- **Max Width**: 1200px for main content container
- **Breakpoints**:
  - Mobile: < 576px
  - Tablet: 576px - 992px
  - Desktop: > 992px

## Components

### Buttons
- **Primary Button**:
  - Background: Navy Blue (`#0A2342`)
  - Text: White
  - Hover: Slightly lighter navy (`#153156`)
  - Border-radius: 4px
  - Transition: 0.3s ease
  - Box-shadow: subtle shadow for depth

- **Secondary Button**:
  - Background: Transparent
  - Border: 1.5px solid Navy Blue
  - Text: Navy Blue
  - Hover: Light blue background (`#E6EEF8`)

### Cards
- **Service Card**:
  - Background: White
  - Border-radius: 8px
  - Box-shadow: 0 4px 12px rgba(0,0,0,0.1)
  - Padding: 32px
  - Transition: transform 0.3s ease, box-shadow 0.3s ease
  - Hover: Slight elevation (transform: translateY(-5px))

### Form Elements
- **Input Fields**:
  - Border: 1px solid Medium Gray
  - Border-radius: 4px
  - Padding: 12px 16px
  - Focus: Border color changes to Navy Blue
  - Error: Border color changes to red (#dc3545)

- **Dropdown**:
  - Similar styling to input fields
  - Custom arrow icon in Navy Blue

## Layout

### Navigation
- **Desktop**: Horizontal navigation bar fixed at the top
  - Logo on left
  - Menu items on right
  - Contact button (CTA) highlighted
  - Transparent on scroll, solid Navy background when scrolled
  
- **Mobile**: Hamburger menu triggering a slide-in drawer
  - Full-height overlay
  - Animated transitions
  - Close button clearly visible

### Sections Flow
1. **Hero Section**: Full-width with background image, overlay, and prominent CTA
2. **About Section**: Company overview with value proposition
3. **Services Section**: Card-based layout of service offerings
4. **Process Section**: Step-by-step visual flow of the M&A advisory process
5. **Case Studies/Testimonials**: Social proof elements
6. **Contact Section**: Form and direct contact information
7. **Footer**: Company information, navigation links, social media, and copyright

## Interactive Elements

### Hover States
- Subtle transitions for all interactive elements (0.3s ease)
- Scale transforms for cards and clickable elements
- Color shifts for buttons and links

### Animations
- Fade-in animations for sections as they enter viewport
- Subtle parallax effect for hero section
- Loading states for form submissions

### Accessibility
- Sufficient color contrast (WCAG AA compliance)
- Focus states clearly visible
- Appropriate alt text for images
- Semantic HTML structure

## Responsive Behavior
- **Desktop-First Approach** with responsive breakpoints
- **Fluid Typography** scaling between breakpoints
- **Flexible Layouts** using CSS Grid and Flexbox
- **Conditional Rendering** of certain elements based on screen size
- **Touch-Optimized** interactions for mobile devices

## Visual Elements

### Imagery
- **Photography Style**: Professional, corporate imagery of business meetings, handshakes, modern office environments
- **Icons**: Simple, consistent line icons (1.5px stroke width)
- **Illustrations**: Abstract, minimal financial graphs and charts where applicable

### Graphics and Decorative Elements
- Subtle gold accent lines to separate sections
- Abstract geometric shapes in navy and gold as background elements
- Light dot patterns for texture in certain sections
