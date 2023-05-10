import { PortableTextBlockComponent } from "@portabletext/react";

export interface Article {
    articleType: string;
    title: string;
    slug: {
      _type: string;
      current: string;
    };
    publishedAt: string;
    intro: string;
    image: {
      asset: {
        _type: string;
        _id: string;
        url: string;
      }
    };
    body: PortableTextBlockComponent[]; 
  }