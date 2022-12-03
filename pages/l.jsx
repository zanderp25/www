export async function getServerSideProps({ req }) {
  let isBot = (req
    ? req.headers['user-agent']
    : navigator.userAgent).match(
      /Discordbot|Twitterbot|facebookexternalhit/i
    )

  if (isBot) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } else {
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
