import ArticleCard from './components/ArticleCard';
import React from 'react';



const article = {
    title: 'Slik skriver du en god søknad',
    createdAt: '2021-09-01',
    description: 'Søknaden er det første arbeidsgiveren ser av deg. Den skal vekke interesse og gi et godt førsteinntrykk. Her er noen tips til hvordan du kan skrive en god søknad.',
    image: 'https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg'
}

const Articles: React.FC = () => {
    return (
        <>  
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-zinc-100">
                <div className="bg-zinc-100 h-[70px]"></div>
                <div className="container mx-auto">
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
                        <ArticleCard article={article} />
                        <ArticleCard article={article} />
                        <ArticleCard article={article} />
                        <ArticleCard article={article} />
                        <ArticleCard article={article} />
                        <ArticleCard article={article} />
                    </div>
                </div>
            </section>  
        </>
    )
}

export default Articles