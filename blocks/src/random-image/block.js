import './block.scss';

(function(blocks, i18n, element) {

    /**
     * Following extracts the corresponding function from the corresponding object, for local use
     */
    const { createElement } = element, { registerBlockType } = blocks, { __ } = i18n;

    /**
     * Renders the HTML for the frontend and the backend
     * @param  {array} props The Block properties
     * @return {object}      HTML DOM object
     */
    var renderHTML = function(props) {
        var src = 'https://lorempixel.com/400/200/' + props.category;

        return createElement('div', { key: 'c-random-image', className: props.className + ' c-random-image' },
            createElement('figure', { key: 'c-random-image__figure', className: 'c-random-image__figure' },
                createElement('img', { key: 'c-random-image__image', src: src, alt: props.category, className: 'c-random-image__image' })
            )
        );
    }

    /**
     * Register the Block with all its settings and properties
     */
    registerBlockType('sayhellogmbh/random-image', {
        title: __('Random Image', 'hello-gutenberg-roots'),
        description: __('Adds a random image (400px x 200px) from Lorem Pixel to the page.', 'hello-gutenberg-roots'),
        keywords: [__('image', 'hello-gutenberg-roots'), __('photo', 'hello-gutenberg-roots'), __('say hello', 'hello-gutenberg-roots')],
        styles: [{
                name: 'default',
                label: __('Default', 'hello-gutenberg-roots'),
                isDefault: true
            },
            {
                name: 'bordered',
                label: __('With a border', 'hello-gutenberg-roots')
            },
        ],
        icon: 'format-image',
        category: 'layout',
        html: false,

        /**
         * The fields which the editor uses to control the content of the Block
         * @type {Object}
         */
        attributes: {
            category: {
                type: 'string',
                source: 'attribute',
                attribute: 'alt',
                selector: 'img',
            }
        },

        edit: function(props) {

            var setCategory = function(event) {
                var selected = event.target.querySelector('option:checked');
                props.setAttributes({ category: selected.value });
                event.preventDefault();
            }

            var childNodes = [];

            if (props.attributes.category) {
                childNodes.push(renderHTML({ category: props.attributes.category, className: props.className }));
            }

            childNodes.push(createElement('select', { key: 'c-random-image__category', value: props.attributes.category, onChange: setCategory },
                createElement('option', null, __('Select a category', 'hello-gutenberg-roots')),
                createElement('option', { key: 'c-random-image__category--animals', value: 'animals' }, __('Animal', 'hello-gutenberg-roots')),
                createElement('option', { key: 'c-random-image__category--cats', value: 'cats' }, __('Cat', 'hello-gutenberg-roots')),
                createElement('option', { key: 'c-random-image__category--nature', value: 'nature' }, __('Nature', 'hello-gutenberg-roots')),
                createElement('option', { key: 'c-random-image__category--people', value: 'people' }, __('Person', 'hello-gutenberg-roots')),
                createElement('option', { key: 'c-random-image__category--sports', value: 'sports' }, __('Sport', 'hello-gutenberg-roots'))
            ));

            return createElement('form', { key: 'c-random-image__form', onSubmit: setCategory }, childNodes);
        },

        /**
         * Provide the main save function with the Block's properties, including the 'attributes' (fields)
         * @param  {object} props The properties of the current Block, including the values of the 'attributes' (fields)
         * @return {DOM object}   HTML DOM object containing the rendered Block
         */
        save: function(props) {
            return renderHTML({ category: props.attributes.category, className: props.className });
        }
    });
})(
    window.wp.blocks,
    window.wp.i18n,
    window.wp.element
);
