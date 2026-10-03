import { ExternalLinkProps } from '@/src/types';
import Link from 'next/link';

const ExternalLink = ({
  href,
  customClassName = 'flex items-center gap-2 transition ease hover:opacity-80',
  children
}: ExternalLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    className={customClassName}
  >
    {children}
  </Link>
);

export default ExternalLink;
