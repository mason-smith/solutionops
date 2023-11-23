import Link from 'next/link';
import { GitHubLogoIcon, HomeIcon } from '@radix-ui/react-icons';

// local dependencies
import { Button } from '../ui/button';
import { ThemeToggle } from './theme-toggle';

export function HeaderFooterContent() {
  return (
    <div className="flex h-14 items-center p-4 text-sm">
      <nav className="flex items-center space-x-4">
        <Link href="/" aria-label="Home page">
          <HomeIcon className="h-[1.2rem] w-[1.2rem]" />
        </Link>
      </nav>

      <div className="flex flex-1 items-center justify-end space-x-2">
        <article className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/mason-smith/"
              target="_blank"
              aria-label="Check out my code on github"
              rel="noreferrer"
            >
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
            </a>
          </Button>
          <ThemeToggle />
        </article>
      </div>
    </div>
  );
}
