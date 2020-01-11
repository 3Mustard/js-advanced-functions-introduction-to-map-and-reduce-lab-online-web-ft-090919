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
}

function mapToDouble(srcRay){
  let result = [];
  
  for(let i = 0; i < srcRay.length; i++){
    result.push(srcRay[i] * 2);
  }
}

function mapToSquare(srcRay){
  let result = [];
  
  for(let i = 0; i < srcRay.length; i++){
    result.push(srcRay[i] ** 2);
  }
}