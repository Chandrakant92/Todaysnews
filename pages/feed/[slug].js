import styles from '../../styles/slug.module.css'
import { useRouter } from 'next/router';
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';



const Feed = ({ pageNumber, articles,props}) => {
// eslint-disable-next-line no-console
  console.log(articles, pageNumber);
  console.log(props);
  const router = useRouter();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}> <h3>Todays News Hedline</h3></div>
        {
          articles.map((articles, index) => (
            <div key={index} className={styles.post}>
              <h2 className={styles.Heading} onClick={() => window.location.href = articles.url}>{articles.title}</h2>
              <p className={styles.description}>{articles.description}</p>
              {!!articles.urlToImage && 
              <img className={styles.img} 
              src={articles.urlToImage} 
               alt="Picture of the News"
               layout="fill"/>}
            </div>
          ))
        }
     
      <div className={styles.conB}>
        <button onClick={() => {
          // eslint-disable-next-line no-console
          console.log(`/feed/${pageNumber - 1}`);
          if (pageNumber > 1 && pageNumber>-1) {
            router.push(`/feed/${pageNumber - 1}`)
          }
        }}
          className={styles.btnB}> Back</button>

        <span className={styles.span}>1 - 5 only</span>

        <button
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log(`/feed/${pageNumber++}`);
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber++}`)
            }
          }} className={styles.btnN}>Next</button>
      </div>
      </div>
    </div>

  )
}

export const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      }
    }
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    },
  );

  const apiJson = await apiResponse.json();
  //   console.log(apiJson);
  const { articles } = apiJson;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber)
    }
  }
}

export default Feed