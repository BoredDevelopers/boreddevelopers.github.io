import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 3

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
        <PageSEO title={siteMetadata.title} description={siteMetadata.description} />        
      <div>
          <div className="pt-6 pb-10 space-y-2 md:space-y-5">
              <h1 className="mono-type font-bold text-2xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                  Not your ordinary software developers
              </h1>
              <p>
                  We are a team of dedicated professionals who thrive on challenges and are relentless in our pursuit of quality solutions. Our journey in the realm of technology is driven by an insatiable curiosity and a commitment to excellence that sets us apart.
              </p>
              {/*<p>  */}
              {/*    With a penchant for problem-solving and an unwavering commitment to innovation, we transform the mundane into the extraordinary.*/}
              {/*</p>*/}
              {/*<p>*/}
              {/*    We understand that every project is a unique puzzle waiting to be solved, and we approach each one with enthusiasm, creativity, and a keen eye for detail.*/}
              {/*</p>*/}
              <p>
                  Our mission is simple: to craft software that not only meets your needs but exceeds your expectations.
              </p>
              {/*<p>*/}
              {/*    We believe that excellence is not just a goal; it's a way of life. It's in our DNA to push boundaries, embrace challenges, and deliver solutions that stand the test of time.*/}
              {/*</p>*/}
              {/*<p>*/}
              {/*    As you explore our world, you'll discover a team that is not only passionate about code but also about the success of our clients. We're here to turn your visions into reality, and we do it with style, class, and an unwavering commitment to quality.*/}
              {/*</p>*/}
              {/*<p>*/}
              {/*    We look forward to the exciting journey ahead as we embark on new challenges and create software solutions that make a difference.*/}
              {/*</p>*/}
                                
                  <Link
                      className="text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                      href={'/about'}>
                      read more
                  </Link>
                  
              
          </div>
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h2 className="mono-type font-bold text-2xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                LATEST BLOG POSTS
            </h2>
          </div>

        <ul className="">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-3 xl:col-span-3">
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      {/* <div className="text-base font-medium leading-6">
                        <button className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </button>
                      </div> */}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-12">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
