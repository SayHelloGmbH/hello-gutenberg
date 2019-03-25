import "./block.scss";

/**
 * Following extracts the corresponding function from the corresponding object, for localized use
 */
const { Component } = wp.element,
  { registerBlockType } = wp.blocks,
  { __ } = wp.i18n;
const { RichText } = wp.editor;

import classnames from "classnames";

const attributes = {
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
          tagName="div"
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
  icon: "format-text",
  category: "common",
  supports: {
    html: false
  },

  attributes,

  edit: SHTeaserBlock,

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
          tagName="div"
          value={message}
        />
      </div>
    );
  } //,

  // deprecated: [
  //   {
  //     save(props) {
  //       const {
  //         attributes: { message },
  //         className
  //       } = props;
  //       return (
  //         <div className={classnames(className, "c-teaser")}>
  //           <h2 class="c-shteaser__title">
  //             {__("Say Hello Teaser", "hello-gutenberg-roots")}
  //           </h2>
  //           <div class="c-shteaser__text">{message}</div>
  //         </div>
  //       );
  //     }
  //   }
  // ]
});
