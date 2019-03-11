// random-image.js

import './style.scss';
import './editor.scss';

(function(blocks, element) {
    var el = element.createElement,
        source = blocks.source;

    function RandomImage(props) {
        var src = 'https://lorempixel.com/400/200/' + props.category;

        return el('img', {
            src: src,
            alt: props.category
        });
    }

    blocks.registerBlockType('myplugin/random-image', {
        title: 'Random Image',
        description: 'Adds a random image (400px x 200px) from Lorem Pixel to the page.',

        icon: 'format-image',

        category: 'common',

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
                children.push(RandomImage({ category: category }));
            }

            children.push(
                el('select', { value: category, onChange: setCategory },
                    el('option', null, 'Select a category',),
                    el('option', { value: 'animals' }, 'Animals'),
                    el('option', { value: 'nature' }, 'Nature'),
                    el('option', { value: 'sports' }, 'Sports')
                )
            );

            return el('form', { onSubmit: setCategory }, children);
        },

        save: function(props) {
            return RandomImage({ category: props.attributes.category });
        }
    });
})(
    window.wp.blocks,
    window.wp.element
);
