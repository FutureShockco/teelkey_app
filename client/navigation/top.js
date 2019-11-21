Template.top.onRendered(function () {
}) 

Template.top.events({
    'click #login': function (event) {
      sessionStorage.setItem('path',FlowRouter.current().path)
      window.location.href = steemconnect.getLoginURL()
    },
})

Template.top.helpers({

});