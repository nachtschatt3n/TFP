
// Size the gallery images to fit in the current window

function get_mode_from_ratio(ratio) {
  if (ratio < 1) { return "Portait" }
  if (ratio > 1) { return "Landscape"} 
  if (ratio = 1) { return "Quadrat"  }
}

function landscape_canvas_to_landscape_image_scale(image, canvas){
  
  return [height,width]
}
function landscape_canvas_to_portrait_image_scale(image, canvas){

  return [height,width]
}
function portait_canvas_to_landscape_image_scale(image, canvas){

  return [height,width]
}
function portait_canvas_to_portrait_image_scale(image, canvas){

  return [height,width]
}

class ImageCanvas {
  height ="";
  width ="";
  ratio = "";
  mode = "";
}

class Image {
  height ="";
  width ="";
  ratio = "";
  mode = "";
}

function size_to_fit(){

  image_canvas = new ImageCanvas;
  image_canvas.height = $(window).height()- $(".navigation").height();
  image_canvas.width = $(window).width();
  image_canvas.ratio = image_canvas.width/image_canvas.height;
  image_canvas.mode = get_mode_from_ratio(image_canvas.ratio);
  console.dir(image_canvas);

  image = new Image;
  image.height = $(".gallery_image").height();
  image.width = $(".gallery_image").width();
  image.ratio = image.width/image.height;
  image.mode = get_mode_from_ratio(image.ratio);
  console.dir(image);



  // landscape_scale


}



// Register Event Triggers
$(window).on('resize', function(){
  size_to_fit();
});

$(window).on('load', function(){
  size_to_fit();
});
