
// let Persons = new Array() ;
//  $.ajax({
//     url: 'https://randomuser.me/api/',
//     type: 'GET',
//     dataType: 'json',
//     data: {},
//     success: function (data, textStatus, xhr) {
//           console.log(data.results);
//         //  let temp = {
//         //     Name: data.results[0].name.first,
//         //     Gender:data.results[0].email,
//         //     Email:data.results[0].gender
//         //  }
//        //  Persons.push(temp);
//       //  console.log("sucess")
//     },
//     error: function (xhr, textStatus, errorThrown) {
//         console.log('Error in Operation');
//     }
// });

// console.log(Persons);

// $("#BtnId").click ( function() {

//     $.ajax({
//         url: $("#usr").val(),
//         type: 'GET',
//         dataType: 'json',
//         data: {},
//         success: function (data, textStatus, xhr) {
//               console.log(data.results);
//               console.log("sucess")
//         },
//         error: function (xhr, textStatus, errorThrown) {
//             console.log('Error in Operation');
//         }
//     }
    
//     );



//   } );


// $(document).ready(
//     function()
// {

//     // $("#BtnId").click(function(){
//     //     console.log("call aaya");
//     //        $.ajax({
//     //            url: $("#usr").val(),
//     //            type: 'GET',
//     //            dataType: 'json',
//     //            data: {},
//     //            success: function (data, textStatus, xhr) {
//     //                  console.log(data.results);
//     //                  console.log("sucess")
//     //            },
//     //            error: function (xhr, textStatus, errorThrown) {
//     //                console.log('Error in Operation');
//     //            }
//     //        }
           
//     //        );
//     //      };


// })
  

 // https://reqres.in/api/users

 let requestType = $("#dropdownid");
 let tbl = $("#tblId");

$("#BtnId").click(function(){
    debugger
    $.ajax({
        url :$("#usr").val(),
        type : $("#dropdownid").val(),
        data : {
            email:$("#email").val(),
            password:$("#password").val()
        },
        dataType:'json',
        success : function(res) {              
        console.log(res);
       
       $("#divId").append(`<p> ${JSON.stringify(res)} /p>`);
        },
        error : function(request,error)
        {
            alert("Request: "+JSON.stringify(request));
        }
    });
})