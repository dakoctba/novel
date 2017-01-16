var $draggable = $('.box').draggabilly({
	grid: [14, 14]
});

$draggable.on('dragMove', function(event, pointer, moveVector) {
  jsPlumb.repaintEverything();
});

$draggable.on( 'dragEnd', function( event, pointer ) {
	jsPlumb.repaintEverything();

	var draggie = $(this).data('draggabilly');
	console.log('top ['+draggie.position.y+'] :: left ['+draggie.position.x+']');
})

jsPlumb.ready(function() {
	//jsPlumb.setContainer($("#content"));
	jsPlumb.setContainer("content");

	//////////////////////////////////////////////////////////////////////////////////////////////////
	var dialog = {
		  "process": "KFJA-12JA-FE21",
		  "novel": [
		    {
		      "id": 1,
		      "text": "Oi, eu sou o Warren. Parabéns por se preocupar em investir bem. Investir pode parecer complexo, mas eu estou aqui para te ajudar a chegar lá.",
		      "type": "text",
		      "connections": {
		        "default": 2
		      },
		      "style": {
		        "top": 56,
		        "left": 14
		      }
		    },
		    {
		      "id": 2,
		      "text": "Antes de começarmos, como posso te chamar? :)",
		      "type": "question",
		      "var": "$name",
		      "connections": {
		        "default": 3
		      },
		      "style": {
		        "top": 56,
		        "left": 658
		      }
		    },
		    {
		      "id": 3,
		      "text": "Prazer, $name. Então, a primeira coisa a fazer é identificar o seu perfil como investidor. Para isso, vou fazer algumas perguntas básicas, ok?",
		      "type": "text",
		      "connections": {
		        "default": 4
		      },
		      "style": {
		        "top": 306,
		        "left": 658
		      }
		    },
		    {
		      "id": 4,
		      "text": "Qual é a sua idade?",
		      "type": "question",
		      "var": "$yearsOld",
		      "connections": {
		        "young": 5,
		        "normal": 6,
		        "old": 7
		      },
		      "style": {
		        "top": 550,
		        "left": 658
		      }
		    },
		    {
		      "id": 5,
		      "text": "Que legal! Adoramos jovens que pensam lááá na frente :)",
		      "type": "text",
		      "connections": {
		        "default": 8
		      },
		      "style": {
		        "top": 836,
		        "left": 84
		      }
		    },
		    {
		      "id": 6,
		      "text": "Coisa boa, na flor da idade!",
		      "type": "text",
		      "connections": {
		        "default": 8
		      },
		      "style": {
		        "top": 836,
		        "left": 658
		      }
		    },
		    {
		      "id": 7,
		      "text": "Muito bem! Nunca é tarde para fazer um pé de meia :)",
		      "type": "text",
		      "connections": {
		        "default": 8
		      },
		      "style": {
		        "top": 836,
		        "left": 1218
		      }
		    },
		    {
		      "id": 8,
		      "text": "Quando surge o assunto investimentos, qual é o seu primeiro pensamento?",
		      "type": "question",
		      "var": "$investorType",
		      "connections": {
		        "default": 9
		      },
		      "style": {
		        "top": 1120,
		        "left": 658
		      }
		    },
		    {
		      "id": 9,
		      "text": "Obrigado por suas respostas, $name ;)",
		      "type": "text",
		      "connections": null,
		      "style": {
		        "top": 1320,
		        "left": 658
		      }
		    }
		  ]
		};

	dialog.novel.forEach(function(item){
		console.log(item.text)
	});


	//////////////////////////////////////////////////////////////////////////////////////////////////
	// Config
	jsPlumb.importDefaults({
	  PaintStyle : {
	    strokeWidth: 2,
	    stroke: '#8e8e8e'
	  },
	  DragOptions : { cursor: "crosshair" },
	  Endpoints : [
	  	[ "Blank", { radius: 0 } ],
	  	[ "Blank", { radius: 0 }]],
	  EndpointStyles : [
	  	{ fill:"#8e8e8e" },
	  	{ fill:"#8e8e8e" }]
	});
/*
	jsPlumb.connect({
		source: item_1,
		target: item_2,
		anchors:["Continuous","Continuous"],
		overlays:[
    		["PlainArrow", {width:7, length:7, location:[0, 0]}]
  		]
	});

	jsPlumb.connect({
		source: item_2,
		target: item_3,
		anchors:["Continuous","Continuous"],
		overlays:[
    		["PlainArrow", {width:7, length:7, location:[0, 0]}]
  		]
	});

	jsPlumb.connect({
		source: item_3,
		target: item_4,
		anchors:["Continuous","Continuous"],
		overlays:[
    		["PlainArrow", {width:7, length:7, location:[0, 0]}]
  		]
	});

	jsPlumb.connect({
		source: item_4,
		target: item_5,
		anchors:["Continuous","Continuous"],
		overlays:[
    		["PlainArrow", {width:7, length:7, location:[0, 0]}]
  		]
	});

	jsPlumb.connect({
		source: item_4,
		target: item_6,
		anchors:["Continuous","Continuous"],
		overlays:[
    		["PlainArrow", {width:7, length:7, location:[0, 0]}]
  		]
	});

	jsPlumb.connect({
		source: item_4,
		target: item_7,
		anchors:["Continuous","Continuous"],
		overlays:[
    		["PlainArrow", {width:7, length:7, location:[0, 0]}]
  		]
	});


	jsPlumb.connect({
		source: item_5,
		target: item_8,
		anchors:["Continuous","Continuous"],
		overlays:[
    		["PlainArrow", {width:7, length:7, location:[0, 0]}]
  		]
	});

	jsPlumb.connect({
		source: item_6,
		target: item_8,
		anchors:["Continuous","Continuous"],
		overlays:[
    		["PlainArrow", {width:7, length:7, location:[0, 0]}]
  		]
	});

	jsPlumb.connect({
		source: item_7,
		target: item_8,
		anchors:["Continuous","Continuous"],
		overlays:[
    		["PlainArrow", {width:7, length:7, location:[0, 0]}]
  		]
	});
*/

	$(window).resize(function(){
		jsPlumb.repaintEverything();
	});

});