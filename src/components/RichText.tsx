import {PortableText} from '@portabletext/react'
import {PortableTextComponents} from '@portabletext/react'
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import client from '@/utils/sanityClient.config'


interface ComponentProps {
    value: any;
    isInline: boolean;
    children?: React.ReactNode;
}

interface ImageDimensions {
    width: number;
    height: number;
}

const ImageComponent = ({value, isInline} : ComponentProps) => {
    const {width, height} : ImageDimensions = getImageDimensions(value)
        return (
            <img
            src={urlBuilder(client)
                .image(value)
                .auto('format')
                .url()}
            alt={value.alt || ' '}
            loading="lazy"
            style={{
                display: isInline ? 'inline-block' : 'block',
                maxWidth: '100%',
                aspectRatio: width / height,
                margin: '2rem 0 2rem 0',
                borderRadius: '0.75rem',
                boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            />
        )
}

const components : PortableTextComponents = {
    types: {
        image: ImageComponent,
        
    },
    list: {
        bullet: ({children}  ) => <ul style={{listStyleType: 'auto'}}>{children}</ul>,
        number: ({children} ) => <ol style={{listStyleType: 'decimal'}}>   {children}</ol>,
    },
    listItem: {
        bullet: ({children} ) => <li style={{marginBottom: 10}}> {children}</li>,
      },
     
      
}

const RichTextComponent =({value}: ComponentProps) => {
    return <PortableText value={value} components={components}  />
  }

export default RichTextComponent;