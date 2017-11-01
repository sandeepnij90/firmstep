$(document).ready(function(){
  $.getJSON("products.json", function(json) {
    json.forEach(function(val) {
      var html = "<li><a href='#' class='product-photo'><img src='"+val.image.small+"' height='130' alt='"+val.name+"'/></a>";
      html+="<h2><a href='#'>"+val.name+"</a></h2>";
      html+="<ul class='product-description'>";
      html+="<li><span>Manufacturer: </span>"+val.specs.manufacturer+"</li>";
      html+="<li><span>Storage: </span>"+val.specs.storage+" GB</li>";
      html+="<li><span>OS: </span>"+val.specs.os+"</li>";
      html+="<li><span>Camera: </span>"+val.specs.camera+" Mpx</li>";
      html+="<li><span>Description: </span>"+val.description+" Mpx</li>";
      html+="</ul>";
      html+="</li>";
      $(html).appendTo(".products-list");
    });
  });

  // manufacturer filter
  $(".filter-criteria.manufacturer label").click(function(){
    var name = "Manufacturer: "+$(this).children().val();
    $(".products-list").children('li').each(function(index,element) {
      var manufacturer = $(element).find('.product-description').children(':first-child').text();
      if(manufacturer !== name) {
        $(this).hide();
      } else {
        $(this).css('display','inline-block');
      }
    })
  });

  // storage filter
  $(".filter-criteria.storage label").click(function(){
    var size = "Storage: "+$(this).children().val()+" GB";
    $('.products-list').children('li').each(function(index,element) {
      var elementSize = $(element).find('.product-description').children('li:nth-child(2)').text();
      if(elementSize !== size){
        $(this).hide();
      } else {
        $(this).css('display','inline-block');
      }
    });
  });

  // os filter
  $(".filter-criteria.os label").click(function(){
    var os = "OS: "+$(this).children().val();
    $('.products-list').children('li').each(function(index,element) {
      var elementOS = $(element).find('.product-description').children('li:nth-child(3)').text();
      if(os !== elementOS) {
        $(this).hide();
      } else {
        $(this).css('display','inline-block');
      }
    });
  });

  // camera filter
  $(".filter-criteria.camera label").click(function(){
    var camera = "Camera: "+$(this).children().val() +" Mpx";
    $('.products-list').children('li').each(function(index,element) {
      var elementCamera = $(element).find('.product-description').children('li:nth-child(4)').text();
      if(camera !== elementCamera) {
        $(this).hide();
      } else {
        $(this).css('display','inline-block');
      }
    });
  });

})
