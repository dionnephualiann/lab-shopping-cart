$(document).ready(function() {

     var arraySubTotal = [];

// Subtotal
//event listener .on set on .rows
	$('.row').on('change', function(e){

		var qty = $(e.target).val()

		var productRow = $(e.target).parents('.row');

		var price = $(productRow).find('.price h4')[0].innerText;

		var priceValue = price.substring(1);

		var priceValueInt = parseInt(priceValue);

		var subTotal = priceValueInt * qty;

		var getSubTotal = productRow.find('.subtotal').text('$' + subTotal)

		console.log(getSubTotal);

		arraySubTotal.push(subTotal);


	});


// create item
    var createItem = document.createItem = function(){

// get input value
		var ingredientRow = $('#ingBox').val();
        var priceRow = $('#priceBox').val();

//create line
        var newLine ='<div class="row">\
            <div class="col-md-3">\
              <div class="ingredients">\
                <h4>' + ingredientRow + '</h4>\
              </div>\
            </div>\
            <div class="col-md-2">\
              <div class="price">\
                <h4>' + priceRow + '</h4>\
              </div>\
            </div>\
            <div class="col-md-5">\
              <div class="quantity">\
                <h4>QTY</h4><input type="number" name="quantity" placeholder="0">\
                <input type="button" value="Cancel" onclick="msg()">\
              </div>\
            </div>\
            <div class="col-md-2">\
              <div class="subtotal">\
                     $0.00\
              </div>\
            </div>\
        </div>'
        
//push line
    	$('.item-list').append(newLine);
        
	};



//  Total Sum
     
         $('#sum').on('click', function(){
         	var getTotal = function(){
	        	return arraySubTotal.reduce(function(a, b){
	        		return a+b;
	        	},0);
	    	}

	    $('#total-sum').text('$' + getTotal());
	});

// cancel function
  var remove = document.remove = $('.remove').on('click', function(e){
	        var productRow = $(e.target).parents('.row');
		 	var message= '<div class ="blue"></div>';
			$(productRow).find('.row').append(message)
	

			setTimeout(
				function()
				{
					$(productRow).remove();
				}, 500);
		});
      
});







    
   











	







