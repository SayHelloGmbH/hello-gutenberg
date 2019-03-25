import "./inspector.scss";

(function(wp) {
  var registerPlugin = wp.plugins.registerPlugin;
  var PluginSidebar = wp.editPost.PluginSidebar;
  var el = wp.element.createElement;
  var Text = wp.components.TextControl;
  var withSelect = wp.data.withSelect;
  var withDispatch = wp.data.withDispatch;

  var mapSelectToProps = function(select) {
    return {
      metaFieldValue: select("core/editor").getEditedPostAttribute("meta")[
        "sidebar_plugin_meta_block_field"
      ]
    };
  };

  /**
   * Store value in post data set currently in browser.
   * Gets saved to the server when saving the post.
   */
  var mapDispatchToProps = function(dispatch) {
    return {
      setMetaFieldValue: function(value) {
        dispatch("core/editor").editPost({
          meta: { sidebar_plugin_meta_block_field: value }
        });
      }
    };
  };

  /**
   * Add a field to the Plugin Sidebar.
   */
  var MetaBlockField = function(props) {
    return el(Text, {
      label: "Meta Block Field",
      value: props.metaFieldValue,
      onChange: function(content) {
        props.setMetaFieldValue(content);
      }
    });
  };

  var MetaBlockFieldWithData = withSelect(mapSelectToProps)(MetaBlockField);
  var MetaBlockFieldWithDataAndActions = withDispatch(mapDispatchToProps)(
    MetaBlockFieldWithData
  );

  registerPlugin("my-plugin-sidebar", {
    render: function() {
      return el(
        PluginSidebar,
        {
          name: "my-plugin-sidebar",
          icon: "admin-post",
          title: "My plugin sidebar"
        },
        el(
          "div",
          { className: "plugin-sidebar-content" },
          el(MetaBlockFieldWithDataAndActions)
        )
      );
    }
  });
})(window.wp);
