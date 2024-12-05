$(document).ready(function () {
    $('#togglePassword').click(function () {
        const passwordField = $('#password');
        const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
        passwordField.attr('type', type);
        $(this).text(type === 'password' ? 'Show' : 'Hide');
    });
});
