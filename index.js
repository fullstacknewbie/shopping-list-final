function addItem() {
    $('#js-shopping-list-form').on('submit', (event) => {
        event.preventDefault();
        let listItem = ($('#shopping-list-entry').val());
        console.log(listItem)
        $('.shopping-list').append("<li><span class='shopping-item'>"+listItem+"</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>");
    });
}

$(addItem);

function strikeThru() {
    $("body").on('click', ".shopping-item-toggle", (event) =>
    {
        console.log("clicked")
        event.preventDefault();
        $(event.currentTarget).parent().parent().find(".shopping-item").toggleClass("shopping-item__checked");
    });
}

$(strikeThru);

function deleteItem() {
    $("body").on('click', '.shopping-item-delete', (event) =>
    {
        console.log("del-clicked")
        event.preventDefault();
        $(event.currentTarget).parent().parent().remove();
    });
}

$(deleteItem);