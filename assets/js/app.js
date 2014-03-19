define([
       "jquery" , "underscore" , "backbone"
       , "collections/snippets" , "collections/my-form-snippets"
       , "views/tab" , "views/my-form"
       , "text!data/input.json", "text!data/radio.json", "text!data/select.json", "text!data/buttons.json"
       , "text!templates/app/render.html",  "text!templates/app/about.html", 
], function(
  $, _, Backbone
  , SnippetsCollection, MyFormSnippetsCollection
  , TabView, MyFormView
  ,inputJSON, radioJSON, selectJSON, buttonsJSON
  , renderTab, aboutTab
){
  return {
    initialize: function(){
      //Bootstrap tabs from json.
      new TabView({
        title: "输入框"
        ,id:"Input"
        , collection: new SnippetsCollection(JSON.parse(inputJSON))
      });
      new TabView({
        title: "单选 / 多选"
        ,id:"Check_Radio"
        , collection: new SnippetsCollection(JSON.parse(radioJSON))
      });
      new TabView({
        title: "下拉"
        ,id:"Select"
        , collection: new SnippetsCollection(JSON.parse(selectJSON))
      });
      new TabView({
        title: "按钮"
        ,id: "Button"
        , collection: new SnippetsCollection(JSON.parse(buttonsJSON))
      });
      new TabView({
        title: "生成"
        ,id:"Rendered"
        , content: renderTab
      });
      new TabView({
        title: "关于"
        ,id:"About"
        , content: aboutTab
      });


      //Make the first tab active!
      $(".tab-pane").first().addClass("active");
      $("ul.nav li").first().addClass("active");
      // Bootstrap "My Form" with 'Form Name' snippet.
      new MyFormView({
        title: "Original"
        , collection: new MyFormSnippetsCollection(
        [
          { "title" : "Form Name"
            , "fields": {
              "name" : {
                "label"   : "Form Name"
                , "type"  : "input"
                , "value" : "Form Name"
              }
            }
          }
        ])
      });
    }
  }
});
