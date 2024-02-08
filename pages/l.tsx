export async function getServerSideProps({ req }) {
  let isBot = (req
    ? req.headers['user-agent']
    : navigator.userAgent).match(
      /Discordbot|Twitterbot|facebookexternalhit/i
    )

  if (!isBot) {
    // omg someone clicked the link!!1!
    // send it to the discord webhook

    let msgs = [
      "He's never gonna give you up",
      "haha get rickrolled",
      "you just got rickrolled",
      "lol",
      "*scoffs* of course",
      "you're welcome",
      "You've been hit by, you've been struck by, a smooth rickroll",
      "You know the rules, and so do I",
      "I just wanna tell you how I'm feeling",
      "He never gave us up, he never let us down",
      "*evil laughter*",
      "nothing to see here, move along",
      "and their ip is... just kidding i would never",
    ];

    fetch(process.env.DISCORD_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [
          {
            title: `Someone clicked the link!`,
            url: "https://zanderp25.com/l",
            footer: {
              text: msgs[Math.floor(Math.random() * msgs.length)],
            },
          },
        ],
      }),
    })

    return {
      redirect: {
        destination: 'https://youtu.be/dQw4w9WgXcQ',
        permanent: false,
      },
    }
  }
}

export default function RickRoll(){
  return(
    <p>hi</p>
  )
}
