import Link from "next/link";
import DefaultLayout from "../../components/defaultLayout";

export default function websiteInfo() {
    return (
        <DefaultLayout title="Website Info">
            <h1>Website Info</h1>
            <h2>Here is some info about this website.</h2>
            <p>This website is built with Next.js and self-hosted.</p>
            <p>
                The homepage has <Link href="https://minecraft-archive.fandom.com/wiki/Splash_Texts">splash texts</Link> similar
                to Minecraft&apos;s which are all <Link href="/website/splashTexts">listed here</Link>.
            </p>
            <p>
                I also have a page dedicated to the <Link href="/website/history">history of this website</Link>.
            </p>
        </DefaultLayout>
    );
}