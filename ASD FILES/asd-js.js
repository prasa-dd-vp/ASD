$(document).ready(function(){
$( "#survey-submit").click(function(e){
alert("asdasdasdasdasdasd");
        
        params = {};
		var c1,c2,c3,c4,c5,d1,d2,d3,d4,d5,dr1,dr2,dr3,dr4,dr5;
		if($('#c11').is(':checked')){
		  c1=0;
		}
		else if($('#c12').is(':checked')){
		  c1=1;
		}
		else if($('#c13').is(':checked')){
		  c1=2;
		}
		else{
		  c1=3;
		}
		
		if($('#c21').is(':checked')){
		  c2=0;
		}
		else if($('#c22').is(':checked')){
		  c2=1;
		}
		else if($('#c23').is(':checked')){
		  c2=2;
		}
		else{
		  c2=3;
		}
		
		if($('#c31').is(':checked')){
		  c3=0;
		}
		else if($('#c32').is(':checked')){
		  c3=1;
		}
		else if($('#c33').is(':checked')){
		  c3=2;
		}
		else{
		  c3=3;
		}
		
		if($('#c41').is(':checked')){
		  c4=0;
		}
		else if($('#c42').is(':checked')){
		  c4=1;
		}
		else if($('#c43').is(':checked')){
		  c4=2;
		}
		else{
		  c4=3;
		}
		
		if($('#c51').is(':checked')){
		  c5=0;
		}
		else if($('#c52').is(':checked')){
		  c5=1;
		}
		else if($('#c53').is(':checked')){
		  c5=2;
		}
		else{
		  c5=3;
		}
		
		if($('#d11').is(':checked')){
		  d1=0;
		}
		else if($('#d12').is(':checked')){
		  d1=1;
		}
		else if($('#d13').is(':checked')){
		  d1=2;
		}
		else{
		  d1=3;
		}
		
		if($('#d21').is(':checked')){
		  d2=0;
		}
		else if($('#d22').is(':checked')){
		  d2=1;
		}
		else if($('#d23').is(':checked')){
		  d2=2;
		}
		else{
		  d2=3;
		}
		
		if($('#d31').is(':checked')){
		  d3=0;
		}
		else if($('#d32').is(':checked')){
		  d3=1;
		}
		else if($('#d33').is(':checked')){
		  d3=2;
		}
		else{
		  d3=3;
		}
		
		if($('#d41').is(':checked')){
		  d4=0;
		}
		else if($('#d42').is(':checked')){
		  d4=1;
		}
		else if($('#d43').is(':checked')){
		  d4=2;
		}
		else{
		  d4=3;
		}
		
		if($('#d51').is(':checked')){
		  d5=0;
		}
		else if($('#d52').is(':checked')){
		  d5=1;
		}
		else if($('#d53').is(':checked')){
		  d5=2;
		}
		else{
		  d5=3;
		}
		
		if($('#dr11').is(':checked')){
		  dr1=0;
		}
		else if($('#dr12').is(':checked')){
		  dr1=1;
		}
		else if($('#dr13').is(':checked')){
		  dr1=2;
		}
		else{
		  dr1=3;
		}
		
		if($('#dr21').is(':checked')){
		  dr2=0;
		}
		else if($('#dr22').is(':checked')){
		  dr2=1;
		}
		else if($('#dr23').is(':checked')){
		  dr2=2;
		}
		else{
		  dr2=3;
		}
		
		if($('#dr31').is(':checked')){
		  dr3=0;
		}
		else if($('#dr32').is(':checked')){
		  dr3=1;
		}
		else if($('#dr33').is(':checked')){
		  dr3=2;
		}
		else{
		  dr3=3;
		}
		
		if($('#dr41').is(':checked')){
		  dr4=0;
		}
		else if($('#dr42').is(':checked')){
		  dr4=1;
		}
		else if($('#dr43').is(':checked')){
		  dr4=2;
		}
		else{
		  dr4=3;
		}
		
		if($('#dr51').is(':checked')){
		  dr5=0;
		}
		else if($('#dr52').is(':checked')){
		  dr5=1;
		}
		else if($('#dr53').is(':checked')){
		  dr5=2;
		}
		else{
		  dr5=3;
		}
		//if($('#radio_button').is(':checked')) { alert("it's checked"); }
        params.choice1 = c1; params.choice2 = c2; params.choice3 = c3; params.choice4 = c4; params.choice5 = c5;
		params.choice6 = d1; params.choice7 = d2; params.choice8 = d3; params.choice9 = d4; params.choice10 = d5;
		params.choice11 = dr1; params.choice11 = dr2; params.choice13 = dr3; params.choice14 = dr4; params.choice15 = dr5;
		params.choice16=c1+c2+c3+c4+c5;
		params.choice17=d1+d2+d3+d4+d5;
		params.choice18=dr1+dr2+dr3+dr4+dr5;

        $.ajax({
            type: "POST",// 
            url: "/home/url/", 
            data: params,
            dataType: 'json',// NO I18N
            error: function() { 
                alert( 'some error occured' ); //NO I18N
            },
            success: function( resp ) {
                
                alert(resp.ans1);
                
            }
        })        
        });
    
});