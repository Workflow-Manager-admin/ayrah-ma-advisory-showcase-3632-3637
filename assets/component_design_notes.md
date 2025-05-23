# Ayrah M&A Advisory Showcase - Component Design Notes

## 1. Navigation Component

**Structure:**
```
<Header>
  <Container>
    <Logo />
    <Nav>
      <NavLinks />
      <CTAButton />
    </Nav>
    <MobileMenuButton />
  </Container>
  <MobileMenu />
</Header>
```

**Styling Details:**
- Header container: 
  - Height: 80px
  - Position: fixed, width: 100%
  - z-index: 1000
  - Transition: background-color 0.3s ease
  - Initial state: transparent background
  - Scrolled state: navy background (#0A2342)

- Logo:
  - Height: 40px
  - Margin-right: auto
  - Color: white

- Navigation links:
  - Display: flex
  - Gap: 32px
  - Font-weight: 600
  - Font-size: 16px
  - Text-transform: uppercase
  - Letter-spacing: 0.5px
  - Color: white
  - Hover effect: gold underline animation

- CTA Button:
  - Background: gold (#D4AF37)
  - Color: navy (#0A2342)
  - Padding: 10px 24px
  - Border-radius: 4px
  - Font-weight: 600
  - Margin-left: 24px
  - Hover: slightly darker gold with subtle scale

- Mobile menu button:
  - Display: none (visible on screens <992px)
  - Icon: Hamburger (three lines)
  - Color: white
  - Size: 24px

- Mobile menu:
  - Position: fixed
  - Top: 0, Right: 0
  - Height: 100vh
  - Width: 85%
  - Max-width: 350px
  - Background: navy (#0A2342)
  - Transform: translateX(100%)
  - Transition: transform 0.3s ease
  - Open state: transform: translateX(0)
  - Links stacked vertically with padding

## 2. Hero Section Component

**Structure:**
```
<HeroSection>
  <BackgroundImage />
  <Overlay />
  <Container>
    <HeroContent>
      <HeroTitle />
      <HeroSubtitle />
      <CTAContainer>
        <PrimaryButton />
        <SecondaryButton />
      </CTAContainer>
    </HeroContent>
  </Container>
  <ScrollIndicator />
</HeroSection>
```

**Styling Details:**
- Hero section:
  - Height: 100vh
  - Position: relative
  - Display: flex
  - Align-items: center
  - Overflow: hidden

- Background image:
  - Position: absolute
  - Width: 100%
  - Height: 100%
  - Object-fit: cover
  - z-index: 1

- Overlay:
  - Position: absolute
  - Width: 100%
  - Height: 100%
  - Background: linear-gradient(rgba(10,35,66,0.8), rgba(10,35,66,0.7))
  - z-index: 2

- Hero content:
  - Position: relative
  - z-index: 3
  - Max-width: 650px
  - Margin-left: 5%
  - Color: white

- Hero title:
  - Font-size: 48px (mobile: 36px)
  - Font-weight: 700
  - Line-height: 1.2
  - Margin-bottom: 24px
  - Animation: fade-in and slide-up (0.5s)

- Hero subtitle:
  - Font-size: 18px
  - Line-height: 1.6
  - Margin-bottom: 32px
  - Opacity: 0.9
  - Max-width: 540px
  - Animation: fade-in and slide-up (0.7s delay)

- CTA container:
  - Display: flex
  - Gap: 16px
  - Animation: fade-in (1s delay)

- Scroll indicator:
  - Position: absolute
  - Bottom: 32px
  - Left: 50%
  - Transform: translateX(-50%)
  - Animation: bounce 2s infinite
  - Opacity: 0.7
  - z-index: 3

## 3. Services Card Component

**Structure:**
```
<ServiceCard>
  <IconContainer>
    <Icon />
  </IconContainer>
  <CardContent>
    <ServiceTitle />
    <ServiceDescription />
    <LearnMoreLink />
  </CardContent>
</ServiceCard>
```

**Styling Details:**
- Service card:
  - Background: white
  - Border-radius: 8px
  - Box-shadow: 0 4px 12px rgba(0,0,0,0.1)
  - Padding: 32px
  - Height: 100%
  - Display: flex
  - Flex-direction: column
  - Transition: transform 0.3s ease, box-shadow 0.3s ease
  - Hover: transform: translateY(-5px), box-shadow: 0 8px 16px rgba(0,0,0,0.15)

- Icon container:
  - Width: 64px
  - Height: 64px
  - Background: rgba(212,175,55,0.1)
  - Border-radius: 50%
  - Display: flex
  - Justify-content: center
  - Align-items: center
  - Margin-bottom: 24px

- Icon:
  - Color: gold (#D4AF37)
  - Size: 28px

- Service title:
  - Font-size: 20px
  - Font-weight: 600
  - Color: navy (#0A2342)
  - Margin-bottom: 12px

- Service description:
  - Font-size: 16px
  - Line-height: 1.6
  - Color: #333333
  - Margin-bottom: 16px
  - Flex-grow: 1

- Learn more link:
  - Font-size: 14px
  - Font-weight: 600
  - Color: gold (#D4AF37)
  - Text-transform: uppercase
  - Letter-spacing: 0.5px
  - Display: flex
  - Align-items: center
  - Gap: 8px
  - Transition: gap 0.3s ease
  - Hover: gap: 12px (arrow moves)

## 4. Process Step Component

**Structure:**
```
<ProcessStep>
  <StepNumberCircle />
  <StepContent>
    <StepTitle />
    <StepDescription />
  </StepContent>
  <ConnectingLine /> <!-- For desktop view -->
</ProcessStep>
```

**Styling Details:**
- Process step:
  - Display: flex
  - Flex-direction: column
  - Align-items: center
  - Text-align: center
  - Width: 18% (desktop) / 100% (mobile)
  - Position: relative
  - Padding: 0 15px

- Step number circle:
  - Width: 64px
  - Height: 64px
  - Border-radius: 50%
  - Background: gold (#D4AF37)
  - Color: navy (#0A2342)
  - Font-size: 24px
  - Font-weight: 700
  - Display: flex
  - Justify-content: center
  - Align-items: center
  - Margin-bottom: 16px
  - Box-shadow: 0 4px 8px rgba(0,0,0,0.2)

- Step title:
  - Font-size: 20px
  - Font-weight: 600
  - Color: white
  - Margin-bottom: 12px

- Step description:
  - Font-size: 14px
  - Line-height: 1.5
  - Color: rgba(255,255,255,0.8)

- Connecting line:
  - Position: absolute
  - Height: 2px
  - Background: gold (#D4AF37)
  - Width: calc(100% - 80px)
  - Top: 32px
  - Left: calc(50% + 40px)
  - z-index: 0
  - Display: none on mobile

## 5. Testimonial Slide Component

**Structure:**
```
<TestimonialSlide>
  <QuoteIcon />
  <TestimonialText />
  <ClientInfo>
    <ClientName />
    <ClientPosition />
  </ClientInfo>
</TestimonialSlide>
```

**Styling Details:**
- Testimonial slide:
  - Padding: 48px 32px
  - Background: white
  - Border-radius: 8px
  - Box-shadow: 0 4px 16px rgba(0,0,0,0.08)
  - Text-align: center
  - Max-width: 800px
  - Margin: 0 auto
  - Position: relative

- Quote icon:
  - Font-size: 64px
  - Color: rgba(212,175,55,0.2)
  - Position: absolute
  - Top: 24px
  - Left: 24px
  - Line-height: 0

- Testimonial text:
  - Font-size: 20px (mobile: 18px)
  - Line-height: 1.7
  - Font-style: italic
  - Color: #333333
  - Margin-bottom: 24px
  - Position: relative
  - z-index: 2

- Client info:
  - Display: flex
  - Flex-direction: column
  - Align-items: center

- Client name:
  - Font-size: 16px
  - Font-weight: 600
  - Color: navy (#0A2342)
  - Margin-bottom: 4px

- Client position:
  - Font-size: 14px
  - Color: #666666

## 6. Contact Form Component

**Structure:**
```
<ContactForm>
  <FormGroup>
    <Label />
    <Input />
  </FormGroup>
  <FormGroup>
    <Label />
    <Input />
  </FormGroup>
  <!-- Additional form fields -->
  <SubmitButtonContainer>
    <SubmitButton />
  </SubmitButtonContainer>
  <FormMessage /> <!-- For success/error messages -->
</ContactForm>
```

**Styling Details:**
- Contact form:
  - Width: 100%
  - Max-width: 500px
  - Display: flex
  - Flex-direction: column
  - Gap: 20px

- Form group:
  - Display: flex
  - Flex-direction: column
  - Gap: 8px

- Label:
  - Font-size: 14px
  - Font-weight: 600
  - Color: #333333

- Input/Textarea:
  - Padding: 12px 16px
  - Border: 1px solid #e0e0e0
  - Border-radius: 4px
  - Font-size: 16px
  - Background: white
  - Transition: border-color 0.3s ease
  - Focus: border-color: navy (#0A2342), outline: none

- Select dropdown:
  - Similar to Input styling
  - Appearance: none
  - Background-image: url('down-arrow.svg')
  - Background-repeat: no-repeat
  - Background-position: right 16px center
  - Padding-right: 40px

- Submit button container:
  - Margin-top: 8px

- Submit button:
  - Width: 100%
  - Background: navy (#0A2342)
  - Color: white
  - Padding: 14px 24px
  - Border: none
  - Border-radius: 4px
  - Font-size: 16px
  - Font-weight: 600
  - Cursor: pointer
  - Transition: background-color 0.3s ease
  - Hover: slightly lighter navy

- Form message:
  - Padding: 12px
  - Border-radius: 4px
  - Font-size: 14px
  - Margin-top: 16px
  - Success: background-color: rgba(40,167,69,0.1), border: 1px solid #28A745
  - Error: background-color: rgba(220,53,69,0.1), border: 1px solid #dc3545

## 7. Case Study Card Component

**Structure:**
```
<CaseStudyCard>
  <CardHeader>
    <IndustryBadge />
    <TransactionType />
  </CardHeader>
  <CardBody>
    <Metric />
    <ChallengeTitle />
    <ChallengeText />
    <SolutionTitle />
    <SolutionText />
    <ResultsTitle />
    <ResultsText />
  </CardBody>
</CaseStudyCard>
```

**Styling Details:**
- Case study card:
  - Background: white
  - Border-radius: 8px
  - Box-shadow: 0 4px 12px rgba(0,0,0,0.1)
  - Overflow: hidden
  - Height: 100%
  - Display: flex
  - Flex-direction: column
  - Transition: transform 0.3s ease
  - Hover: transform: translateY(-5px)

- Card header:
  - Padding: 16px 24px
  - Background: navy (#0A2342)
  - Display: flex
  - Justify-content: space-between
  - Align-items: center

- Industry badge:
  - Background: rgba(255,255,255,0.2)
  - Color: white
  - Padding: 4px 12px
  - Border-radius: 100px
  - Font-size: 12px
  - Text-transform: uppercase
  - Letter-spacing: 0.5px

- Transaction type:
  - Color: gold (#D4AF37)
  - Font-weight: 600
  - Font-size: 14px

- Card body:
  - Padding: 24px
  - Display: flex
  - Flex-direction: column
  - Gap: 16px
  - Flex-grow: 1

- Metric:
  - Font-size: 36px
  - Font-weight: 700
  - Color: gold (#D4AF37)
  - Text-align: center
  - Padding: 16px 0
  - Border-bottom: 1px solid #f0f0f0
  - Margin-bottom: 8px

- Section titles (Challenge, Solution, Results):
  - Font-size: 16px
  - Font-weight: 600
  - Color: navy (#0A2342)
  - Margin-bottom: 8px

- Section texts:
  - Font-size: 14px
  - Line-height: 1.6
  - Color: #333333
