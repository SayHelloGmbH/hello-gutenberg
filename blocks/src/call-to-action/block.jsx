import "./block.scss";

const { Component } = wp.element,
  { registerBlockType } = wp.blocks,
  { __ } = wp.i18n;
const { RichText } = wp.editor;

import classnames from "classnames";

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
    selector: ".c-calltoaction__subtitle",
    source: "children"
  }
};

class SHCtaBlock extends Component {
  render() {
    const {
      attributes: { ctaTitle, ctaSubtitle, ctaText },
      className,
      setAttributes
    } = this.props;

    return [
      <section className={classnames(className, "c-calltoaction")}>
        <RichText
          tagName="h1"
          className="c-calltoaction__title"
          value={ctaTitle}
          placeholder={__("Add a title", "hello-gutenberg-roots")}
          onChange={value => setAttributes({ ctaTitle: value })}
        />
        <RichText
          tagName="h2"
          className="c-calltoaction__subtitle"
          value={ctaSubtitle}
          placeholder={__("Add a subtitle", "hello-gutenberg-roots")}
          onChange={value => setAttributes({ ctaSubtitle: value })}
        />
        <RichText
          tagName="p"
          className="c-calltoaction__text"
          value={ctaText}
          placeholder={__("Add some text", "hello-gutenberg-roots")}
          onChange={value => setAttributes({ ctaText: value })}
        />
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
      attributes: { ctaTitle, ctaSubtitle, ctaText },
      className
    } = props;
    return (
      <section className={classnames(className, "c-calltoaction")}>
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
          tagName="p"
          value={ctaText}
        />
      </section>
    );
  }
});
