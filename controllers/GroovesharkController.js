var controller = new BaseController();

controller.init({
  playpause: "#play-pause",
  playnext: "#play-next",
  playprev: "#play-prev",
  mute: "#volume"
});

controller.inject();

controller.attach_listener(controller);