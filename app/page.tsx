import { Metadata } from 'next';

import DonateNow from 'components/donate-now';
import GetNotified from 'components/get-notified';
import HomeHero from 'components/home-hero/home-hero';
import Projects from 'components/projects/projects';
import RecentNews from 'components/recent-news/recent-news';

export const metadata: Metadata = {
  title: 'Freedom of the Press Foundation',
  description: 'Freedom of the Press Foundation protects and defends adversarial journalism in the 21st century.',
  // some other metadata can be applied here based on our SEO needs
};

export default function HomePage() {
  return (
    <>
      <section className="relative text-white">
        <HomeHero />
      </section>
      <section className="container relative mt-6 flex flex-col md:flex-row md:justify-between  md:gap-12">
        <RecentNews rencentNews={RECENT_NEWS} />
        <div className="border-stroke md:border-l md:pl-5 lg:sticky lg:top-0 lg:max-w-[500px]">
          <GetNotified />
          <DonateNow />
          <Projects projects={OUR_PROJECTS} />
        </div>
      </section>
    </>
  );
}

// We can fetch these data from CMS

const RECENT_NEWS = [
  {
    slug: 'article-1',
    imgUrl: 'https://media.freedom.press/media/images/Screenshot_2024-02-02_at_10.35.02AM.max-800x500.png',
    title: `
    Defining Stories: Freedom of the Press Foundation’s 2023 Impact Report`,
    summary:
      'FPF’s 2023 Impact Report details the strides we made in the past year, what we need to look back on, and where we hope to go from here. Our 2023 Impact Report — available now.',
  },
  {
    slug: 'article-2',
    imgUrl: 'https://media.freedom.press/media/images/50372310373_e9ecf51d39_k.max-800x500.jpg',
    title: `
    New election blog catalogs media suppression by candidates, campaigns`,
    summary:
      'Special project from U.S. Press Freedom Tracker collects and reports on press freedom aggressions by candidates and their teams running in 2024 federal elections',
  },
  {
    slug: 'article-3',
    imgUrl: 'https://media.freedom.press/media/images/Screenshot_2024-02-02_at_10.35.02AM.max-800x500.png',
    title: `
    Defining Stories: Freedom of the Press Foundation’s 2023 Impact Report`,
    summary:
      'FPF’s 2023 Impact Report details the strides we made in the past year, what we need to look back on, and where we hope to go from here. Our 2023 Impact Report — available now.',
  },
  {
    slug: 'article-4',
    imgUrl: 'https://media.freedom.press/media/images/50372310373_e9ecf51d39_k.max-800x500.jpg',
    title: `
    New election blog catalogs media suppression by candidates, campaigns`,
    summary:
      'Special project from U.S. Press Freedom Tracker collects and reports on press freedom aggressions by candidates and their teams running in 2024 federal elections',
  },
  {
    slug: 'article-5',
    imgUrl: 'https://media.freedom.press/media/images/Screenshot_2024-02-02_at_10.35.02AM.max-800x500.png',
    title: `
    Defining Stories: Freedom of the Press Foundation’s 2023 Impact Report`,
    summary:
      'FPF’s 2023 Impact Report details the strides we made in the past year, what we need to look back on, and where we hope to go from here. Our 2023 Impact Report — available now.',
  },
  {
    slug: 'article-6',
    imgUrl: 'https://media.freedom.press/media/images/50372310373_e9ecf51d39_k.max-800x500.jpg',
    title: `
    New election blog catalogs media suppression by candidates, campaigns`,
    summary:
      'Special project from U.S. Press Freedom Tracker collects and reports on press freedom aggressions by candidates and their teams running in 2024 federal elections',
  },
];

const OUR_PROJECTS = [
  {
    id: 'p1',
    name: 'SecureDrop',
    description:
      'Through this widely used open source platform, we are enabling whistleblowers to communicate anonymously and securely with news organizations.',
    imgUrl: 'https://media.freedom.press/media/images/SDLogo2019_FPFSite.max-100x150.png',
    detailUrl: '#',
  },
  {
    id: 'p2',
    name: 'U.S. Press Freedom Tracker',
    description:
      'We are systematically documenting press freedom violations in the United States. A partnership with the Committee to Protect Journalists and leading press freedom groups.',
    imgUrl: 'https://media.freedom.press/media/images/White_on_Dark.max-100x150.png',
    detailUrl: '#',
  },
];
