import { NextApiRequest, NextApiResponse } from 'next';

const projects = [
  {
    id: 1,
    title: 'CinemaTube',
    description:
      'A dynamic video streaming platform built with Next.js and Node.js, offering users an immersive cinematic experience. It features a sleek interface, robust search functionality, and seamless playback.',
    image: '/cinemaa.png',
    link: 'https://www.cinematube.uz/',
  },
  {
    id: 2,
    title: 'Game Hub',
    description:
      'An interactive gaming portal developed using React and Chakra UI. This platform provides gamers with access to a wide variety of games, user reviews, and community features, all wrapped in a user-friendly design.',
    image: '/game.png',
    link: 'https://game-hub-amber-pi-27.vercel.app/',
  },
  {
    id: 3,
    title: 'Project Three',
    description:
      'An elegant portfolio website created with Next.js and Shadcn UI, showcasing a collection of projects and experiences. This site emphasizes modern design principles and responsive layouts, ensuring a captivating user experience.',
    image: '/portfolio.png',
    link: 'https://sardorsoftware.vercel.app/',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set caching headers to prevent caching
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate',
  );
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  res.status(200).json(projects);
}
