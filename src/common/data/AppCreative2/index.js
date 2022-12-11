/*===================

==== AppCreative2 dummy data list ====

- Navbar
- Banner
- Why Choose Us
- Analytics Tool
- Ever Need
- Testimonial
- Wallet Experience
- Technology Community
- Pricing
- FAQ's
- CTA
- Footer Top
- Footer

====================*/

import appleStore from 'common/assets/image/appCreativeTwo/apple-store.png';
import googlePlay from 'common/assets/image/appCreativeTwo/google-play.png';
import icon1 from 'common/assets/image/appCreativeTwo/icons/1.png';
import icon2 from 'common/assets/image/appCreativeTwo/icons/2.png';
import icon3 from 'common/assets/image/appCreativeTwo/icons/3.png';
import icon4 from 'common/assets/image/appCreativeTwo/icons/4.png';
import walletIcon1 from 'common/assets/image/appCreativeTwo/icons/5.png';
import walletIcon2 from 'common/assets/image/appCreativeTwo/icons/6.png';
import cards from 'common/assets/image/appCreativeTwo/icons/cards.png';
import doc from 'common/assets/image/appCreativeTwo/icons/doc.png';
import grid from 'common/assets/image/appCreativeTwo/icons/grid.png';
import layout from 'common/assets/image/appCreativeTwo/icons/layout.png';
import loop from 'common/assets/image/appCreativeTwo/icons/loop.png';
import shape from 'common/assets/image/appCreativeTwo/icons/shape.png';
import sidebar from 'common/assets/image/appCreativeTwo/icons/sidebar.png';
import smartphone from 'common/assets/image/appCreativeTwo/icons/smartphone.png';
import technologyImage from 'common/assets/image/appCreativeTwo/technology.png';
import { default as testimonial2 } from 'common/assets/image/appCreativeTwo/testimonial/client-2.png';
import { default as testimonial1 } from 'common/assets/image/appCreativeTwo/testimonial/client.png';
import { default as testimonial2Logo } from 'common/assets/image/appCreativeTwo/testimonial/logo-2.png';
import { default as testimonial1Logo } from 'common/assets/image/appCreativeTwo/testimonial/logo.png';
import walletImage from 'common/assets/image/appCreativeTwo/wallet-experience.png';
import dribbble from 'common/assets/image/webAppCreative/icons/dribbble.png';
import facebook from 'common/assets/image/webAppCreative/icons/facebook.png';
import twitter from 'common/assets/image/webAppCreative/icons/twitter.png';
import siteLogo from 'common/assets/image/webAppCreative/logo.png';


/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
export const menu_items = [
  {
    label: 'Home',
    path: '#home',
    offset: '70',
    id: 1,
  },
  {
    label: 'About',
    path: '#about',
    offset: '70',
    id: 2,
  },
  {
    label: 'Offering',
    path: '#testimonial',
    offset: '70',
    id: 3,
  },
  {
    label: 'White Paper',
    path: '#analyticsTool',
    offset: '70',
    id: 4,
  },
  {
    label: 'Community',
    path: '#cta',
    offset: '70',
    id: 5,
  },
];

/* ------------------------------------ */
// Banner data section
/* ------------------------------------ */
export const bannerData = {
  news: 'NEWS',
  newsLabel: 'Check our WhitePaper it is out',
  title: 'Earn 40% Royalties from Travel Bookings and convert to discounted vacations!',
  text: 'The First real asset backed token providing 40% Royalties from Short Term rentals.',
  button: [
    {
      id: 1,
      title: 'White Paper',
      thumb: googlePlay,
      link: 'https://play.google.com/store',
    },
    {
      id: 2,
      title: 'Video',
      thumb: appleStore,
      link: 'https://play.google.com/store',
    },

  ],
};

/* ------------------------------------ */
// Why Choose Us data section
/* ------------------------------------ */
export const whyChooseUs = [
  {
    id: 1,
    icon: icon1,
    title: '40% Royalties from Bookings',
    text: `Earn high yields on your token, based on real appartments`,
    linkLabel: 'Start Earning',
    link: '#',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Buy the Token',
    text: `Buy the Token to earn benefits`,
    linkLabel: 'Buy TPRO now',
    link: 'https://token.satori.club/register',
  },
  {
    id: 3,
    icon: icon3,
    title: 'Monitor Revenue',
    text: `See bookings, and royalties directly in the dashboard.`,
    linkLabel: 'Login',
    link: '#',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Convert Royalties to Vacations',
    text: `Convert bookings at 1.5X to redeem to vacations.`,
    linkLabel: 'Login',
    link: '#',
  },
];

