import { IconBrandApple, IconBrandSpotify, IconBrandTidal, IconBrandYoutube } from "@tabler/icons";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"
import Link from "next/link";
import { createElement } from "react";

const releaseDetails = {
    title: "???",
    type: "???",
    year: 2023,
    cover: "/img/preview-cover.jpg",
    tracks: [
        {
            title: "el:visel",
            duration: "???"
        }
    ],
    listenUrls: []
}

const Tel: NextPage = () => {
    return (<>
        <Head>
            {/* HTML Meta Tags */}
            <title>luvzee • következő lemez</title>
            <meta name="description" content='Otthagyni a múltat, szembenézni a bizonytalan jövővel' />
            {/* Facebook Meta Tags */}
            <meta property="og:url" content="https://luvzee.shie1bi.hu/releases/preview" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Betekintés luvzee következő lemezébe" />
            <meta property="og:description" content='Otthagyni a múltat, szembenézni a bizonytalan jövővel' />
            <meta property="og:image" content="/img/preview-cover.jpg" />
            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="luvzee.shie1bi.hu" />
            <meta property="twitter:url" content="https://luvzee.shie1bi.hu/releases/preview" />
            <meta name="twitter:title" content="Betekintés luvzee következő lemezébe" />
            <meta name="twitter:description" content='Otthagyni a múltat, szembenézni a bizonytalan jövővel' />
            <meta name="twitter:image" content="/img/preview-cover.jpg" />
            {/* Meta Tags Generated via https://www.opengraph.xyz */}
        </Head>
        {/* Let the user navigate back */}
        <div className="fixed top-0 left-0 p-4">
            <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </Link>
        </div>
        <main className="flex flex-col items-center justify-center w-[100vw] flex-1 px-20 text-center">
            <Image width={500} height={500} draggable="false" src={releaseDetails.cover} alt={releaseDetails.title} className="w-64 rounded-md" />
            <h1 className="text-5xl font-bold mt-2">
                luvzee • {releaseDetails.title}
            </h1>
            <h2 className="text-xl font-light italic">
                Otthagyni a múltat, szembenézni a bizonytalan jövővel
            </h2>
            <p className="mt-3 text-2xl">
                {releaseDetails.type} • {releaseDetails.year}
            </p>
            {/* map listenurls into grid of 4 icons */}
            {!releaseDetails.listenUrls.length ? <></> : <div className="grid grid-cols-4 gap-4 mt-2">
                {releaseDetails.listenUrls.map((listenUrl: any, index) => (
                    <a
                        key={index}
                        href={listenUrl.href}
                        target="_blank"
                        rel="noopener noreferrer external"
                    >
                        {createElement(listenUrl.icon, {
                            className: "h-8 w-8",
                            strokeWidth: 1.2
                        })}
                        <span className="sr-only">{listenUrl.label}</span>
                    </a>
                ))}
            </div>}
            {/* map the tracklist into a table */}
            {!releaseDetails.tracks.length ? <></> : <table className="table-auto my-6">
                <tbody>
                    {releaseDetails.tracks.map((track: any, index) => (
                        <tr key={index}>
                            <td className="border px-4 w-80 pl-2 text-left">{track.title}</td>
                            <td className="border px-4 py-2">{track.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
            {/* Make a left aligned text section  */}
            <div className="mt-10 text-left lg:w-1/2">
                <p className="text-lg">
                    A következő lemez ott folytatja ahol a tél abbahagyta: magány és bizonytalanság. A lemezben kiutat keres luvzee és nekivág a bizonytalan jövőnek és megpróbál újra boldog lenni az új körülmények között is.
                </p>
                <p className="text-lg mt-4">
                    Nagyon sok minden megváltozott a tél alatt, luvzee ezzel próbál megküzedni és megtalálni önmagát, ezúttal nem másokban, hanem saját magán keresztül.
                </p>
                <p className="text-lg mt-4">
                    A lemez megjelenésének dátuma még nem ismert, de ahogy telik az idő, egyre több információ fog megjelenni. Soundcloudon folyamatosan jelennek meg új betekintések a lehetséges dalokról.
                </p>
            </div>
        </main>
    </>);
};

export default Tel;