const el = wp.element.createElement;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

const BLOCKS_TEMPLATE = [
  ["core/title", {}],
  ["core/image", {}],
  ["core/paragraph", { placeholder: "Image Details" }]
];

registerBlockType("sayhellogmbh/prefill-example", {
  title: "Prefilled block",
  category: "widgets",
  edit: props => {
    return el(InnerBlocks, {
      template: BLOCKS_TEMPLATE,
      templateLock: false
    });
  },
  save: props => {
    return el(InnerBlocks.Content, {});
  }
});
