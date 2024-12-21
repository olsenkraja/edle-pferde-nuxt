export function formatDate(value) {
    if (!value) {
        return null
    }

    const date = new Date(value)

    return new Intl.DateTimeFormat('de-AT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(date)
}

export function formatRelativeDateTime(value) {
    if (!value) {
        return null
    }

    const secondsAgo = (new Date(value) - new Date()) / 1000
    if (secondsAgo < 60 && secondsAgo > -60) {
        return new Intl.RelativeTimeFormat('de-AT', { style: 'narrow' }).format(Math.floor(secondsAgo), 'secondsAgo')
    }

    const minutesAgo = secondsAgo / 60
    if (minutesAgo < 60 && minutesAgo > -60) {
        return new Intl.RelativeTimeFormat('de-AT', { style: 'narrow' }).format(Math.floor(minutesAgo), 'minutes')
    }

    const hoursAgo = minutesAgo / 60
    if (hoursAgo < 24 && hoursAgo > -24) {
        return new Intl.RelativeTimeFormat('de-AT', { style: 'narrow' }).format(Math.floor(hoursAgo), 'hours')
    }

    const daysAgo = hoursAgo / 24
    if (daysAgo < 7 && daysAgo > -7) {
        return new Intl.RelativeTimeFormat('de-AT', { style: 'narrow' }).format(Math.floor(daysAgo), 'days')
    }

    const monthsAgo = daysAgo / 30
    if (monthsAgo < 12 && monthsAgo > -12) {
        return new Intl.RelativeTimeFormat('de-AT', { style: 'narrow' }).format(Math.floor(monthsAgo), 'months')
    }

    return new Intl.DateTimeFormat('de-AT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
    }).format(new Date(value))
}

export function formatDateTime(value) {
    if (!value) {
        return null
    }

    return new Intl.DateTimeFormat('de-AT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
    }).format(new Date(value))
}

export function formatTime(value) {
    if (!value) {
        return null
    }

    return new Intl.DateTimeFormat('de-AT', {
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
    }).format(new Date('1970-01-01T' + value))
}

export function formatPrice(value, currencyCode) {
    if (isNaN(value)) {
        return value
    }

    const option = {}

    if (currencyCode) {
        option.style = 'currency'
        option.currency = currencyCode
        option.currencyDisplay = 'code'
    } else {
        option.minimumFractionDigits = 2
        option.maximumFractionDigits = 2
    }

    return new Intl.NumberFormat('de-AT', option).format(value)
}