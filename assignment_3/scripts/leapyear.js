function submitForm() {
    let request = $.ajax({
    url: "scripts/leapyear.php",
    method: "POST",
    data: {
        name: $('#name').val(),
        age: $('#age').val(),
        address: $('#address').val(),
        place: $('#place').val()
    },
    dataType: "json"
    });

    request.done(function(data) {
        console.log(data);

        $('#name-show').text("Welcome, " + data.name + "!");
        if (data.place == 'Groningen') {
            $('#place-show').text("You are located in Groningen.");
        }
        $('#welcome').show();

        var currentYear = new Date().getFullYear();

        var leapYears = [];
        while (leapYears.length < 5) {
            if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0) {
            leapYears.push(currentYear);
            }
            currentYear++;
        }

        var table = $('#leapYearTable');
        table.html("");
        var actualCurrentYear = new Date().getFullYear()
        var tbody = $('<tbody>').appendTo(table);
        $.each(leapYears, function(index, year) {
            var row = $('<tr>').appendTo(tbody);
            var age = Number(data.age) + (Number(year) - Number(actualCurrentYear))
            $('<td>').text(year).appendTo(row);
            $('<td>').text(age).appendTo(row);
        });

    });
}

$(function() {
    $('form').submit(function(event) {
        var form = this;

        form.classList.add('was-validated');
        event.preventDefault();
        submitForm()
    });

    $('input').on('input', function() {
        var form = $(this).closest('form')[0];

        if (form.checkValidity() === false) {
            $('#welcome').hide();
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid');
        }
    });
});