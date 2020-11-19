$(document).ready(function() {

    function ajax(){
        // ----------------------------------------

        var request= $.ajax({
            url: "https://geo.api.gouv.fr/departements?fields=nom,code,codeRegion", method:
                "GET",
            dataType: "json",
            beforeSend: function( xhr ) {
                xhr.overrideMimeType( "application/json; charset=utf-8" );
            }});
        request.done(function( msg ) {
           
            var departement = document.getElementById("departement");
            departement.addEventListener("change", ChangerDep, false );

            Direct();

            function Direct() {
             //   alert("test");
                $.each(msg, function(index,e){

             

                    departement.innerHTML += "<option value = " + e.code + " + >"+ e.nom +"</option>" ;
                    

                    
                })

            };
       
            function ChangerDep(){

                console.log(departement.value);

                var request= $.ajax({
                    url: "https://geo.api.gouv.fr/departements/"+departement.value+"/communes?fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre", method:
                        "GET",
                    dataType: "json",
                    beforeSend: function( xhr ) {
                        xhr.overrideMimeType( "application/json; charset=utf-8" );
                    }});
                request.done(function( msg ) {
                   
                    var lesCommunes = document.getElementById("commune");
                    
        
                    CDirect();
                    
                    function CDirect() {
                     //   alert("test");
                     lesCommunes.innerHTML = "";
                        $.each(msg, function(index,e){
                            
                            lesCommunes.innerHTML += "<option value = " + e.code + " + >"+ e.nom +"</option>" ;
                            
                            
                        })
        
                    };
               
                   
                });
                // Fonction qui se lance lorsque l’accès au web service provoque une erreur
                request.fail(function( jqXHR, textStatus ) {
                    alert ('erreur');
        
                });

            }
        });
        // Fonction qui se lance lorsque l’accès au web service provoque une erreur
        request.fail(function( jqXHR, textStatus ) {
            alert ('erreur');

        });



    // Appel de la fonction ajax

    }

ajax();

});