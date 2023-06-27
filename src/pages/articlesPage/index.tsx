import React from 'react';

import ArticleCard from './components/ArticleCard';
import ErrorDisplayer from '@/components/ErrorDisplayer';
import LoadingDisplayer from '@/components/LoadingDisplayerTransparent';
import useSanity from '@/hooks/useSanity';
import { Article } from '@/models/articleModel';

  const query = `*[_type == "article"]{
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
  

const ArticlesPage: React.FC = () => {

    const { data: articles, error } = useSanity<Article[]>(query);

    return (
        <>  
          {error && <ErrorDisplayer title="ups!" errorMessage="Noe gikk galt når vi prøvde å hente artikler. Prøv igjen senere." errorCode={500} /> }
          {!articles && !error && <LoadingDisplayer />}
          {articles && 
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-zinc-100">
                <div className="bg-zinc-100 h-[40px]"></div>
                <div className="max-w-[1240px] mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                        <span className="text-indigo-600 mb-2 block text-lg font-semibold">
                            Artikler
                        </span>
                        <h2
                            className="text-dark mb-4 text-3xl font-bold sm:text-5xl"
                        >
                            Søknader og CV tips
                        </h2>
                        <p className="text-2xl py-2 text-gray-500">
                        Mestre kunsten å skrive overbevisende søknader og CV-er som utmerker seg i konkurransen
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap gap-y-6">
                        {articles && articles.map((article, index) => (
                            <ArticleCard key={index} article={article} />
                        ))}
                    </div>
                </div>
            </section>  
          }
        </>
    )
}

export default ArticlesPage
