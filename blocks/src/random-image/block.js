import './block.scss';

(function(blocks, i18n, element) {
    var el = element.createElement,
        source = blocks.source,
        __ = i18n.__;

    function renderHTML(props) {
        var src = 'https://lorempixel.com/400/200/' + props.category;

        return el('img', {
            src: src,
            alt: props.category,
            className: 'wp-blocks-shp wp-blocks-shp-random-image'
        });
    }

    blocks.registerBlockType('sayhellogmbh/random-image', {
        title: __('Random Image', 'hello-gutenberg-roots'),
        description: __('Adds a random image (400px x 200px) from Lorem Pixel to the page.', 'hello-gutenberg-roots'),
        keywords: [__('image', 'hello-gutenberg-roots'), __('photo', 'hello-gutenberg-roots'), __('say hello', 'hello-gutenberg-roots')],

        icon: 'format-image',

        category: 'layout',

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

            function setCategory(event) {
                var selected = event.target.querySelector('option:checked');
                props.setAttributes({ category: selected.value });
                event.preventDefault();
            }

            children = [];
            if (category) {
                children.push(renderHTML({ category: category }));
            }

            children.push(
                el('select', { value: category, onChange: setCategory },
                    el('option', null, __('Select a category', 'hello-gutenberg-roots')),
                    el('option', { value: 'animals' }, __('Animals', 'hello-gutenberg-roots')),
                    el('option', { value: 'nature' }, __('Nature', 'hello-gutenberg-roots')),
                    el('option', { value: 'sports' }, __('Sports', 'hello-gutenberg-roots'))
                )
            );

            return el('form', { onSubmit: setCategory }, children);
        },

        save: function(props) {
            return renderHTML({ category: props.attributes.category });
        }
    });
})(
    window.wp.blocks,
    window.wp.i18n,
    window.wp.element
);
