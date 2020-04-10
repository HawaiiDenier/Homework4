$(document).ready( function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    var stateTemps=[];
    Object.keys(state_info).forEach(function(state_name,index) {
           var state_obj = state_info[state_name];
           var url =`https://api.weatherstack.com/forecast?access_key=5bc82451636190abd9d7afe6fe9b20b5&query=${state_obj.lat},${state_obj.lng}`;
           		$.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                $(`#${state_name}`).css('fill', color);
                console.log(state_name);

            })
          })




    if(stateTemps<10){
      $(currKey).css('fill', "#6495ED");
    }
    else if(11<stateTemps<=20){
      $(currKey).css('fill', "#7FFFD4");
    }
    else if(21<stateTemps<=30){
      $(currKey).css('fill', "#0000FF");
    }
    else if(31<stateTemps<=40){
      $(currKey).css('fill', "#008B8B");
    }
    else if(41<stateTemps<=50){
      $(currKey).css('fill', "#00BFFF");
    }
    else if(51<stateTemps<=60){
      $(currKey).css('fill', "#F08080");
    }
    else if(61<stateTemps<=70){
      $(currKey).css('fill', "#CD5C5C");
    }
    else if(71<stateTemps<=80){
      $(currKey).css('fill', "#8B0000");
    }
    else if(81<stateTemps<=90){
      $(currKey).css('fill', "#B22222");
    }
    else if(90<stateTemps){
      $(currKey).css('fill', "#FF0000");
    }
    var state_obj = state_info['CO']
    var url =`https://api.weatherstack.com/forecast?access_key=5bc82451636190abd9d7afe6fe9b20b5&query=<latitude>,<longitude>`;

});
