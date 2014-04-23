var galaxy = {
    parent:null,
    onClick: function (target) {

    },
    onMouseOver: function (target) {

    },
    onMouseOut: function (target) {

    },
    onMouseMove: function (target, x, y) {

    },
    onCollide: function (target, x, y) {

    },

    onInit: function () {

    },
    onLoop: function (delta) {

    },
    onDestroy: function () {

    },
    implements: [
        "test",
        ["test2", {a: 2, b: 10}]
    ],
    baseObject:null,
    children: [

    ]
};
var template = {
    prior: false,//Default true
    arguments: {

    },
    onClick: function (target) {

    },
    onMouseOver: function (target) {

    },
    onMouseOut: function (target) {

    },
    onMouseMove: function (target, x, y) {

    },
    onInit: function () {

    },
    onLoop: function () {

    },
    onDestroy: function () {

    }
};


var testGalaxy = {
    onInit: function () {
        //Init Galaxy
    },
    onLoop: function () {
        //Loop Galaxy
    },
    onDestroy: function () {
        //Destroy Galaxy
    },
    implements: [
        "test",
        ["test2", {a: 2, b: 10}]
    ],
    children: [
        {/*...*/}
    ]
};

var templates = {
    test: {
        prior: false,
        arguments: {
            a: 1
        },
        onInit: function () {
            //Init Test
        },
        onDestroy: function () {
            //Destroy Test
        }
    },
    test2: {
        arguments: {
            a: 1,
            b: "test"
        },
        onClick: function (target) {
            //Click Test2
        },
        onInit: function () {
            //Init Test2
        },
        onLoop: function () {
            //Loop Test2
        }
    }
};

/*
 Zur Laufzeit
 */

var objectCache = {
    "aaaabbbbccccddddeeee": {
        onClick: [
            function (target) {
                //Click Test2
            }
        ],
        onMouseOver: [],
        onMouseOut: [],
        onMouseMove: [],
        onInit: [
            function () {
                //Init Test2
            },
            function () {
                //Init Galaxy
            },
            function () {
                //Init Test
            }
        ],
        onLoop: [
            function () {
                //Loop Test2
            },
            function () {
                //Loop Galaxy
            }
        ],
        onDestroy: [
            function () {
                //Destroy Galaxy
            },
            function () {
                //Destroy Test
            }
        ],
        arguments: {
            "test": {a: 1},
            "test2": {a: 2, b: 10}
        },
        children: ["bbbbccccddddeeeeffff"]
    },
    "bbbbccccddddeeeeffff": {
        /* ... */
    }
};
//Todo: Gleiche funktionen nur einmal speichern
var functionCache = {
    onClick: {
        "fnc0aaaabbbbccccddddeeee": [
            "aaaabbbbccccddddeeee",
            function (target) {
                //Click Test2
            }]
    },
    onMouseOver: [],
    onMouseOut: [],
    onMouseMove: [],
    onInit: {
        "fnc1aaaabbbbccccddddeeee": [
            "aaaabbbbccccddddeeee",
            function () {
                //Init Test2
            }
        ],
        "fnc2aaaabbbbccccddddeeee": [
            "aaaabbbbccccddddeeee",
            function () {
                //Init Galaxy
            }
        ],
        "fnc3aaaabbbbccccddddeeee": [
            "aaaabbbbccccddddeeee",
            function () {
                //Init Test
            }
        ]
    },
    onLoop: {
        "fnc4aaaabbbbccccddddeeee": [
            "aaaabbbbccccddddeeee",
            function () {
                //Loop Test2
            }
        ],
        "fnc5aaaabbbbccccddddeeee": [
            "aaaabbbbccccddddeeee",
            function () {
                //Loop Galaxy
            }
        ]
    },
    onDestroy: {
        "fnc6aaaabbbbccccddddeeee": [
            "aaaabbbbccccddddeeee",
            function () {
                //Destroy Galaxy
            }
        ],
        "fnc7aaaabbbbccccddddeeee": [
            "aaaabbbbccccddddeeee",
            function () {
                //Destroy Test
            }
        ],
        "fnc8aaaabbbbccccddddeeee": [
            "bbbbccccddddeeeeffff",
            function () {
                //Destroy Galaxy-Child
            }
        ]
    }
};
var childTree = {
    "bbbbccccddddeeeeffff": {
        onClick: [],
        onMouseOver: [],
        onMouseOut: [],
        onMouseMove: [],
        onInit: [],
        onLoop: [],
        onDestroy: ["fnc8aaaabbbbccccddddeeee"]
    },
    "aaaabbbbccccddddeeee": {
        onClick: ["fnc0aaaabbbbccccddddeeee"],
        onMouseOver: [],
        onMouseOut: [],
        onMouseMove: [],
        onInit: ["fnc3aaaabbbbccccddddeeee","fnc2aaaabbbbccccddddeeee","fnc1aaaabbbbccccddddeeee"],
        onLoop: ["fnc5aaaabbbbccccddddeeee","fnc4aaaabbbbccccddddeeee"],
        onDestroy: ["fnc8aaaabbbbccccddddeeee","fnc7aaaabbbbccccddddeeee","fnc6aaaabbbbccccddddeeee"]
    }
};