/* ------------------------------------ */
// Analytics Tool data section
/* ------------------------------------ */
export const analyticsTool = {
  slogan: 'Earn passive income',
  title: 'Short Term rental income is growing, join today',
  desc: `Get the TPRO token to earn 40% income of the properties added to Fund I, fully audited..`,
  features: [
    '40% Royalties (Revenue share)',
    'Travel Rewards',
    'Full transparency',
  ],
  button: {
    link: 'https://token.satori.club/register',
    label: 'Buy the Token',
  },
};

/* ------------------------------------ */
// Ever Need data section
/* ------------------------------------ */
export const everNeed = [
  {
    id: 1,
    icon: cards,
    title: 'Travel Rewards',
    background: 'rgba(240, 64, 55, 0.097195)'
  },
  {
    id: 2,
    icon: layout,
    title: 'Paris, London, Berlin, Barcelona + More',
    background: 'rgba(84, 84, 212, 0.1)'
  },
  {
    id: 3,
    icon: smartphone,
    title: 'A new short term standard, technology and design',
    background: 'rgba(254, 220, 90, 0.1)'
  },
  {
    id: 4,
    icon: sidebar,
    title: '40% Royalty',
    background: 'rgba(84, 84, 212, 0.1)'
  },
  {
    id: 5,
    icon: grid,
    title: 'Real asset earning token',
    background: 'rgba(240, 64, 55, 0.1)'
  },
  {
    id: 6,
    icon: grid,
    title: 'Audited annually',
    background: 'rgba(240, 64, 55, 0.1)'
  },
  {
    id: 7,
    icon: shape,
    title: 'Short Term Rentals',
    background: 'rgba(119, 191, 65, 0.1)'
  },
  {
    id: 8,
    icon: loop,
    title: 'Swiss Banking Partners',
    background: 'rgba(240, 64, 55, 0.1)'
  },
  {
    id: 9,
    icon: doc,
    title: 'Passive Income',
    background: 'rgba(84, 84, 212, 0.1)'
  },
];

/* ------------------------------------ */
// Testimonial data section
/* ------------------------------------ */
export const testimonialData = {
  title: 'What client say about us',
  posts: [
    {
      image: testimonial1,
      logo: testimonial1Logo,
      text: 'OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce template with modern and trending design. We deliver on such an expansive with innovation agenda with so many theme projects.',
      name: 'Mariana Dickey',
      designation: 'Head of Design by GeekWire',
      rating: 5,
      button: {
        link: '#',
        label: 'Read the GeekWire case study'
      }
    },
    {
      image: testimonial2,
      logo: testimonial2Logo,
      text: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.',
      name: 'Jonathan Taylor',
      designation: 'Head of Communication by Envato',
      rating: 4,
      button: {
        link: '#',
        label: 'Read the Envato case study'
      }
    },
  ],
};

/* ------------------------------------ */
// Wallet Experience data section
/* ------------------------------------ */
export const walletExperience = {
  slogan: 'Ultimate Short Term Travel Design',
  title: 'A new way of offering Short Term Rentals',
  desc: `Short term rentals should be easy to access, through a smart phone, clean and the best locations, and that is what Satori Club is.`,
  thumb: walletImage,
  features: [
    {
      id: 1,
      icon: walletIcon1,
      title: "Easy access through an App",
      content: "Access a short term rental like a hotel, but stay in a luxury apartment."
    },
    {
      id: 2,
      icon: walletIcon2,
      title: "Clean and Fast Wifi",
      content: "Always clean, 2 bedroom apartments, with work desk, fast wifi and the best locations."
    },
  ],
};

/* ------------------------------------ */
// Technology Community data section
/* ------------------------------------ */
export const technologyCommunity = {
  slogan: 'Join the Satori Club Community',
  title: 'As a token holder you gain exclusive access to our community.',
  desc: `You get to be a part of knowing what happens, how we design the process and vote on new locations.`,
  thumb: technologyImage,
  button: {
    label: 'Join Discord',
    link: '#',
  },
};

