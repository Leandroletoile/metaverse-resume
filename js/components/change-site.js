AFRAME.registerComponent('change-site', {
    schema: {
      message: {img: 'string'}
    },
  
    init: function () {
      console.log(this.data.message);
    }
  });