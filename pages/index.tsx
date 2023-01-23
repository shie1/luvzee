import { Card, Avatar, Title, Stack, Group, Divider, Text, ActionIcon, Box } from "@mantine/core";
import { TablerIcon, IconBrandSpotify, IconBrandApple, IconBrandSoundcloud, IconBrandYoutube, IconBrandInstagram, IconBrandTwitter, IconMail, IconBrandTidal, IconBrandPaypal } from "@tabler/icons";
import type { NextPage } from "next";
import Head from "next/head";
import { createElement } from "react"

type SocialLink = { label: string, icon: TablerIcon, href: string }

const Home: NextPage = () => {
  return (<>
    <div className="bg" style={{ backgroundImage: "url('/img/index-bg.jpg')" }} />
    <Head>
      <title>luvzee</title>
      <meta name="description" content="Magyar alternatív/indie zenész" />
      <meta name='author' content='luvzee' />
      <link rel="canonical" href="https://luvzee.shie1bi.hu/" />
    </Head>
    <Card radius="md" sx={(theme) => ({ backgroundColor: theme.fn.rgba(theme.colors.dark[7], 1) })} mb="sm" shadow="lg">
      <Group spacing="sm">
        <Avatar imageProps={{ draggable: false, innerHeight: 150, innerWidth: 150 }} size={150} src="/img/luvzee-avatar.jpg" alt="luvzee">luzee</Avatar>
        <Stack spacing={4}>
          <Title size={50}>luvzee<span style={{ display: 'none' }}> • </span><Text size={25} color="dimmed">Alternatív/Indie zenész</Text></Title>
        </Stack>
      </Group>
      <Group align="center" mt="md" px="xl" position="apart" spacing="sm">
        {([
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
        ] as Array<SocialLink>).map((item, i: any) => (<a rel="external noreferrer" target="_blank" href={item.href} aria-aria-labelledby={`social-label-${i}`} key={i}>
          <ActionIcon radius="md" size="lg" variant="subtle" color="violet">
            {createElement(item.icon, { stroke: 1, size: 40 })}
            <p id={`social-label-${i}`} style={{ display: 'none' }}>{item.label}</p>
          </ActionIcon></a>))}
      </Group>
    </Card>
    <Text align="center">A nevem Bence, kb. 3 éve foglalkozok digitális zeneszerzéssel, korábban <a className="underline" rel="external noreferrer" target="_blank" href="https://shie1bi.hu">Shie1bi</a> néven adtam ki a dalaimat.</Text>
  </>)
}

export default Home;