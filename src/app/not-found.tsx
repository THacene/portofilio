import { siteConfig } from '@/src/configs/config';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-8xl font-black gradient-text mb-6">404</h1>
      <p className="text-2xl text-slate-600 mb-4 font-semibold">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="text-lg text-slate-400 mb-8">
        The page might have been moved or deleted, or the URL may be incorrect.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a
          href="/"
          className="btn-gradient text-lg"
        >
          Go Back Home
        </a>
        <a
          href={`${siteConfig.social.github}/portfolio/issues/new`}
          className="btn-outline text-lg"
        >
          Report a Bug
        </a>
      </div>
      <div className="mt-12">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">{siteConfig.author}</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
