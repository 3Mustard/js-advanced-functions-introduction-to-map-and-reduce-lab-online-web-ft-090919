function mapToNegativize(srcRay){
  let result = [];
  
  for(let i = 0; i < srcRay.length; i++){
    result.push(srcRay[i] * -1);
  }
  return result;
}

