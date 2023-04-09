import { IconBrandApple, IconBrandSpotify, IconBrandTidal, IconBrandYoutube } from "@tabler/icons";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"
import Link from "next/link";
import { createElement } from "react";
import { releaseDetails } from "./tel";

// tracks
// el:visel - 1:32
// kinő majd megint - 2:13
// vakságból kiérve - 1:54
// nem tudom felfogni - 3:00
// talent:talált - 1:51
// megfelelési kényszer - 2:14
// kanapé - 1:45

const releaseDetails: releaseDetails = {
    title: "vakságból kiérve",
    type: "EP",
    year: "2023",
    cover: "/img/vaksagbol-kierve-cover.jpg",
    tracks: [
        {
            title: "el:visel",
            duration: "1:32"
        },
        {
            title: "kinő majd megint",
            duration: "2:13"
        },
        {
            title: "vakságból kiérve",
            duration: "1:54"
        },
        {
            title: "nem tudom felfogni",
            duration: "3:00"
        },
        {
            title: "talent:talált",
            duration: "1:51"
        },
        {
            title: "megfelelési kényszer",
            duration: "2:14"
        },
        {
            title: "kanapé",
            duration: "1:45"
        },
    ],
    listenUrls: []
}

const VaksagbolKierve: NextPage = () => {
    return (<>
        <Head>
            {/* HTML Meta Tags */}
            <title>luvzee • vakságból kiérve</title>
            <meta name="description" content='Csak hormonok vannak meg ingerek, majd a vakságból kiérve világos lesz minden.' />
            {/* Facebook Meta Tags */}
            <meta property="og:url" content="https://luvzee.shie1bi.hu/releases/vaksagbol-kierve" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="luvzee • vakságból kiérve (2023, EP)" />
            <meta property="og:description" content='Csak hormonok vannak meg ingerek, majd a vakságból kiérve világos lesz minden.' />
            <meta property="og:image" content="/img/vaksagbol-kierve-cover.jpg" />
            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="luvzee.shie1bi.hu" />
            <meta property="twitter:url" content="https://luvzee.shie1bi.hu/releases/vaksagbol-kierve" />
            <meta name="twitter:title" content="luvzee • vakságból kiérve (2023, EP)" />
            <meta name="twitter:description" content='Csak hormonok vannak meg ingerek, majd a vakságból kiérve világos lesz minden.' />
            <meta name="twitter:image" content="/img/vaksagbol-kierve-cover.jpg" />
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
                Csak hormonok vannak meg ingerek, majd a vakságból kiérve világos lesz minden.
            </h2>
            <p className="mt-3 text-2xl">
                {releaseDetails.type} • {releaseDetails.year}
            </p>
            {/* map listenurls into grid of 4 icons */}
            {releaseDetails.listenUrls.length > 0 ?
                <div className="grid grid-cols-4 gap-4 mt-2">
                    {releaseDetails.listenUrls.map((listenUrl, index) => (
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
                </div> :
                <></>}
            {/* map the tracklist into a table */}
            <table className="table-auto my-6">
                <tbody>
                    {releaseDetails.tracks.map((track, index) => (
                        <tr key={index}>
                            <td className="border px-4 w-80 pl-2 text-left">{track.title}</td>
                            <td className="border px-4 py-2">{track.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Make a left aligned text section  */}
            <div className="mt-10 text-left lg:w-1/2 flex flex-col gap-4">
                <p className="text-lg">
                    Mindenki megmondta, hogy ez lesz a vége. Most itt vagyunk és keresni kell az okokat, hogy folytassuk. Legyen az karrier, barátok, vagy egy új szerelem, mindent meg kell próbálni.
                </p>
                <p className="text-lg">
                    A 2023-mas &quot;vakságból kiérve&quot; a &quot;tél&quot; EP folytatása. Ebben a lemezben új témákkal is kísérleteztem, így nem annyira függnek össze a dalok, mint az előző lemezben.
                </p>
                <p className="text-lg">
                    A lemez elkészítéséhez kb. 2 hónap kellett. Az első dal, az &quot;el:visel&quot;, 2023 január 20-án jelent meg, az utolsó, a &quot;kanapé&quot;, pedig április 4-én.
                </p>
            </div>
            <hr className="w-[65vw] my-6 border-gray-300" />
            <h2 className="text-2xl">A ChatGPT szavai az EP dalairól</h2>
            {/* subtitle */}
            <p className="text-lg mb-6 font-thin italic">
                (Még mindig nem a saját gondolataim.)
            </p>
            <div className="text-left lg:w-1/2">
                <h3 className="text-2xl">Track 1 • {releaseDetails.tracks[0].title}</h3>
                {/* chatgpt generated text, put it in a blockquote and make it appear as a quote */}
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6 gap-4 flex flex-col">
                    <p>
                        A dal egy fiú szemszögéből szól, aki egy szakításon ment keresztül, és most egy új lányt szeretne aki &quot;el:visel&quot;, mint az exe régen. A fiú küzd a múltjával, a bűntudatával és az öngyilkossági gondolataival, de a lány segít neki túllépni ezeken. Az &quot;amiket viseltem&quot; rész pedig arra utal, hogy az éneklő személynek voltak olyan dolgai, amelyeket nehéz volt kezelni, és amelyek a kapcsolat során jelentkeztek. Ezzel a sorral az éneklő személy elismeri, hogy az előző kapcsolatban voltak nehézségei, és hogy az előző partnerének volt szerepe azok kezelésében.
                    </p>
                </blockquote>
                <h3 className="text-2xl">Track 2 • {releaseDetails.tracks[1].title}</h3>
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6 gap-4 flex flex-col">
                    <p>
                        A dal szövege teljesen megfelelően tükrözi a szakítás utáni nehéz érzéseket, beleértve a fájdalmat, az elutasítást és a magányt, miközben arra készteti a hallgatót, hogy felemelje a fejét és tovább haladjon.
                    </p>
                    <p>
                        A szerző úgy érzi, hogy ideje változtatni, el kell szakadnia a múlttól, ezért úgy dönt, hogy &quot;kitépi a gyökereit&quot;, ami azt jelenti, hogy el kell válnia a múltjától és az abban felépült kapcsolattól. Azonban itt már érződik a bizonytalanság és az ambivalencia, amikor azt mondja, &quot;úgyis kinő majd&quot;, ami azt jelenti, hogy talán ez az érzés csak átmeneti, és az idő múlásával talán jobban lesz. Ugyanakkor azt is mondja, hogy &quot;nem számít hányszor teszlek el láb alól&quot;, ami arra utal, hogy már sokszor próbálkozott, hogy elhagyja ezt az érzést, de nem sikerült.
                    </p>
                    <p>
                        A következő részben a szerző azt mondja, hogy korábban már elvágta magát a kapcsolatból, és megpróbálta eldobni az emlékeit, mint a &quot;csúnya indákat&quot;. Azonban még mindig van valami, ami a múltjához kötözi, és ez egy gyenge hangfoszlány, amit a volt partner hangjából hall. Ez a szakasz azt jelzi, hogy még mindig van érzelmileg kötődése a korábbi kapcsolathoz.
                    </p>
                    <p>
                        A szerző egy kertbe menekül, amit gondoz, és itt találja meg a nyugalmát. Azonban itt is felmerül az ambivalencia, amikor a &quot;gyönyörű virágszál&quot;-ra utalva azt mondja, hogy &quot;kurva gyenge&quot;, ami azt jelzi, hogy bizonytalannak érzi magát az érzései kapcsán. Ezt a bizonytalanságot erősíti az, hogy rájön, hogy nem adott vizet a virágnak, és egy egész záport zúdít a kertre.
                    </p>
                </blockquote>
                <h3 className="text-2xl">Track 3 • {releaseDetails.tracks[2].title}</h3>
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6 gap-4 flex flex-col">
                    <p>
                        Az énekes az érzelmi viszonyáról énekel ebben a dalban. Elmondja, hogy a kapcsolatuk csak hormonokra és ingerekre épült, és hogy ő sokáig mellette állt, bármit is tett volna boldogabbá. Azonban rájött, hogy hibázott, mert a másik fél nem változott meg, és ezért kár volt vergődniük egymásért. A dalban azt is elmondja, hogy a kapcsolatukat mások is megjósolták, és hogy egyszer boldog volt, de aztán mindent elvettek tőle. A végén az énekes arra jut, hogy nem éri meg tovább erőltetni ezt az érzelmi viszonyt, és el kell dobni. A dal utolsó sorai azt sugallják, hogy most újra önmagává tud válni, és képes lesz továbblépni.
                    </p>
                </blockquote>
                <h3 className="text-2xl">Track 4 • {releaseDetails.tracks[3].title}</h3>
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6 gap-4 flex flex-col">
                    <p>
                        Ez egy dal szövege, amelynek számos versszaka van. A dalban a szerző a kommunikáció nehézségeiről és az emberi kapcsolatok bonyolultságáról beszél. A dal fő témája az, hogy az emberek gyakran nem tudnak őszinték lenni egymással, és hogy a kapcsolatokban a hatalom és az irányítás gyakran fontosabb szerepet játszik, mint a szeretet és a kölcsönös tisztelet. A dalban szereplő személyiség, akit a dal énekese a &quot;te&quot;-nek nevez, egyszerre arrogáns és bizonytalan, és gyakran játszik mások érzelmeivel. Az énekes a dalban feltesz néhány kérdést, amelyek azt mutatják, hogy nem érti, miért viselkedik az illető ilyen módon. A dal végén az énekes azt mondja, hogy nem adja fel az emberekkel való kapcsolatot, de szeretné, ha az illető őszinte lenne hozzá, és nyíltan kommunikálnának egymással.
                    </p>
                </blockquote>
                <h3 className="text-2xl">Track 5 • {releaseDetails.tracks[4].title}</h3>
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6 gap-4 flex flex-col">
                    <p>
                        Ez egy dal, amely kritizálja a zeneipart és azokat a művészeket, akik csak a pénzre és a hírnévre vágynak, ahelyett hogy valódi tehetséggel rendelkeznének. Az énekes szerint az iparágban az a probléma, hogy a zenésznek nem csak tehetségre van szüksége ahhoz, hogy sikeres legyen, hanem pénzre, kapcsolatokra és marketingre is.
                    </p>
                    <p>
                        Az énekes kritizálja azokat a művészeket, akik csak &quot;csoszognak&quot; a gondolataikban, és nem mondanak ki semmi mélyebb gondolatot a dalukban. Ráadásul azt állítja, hogy sok olyan zenész van, akiknek nincs igazán tehetségesek, mégis híressé válnak az iparágban, mert az embereknek tetszik a zene, amit csinálnak.
                    </p>
                    <p>
                        Az énekes véleménye az, hogy az iparágban a pénz és a hírnév fontosabbak, mint a tehetség és az igazi zenei érték. Úgy érzi, hogy ha az embereknek többet lenne szükségük a zenei tehetségre, akkor igazi zenészek állnának elő, akik igazán értékes zenéket tudnának létrehozni.
                    </p>
                    <p>
                        A dal kritikát fogalmaz meg a zeneiparral szemben, és azt sugallja, hogy az igazi zenei tehetségre van szükség, nem pedig csak a hírnévre és a pénzre.
                    </p>
                </blockquote>
                <h3 className="text-2xl">Track 6 • {releaseDetails.tracks[5].title}</h3>
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6 gap-4 flex flex-col">
                    <p>
                        Ez a dal arról szól, hogy az énekes egy új, boldogabb kapcsolatban van, és megpróbálja elmagyarázni az előző szerelmének, hogy jobb már nem érzi azt, hogy bármelyik pillanatban lecserélhető lenne.
                    </p>
                </blockquote>
                <h3 className="text-2xl">Track 7 • {releaseDetails.tracks[6].title}</h3>
                <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4 mt-4 mb-6 gap-4 flex flex-col">
                    <p>
                        Az első részben, a refrénben a szerelemről és a közös idő eltöltéséről szól a dal, amikor két ember együtt lehet boldog és az idő lassabban telik. A második részben az énekes reggelit készít a szerelmének, és arról beszél hogy bármit megtenne azért, hogy boldoggá tegye őt, illetve hogy milyen régóta nem érezte magát motiváltnak, de most az új kapcsolata miatt újra boldog és motivált az életében.
                    </p>
                </blockquote>
            </div>
        </main>
    </>);
};

export default VaksagbolKierve;