/* ------------------------------------ */
// Pricing data section
/* ------------------------------------ */
export const pricing = {
  slogan: 'Meet exciting Pricing Plans',
  title: 'Create custom landing pages with us so that converts more visitors than any website.',
  save: 'Save 25%',
  currency: "$",
  plans: {
    monthly: [
      {
        id: 1,
        title: 'Starter Plan',
        description: 'Per user',
        price: 19,
        period: "mo",
        button: {
          label: 'Start 14 Days Free Trial',
          link: '#'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Connections',
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: 'Draft Payments',
          },
          {
            id: 4,
            text: 'Unlimited Flows & Supports',
          },
          {
            id: 5,
            text: 'Lifetime updates',
          },
        ],
      },
      {
        id: 2,
        title: 'Business Plan',
        description: 'Per user',
        price: 49,
        period: "mo",
        button: {
          label: 'Start 14 Days Free Trial',
          link: '#'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Connections',
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: 'Draft Payments',
          },
          {
            id: 4,
            text: 'Unlimited Flows & Supports',
          },
          {
            id: 5,
            text: 'Lifetime updates',
          },
        ],
      },
    ],
    yearly: [
      {
        id: 1,
        title: 'Starter Plan',
        description: 'Per user',
        price: Math.floor(19 * 12),
        period: "yr",
        button: {
          label: 'Start 14 Days Free Trial',
          link: '#'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Connections',
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: 'Draft Payments',
          },
          {
            id: 4,
            text: 'Unlimited Flows & Supports',
          },
          {
            id: 5,
            text: 'Lifetime updates',
          },
        ],
      },
      {
        id: 2,
        title: 'Business Plan',
        description: 'Per user',
        price: Math.floor(49 * 12),
        period: "yr",
        button: {
          label: 'Start 14 Days Free Trial',
          link: '#'
        },
        features: [
          {
            id: 1,
            text: 'Unlimited Connections',
          },
          {
            id: 2,
            text: "Basic Actions & Triggers",
          },
          {
            id: 3,
            text: 'Draft Payments',
          },
          {
            id: 4,
            text: 'Unlimited Flows & Supports',
          },
          {
            id: 5,
            text: 'Lifetime updates',
          },
        ],
      },
    ],
  }
};

/* ------------------------------------ */
// FAQ's data section
/* ------------------------------------ */
export const faqs = [
  {
    id: 1,
    title: 'Can i sell the token?',
    description: `Absolutely. You can sell it on Pancakeswap, Uniswap or other exchanges at anytime.`,
  },
  {
    id: 2,
    title: 'What is the price per token?',
    description: `On the public sale the token is priced at 1 USD per Token.`,
  },
  {
    id: 3,
    title: 'How are Royalties paid out??',
    description: `From the dashboard you can choose 3 options, Crypto, Wire Tranfser or Travel credits at 1.5X to the earnings. `,
  },
  {
    id: 4,
    title: 'Will you add more properties?',
    description: `All raised funds is used to add more properties, and through swiss banks we can finance additional properties every year, so your royalty is expected to go up annually.`,
  },
];


/* ------------------------------------ */
// CTA data section
/* ------------------------------------ */
export const callToAction = {
  title: 'Earn 40% on Short Term Rentals today!',
  content: 'But the TPRO Token and earn 40% Royalties on bookins and earn travel rewards with Satori Club.',
  button: {
    label: 'Buy the Token',
    link: 'https://token.satori.club/register'
  },
  info: 'Crypt, Fiat or Credit Card'
};

/* ------------------------------------ */
// Footer Top data section
/* ------------------------------------ */
export const footerTop = {
  about: {
    logo: siteLogo,
    text: `The First Short Term Rental Royalty revenue Share Token backed by Real Estate Assets. Earn 40% in Royalties today.`,
  },
  widgets: [
    {
      id: 2,
      title: 'About Us',
      list: [
        {
          id: 1,
          title: 'Support Center',
          link: 'https://residenceclub.co/?page_id=1977',
        },
        {
          id: 2,
          title: 'Customer Support',
          link: 'https://residenceclub.co/?page_id=1964',
        },
        {
          id: 3,
          title: 'About Us',
          link: '#',
        },

      ],
    },
    {
      id: 3,
      title: 'Our Information',
      list: [

        {
          id: 1,
          title: 'Affiliates',
          link: '#',
        },
        {
          id: 2,
          title: 'Booking Policy ',
          link: '#',
        },
        {
          id:3,
          title: 'Privacy Policy',
          link: '#',
        },
        {
          id: 4,
          title: 'Terms & Conditions',
          link: '#',
        },

      ],
    },
    {
      id: 4,
      title: 'Satori Club',
      list: [
        {
          id: 1,
          title: 'Properties',
          link: 'https://residenceclub.co/?page_id=15710',
        },
        {
          id: 2,
          title: 'Booking',
          link: 'https://residenceclub.co/?page_id=15785',
        },

      ],
    },
  ],
  contactInfo: {
    title: 'Contact info',
    address: `6300 Zug, Switzerland`,
    email: `info@satori.club`,
  },
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const footer = {
  copyright: `Copyright © 2022 Satori Club in Switzerland. All rights reserved`,
  nav: [

    {
      id: 1,
      title: 'Privacy',
      link: '#',
    },
    {
      id: 2,
      title: 'Terms',
      link: '#',
    },
    {
      id: 3,
      title: 'Affiliates',
      link: '#',
    },
  ],
  socialLinks: [
    {
      id: 1,
      link: 'http://facebook.com',
      icon: facebook,
      label: 'Facebook',
    },
    {
      id: 2,
      link: 'http://twitter.com',
      icon: twitter,
      label: 'Twitter',
    },
    {
      id: 3,
      link: 'http://dribbble.com',
      icon: dribbble,
      label: 'Dribbble',
    },
  ],
};
