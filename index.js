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