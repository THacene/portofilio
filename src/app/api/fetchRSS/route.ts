import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { siteConfig } from '@/src/configs/config';

export async function GET() {
  const parser = new Parser();
  const feed = await parser.parseURL(`${siteConfig.social.blog}/rss.xml`);

  // Assuming `feed.items` contains a `categories` field for tags
  const blogs = feed.items.map((item: any) => ({
    guid: item.guid,
    title: item.title,
    link: item.link,
    contentSnippet: item.contentSnippet,
    categories: item.categories || [], // Categories (tags)
    source: item.source?.title || 'Hashnode' // Get the source blog title
  }));

  return NextResponse.json({ items: blogs });
}
