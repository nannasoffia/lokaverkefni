var getMonth = [
  'Janúar', 'Febrúar', 'Mars', 'Apríl', 'Maí', 'Júní', 'Julí', 'Ágúst', 'September', 'Október', 'Nóvember', 'Desember'
]; //NANNA

var getDay = [ 'Sunnudagur', 'Mánudagur', 'Þriðjudagur', 'Miðvikudagur', 'Fimmtudagur', 'Föstudagur', 'Laugardagur'];//NANNA

$.ajax({
  'url': 'https://apis.is/concerts',
  'type': 'GET',
  'dataType': 'json', //KRISTÍN
  'error': function (){ 
    if (station===null){
    $("#error").text("Samband náðist ekki við vefþjónustuna");
    }
  }, //NANNA
  'success': function(response) {
    if (response.results) {
      // KRISTÍN
      
      
      var events = $("#hu");
      for(var i = 0; i < response.results.length; i++) { //byrja //NANNA
   
        var current = response.results[i];
        var spaDate = new Date(current.dateOfShow);
      var event = $("<div class='event row'></div>"); 
     var info =  $("<div class='hmu col-xs-6'></div>");
     var minutes = (spaDate.getMinutes() < 10 ?"0"+spaDate.getMinutes():spaDate.getMinutes() );
      info.append("<div>"+current.eventDateName+"</div>");
         info.append("<div>"+getDay[spaDate.getDay()]+" "+spaDate.getDate()+" "+getMonth[spaDate.getMonth()]+" "+spaDate.getFullYear()+" "+spaDate.getHours()+":"+minutes+"</div>");
info.append("<div>"+current.eventHallName+"</div>");
        event.append("<div class='myndir col-xs-6'> <img src='"+current.imageSource+"' class='img-responsive'> </img> </div>");
        event.append(info);
      events.append(event);
      }//enda //NANNA
    }
    
    else {
      //syna villu
    }
    console.log(response); //KRISTÍN
 
  }
});

$( "#top" ).click(function() {
    document.documentElement.scrollTop = 0;
  document.body.scrollTop=0;
}); //KRISTÍN