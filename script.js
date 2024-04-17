function applyColor() {
    const color = document.getElementById("color").value;
    let backgroundColor;

    // write your conditional if/else statements here:
if (color === "red"){
  backgroundColor = "red";
} else if (color === "green"){
  backgroundColor = "green";
}else if (color === "orange"){
    backgroundColor = "orange";
  }else if (color === "yellow"){
    backgroundColor = "yellow";
  }else if (color === "blue"){
    backgroundColor = "blue";
  }else if (color === "purple"){
    backgroundColor = "purple";
  }

    document.body.style.backgroundColor = backgroundColor;
}
