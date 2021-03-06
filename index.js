function mapToNegativize(srcRay){
  let result = [];
  
  for(let i = 0; i < srcRay.length; i++){
    result.push(srcRay[i] * -1);
  }
  return result;
}

function mapToNoChange(srcRay){
  let result = [];
  
  for(let i = 0; i < srcRay.length; i++){
    result.push(srcRay[i]);
  }
  return result;
}

function mapToDouble(srcRay){
  let result = [];
  
  for(let i = 0; i < srcRay.length; i++){
    result.push(srcRay[i] * 2);
  }
  return result;
}

function mapToSquare(srcRay){
  let result = [];
  
  for(let i = 0; i < srcRay.length; i++){
    result.push(srcRay[i] * srcRay[i]);
  }
  return result;
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint;
    
    for(let i = 0; i < sourceArray.length; i++){
      total += sourceArray[i];
    }
    return total;
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}
