import './block.scss';

/**
 * Following extracts the corresponding function from the corresponding object, for local use
 */
const { createElement } = wp.element, { registerBlockType } = wp.blocks, { __ } = wp.i18n;
const { RichText } = wp.editor;

/**
 * Register the Block with all its settings and properties
 */
export default registerBlockType('sayhellogmbh/teaser', {
    title: __('Teaser', 'hello-gutenberg-roots'),
    description: __('Adds a teaser Block to the page.', 'hello-gutenberg-roots'),
    keywords: [__('teaser', 'hello-gutenberg-roots'), __('say hello', 'hello-gutenberg-roots')],
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
    icon: 'format-text',
    category: 'common',
    supports: {
        html: false
    },

    /**
     * The fields which the editor uses to control the content of the Block
     * @type {Object}
     */
    attributes: {
        message: {
            type: 'array',
            source: 'children',
            selector: '.c-teaser__text'
        }
    },

    edit: props => {
        const {
            attributes: { message },
            className,
            setAttributes
        } = props;
        const onChangeMessage = message => {
            setAttributes({ message });
        };
        return (
            <div className={className}>
                <h2>{__('Teaser', 'hello-gutenberg-roots')}</h2>
                <RichText
                  tagName="div"
                  multiline="p"
                  placeholder={__('Add a short teaser text', 'hello-gutenberg-roots')}
                  onChange={onChangeMessage}
                  value={message}
                />
            </div>
        );
    },

    save: props => {
        const {
            attributes: { message },
            className
        } = props;
        return (
            <div className={className}>
                <h2 class="c-teaser__title">{__('Teaser', 'hello-gutenberg-roots')}</h2>
                <div class="c-teaser__text">{message}</div>
            </div>
        );
    }
});
