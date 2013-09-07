$(".myButton").click(function(){
	if($("#form_data").val() !== ""){
		$(".display").empty();
		var len = $("#form_data").val().length;
		for(i = 0; i < len; i++){
			$(".display").append('<img src=' + a[0] + '>');
		}
	}
});

//assign your api key equal to a variable
var apiKey = '4ef2fe2affcdd6e13218f5ddd0e2500d';

//the initial json request to flickr
//to get your latest public photos, use this request: http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' + apiKey + '&user_id=29096781@N02&per_page=15&page=2&format=json&jsoncallback=?

var a = [];

$.getJSON('http://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=' + apiKey + '&photoset_id=72157626422113413&format=json&jsoncallback=?',
function(data){
    
    //loop through the results with the following function
    $.each(data.photoset.photo, function(i,item){
    
        //build the url of the photo in order to link to it
        var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
        a.push(photoURL);
        console.log(photoURL);
        console.log(item);
    });
});