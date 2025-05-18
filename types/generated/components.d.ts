import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBlocks extends Struct.ComponentSchema {
  collectionName: 'components_shared_blocks';
  info: {
    description: '';
    displayName: 'blocks';
  };
  attributes: {};
}

export interface SharedImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Images';
  };
  attributes: {
    client_cover_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    client_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    client_logo1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    client_logo2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    client_transition_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    fallback_thumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    favicon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    thumbnail_path: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStyles extends Struct.ComponentSchema {
  collectionName: 'components_shared_styles';
  info: {
    description: '';
    displayName: 'styles';
  };
  attributes: {
    background_color: Schema.Attribute.String;
    font_color: Schema.Attribute.String;
    font_color_dark: Schema.Attribute.String;
    font_family: Schema.Attribute.String;
    mode: Schema.Attribute.String;
    position_redirect_image: Schema.Attribute.String;
    position_rescue_image: Schema.Attribute.String;
    primary_color: Schema.Attribute.String;
    secondary_color: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.blocks': SharedBlocks;
      'shared.images': SharedImages;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.styles': SharedStyles;
    }
  }
}
