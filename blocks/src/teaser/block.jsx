import "./block.scss";

/**
 * Following extracts the corresponding function from the corresponding object, for localized use
 */
const { Component } = wp.element,
  { registerBlockType } = wp.blocks,
  { __ } = wp.i18n;
const { RichText } = wp.editor;

import classnames from "classnames";

const blockAttributes = {
  message: {
    type: "array",
    source: "children",
    selector: ".c-teaser__text"
  }
};

class SHTeaserBlock extends Component {
  render() {
    const {
      attributes: { message },
      className,
      setAttributes
    } = this.props;
    return [
      <div className={classnames(className, "c-teaser")}>
        <h2 class="c-teaser__title">
          {__("Say Hello Teaser", "hello-gutenberg-roots")}
        </h2>
        <RichText
          tagName="p"
          className="c-teaser__text"
          value={message}
          placeholder={__("Add a short teaser text", "hello-gutenberg-roots")}
          onChange={value => setAttributes({ message: value })}
        />
      </div>
    ];
  }
}

/**
 * Register the Block with all its settings and properties
 */
export default registerBlockType("sayhellogmbh/teaser", {
  title: __("Teaser", "hello-gutenberg-roots"),
  description: __("Adds a teaser Block to the page.", "hello-gutenberg-roots"),
  keywords: [
    __("teaser", "hello-gutenberg-roots"),
    __("say hello", "hello-gutenberg-roots")
  ],
  styles: [
    {
      name: "default",
      label: __("Default", "hello-gutenberg-roots"),
      isDefault: true
    },
    {
      name: "bordered",
      label: __("With a border", "hello-gutenberg-roots")
    }
  ],
  icon: "format-quote",
  category: "hello-gutenberg-roots",
  supports: {
    html: false
  },

  attributes: blockAttributes,

  edit: SHTeaserBlock,

  save(props) {
    const {
      attributes: { message },
      className
    } = props;
    return (
      <div className={classnames(className, "c-teaser")}>
        <h3 class="c-shteaser__title">
          {__("Say Hello Teaser", "hello-gutenberg-roots")}
        </h3>
        <RichText.Content
          className="c-teaser__text"
          tagName="p"
          value={message}
        />
      </div>
    );
  },

  /**
   * This gives an example of a previous generated HTML
   * supports, attributes and save should all be defined.
   * https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-deprecation/
   */
  deprecated: [
    {
      supports: {
        html: false
      },
      attributes: blockAttributes,
      save(props) {
        const {
          attributes: { message },
          className
        } = props;
        return (
          <div className={classnames(className, "c-teaser")}>
            <h2 class="c-shteaser__title">
              {__("Say Hello Teaser", "hello-gutenberg-roots")}
            </h2>
            <RichText.Content
              className="c-teaser__text"
              tagName="p"
              value={message}
            />
          </div>
        );
      }
    }
  ]
});
