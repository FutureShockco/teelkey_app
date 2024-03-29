import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import teelkey from 'teelkey';
import './main.html';

teelkey.init({ api: 'https://teelkey.com' });
window.teelkey = teelkey;

FlowRouter.wait();

Meteor.startup(function () {
  FlowRouter.initialize({ hashbang: false }, function () {
  });
  $(window).on('hashchange', function () {
    FlowRouter.go(window.location.hash)
  });
  BlazeLayout.setRoot('body');
})


// broadcast.comment('justapost', '', '', {body:"aytaç c'est mon amour",app:'teelkee'}, 'teelkey', function(result){
//   console.log(result)
// })
// broadcast.newAccount('heimindanger','mnAjnwVb7jat6PVkCebf8MAKrnNKoGGzVyBxAu7LiRRc', function(result){
//   console.log(result)
// })
// broadcast.transfer('heimindanger',100000,'yooo', function(result){
//   console.log(result)
// })