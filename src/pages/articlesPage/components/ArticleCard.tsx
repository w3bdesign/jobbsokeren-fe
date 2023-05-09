import React from 'react';
import { Link as RouterLink } from "react-router-dom"

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
        <RouterLink to={`/articles/1`} className="w-full px-4 md:w-1/2 lg:w-1/3 cursor-pointer">
            <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                    <img
                        src={image}
                        alt={title}
                        className="w-full"
                    />
                </div>
                <div>
                    <span
                        className="border bg-indigo-600 border-indigo-600 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                        {createdAt}
                    </span>
                    <h3 className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                        {title}
                    </h3>
                    <p className="text-body-color text-base">
                        {description}
                    </p>
                </div>
            </div>
        </RouterLink>
    )
}

export default ArticleCard;
