



// program to get the dimensions of an image

let img = new Image();

// get the image
img.src = 'https://www.binaryit.com.au/wp-content/uploads/2018/01/best-laptop-for-students.jpg';

// get height and width
img.onload = function() {
  console.log('width ' + this.width)
  console.log('height '+ this.height);
}