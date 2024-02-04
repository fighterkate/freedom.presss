import cn from 'components/ui/cn';

export default function HomeHero() {
  return (
    <div
      className="background-image--fpf-gradient mb-4 py-12 xl:py-20"
      style={{
        backgroundImage: 'url(https://media.freedom.press/media/images/paglen_darker_50.2e16d0ba.fill-2880x1000.png)',
      }}
    >
      <div className="container relative z-10">
        <p
          className={cn(
            'text-2xl md:text-3xl 2xl:text-4xl',
            'leading-relaxed lg:leading-normal',
            'mx-auto max-w-[1024px] xl:max-w-[1200px]',
            'animate__animated animate__fadeInDown'
          )}
        >
          <span className="font-semibold">Freedom of the Press Foundation </span>protects, defends, and empowers
          public-interest journalism in the 21st century.
        </p>
        <nav className="hidden md:mt-12 md:block">
          <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {CATEGORIES.map((item) => (
              <li key={item.title}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="block text-white hover:underline" href="#">
                  <h4 className="mb-3 text-xl">{item.title}</h4>
                  <p className="text-sm leading-relaxed 2xl:text-base">{item.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const CATEGORIES = [
  {
    title: 'NEWS & ADVOCACY',
    description: 'Get the latest news on secrecy, surveillance, and whistleblowers.',
  },
  {
    title: 'PRESS FREEDOM TRACKER',
    description: 'Systematically documenting press freedom violations in the United States.',
  },
  {
    title: 'GUIDES & TRAINING',
    description: 'How-to guides on how to protect yourself in the age of mass surveillance.',
  },
  {
    title: 'SECUREDROP',
    description: 'Enabling secure communication between journalists and anonymous sources.',
  },
];
