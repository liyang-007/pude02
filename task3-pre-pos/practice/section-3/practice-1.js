'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (var a in collectionA){
    for (var b in objectB.value){
      if (collectionA[a].key === objectB.value[b]){
        collectionA[a].count-=1;
      }
    }
  }
  return collectionA;
}
