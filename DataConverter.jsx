function TestTreeConvertToDTree(familyTree) {         //TestTree
    //get all non parent items, the two items with matching children is root.
    //
    //for each item in list, check if children match
    //
    familyTree.forEach((id) => {
        console.log(id);
    });
    return data;                                   //DTree
  }
//TURN THIS
const familyTree = [
    {
    id: 2351232112252,
    name: "Sally",
    children: [5555, 6666, 7777, 8458189966444,
    897543276547654765443576],
    gender: "female",
    parents: [],
    },
    {
    id: 1231239887112,
    name: "Billy",
    children: [8458189966444, 5555, 6666, 7777,
    897543276547654765443576],
    gender: "male",
    parents: [],
    },
    {
    id: 7777,
    name: "Suzie",
    gender: "female",
    children: [317849882, 8569047194214199353],
    parents: [2351232112252, 1231239887112],
    },
    { id: 23123122, name: "Sam", gender: "male", children: [317849882,
    8569047194214199353], parents: [] },
    { id: 317849882, name: "Josh", gender: "male", children: [43924235082592],
    parents: [7777, 23123122] },
    { id: 8593288989, name: "Sarah", gender: "female", children:
    [43924235082592], parents: [] },
    { id: 43924235082592, name: "Jim", gender: "male", children: [9305009999],
    parents: [317849882, 8593288989] },
    { id: 83473298328562398696, name: "Clara", gender: "female", children:
    [9305009999], parents: [] },
    
    { id: 9305009999, name: "Joe", children: [], gender: "male", parents:
    [43924235082592, 83473298328562398696] },
    {
    id: 8569047194214199353,
    name: "Charlie",
    gender: "male",
    children: [565893648394894339808],
    parents: [23123122, 7777],
    },
    { id: 4382743284732483290, name: "Jessie", gender: "female", children:
    [565893648394894339808], parents: [] },
    {
    id: 565893648394894339808,
    name: "Bob",
    gender: "male",
    children: [],
    parents: [8569047194214199353, 4382743284732483290],
    },
    { id: 8458189966444, name: "Ricky", gender: "male", children: [], parents:
    [2351232112252, 1231239887112] },
    {
    id: 897543276547654765443576,
    name: "Julian",
    gender: "male",
    children: [],
    parents: [1231239887112, 2351232112252],
    },
    ];

    //Into THIISSSSSS:
    let data = [{                                        //Example below:v
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

  let parentRootglobal = [] 
let tree = dTree.init(data,options)
  //console.log(familyTree[3].children)
  //get no parent elements
  //find root parents
  familyTree.forEach((familyMember) => {
    if(familyMember.parents.length == 0){
        let compare = familyMember
        let parentRoot = []  
        familyTree.forEach((familyMember) => {
    if(familyMember.parents.length == 0){
        console.log(compare.children.sort())      //compare this
        console.log(familyMember.children.sort());//with this 
        console.log(JSON.stringify(compare.children.sort()) === JSON.stringify(familyMember.children.sort()))
          //if two matches
        if(JSON.stringify(compare.children.sort()) === JSON.stringify(familyMember.children.sort())){
          //push familyMember into a object array
          parentRoot.push(familyMember)
        }
          //return the two matches as root parent
        console.log(parentRoot)
        if(parentRoot.length === 2){
          console.log("THis value/if condition means return parentroot and break forlooP")
          parentRootglobal = parentRoot
        }
   
  }
    });


  }
    });
  //find no parent element with matching children
  console.log("tada parent nodez")
  console.log(parentRootglobal)
  
  function getChild(n){
    
    let nChild = []
    n.forEach(element => {
      familyTree.forEach(person => {
        (element.children).forEach(elementelement => {
          if(person.id == elementelement){
          nChild.push({...person})
       
      }
        });
    });
    });
    if(nChild.length == 0){
      return false
    }else{
      console.log(n)
      return getChild(nChild)
    }
    
  }
  console.log(getChild(parentRootglobal.slice(0,1)))