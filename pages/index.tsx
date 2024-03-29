import { TablerIcon, IconBrandSpotify, IconBrandApple, IconBrandSoundcloud, IconBrandYoutube, IconBrandInstagram, IconBrandTwitter, IconMail, IconBrandTidal, IconBrandPaypal, IconBrandVercel } from "@tabler/icons";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { createElement, useEffect, useState } from "react";
import Link from "next/link"

const reverseArr = (input: Array<any>) => {
  var ret = new Array;
  for (var i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
}


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
  {
    title: "vakságból kiérve",
    type: "EP",
    year: "2023",
    cover: "/img/vaksagbol-kierve-cover.jpg",
    href: "/releases/vaksagbol-kierve",
    tracks: 7,
  }
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
    <main className="flex flex-col items-center justify-center w-[100vw] flex-1 px-20 text-center">
      <Image width={500} height={500} draggable="false" src="/img/luvzee-avatar.jpg" alt="luvzee" className="w-64 rounded-full" />
      <h1 className="text-6xl font-bold">
        luvzee
      </h1>
      <h2 className="mt-3 text-2xl">
        Magyar alternatív/indie zenész
      </h2>
      {/* a little about text */}
      <div className="mt-2 prose lg:prose-xl lg:w-1/2">
        <p>
          Luvzee énekes-dalszerző, aki Magyarországon él és indie/alternatív stílusban alkot. A &quot;tél&quot; című első EP-je a szerelmi veszteség fájdalmas érzéseit mutatja be, miközben a feldolgozás és a fejlődés folyamatát is bemutatja.
        </p>
      </div>
      {/* Map all social links into responsive grid of labelled icons */}
      <div className="grid grid-cols-2 xs:grid-cols-3 gap-3 md:gap-6 mt-6 sm:grid-cols-4 lg:grid-cols-5">
        {links.map(({ label, icon, href }) => (
          <a
            key={label}
            target="_blank"
            rel="noopener noreferrer external"
            href={href}
            className="flex min-w-fit flex-col items-center justify-center p-6 text-left border border-zinc-300 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:border-zinc-400"
          >
            {createElement(icon, { size: 32, strokeWidth: 1.2 })}
            <span className="sm:not-sr-only sr-only inline-block mt-4 text-xl text-center">{label}</span>
          </a>
        ))}
      </div>
      <hr className="w-[65vw] my-6 border-gray-300" />
      {/* Map all releases into grid of cards, center items horizontally */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {reverseArr(releases).map(({ title, type, year, cover, href, tracks }) => (
          <Link
            key={title}
            href={href}
            className="flex flex-col items-center p-6 text-left border border-zinc-300 w-80 rounded-xl hover:text-blue-600 focus:text-blue-600 hover:border-zinc-400"
          >
            <Image width={500} height={500} draggable="false" src={cover} alt={title} className="w-64 rounded-md" />
            <h3 className="inline-block mt-4 text-2xl font-bold">{title}</h3>
            <p className="inline-block mt-1 text-xl">{type} • {tracks} dal • {year}</p>
          </Link>
        ))}
      </div>
    </main>
  </>)
}

export default Home;