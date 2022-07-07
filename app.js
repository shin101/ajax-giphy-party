const $form = $('form');
const $search = $('#search')
const $remove = $('#remove')
let res;

// 1. buildign the form 

$('form').on("submit",async function(e){
    e.preventDefault();
    let $query = $('#input').val();
    $('#input').val('');

    res = await axios.get("https://api.giphy.com/v1/gifs/search",{
    params: {
        q: $query, 
        api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
    }
});
console.log(res)

addGif();
});


// 2. appending gifs

function addGif(){
    // same as create new element
    let $newDiv = $("<div>").addClass("image").appendTo($form); 
    $newDiv.prepend($('<img>',{src:res.data.data[0].images.original.url}));   
}

// 3. removing gifs
$('#remove').on("click",()=>{
    // console.log($('.image'))
    $('.image').remove();
});

