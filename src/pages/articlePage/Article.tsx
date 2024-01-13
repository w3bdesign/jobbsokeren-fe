import React from 'react';
import { useParams } from 'react-router-dom';

import RichTextComponent from '@/components/RichText/RichText';
import LoadingDisplayer from '@/components/UI/LoadingDisplayerTransparent';
import useSanity from '@/hooks/useSanity';
import { Article } from '@/models/articleModel';


const ArticleContent : React.FC = () => {

 const { slug } = useParams();
 const query = `*[_type == "article" && slug.current == "${slug}"]{
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

 const { data: articles } =  useSanity<Article[]>(query);
 const article = articles && articles[0];
 
 if (!article) return <LoadingDisplayer/>;

   return (
       <div className="relative isolate bg-zinc-100 mt-5 px-6 py-24 sm:py-32 overflow-visible lg:px-0">
         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
           <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
             <div className="lg:pr-4">
               <div className="lg:max-w-lg">         
                 <p className="text-base font-semibold leading-7 text-indigo-600"> {article?.publishedAt && new Date(article?.publishedAt).toLocaleDateString()}</p>
                 <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> {article?.title}</h1>
                 <p className="mt-6 text-xl leading-8 text-gray-700">
                   {article?.intro}
                 </p>
               </div>
             </div>
           </div>
           <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
             <img
               className=" w-full md:w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
               src={article?.image.asset.url}
               alt={article?.title}
             />
           </div>
           <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
             <div className="lg:pr-4">
               <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                 <RichTextComponent isInline={true} value={article?.body} />
               </div>
             </div>
           </div>
         </div>
       </div>
   )
}

export default ArticleContent