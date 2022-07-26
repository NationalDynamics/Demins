// $( document ).ready(function() {
//     // $(".add").click(function(){
//     //     const entryLabel = $(".new-entry").val()
//     //     console.log(entryLabel == "")

//     //     if(entryLabel != ""){
//     //         const ENTRY_DIV = '<div class="entry flex f-ac"><p>'+entryLabel+'</p></div>'
//     //         $(".old-entires").append(ENTRY_DIV)
//     //         $(".new-entry").val("")
//     //     }
//     // })
// });


$(document).ready(function(){

    $(".add").click(function(){
        const NewEntry = $(".new-entry").val()

        const ENTRY_DIV = `<div class="entry flex f-ac"><p>${NewEntry}</p></div>`

        if(NewEntry != ""){
            $(".old-entires").append(ENTRY_DIV)
            $(".new-entry").val("")   
        }

    })
})