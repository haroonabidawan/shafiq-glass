// data/services.js
import { HiOutlineCube, HiOutlineViewGrid } from 'react-icons/hi';

const services = [
  {
    title: 'Glass Solutions',
    slug: 'glass-solutions',
    description:
      'Premium glass products including shower enclosures, mirrors, double-glazed units, laminated glass, tempered glass, fire-rated glass, and innovative smart glass for residential and commercial applications.',
    icon: HiOutlineCube,
    detailDescription: `Shafiq Glass & Aluminum has been providing high-quality glass solutions across Bahrain since 2006. Our Glass Solutions are designed to meet both aesthetic and functional requirements for residential, commercial, and industrial projects. We offer a wide range of premium glass products, including elegant and durable shower enclosures, custom mirrors in various shapes and sizes, energy-efficient double-glazed units, strong laminated and tempered glass, fire-rated glass for enhanced safety, and innovative smart glass that offers privacy on demand.
    <br/><br/>
    Our services include precision glass cutting and polishing to achieve perfect edges and finishes, decorative beveling and sandblasting to enhance the aesthetic appeal, and professional fabrication and installation to ensure safety and durability. Every project is tailored to meet the client’s specific needs, combining functionality with modern design.
    <br /><br/>
    Choosing Shafiq Glass & Aluminum means opting for high-quality materials, customized solutions, an experienced team, and end-to-end services from design to installation. We are committed to delivering innovative and reliable glass solutions that transform spaces while maintaining the highest standards of quality and safety.`,

    products: [
      {
        title: 'Shower Enclosures',
        image: '/img/products/glass/shower-enclosure.jpg',
        description:
          'Elegant and durable shower enclosures designed to fit any bathroom style.',
      },
      {
        title: 'Mirrors',
        image: '/img/products/glass/mirror.jpg',
        description:
          'High-quality mirrors in various shapes and sizes for residential and commercial spaces.',
      },
      {
        title: 'Double-Glazed Units',
        image: '/img/products/glass/double-glazed.jpg',
        description:
          'Energy-efficient double-glass units that enhance insulation and reduce noise.',
      },
      {
        title: 'Tempered Glass',
        image: '/img/products/glass/tempered.jpg',
        description:
          'Strong and safe tempered glass suitable for partitions, doors, and more.',
      },
      {
        title: 'Laminated Glass',
        image: '/img/products/glass/laminated.jpg',
        description:
          'Laminated glass with added safety and soundproofing features.',
      },
      {
        title: 'Fire-Rated Glass',
        image: '/img/products/glass/fire-rated.jpg',
        description:
          'Specialized fire-resistant glass for enhanced safety in commercial buildings.',
      },
      {
        title: 'Smart Glass',
        image: '/img/products/glass/smart-glass.jpg',
        description:
          'Switchable glass technology for privacy and modern interiors.',
      },
    ],
    services: [
      {
        title: 'Glass Cutting & Polishing',
        image: '/img/services/glass/cutting-polishing.jpg',
        description:
          'Precision cutting and polishing to achieve perfect edges and finishes.',
      },
      {
        title: 'Beveling & Sandblasting',
        image: '/img/services/glass/beveling-sandblast.jpg',
        description:
          'Decorative and functional beveling and sandblasting for aesthetic designs.',
      },
      {
        title: 'Installation & Fabrication',
        image: '/img/services/glass/installation.jpg',
        description:
          'Professional installation and fabrication ensuring high-quality results.',
      },
    ],
  },
  {
    title: 'Aluminum Solutions',
    slug: 'aluminum-solutions',
    description:
      'Custom aluminum fabrication including windows, doors, curtain walls, ACP cladding, pergolas, and CNC-designed architectural elements built to international standards.',
    icon: HiOutlineViewGrid,
    detailDescription: `Shafiq Glass & Aluminum specializes in high-quality aluminum fabrication, delivering durable and aesthetically pleasing solutions for residential, commercial, and industrial projects. Our Aluminum Solutions include custom-designed windows and doors, modern curtain walls, ACP cladding panels, stylish pergolas, and precision CNC-designed architectural elements built to international standards.
    <br /><br/>
    Our services cover the full project lifecycle, including professional fabrication, installation, powder coating, and anodizing for enhanced durability and finish. Every project is tailored to meet client requirements, combining functionality with modern design to achieve exceptional results.
    <br /><br/>
    Choosing Shafiq Glass & Aluminum for your aluminum needs ensures access to top-quality materials, expert craftsmanship, and end-to-end support from design to installation. We are committed to providing innovative, reliable, and visually striking aluminum solutions that stand the test of time.`,

    products: [
      {
        title: 'Sliding & Hinged Windows',
        image: '/img/products/aluminum/windows.jpg',
        description:
          'Durable aluminum windows with smooth operation and modern aesthetics.',
      },
      {
        title: 'Aluminum Doors',
        image: '/img/products/aluminum/doors.jpg',
        description:
          'Stylish and secure aluminum doors for residential and commercial projects.',
      },
      {
        title: 'Curtain Walls',
        image: '/img/products/aluminum/curtain-walls.jpg',
        description:
          'Modern curtain wall systems for facades and large glass walls.',
      },
      {
        title: 'ACP Cladding Panels',
        image: '/img/products/aluminum/acp-cladding.jpg',
        description:
          'Lightweight and weather-resistant cladding panels for exterior applications.',
      },
      {
        title: 'Pergolas',
        image: '/img/products/aluminum/pergolas.jpg',
        description:
          'Custom-designed pergolas that enhance outdoor living spaces.',
      },
    ],
    services: [
      {
        title: 'CNC Architectural Design',
        image: '/img/services/aluminum/cnc.jpg',
        description:
          'Precision CNC design for architectural aluminum elements.',
      },
      {
        title: 'Fabrication & Installation',
        image: '/img/services/aluminum/fabrication.jpg',
        description:
          'Complete fabrication and professional installation of aluminum structures.',
      },
      {
        title: 'Powder Coating & Anodizing',
        image: '/img/services/aluminum/powder-coating.jpg',
        description:
          'High-quality finishing processes for durability and aesthetics.',
      },
    ],
  },
];

export const getServicesList = () => {
  return services.map(({ title, slug, description, icon }) => ({
    title,
    slug,
    description,
    icon,
  }));
};

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.slug === slug) || null;
};

export default services;
