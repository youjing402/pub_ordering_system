
/** THE OBJECT DECLARATION **/

var UndoRedoObject = (function() {
	
//I needed to write this, otherwise I couldnt define commands to UndoRedoObject
  function UndoRedoObject() {}
	
//Create two lists that will contain changes by the user.
	UndoRedoObject.unexecuted = [];
	UndoRedoObject.executed = [];
  
/*Make an execute function on the UndoRedoObject. The function will do the execute function of the object 
uro that will be passed in by the caller. After that it will add this object to the executed list created above */

  UndoRedoObject.execute = function execute(uro) {
    uro.execute();
    UndoRedoObject.executed.push(uro);
  };
  
  /*An undo function. The function will  delete the latest added object in the executed list. Further it will 
  use that object to do the unexecute function and add that object to the end of the list unexecuted*/
  
  UndoRedoObject.undo = function undo() {
    var uro1 = UndoRedoObject.executed.pop();
	
	if(uro1 !== undefined){
		uro1.unexecute();
		UndoRedoObject.unexecuted.push(uro1);
	}
	
	//if the list is empty we change the undo button
	if(UndoRedoObject.executed.length == 0){
		console.log("There is no objects in the array executed");
		$("#thingsAdded").append("\nThere is no objects in the array executed" );
		//Do the undo button not pressable and less visible
	}
  };
  
  /*Here is a redo function. If the object we got from the list inexecuted is not equal to "undefined" we 
  will do the execute function on that object and add it to the end of the list executed. 
  If the unexecuted list is empty we will change the appearence of the button  */
  
  UndoRedoObject.redo = function redo() {
    var uro2 = UndoRedoObject.unexecuted.pop();
    
    
    if (uro2 !== undefined){
      uro2.execute();
      UndoRedoObject.executed.push(uro2); 
	  
    }
	//if the list is empty we change the redo button
	if(UndoRedoObject.unexecuted.length == 0){
		  console.log("there is no more objects in unexecuted");
		  $("#thingsAdded").append("\nThere is no more objects in unexecuted" );
		  
		  //Do the redo button less visible and not pressable
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
	