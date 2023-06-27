import { ArrowRightIcon, LinkIcon } from '@heroicons/react/24/outline';
import {Link as RouterLink} from 'react-router-dom';
import { Element } from 'react-scroll';

import ErrorDisplayer from '@/components/ErrorDisplayer';
import useSanity from '@/hooks/useSanity';
import { Article } from '@/models/articleModel';

const query = `*[_type == "article"] | order(publishedAt desc) [0..2] {
    articleType,
    title,
    slug,
    publishedAt,
    intro,
    image{
      asset->{
        _id,
        url
      }
    },
    body
  }`;



const Articles = () => {

    const { data: articles, error } = useSanity<Article[]>(query);
    return ( 
        <Element name="tips" className="w-full text-white my-24">
           {error ? <ErrorDisplayer title='Ups!' errorMessage='Noe gikk galt når vi skulle hente artikler. Prøv igjen senere' errorCode={500} /> : 
           <>
            <div className="w-full h-[800px] bg-slate-900 absolute">
            </div>
                <div className="max-w-[1240px] m-auto py-12 relative">
                    <div className="text-center py-8 text-slate-300">
                        <h2 className="text-3xl uppercase">Tips</h2>
                        <h3 className="text-5xl font-bold text-white py-8">CV og søknadstips</h3>
                        <p className="text-3xl">Les våre artikler for å mestre kunsten å skrive overbevisende søknader og CV-er som utmerker seg i konkurransen.</p>
                        <div className=" text-center my-5 hover:text-indigo-500">
                            <RouterLink className="text-xl  underline underline-offset-8 " to="/artikler">  
                                CV og søknadstips
                            </RouterLink>
                            <LinkIcon className="w-6 ml-3 inline-block" />
                        </div>
                    </div>
                    {/* <div className="container grid gap-14 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> */}
                    <div className="flex flex-wrap">
                        {articles?.map((article, index) => {
                            return (
                            <RouterLink key={index} to={`/artikler/${article?.slug.current}`} className="w-full sm:w-1/2 md:w-1/3 flex flex-col">
                                <div className="flex flex-col bg-white rounded-xl shadow-xl flex-1 m-5">
                                <img className="rounded-t-lg h-[250px] w-full object-cover"
                                    src={article?.image.asset.url}
                                    alt={article?.title} />
                                <div className="p-7 flex flex-col flex-grow">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900">{article?.title}</h5>
                                    <p className="py-5 text-md text-black flex-grow">{article?.intro.length > 100 ? article.intro.substring(0, 100) + '...' : article.intro}</p>
                                    <button className="mt-auto inline-flex items-center px-8 py-3 text-center text-white">
                                        Les hele artikkelen
                                        <ArrowRightIcon className="w-4 ml-3 inline-block" />
                                    </button>
                                </div>
                                </div>
                            </RouterLink>
                            )
                        })}
                    </div>
                </div>
            </>     
           } 
        </Element>
    )
}

export default Articles;