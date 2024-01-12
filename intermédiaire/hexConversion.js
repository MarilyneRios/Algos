function rgb(r, g, b) {
 
    if (r >= 255 || g >= 255 || b >= 255) {
      return "FFFFFF";
    } else if (r <= 0 || g <= 0 || b <= 0) {
      return "000000";
    } else {

      const HexConversion = (element) => {
  
        return element.toString(16).toUpperCase();
      };

      return "#" + HexConversion(r) + HexConversion(g) + HexConversion(b);
    }
  }
  

  const result = rgb(128, 200, 50);
  console.log(result); // Output: #80C832
  