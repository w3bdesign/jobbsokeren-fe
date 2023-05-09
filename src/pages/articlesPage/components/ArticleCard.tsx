import React from 'react';

interface Article {
    title: string;
    createdAt: string;
    description: string;
    image: string;
}

interface Props {
    article: Article;
  }

const ArticleCard: React.FC<Props> = ({ article }) => {
    const {title, description, createdAt, image} = article;
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 cursor-pointer">
            <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
                <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                alt="image"
                className="w-full"
                />
            </div>
            <div>
                <span
                className="border bg-indigo-600 border-indigo-600 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
               {createdAt}
                </span>
                <h3>
                <a
                    href=""
                    className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                    {title}
                </a>
                </h3>
                <p className="text-body-color text-base">
                {description}
                </p>
            </div>
            </div>
        </div>
    )
}

export default ArticleCard