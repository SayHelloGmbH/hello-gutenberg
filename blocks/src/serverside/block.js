import './block.scss';

import { ServerSideRender } from '@wordpress/components';

(function(blocks, i18n, element, data, components) {

    /**
     * Following extracts the corresponding function from the corresponding object, for local use
     */
    const { createElement } = element, { registerBlockType } = blocks, { __ } = i18n;

    const { withSelect } = data;
    

    /**
     * Register the Block with all its settings and properties
     */
    registerBlockType('sayhellogmbh/serverside', {
        title: __('Server side rendered block', 'hello-gutenberg-roots'),
        keywords: [__('server side', 'hello-gutenberg-roots'), __('say hello', 'hello-gutenberg-roots')],
        icon: 'networking',
        category: 'common',
        html: false,

        /**
         * This edit function pulls in the newest post
         * from the server via REST API
         */
        edit: withSelect((select) => {
            return {
                posts: select('core').getEntityRecords('postType', 'post')
            };
        })(({ posts, className }) => {

            if (!posts) {
                return "Loading…";
            }

            if (posts && posts.length === 0) {
                return "No posts";
            }

            let post = posts[0];

            return <a className={ className } href={ post.link }>{ post.title.rendered } ({ post.date })</a>;
        }),


        // edit: function(props) {
        //     // ensure the block attributes matches this plugin's name
        //     return (
        //         <ServerSideRender
        //             block='sayhellogmbh/serverside'
        //         />
        //     );
        // },

        save: function() {
            return null;
        }
    });
})(
    window.wp.blocks,
    window.wp.i18n,
    window.wp.element,
    window.wp.data,
    window.wp.components
);
