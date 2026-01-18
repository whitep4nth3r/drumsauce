import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import rawData from "../../data/transcriptions.json";
import type { Transcription } from "../types/transcription.ts";

const data = rawData as Transcription[];

export function GET(context: APIContext) {
  return rss({
    title: "DRUMSAUCE transcription feed",
    description: "Free drum transcriptions by DRUMSAUCE",
    site: context.site || "",
    items: data.map((t: Transcription) => ({
      title: `${t.song} by ${t.artist}`,
      pubDate: new Date(t.date),
      description: t.description,
      link: `/transcriptions/${t.slug}/`,
    })),
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: `
    <atom:link 
      href="https://drumsauce.net/rss.xml" 
      rel="self"
      type="application/rss+xml" />
    <language>en-gb</language>
  `,
  });
}
