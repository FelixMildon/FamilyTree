[{
    name: "Father",                         // The name of the node
    class: "node",                          // The CSS class of the node
    textClass: "nodeText",                  // The CSS class of the text in the node
    depthOffset: 1,                         // Generational height offset
    marriages: [{                           // Marriages is a list of nodes
      spouse: {                             // Each marriage has one spouse
        name: "Mother",
      },
      children: [{                          // List of children nodes
        name: "Child",
      }]
    }],
    extra: {}                               // Custom data passed to renderers
  }]
  [{                                        //Example below
    "name": "Niclas Superlongsurname",
    "class": "man",
    "textClass": "emphasis",
    "marriages": [{
      "spouse": {
        "name": "Iliana",
        "class": "woman",
        "extra": {
          "nickname": "Illi"
        }
      },
      "children": [{
        "name": "James",
        "class": "man",
        "marriages": [{
          "spouse": {
            "name": "Alexandra",
            "class": "woman"
          },
          "children": [{
            "name": "Eric",
            "class": "man",
            "marriages": [{
              "spouse": {
                "name": "Eva",
                "class": "woman"
              }
            }]
          }, {
            "name": "Jane",
            "class": "woman"
          }, {
            "name": "Jasper",
            "class": "man"
          }, {
            "name": "Emma",
            "class": "woman"
          }, {
            "name": "Julia",
            "class": "woman"
          }, {
            "name": "Jessica",
            "class": "woman"
          }]
        }]
      }]
    }]
  }]