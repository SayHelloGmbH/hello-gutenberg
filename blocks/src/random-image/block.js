import './block.scss';

(function(blocks, i18n, element) {

    // Following extracts the corresponding function from the corresponding object, for local use
    const { createElement } = element, { registerBlockType } = blocks, { __ } = i18n;

    var renderHTML = function(props) {
        //var size = ? '400/400' : '400/200';
        var src = 'https://lorempixel.com/400/200/' + props.category;

        return createElement('img', {
            key: 'random-image-image',
            src: src,
            alt: props.category,
            className: 'wp-blocks-shp wp-blocks-shp-random-image'
        });
    }

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

        align: ['left', 'right', 'full'],

        html: false,

        attributes: {
            category: {
                type: 'string',
                source: 'attribute',
                attribute: 'alt',
                selector: 'img',
            }
        },

        edit: function(props) {
            var category = props.attributes.category,
                children;

            var setCategory = function(event) {
                var selected = event.target.querySelector('option:checked');
                props.setAttributes({ category: selected.value });
                event.preventDefault();
            }

            children = [];

            if (category) {
                children.push(renderHTML({ category: category }));
            }

            children.push(
                createElement('select', { key: 'random-image-category', value: category, onChange: setCategory },
                    createElement('option', null, __('Select a category', 'hello-gutenberg-roots')),
                    createElement('option', { key: 'random-image-category-animals', value: 'animals' }, __('Animal', 'hello-gutenberg-roots')),
                    createElement('option', { key: 'random-image-category-cats', value: 'cats' }, __('Cat', 'hello-gutenberg-roots')),
                    createElement('option', { key: 'random-image-category-nature', value: 'nature' }, __('Nature', 'hello-gutenberg-roots')),
                    createElement('option', { key: 'random-image-category-people', value: 'people' }, __('Person', 'hello-gutenberg-roots')),
                    createElement('option', { key: 'random-image-category-sports', value: 'sports' }, __('Sport', 'hello-gutenberg-roots'))
                )
            );

            return createElement('form', { key: 'random-image-form', onSubmit: setCategory }, children);
        },

        /**
         * Provide the main save function with the block's properties, including the 'attributes' (fields)
         * @param  {object} props The properties of the current block, including the values of the 'attributes' (fields)
         * @return {DOM object}   A JavaScript DOM object containing the rendered block
         */
        save: function(props) {
            return renderHTML({ category: props.attributes.category });
        }
    });
})(
    window.wp.blocks,
    window.wp.i18n,
    window.wp.element
);
