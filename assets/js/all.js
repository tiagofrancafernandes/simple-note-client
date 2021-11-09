
function toastNotify(message, timeout = 2000, color = '')
{
    var options = {
        message: message,
        color: color,
        timeout: timeout,
    };

    notify(options);
};

function toastNotifySuccess(message, timeout = 2000)
{
    toastNotify(message, timeout, 'success');
}

function success(message, timeout = 5000)
{
    toastNotifySuccess(message, timeout);
}

function toastNotifyDanger(message, timeout = 2000)
{
    toastNotify(message, timeout, 'danger');
}

function error(message, timeout = 5000)
{
    toastNotifyDanger(message, timeout);
}
