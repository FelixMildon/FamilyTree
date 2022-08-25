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
  let options = {
  target: '#graph',
  debug: false,
  width: 600,
  height: 600,
  hideMarriageNodes: true,
  marriageNodeSize: 10,
  callbacks: {
    /*
      Callbacks should only be overwritten on a need to basis.
      See the section about callbacks below.
    */
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  nodeWidth: 100,
  styles: {
    node: 'node',
    linage: 'linage',
    marriage: 'marriage',
    text: 'nodeText'
  }
}
let parentRootglobal = [] 
let tree = dTree.init(data,options)
  //console.log(familyTree[3].children)
  //get no parent elements
  familyTree.forEach((familyMember) => {
    if(familyMember.parents.length == 0){
        console.log("Outter LOOP");
        let compare = familyMember
        let parentRoot = []
        console.log(compare);
        //console.log(familyMember.children.sort());
        console.log("INNER LOOP");
        
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
  console.log("tada parent node")
  console.log(parentRootglobal)
  //get root children
  
  //get children children