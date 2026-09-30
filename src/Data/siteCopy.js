// Approved site copy (Matt, 2026-09-29). Source: site-copy/2026-09-29-copy.md.
// Use verbatim. Do not edit wording without Matt's approval.

export const about = {
  heading: 'About Karsyz Robotics',
  lead: "I've spent 22 years making sure what's on the drawing actually gets built.",
  paragraphs: [
    'I started in 2004 at a small gauge and fixture shop, detailing and designing fixtures and doing some CNC programming. From there I moved to structural steel detailing in Windsor, producing fabrication, erection, and submittal packages and supporting ironworkers on site. In 2014 I founded Karsyz Robotics and spent five years setting up, programming, and commissioning robotic welding and joining cells for Ford, Tesla, Magna, Centerline, Valiant TMS, Flex-N-Gate, and Kuka.',
    "That shop-floor time changed how I design. I've seen what happens when a part is hard to fixture, weld, or load, so the drawings I send are made to be built, not just to look good.",
    'Today I do mechanical design and detailing for fab shops, machine builders, and product companies: 3D models, fabrication drawings, sheet metal, weldments, machine design, fixtures and workholding, and DXF/CNC data. I work mainly in Fusion 360, AutoCAD, and Inventor, and I can work on your seat of Onshape, SolidWorks, or Tekla.',
    'Based in Sault Ste. Marie, Ontario, working remotely with clients across North America.',
  ],
};

export const caseStudies = {
  heading: 'Case studies',
  items: [
    {
      id: 'bcp-fuel-sending-unit',
      title: 'Fuel Sending Unit Assembly, Border City Performance',
      body: 'Border City Performance, a Windsor performance car brand, needed a fuel sending unit that could run a high-flow Aeromotive/Walbro-style pump while keeping the factory fuel level sender. I designed a two-part assembly: a machined billet top and a formed sheet metal bracket that holds both the OEM sender and the aftermarket pump at the right depth and position in the tank. I delivered the design, 3D model, detailed drawings, and CNC data for production.',
      // Paired by filename ("bcp...") and the BCP logo visible in both renders.
      images: [
        {
          src: '/images/portfolio/mechDesignStuff.PNG',
          alt: 'Fuel sending unit assembly with machined billet top and formed sheet metal bracket, Border City Performance',
        },
        {
          src: '/images/portfolio/bcpFuelPumpBracket.png',
          alt: 'Formed sheet metal fuel pump bracket, Border City Performance',
        },
      ],
    },
    {
      id: 'six-speed-lockout-transmission-mount',
      title: 'Transmission Removal & Transport Mount, Six Speed Lockout',
      body: "Six Speed Lockout had been using a shaped block of wood to support T56 and 6060-style transmissions during removal and transport. It worked, but it wasn't very secure. I reverse-engineered the block into CAD, refined the shape, and went through several 3D printed versions until I had a mount that holds the gearbox firmly on the jack and keeps it from tipping over whenever it's moved. Now it's repeatable and easy to reprint, and it can be adjusted for other cases.",
      // No existing portfolio image clearly matches this project.
      images: [
        {
          src: '/images/portfolio/sixSpeedLockoutMount.png',
          alt: '3D printed T56/6060 transmission mount for a transmission jack, Six Speed Lockout',
        },
      ],
    },
  ],
};

export const fixturesTooling = {
  heading: 'Fixtures & Tooling',
  intro:
    'Fixtures are where I started in 2004, and after five years commissioning robotic welding cells, I know what a fixture has to do on a real production line.',
  items: [
    {
      label: 'Production welding fixtures:',
      text: "adjustable fixtures that locate parts accurately, load fast, and leave clear access for the torch, whether it's manual or robotic.",
    },
    {
      label: 'Quality control fixtures:',
      text: 'checking fixtures for formed sheet metal parts, so inspectors can verify shape and hole positions quickly and consistently.',
    },
    {
      label: 'Workholding & transport tooling:',
      text: 'holders, cradles, and mounts that keep parts and assemblies secure during machining, assembly, or moving.',
    },
    {
      label: 'Robot tooling:',
      text: 'the same principles apply to grippers and end-of-arm tooling, designed by someone who has programmed the robots that use them.',
    },
  ],
  // Existing image from the portfolio's Jigs/Fixtures section (per copy notes).
  images: [
    { src: '/images/portfolio/image-4.jpg', alt: 'Deburring fixture' },
  ],
  imageTodo:
    'add the labelled "concept design" welding fixture and QC fixture images here.',
};
