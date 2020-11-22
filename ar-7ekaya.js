$LAB
      .setOptions({ AlwaysPreserveOrder: true })
      .script('https://a7la27ekaya.googlecode.com/svn/ar-a7la7ekaya/jquery-1.8.2.min.js')
      .script('https://a7la27ekaya.googlecode.com/svn/ar-a7la7ekaya/jquery-ui-1.9.1.frontend.min.js')       .script('https://a7la27ekaya.googlecode.com/svn/ar-a7la7ekaya/main-1.2.5.js')
      .wait(function() {
          var viewers = [];
    viewers['resource_253981'] = {
  width: 400,
  height: 150,
  html: '<div id="player-253981"><img src="" /></div>',
  init: function() {
    $.ajax({url: '', cache: true, dataType: 'script' }
    ).done(function() {
      jwplayer('player-253981').setup({
      file: '',
      modes: [
        { type: 'flash', src: '' },
        { type: 'html5' },
        { type: 'download' }
      ],
      skin: '',
      width: 380,
      height: 30,
      controlbar: 'bottom',
      autostart: true
      });
    });
  }
};  viewers['resource_253980'] = {
  width: 400,
  height: 180,
  html: '<embed width="380" height="60" controls="controlpanel,statusbar" maintainaspect="false" autostart="true" nojava="true" type="audio/x-pn-realaudio-plugin" pluginspage="http://www.real.com/player" src="" />',
  init: function() { }
};
        
        $(document).ready(function() {
          if(!window.JSON) {
            $.ajax({url: '/js/json2.min.js', async: false, cache: true, dataType: 'script' });
          }

          setupSearchForm();
          setupMembershipDialogs();
          setupNewsletterSubscriptionDialog();
          initHoverEffects();
          setupTooltips();
          iwPortal.loadPreferences();
          initSharingScripts();
  setupEntryPage();
  setupEmbed();
    setupViewers(viewers);
    $('#resouce-253981').prev().click();
      setupScholarsQuickInfo();
  setupComments(true);
setupUserbar();
        });
      });