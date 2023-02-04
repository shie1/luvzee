import { TablerIcon, IconBrandSpotify, IconBrandApple, IconBrandSoundcloud, IconBrandYoutube, IconBrandInstagram, IconBrandTwitter, IconMail, IconBrandTidal, IconBrandPaypal, IconBrandVercel } from "@tabler/icons";
import type { NextPage } from "next";
import Head from "next/head";
import { createElement } from "react";

type SocialLink = { label: string, icon: TablerIcon, href: string }
const links: Array<SocialLink> = [
  {
    label: "Spotify",
    icon: IconBrandSpotify,
    href: "https://open.spotify.com/artist/5fmJdVFwRnr2xzo5LCfqJO?autoplay=true"
  },
  {
    label: "Apple Music",
    icon: IconBrandApple,
    href: "https://music.apple.com/us/artist/luvzee/1653971957"
  },
  {
    label: "Soundcloud",
    icon: IconBrandSoundcloud,
    href: "https://soundcloud.com/luvzee"
  },
  {
    label: "Tidal",
    icon: IconBrandTidal,
    href: "https://listen.tidal.com/artist/35500076"
  },
  {
    label: "YouTube",
    icon: IconBrandYoutube,
    href: "https://youtube.com/@shibibeni"
  },
  {
    label: "Instagram",
    icon: IconBrandInstagram,
    href: "https://instagram.com/luvzeegram"
  },
  {
    label: "Twitter",
    icon: IconBrandTwitter,
    href: "https://twitter.com/@therealluvzee"
  },
  {
    label: "Email",
    icon: IconMail,
    href: "mailto:shibibence@gmail.com"
  },
  {
    label: "PayPal",
    icon: IconBrandPaypal,
    href: "https://paypal.me/shie1bi"
  }
]

type Release = { title: string, type: "Album" | "EP" | "Single"; year: string, cover: string, href: string, tracks: number }
const releases: Array<Release> = [
  {
    title: "tél",
    type: "EP",
    year: "2022",
    cover: "/img/tel-cover.jpg",
    href: "/releases/tel",
    tracks: 5,
  },
]

const Home: NextPage = () => {
  return (<>
    <Head>
      {/* HTML Meta Tags */}
      <title>luvzee • Alternatív/indie zenész</title>
      <meta name="description" content="Magyar alternatív/indie zenész" />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://luvzee.shie1bi.hu" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="luvzee • Alternatív/indie zenész" />
      <meta property="og:description" content="Magyar alternatív/indie zenész" />
      <meta property="og:image" content="/img/luvzee-avatar.jpg" />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="luvzee.shie1bi.hu" />
      <meta property="twitter:url" content="https://luvzee.shie1bi.hu" />
      <meta name="twitter:title" content="luvzee • Alternatív/indie zenész" />
      <meta name="twitter:description" content="Magyar alternatív/indie zenész" />
      <meta name="twitter:image" content="/img/luvzee-avatar.jpg" />
      {/* Meta Tags Generated via https://www.opengraph.xyz */}
    </Head>
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <img draggable="false" src="/img/luvzee-avatar.jpg" alt="luvzee" className="w-64 rounded-full" />
      <h1 className="text-6xl font-bold">
        luvzee
      </h1>
      <p className="mt-3 text-2xl">
        Magyar alternatív/indie zenész
      </p>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        {links.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer external"
            className="p-6 mt-6 text-left border border-zinc-300 w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:border-zinc-400"
          >
            {createElement(Icon, { size: 32, strokeWidth: 1.5 })}
            <h2 className="inline-block ml-4 text-2xl font-bold">{label}</h2>
          </a>
        ))}
      </div>
      <hr className="w-96 my-6 border-gray-300" />
      {/* Map all releases into grid of cards, center items horizontally */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {releases.map(({ title, type, year, cover, href, tracks }) => (
          <a
            key={title}
            href={href}
            className="flex flex-col items-center p-6 text-left border border-zinc-300 w-80 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:border-zinc-400"
          >
            <img draggable="false" src={cover} alt={title} className="w-64 rounded-md" />
            <h3 className="inline-block mt-4 text-2xl font-bold">{title}</h3>
            <p className="inline-block mt-1 text-xl">{type} • {tracks} dal • {year}</p>
          </a>
        ))}
      </div>
    </main>
  </>)
}

export default Home;