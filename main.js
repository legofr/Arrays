var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://www.seekpng.com/png/detail/373-3737886_man-clipart-dad-animated-picture-of-father.png","https://us.123rf.com/450wm/iimages/iimages1309/iimages130900569/22404756-illustration-of-a-working-mother-on-a-white-background.jpg?ver=6 ","https://www.clipartmax.com/png/middle/221-2216870_brothers-and-sisters-cartoon.png","https://www.netclipart.com/pp/m/18-183564_lukes-little-sister-brother-face-clipart.png" ];
var names = ["Family Book","Satya Puvvada", "Sravanthi Manepalli", "Sahasra Puvvada", "Saanika Puvvada"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    //console.log(i);
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
