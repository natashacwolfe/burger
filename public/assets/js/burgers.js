$(function () {

    // adding new burger to be devoured
    $(".create-form").on("submit", function (event) {
        console.log('burger requested!')
        // preventdefault on submit
        event.preventDefault();

        var newBurger = {
            burger_name: $('#burg').val().trim()
        };

        console.log("this is the new burger being added", newBurger)

        // send the post  req
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function () {
                console.log(`New burger has been added!`);
                location.reload();
            }
        );
    });


    $('.change-devoured').on('click', function (event) {
        var id = $(this).data('id');

        var isItDevoured = {
            devoured: true
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: isItDevoured
        }).then(
            function () {
                console.log('That burger was tasty!');

                location.reload();
            }
        );
    });

})