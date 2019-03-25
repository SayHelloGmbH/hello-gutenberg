import "./block.scss";

const { Component } = wp.element,
  { registerBlockType } = wp.blocks,
  { __ } = wp.i18n;
const { RichText, MediaUpload } = wp.editor;
const { Button, SelectControl } = wp.components;

import classnames from "classnames";
import icons from "./components/icons";

const ALLOWED_MEDIA_TYPES = ["image"];

const blockAttributes = {
  ctaTitle: {
    type: "array",
    selector: ".c-calltoaction__title",
    source: "children"
  },
  ctaSubtitle: {
    type: "array",
    selector: ".c-calltoaction__subtitle",
    source: "children"
  },
  ctaText: {
    type: "array",
    selector: ".c-calltoaction__text",
    source: "children"
  },
  ctaImgID: {
    type: "number"
  },
  ctaImgURL: {
    type: "string",
    source: "attribute",
    attribute: "src",
    selector: "img"
  }
};

class SHCtaBlock extends Component {
  render() {
    const onSelectImage = img => {
      setAttributes({
        ctaImgID: img.id,
        ctaImgURL:
          img.sizes.large && img.sizes.large.url ? img.sizes.large.url : img.url
      });
    };

    const {
      attributes: { ctaTitle, ctaSubtitle, ctaText, ctaImgURL, ctaImgID },
      className,
      setAttributes
    } = this.props;

    window.console.log(ctaImgURL);

    return [
      <section className={classnames(className, "c-calltoaction")}>
        <div className="c-calltoaction__figure">
          <MediaUpload
            key="mediaupload"
            buttonProps={{
              className: "change-image"
            }}
            onSelect={onSelectImage}
            allowed={ALLOWED_MEDIA_TYPES}
            type="image"
            value={ctaImgID}
            render={({ open }) => (
              <Button onClick={open}>
                {!ctaImgID ? (
                  icons.upload
                ) : (
                  <img
                    className="c-calltoaction__image"
                    src={ctaImgURL}
                    alt="avatar"
                  />
                )}
              </Button>
            )}
          />
        </div>
        <div className="c-calltoaction__content">
          <RichText
            tagName="h1"
            className="c-calltoaction__title"
            value={ctaTitle}
            placeholder={__("Add a title", "hello-gutenberg-roots")}
            onChange={value => setAttributes({ ctaTitle: value })}
            keepPlaceholderOnFocus
          />
          <RichText
            tagName="h2"
            className="c-calltoaction__subtitle"
            value={ctaSubtitle}
            placeholder={__("Add a subtitle", "hello-gutenberg-roots")}
            onChange={value => setAttributes({ ctaSubtitle: value })}
            keepPlaceholderOnFocus
          />
          <RichText
            tagName="div"
            className="c-calltoaction__text"
            value={ctaText}
            placeholder={__("Add some text", "hello-gutenberg-roots")}
            onChange={value => setAttributes({ ctaText: value })}
            keepPlaceholderOnFocus
          />
        </div>
      </section>
    ];
  }
}

/**
 * Register the Block with all its settings and properties
 */
export default registerBlockType("sayhellogmbh/call-to-action", {
  title: __("Call to Action", "hello-gutenberg-roots"),
  description: __(
    "Adds a calltoaction Block to the page.",
    "hello-gutenberg-roots"
  ),
  keywords: [
    __("call to action", "hello-gutenberg-roots"),
    __("CTA", "hello-gutenberg-roots"),
    __("say hello", "hello-gutenberg-roots")
  ],
  styles: [
    {
      name: "default",
      label: __("Default", "hello-gutenberg-roots"),
      isDefault: true
    },
    {
      name: "dark",
      label: __("Dark", "hello-gutenberg-roots")
    }
  ],
  icon: "controls-volumeon",
  category: "hello-gutenberg-roots",
  supports: {
    html: false
  },

  attributes: blockAttributes,

  edit: SHCtaBlock,

  save(props) {
    const {
      attributes: { ctaTitle, ctaSubtitle, ctaText, ctaImgURL },
      className
    } = props;
    return (
      <section className={classnames(className, "c-calltoaction")}>
        <div className="c-calltoaction__content">
          <RichText.Content
            className="c-calltoaction__title"
            tagName="h1"
            value={ctaTitle}
          />
          <RichText.Content
            className="c-calltoaction__subtitle"
            tagName="h2"
            value={ctaSubtitle}
          />
          <RichText.Content
            className="c-calltoaction__text"
            tagName="div"
            value={ctaText}
          />
        </div>
        <div className="c-calltoaction__figure">
          <img className="c-calltoaction__image" src={ctaImgURL} alt="avatar" />
        </div>
      </section>
    );
  }
});
