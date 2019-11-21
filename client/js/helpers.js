Template.registerHelper('bigger', function (a, b) {
    if (a > b)
        return true
});

Template.registerHelper('equals', function (a, b) {
    return a === b;
});

Template.registerHelper('unequals', function (a, b) {
    return a != b;
});

Template.registerHelper('displayDate', function (date) {
    return moment(date).format('MMMM Do YYYY');
})

Template.registerHelper('displayDateFull', function (date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
})

Template.registerHelper('DisplayTimeFrom', function (date) {
    if (!date) return
    return moment(date + 'Z').fromNow()
})

Template.registerHelper('DisplayTimeCreated', function (date) {
    if (!date) return
    return moment(date).format("ll")
})

Template.registerHelper('displayAmount', function (number) {
    if (!number) return
    return parseFloat(number).toFixed(2)
})



Template.registerHelper('user', function () {
    if (!User.findOne()) return
    return User.findOne()
})

Template.registerHelper('settings', function () {
    if (!Session.get('settings')) return
    return Session.get('settings')
})


Template.registerHelper('gamelist', function () {
    if (!Games.find().fetch()) return
    else {
        return Games.find().fetch()
    }
})

Template.registerHelper('currentgame', function () {
    if (!Games.findOne({ id: Session.get('currentgame') })) return
    else {
        return Games.findOne({ id: Session.get('currentgame') })
    }
})
