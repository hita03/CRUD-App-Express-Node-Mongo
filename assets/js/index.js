$("#add_user").submit(function(event){
    alert("Data Inserted Successfully")
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array =$(this).serializeArray(); //serializes all the object data in array form
    var data={}
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    //console.log(unindexed_array);
    var request={
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Details Updated Successfully");
    })
})

if(window.location.pathname=="/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        var request={
            "url": `http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }

        if(confirm("Confirm deletion")){
            $ajax(request).done(function(response){
                alert("Data Deleted Successfully");
                location.reload();
            })
        }
    })
}
