import DefaultLayout from "../../components/defaultLayout";

export default function websiteInfo() {
    return (
        <DefaultLayout title="Website Info">
            <h1>Website Info</h1>
            <h2>Here is some info about this website.</h2>
            <p>This website is built with Next.js and self-hosted.</p>
            <p>
                The homepage has <a href="https://minecraft-archive.fandom.com/wiki/Splash_Texts">splash texts</a> similar
                to Minecraft&apos;s which are all <a href="/website/splashTexts">listed here</a>.
            </p>
            <p>
                I also have a page dedicated to the <a href="/website/history">history of this website</a>.
            </p>
        </DefaultLayout>
    );
}