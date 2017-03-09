/** THE OBJECT DECLARATION **/

var UndoRedoObject = (function() {
	
//I needed to write this, otherwise I couldnt define commands to UndoRedoObject
  function UndoRedoObject() {}
	
//Create two lists that will contain changes by the user.
	UndoRedoObject.unexecuted = [];
	UndoRedoObject.executed = [];
  
/*Make an execute function on the UndoRedoObject. The function will do the execute function of the object 
uro that will be passed in by the caller. After that it will add this object to the executed list created above */

  UndoRedoObject.execute = function execute(imgsrc, drinkname, price, IDonBeverage) {
	
	var itemInformation = {
		"imgsrc" : imgsrc,
		"drinkname" : drinkname,
		"price" : price,
		"IDonBeverage" : IDonBeverage
	} 
	
	console.log("itemInformation.imgsrc: " + itemInformation.imgsrc);
    UndoRedoObject.executed.push(itemInformation);
	console.log("UndoRedoObject.executed[0].imgsrc: " + UndoRedoObject.executed[0].imgsrc);
  };
  
  /*An undo function. The function will  delete the latest added object in the executed list. Further it will 
  use that object to do the unexecute function and add that object to the end of the list unexecuted*/
  
  UndoRedoObject.undo = function undo() {
	  
	  console.log("UndoRedoObject.executed.length " + UndoRedoObject.executed.length);
	  var arrayLengthAtBegining = UndoRedoObject.executed.length;
	  for(var i = 0; i < arrayLengthAtBegining; i++){
		  
			var id = UndoRedoObject.executed[0].IDonBeverage;
			
			
			
			for(var j = 0; j < UndoRedoObject.executed.length; j++ ){
				
				if(UndoRedoObject.executed[i] == undefined){
					continue;
				}
				
				if(id == UndoRedoObject.executed[i].IDonBeverage){
					UndoRedoObject.unexecuted.push(UndoRedoObject.executed[i])
					UndoRedoObject.executed.splice(i,1);
			//		var itemInformation = UndoRedoObject.executed[i].pop();
					$('#minus' + id).click();
			//		UndoRedoObject.unexecuted.push(itemInformation);	
				}
			}
			 
	  };
	 /* 
	  var arrayLength = UndoRedoObject.executed.length;
	  for(var i = 0; i < arrayLength; i++){
		  console.log("i:" + i);
		var itemInformation = UndoRedoObject.executed.pop();
		UndoRedoObject.unexecuted.push(itemInformation);
	  } */
	  
	  console.log("UndoRedoObject.unexecuted.length " + UndoRedoObject.unexecuted.length);
	  
	  /*
		console.log(UndoRedoObject.unexecuted);
	//	if(itemInformation !== undefined){
			console.log("numberOfItemTypes: " + numberOfItemTypes);
			for(var x = 0; x < numberOfItemTypes; x++){
				for(var i = 0; i < 6; i++){
					console.log("minus + x: " + "minus" + x);
					$('#minus' + x).click();
				}
			}
			numberOfItemTypes = 0; */
			
			//inte säkert detta funkar
			//addToOrder(itemInformation.imgsrc,itemInformation.drinkname, itemInformation.price);
			//itemInformation.unexecute();
			
	//	}
		  
	  }/*
    var itemInformation = UndoRedoObject.executed.pop();
	
	if(itemInformation !== undefined){
		itemInformation.unexecute();
		UndoRedoObject.unexecuted.push(itemInformation);
	} 
	
	//if the list is empty we change the undo button
	if(UndoRedoObject.executed.length == 0){
		console.log("There is no objects in the array executed");
		$("#thingsAdded").append("\nThere is no objects in the array executed" );
		//Do the undo button not pressable and less visible
	} */
 
  
  /*Here is a redo function. If the object we got from the list inexecuted is not equal to "undefined" we 
  will do the execute function on that object and add it to the end of the list executed. 
  If the unexecuted list is empty we will change the appearence of the button  */
  
  UndoRedoObject.redo = function redo() {
	  
	  console.log("UndoRedoObject.unexecuted.length" + UndoRedoObject.unexecuted.length);
	  

	  
	 var arrayLength = UndoRedoObject.unexecuted.length;
	 for(var i = 0; i < arrayLength; i++){
		 var itemInformation = UndoRedoObject.unexecuted.pop();
		 addToOrder(itemInformation.imgsrc,itemInformation.drinkname, itemInformation.price);
		 UndoRedoObject.executed.push(itemInformation);
	 }
   
  };
  
  return UndoRedoObject;
})();

/** END OF OBJECT DECLARATION **/


$("#add"/* we connect the regular button for adding an item to this function*/).click(function(){
        UndoRedoObject.execute({
          execute: function(){
            //What we will do if we press redo or the normal add button.
			console.log("UndoRedoObject.execute");
			$("#thingsAdded").append("\nHejsan!" );
          },
          unexecute: function(){
            //what we will do if we press undo.
			console.log("UndoRedoObject.unexecute");
			
			var list = $("#thingsAdded").html().split("\n");
            var newText = list.slice(0,list.length-1).join("\n");
            $("#thingsAdded").html(newText);
          }
        });
    });
	
    //If one presses the undo button, we will do the undo function from UndoRedoObject. 
    $("#undo").click(function(){
      UndoRedoObject.undo();
	  console.log("UndoRedoObject.undo");
    });
	
	//If one presses the redo button, we will do the redo function from UndoRedoObject. 
    $("#redo").click(function(){
      UndoRedoObject.redo();
	  console.log("UndoRedoObject.redo");
    });