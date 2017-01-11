jsPlumb.ready(function() {
	//jsPlumb.setContainer($("#content"));
	jsPlumb.setContainer("content");

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

	var item_1 = $("#item_1");
	var item_2 = $("#item_2");

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


});